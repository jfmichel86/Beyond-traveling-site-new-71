'use client'

import { useMemo, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { whatsappUrl } from '@/lib/whatsapp'
import { buildBookedSet, nightsBetween, rangeIsFree, type BookedRange } from '@/lib/villa/bookedNights'

const CONTACT_EMAIL = 'rentals@beyondtravelingmx.com'
const MAX_MONTHS_AHEAD = 18

const pad = (n: number) => String(n).padStart(2, '0')
const key = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`
const longDate = (ds: string, locale: string) => {
  const [y, m, d] = ds.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })
}
const shortDate = (ds: string, locale: string) => {
  const [y, m, d] = ds.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(locale, { month: 'short', day: 'numeric' })
}

/**
 * Availability calendar for one property: booked nights come from the
 * property's booking feed (see lib/villa/availability.ts). A visitor picks
 * check-in and check-out and sends the request by WhatsApp or email. Both
 * languages are written out here (and the block is marked translate="no")
 * because the text mixes in dates and the property name.
 */
export default function AvailabilityCalendar({
  propertyTitle,
  bookedRanges,
  minStayNights = 0,
}: {
  propertyTitle: string
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
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const choosingOut = !!checkIn && !checkOut
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

  const click = (ds: string) => {
    if (!choosingOut) {
      if (booked.has(ds)) return
      setCheckIn(ds); setCheckOut('')
      return
    }
    if (ds === checkIn) { setCheckIn(''); return }
    if (ds < checkIn) {
      if (!booked.has(ds)) { setCheckIn(ds); setCheckOut('') }
      return
    }
    if (rangeIsFree(booked, checkIn, ds)) setCheckOut(ds)
  }

  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0
  const shortStay = nights > 0 && minStayNights > 0 && nights < minStayNights

  const message = (() => {
    if (checkIn && checkOut) {
      return es
        ? `Hola, me interesa ${propertyTitle}. Fechas: ${shortDate(checkIn, locale)} – ${shortDate(checkOut, locale)}. ¿Pueden confirmar disponibilidad?`
        : `Hi, I’m interested in ${propertyTitle}. Dates: ${shortDate(checkIn, locale)} – ${shortDate(checkOut, locale)}. Can you confirm availability?`
    }
    return es
      ? `Hola, me interesa ${propertyTitle}. ¿Podrían compartirme disponibilidad y tarifas?`
      : `Hi, I’m interested in ${propertyTitle}. Could you please share availability and rates?`
  })()

  const emailHref = (() => {
    if (es) {
      const subject = `Consulta de disponibilidad — ${propertyTitle}`
      let body = `Hola,\n\nMe interesa ${propertyTitle}.`
      if (checkIn && checkOut) body += `\n\nLlegada: ${longDate(checkIn, locale)}\nSalida: ${longDate(checkOut, locale)}`
      body += '\n\n¿Podrían confirmar disponibilidad y compartirme la tarifa final?\n\nGracias'
      return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
    const subject = `Availability Inquiry — ${propertyTitle}`
    let body = `Hi,\n\nI am interested in ${propertyTitle}.`
    if (checkIn && checkOut) body += `\n\nCheck-in: ${longDate(checkIn, locale)}\nCheck-out: ${longDate(checkOut, locale)}`
    body += '\n\nCould you please confirm availability and share the final rate?\n\nThank you'
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  })()

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
      const isBooked = booked.has(ds)
      // While choosing check-out, a booked day can still be a departure day
      // as long as every night before it is free; free days beyond the next
      // booking can't be reached.
      const reachableOut = choosingOut && ds > checkIn && rangeIsFree(booked, checkIn, ds)
      const unreachable = choosingOut && ds > checkIn && !reachableOut
      const blocked = past || (isBooked && !reachableOut) || unreachable
      const isStart = ds === checkIn
      const isEnd = ds === checkOut
      const inRange = !!(checkIn && checkOut && ds > checkIn && ds < checkOut)
      const isToday = ds === todayKey

      let cls =
        'relative flex h-10 w-full items-center justify-center text-[14px] transition-colors md:h-11 '
      if (isStart || isEnd) cls += 'bg-bt-navy font-medium text-white '
      else if (inRange) cls += 'bg-bt-navy/10 text-bt-navy '
      else if (past) cls += 'text-bt-charcoal/30 '
      else if (isBooked && !reachableOut)
        cls += 'cursor-not-allowed [background-image:repeating-linear-gradient(135deg,transparent_0_4px,rgba(31,45,78,0.10)_4px_5px)] text-bt-charcoal/40 line-through '
      else if (unreachable) cls += 'text-bt-charcoal/35 '
      else cls += 'text-bt-navy hover:bg-bt-navy/[0.07] '
      if (isToday && !isStart && !isEnd) cls += 'font-semibold underline decoration-bt-gold decoration-2 underline-offset-4 '

      const state = past
        ? ''
        : isBooked && !reachableOut
          ? es ? ', no disponible' : ', booked'
          : ''
      cells.push(
        <button
          key={d}
          type="button"
          disabled={blocked}
          onClick={() => click(ds)}
          aria-pressed={isStart || isEnd || inRange}
          aria-label={`${longDate(ds, locale)}${state}`}
          className={cls}
        >
          {d}
        </button>,
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
          {choosingOut
            ? es ? 'Ahora elige tu fecha de salida' : 'Now choose your check-out date'
            : es ? 'Elige tu fecha de llegada' : 'Choose your check-in date'}
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
          <span
            className="h-4 w-4 border border-bt-navy/25 [background-image:repeating-linear-gradient(135deg,transparent_0_3px,rgba(31,45,78,0.25)_3px_4px)]"
            aria-hidden="true"
          />
          {es ? 'No disponible' : 'Booked'}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 bg-bt-navy" aria-hidden="true" />
          {es ? 'Tu selección' : 'Your dates'}
        </span>
        {minStayNights > 0 && (
          <span className="text-bt-charcoal/60">
            {es ? `Estancia mínima: ${minStayNights} noche${minStayNights !== 1 ? 's' : ''}` : `Minimum stay: ${minStayNights} night${minStayNights !== 1 ? 's' : ''}`}
          </span>
        )}
      </div>

      <div className="mt-7 border-t border-bt-navy/15 pt-6">
        {nights > 0 ? (
          <div>
            <p className="font-serif text-[22px] text-bt-navy">
              {shortDate(checkIn, locale)} – {shortDate(checkOut, locale)}
              <span className="ml-2 font-sans text-[14px] text-bt-charcoal/70">
                · {es ? `${nights} noche${nights !== 1 ? 's' : ''}` : `${nights} night${nights !== 1 ? 's' : ''}`}
              </span>
            </p>
            {shortStay && (
              <p className="mt-2 text-[13px] text-bt-charcoal/75">
                {es
                  ? `La estancia mínima suele ser de ${minStayNights} noches; con gusto revisamos tu caso.`
                  : `The usual minimum is ${minStayNights} nights; we’re happy to look at your case.`}
              </p>
            )}
          </div>
        ) : (
          <p className="text-[14px] text-bt-charcoal/75">
            {es
              ? 'Elige tus fechas para solicitarlas, o pregúntanos por otras fechas.'
              : 'Pick your dates to request them, or ask us about other dates.'}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-7 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-bt-navy-light"
          >
            {nights > 0 ? (es ? 'Solicitar estas fechas por WhatsApp' : 'Request these dates on WhatsApp') : es ? 'Preguntar por WhatsApp' : 'Ask on WhatsApp'}
          </a>
          <a
            href={emailHref}
            className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03]"
          >
            {es ? 'Enviar un correo' : 'Send an email'}
          </a>
          {(checkIn || checkOut) && (
            <button
              type="button"
              onClick={() => { setCheckIn(''); setCheckOut('') }}
              className="px-3 py-3 text-[12.5px] text-bt-charcoal/70 underline underline-offset-4 hover:text-bt-navy"
            >
              {es ? 'Borrar fechas' : 'Clear dates'}
            </button>
          )}
        </div>
        <p className="mt-4 text-[12.5px] text-bt-charcoal/60">
          {es
            ? 'El calendario se actualiza automáticamente. Confirmamos la disponibilidad en menos de 24 horas y no se cobra nada hasta que estés listo para reservar.'
            : 'This calendar updates automatically. We confirm availability within 24 hours, and nothing is charged until you’re ready to book.'}
        </p>
      </div>
    </div>
  )
}
