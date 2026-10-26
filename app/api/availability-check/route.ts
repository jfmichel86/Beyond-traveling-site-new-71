// Diagnostic for the availability calendar: open
//   /api/availability-check?slug=villa-amore
// to see whether the property has a calendar link and whether the server can
// read it. It never returns the link itself or any booking details, only
// counts and the reply status. Safe to delete once the calendars work.
import { NextResponse } from 'next/server'
import { getVilla } from '@/lib/villa/queries'
import { parseIcal } from '@/lib/villa/availability'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get('slug') || ''
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
  return NextResponse.json(out)
}
