// Temporary diagnostic for the availability calendars. Open
//   /api/availability-check
// to see, for each property, whether it has a calendar link and whether the
// server can read it. It never returns the link or any booking details, only
// counts and reply statuses. Delete this file once the calendars work.
import { NextResponse } from 'next/server'
import { getVilla } from '@/lib/villa/queries'
import { parseIcal } from '@/lib/villa/availability'

export const dynamic = 'force-dynamic'

const SLUGS = ['villa-llamas', 'villa-amore', 'casa-paraiso', 'las-palmas-28', 'villa-brezza']

async function check(slug: string) {
  const out: Record<string, unknown> = { slug }
  try {
    const prop = await getVilla(slug)
    out.propertyFound = !!prop
    const link = prop?.icalUrl
    out.hasCalendarLink = !!link
    if (link) {
      const res = await fetch(link.replace(/^webcal:/i, 'https:'), {
        cache: 'no-store',
        signal: AbortSignal.timeout(8000),
        headers: {
          Accept: 'text/calendar, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        },
      })
      out.replyStatus = res.status
      out.contentType = res.headers.get('content-type')
      const text = await res.text()
      out.bytes = text.length
      out.looksLikeCalendar = /BEGIN:VCALENDAR/i.test(text)
      out.eventsInFeed = (text.match(/BEGIN:VEVENT/gi) || []).length
      out.upcomingBookedRanges = out.looksLikeCalendar ? parseIcal(text).length : 0
    }
  } catch (e) {
    out.error = e instanceof Error ? e.message : String(e)
  }
  return out
}

export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get('slug')
  const results = await Promise.all((slug ? [slug] : SLUGS).map(check))
  return NextResponse.json(results)
}
