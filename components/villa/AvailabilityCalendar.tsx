'use client'

import { useMemo, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { buildBookedSet, type BookedRange } from '@/lib/villa/bookedNights'

const MAX_MONTHS_AHEAD = 18

const pad = (n: number) => String(n).padStart(2, '0')
const key = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`
const longDate = (ds: string, locale: string) => {
  const [y, m, d] = ds.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })
}

/**
 * Availability calendar for one property: booked nights come from the
 * property's booking feed (see lib/villa/availability.ts). View-only: dates
 * are requested from the booking panel in the sidebar. Both languages are
 * written out here (and the block is marked translate="no") because the text
 * mixes in dates.
 */
export default function AvailabilityCalendar({
  bookedRanges,
  minStayNights = 0,
}: {
  bookedRanges: BookedRange[]
  minStayNights?: number
}) {
  const { language } = useLanguage()
  const es = language === 'es'
  const locale = es ? 'es-MX' : 'en-US'
  const booked = useMemo(() => buildBookedSet(bookedRanges), [bookedRanges])

  const now = new Date()
  const todayKey = key(now.getFullYear(), now.getMonth(), now.getDate())
  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() })

  const monthsFromNow = (view.y - now.getFullYear()) * 12 + (view.m - now.getMonth())
  const canPrev = monthsFromNow > 0
  const canNext = monthsFromNow < MAX_MONTHS_AHEAD

  const go = (dir: 1 | -1) => {
    let m = view.m + dir
    let y = view.y
    if (m < 0) { m = 11; y -= 1 }
    if (m > 11) { m = 0; y += 1 }
    setView({ y, m })
  }

  const dayNames = es ? ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const renderMonth = (y: number, m: number) => {
    const first = new Date(y, m, 1)
    const total = new Date(y, m + 1, 0).getDate()
    const title = first.toLocaleDateString(locale, { month: 'long', year: 'numeric' })
    const cells: React.ReactNode[] = []
    for (let i = 0; i < first.getDay(); i++) cells.push(<div key={`e${i}`} />)
    for (let d = 1; d <= total; d++) {
      const ds = key(y, m, d)
      const past = ds < todayKey
      const isBooked = !past && booked.has(ds)
      const isToday = ds === todayKey

      let cls = 'flex h-10 w-full items-center justify-center text-[14px] md:h-11 '
      if (past) cls += 'text-bt-charcoal/30 '
      else if (isBooked) cls += 'bg-bt-sand-dark/70 font-medium text-bt-navy/55 '
      else cls += 'text-bt-navy '
      if (isToday) cls += 'font-semibold underline decoration-bt-gold decoration-2 underline-offset-4 '

      const state = isBooked ? (es ? ', no disponible' : ', booked') : past ? '' : es ? ', disponible' : ', available'
      cells.push(
        <div
          key={d}
          aria-label={`${longDate(ds, locale)}${state}`}
          className={cls}
        >
          {d}
        </div>,
      )
    }
    return (
      <div className="min-w-0 flex-1">
        <p className="mb-3 text-center font-serif text-[20px] capitalize text-bt-navy">{title}</p>
        <div className="grid grid-cols-7 gap-y-1 text-center">
          {dayNames.map((n) => (
            <div key={n} className="pb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-bt-charcoal/60">
              {n}
            </div>
          ))}
          {cells}
        </div>
      </div>
    )
  }

  const next = view.m === 11 ? { y: view.y + 1, m: 0 } : { y: view.y, m: view.m + 1 }

  return (
    <div translate="no" className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!canPrev}
          aria-label={es ? 'Mes anterior' : 'Previous month'}
          className="flex h-10 w-10 items-center justify-center border border-bt-navy/20 text-bt-navy transition hover:border-bt-navy disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <p className="text-[13px] text-bt-charcoal/75">
          {es ? 'Consulta las fechas disponibles' : 'See which dates are open'}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={!canNext}
          aria-label={es ? 'Mes siguiente' : 'Next month'}
          className="flex h-10 w-10 items-center justify-center border border-bt-navy/20 text-bt-navy transition hover:border-bt-navy disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><polyline points="9 6 15 12 9 18" /></svg>
        </button>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-10">
        {renderMonth(view.y, view.m)}
        <div className="hidden min-w-0 flex-1 md:block">{renderMonth(next.y, next.m)}</div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-bt-charcoal/75">
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 border border-bt-navy/25 bg-white" aria-hidden="true" />
          {es ? 'Disponible' : 'Available'}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 bg-bt-sand-dark/70" aria-hidden="true" />
          {es ? 'No disponible' : 'Booked'}
        </span>
        {minStayNights > 0 && (
          <span className="text-bt-charcoal/60">
            {es ? `Estancia mínima: ${minStayNights} noche${minStayNights !== 1 ? 's' : ''}` : `Minimum stay: ${minStayNights} night${minStayNights !== 1 ? 's' : ''}`}
          </span>
        )}
      </div>

      <p className="mt-6 text-[12.5px] text-bt-charcoal/60">
        {es
          ? 'Este calendario se actualiza automáticamente. Para solicitar tus fechas, usa el panel de reservas; confirmamos la disponibilidad en menos de 24 horas.'
          : 'This calendar updates automatically. To request your dates, use the booking panel; we confirm availability within 24 hours.'}
      </p>
    </div>
  )
}
