// Reads a property's booking calendar (an iCal / .ics link from VRBO, which is
// kept in sync with Airbnb and the direct bookings blocked by hand) and turns
// it into the list of booked date ranges. Server-side only: the link itself is
// never sent to the browser, only the dates.
import { addDays, nightsBetween, type BookedRange } from '@/lib/villa/bookedNights'

/** How long (seconds) a downloaded calendar is reused before checking again. */
const FEED_REVALIDATE_SECONDS = 900
const HORIZON_DAYS = 550

const todayInMexico = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'America/Mexico_City' })

/** 'YYYYMMDD' or 'YYYYMMDDTHHMMSSZ' → 'YYYY-MM-DD' (date part only). */
const toDate = (v: string): string | null => {
  const m = /^(\d{4})(\d{2})(\d{2})/.exec(v.trim())
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null
}

/** Pure parser (kept separate so it can be tested without the network). */
export function parseIcal(text: string, today = todayInMexico()): BookedRange[] {
  const unfolded = text.replace(/\r?\n[ \t]/g, '')
  const events = unfolded.split(/BEGIN:VEVENT/i).slice(1)
  const ranges: BookedRange[] = []
  const horizon = addDays(today, HORIZON_DAYS)

  for (const raw of events) {
    const body = raw.split(/END:VEVENT/i)[0]
    if (/^STATUS:\s*CANCELLED/im.test(body)) continue
    const s = /^DTSTART[^:\r\n]*:([^\r\n]+)/im.exec(body)
    if (!s) continue
    const start = toDate(s[1])
    if (!start) continue
    const e = /^DTEND[^:\r\n]*:([^\r\n]+)/im.exec(body)
    let end = e ? toDate(e[1]) : null
    if (!end || nightsBetween(start, end) < 1) end = addDays(start, 1)
    if (end <= today || start > horizon) continue
    ranges.push([start < today ? today : start, end > horizon ? horizon : end])
  }

  ranges.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
  const merged: BookedRange[] = []
  for (const r of ranges) {
    const last = merged[merged.length - 1]
    if (last && r[0] <= last[1]) {
      if (r[1] > last[1]) last[1] = r[1]
    } else {
      merged.push([r[0], r[1]])
    }
  }
  return merged
}

const isSafeFeedUrl = (raw: string) => {
  try {
    const u = new URL(raw.replace(/^webcal:/i, 'https:'))
    if (u.protocol !== 'https:') return false
    const h = u.hostname.toLowerCase()
    if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal')) return false
    if (/^(\d{1,3}\.){3}\d{1,3}$/.test(h) || h.includes(':')) return false
    return true
  } catch {
    return false
  }
}

/**
 * Booked ranges for a property, or `null` when there is no calendar link or it
 * can't be read right now (the page then simply hides the availability section
 * instead of showing something wrong).
 */
export async function getBookedRanges(icalUrl?: string | null): Promise<BookedRange[] | null> {
  if (!icalUrl || !isSafeFeedUrl(icalUrl)) return null
  try {
    const res = await fetch(icalUrl.replace(/^webcal:/i, 'https:'), {
      next: { revalidate: FEED_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(7000),
      headers: {
        Accept: 'text/calendar, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        // Some booking platforms refuse requests that don't look like a browser.
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      },
    })
    if (!res.ok) return null
    const text = await res.text()
    if (!/BEGIN:VCALENDAR/i.test(text)) return null
    return parseIcal(text)
  } catch {
    return null
  }
}
