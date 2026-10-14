'use client'

import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'staff', label: 'Staff' },
  { id: 'rates', label: 'Rates' },
  { id: 'location', label: 'Location' },
]

export default function AnchorNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('overview')
  const anchorRef = useRef<HTMLDivElement>(null)

  // This bar was pinned at a hardcoded top:92px in CSS (see globals.css),
  // matching the main nav's usual height — but that height isn't actually
  // constant (it wraps at some widths, grows when the wishlist count is
  // showing), so on any screen where the real nav was shorter than 92px,
  // a blank strip of page showed between the two bars; where it was taller,
  // this bar sat partly hidden underneath it. A ResizeObserver keeps this
  // bar pinned to the nav's true, current height instead of a guess, on
  // every screen and every state.
  // Beyond Traveling: pin this bar to the header's actual BOTTOM EDGE as it
  // is on screen right now (not just its height) — the header shrinks when
  // scrolling and the contact bar above it scrolls away, so both its size and
  // position change. Re-measured every frame while scrolling/resizing and
  // while the header's shrink animation runs.
  useEffect(() => {
    const el = anchorRef.current
    if (!el) return
    let frame = 0
    const sync = () => {
      frame = 0
      const header = document.querySelector('[data-site-header]') as HTMLElement | null
      const bottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0
      el.style.top = `${Math.round(bottom)}px`
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(sync) }
    sync()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const header = document.querySelector('[data-site-header]')
    const ro = header ? new ResizeObserver(schedule) : null
    if (header && ro) ro.observe(header)
    header?.addEventListener('transitionend', schedule)
    header?.addEventListener('transitionrun', schedule)
    // Safety net while the header's 300ms height transition plays
    const timer = window.setInterval(schedule, 250)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      ro?.disconnect()
      header?.removeEventListener('transitionend', schedule)
      header?.removeEventListener('transitionrun', schedule)
      window.clearInterval(timer)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 380
      setVisible(show)
      document.body.classList.toggle('an-visible', show)

      let current = 'overview'
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 170) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.classList.remove('an-visible')
    }
  }, [])

  // A flat scroll-margin-top guess (the previous approach) assumed a fixed
  // nav height, but the main nav isn't always the same height — it wraps
  // onto a second line at some widths, and grows when the wishlist count is
  // showing — so a static number was right on some screens and wrong on
  // others (landing under the bars instead of clear of them). Measuring
  // .nav and .anchor-nav's actual rendered height at click time is correct
  // on every screen, no matter what's currently making the nav taller or
  // shorter.
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const navH = document.querySelector('[data-site-header]')?.getBoundingClientRect().height || 0
    const anchorNavH = document.querySelector('.anchor-nav')?.getBoundingClientRect().height || 0
    const BREATHING_ROOM = 20
    const top = el.getBoundingClientRect().top + window.scrollY - navH - anchorNavH - BREATHING_ROOM
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div ref={anchorRef} className={`anchor-nav${visible ? ' visible' : ''}`} role="navigation" aria-label="Page sections">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`an-link${active === s.id ? ' active' : ''}`}
          onClick={(e) => scrollTo(e, s.id)}
        >
          {s.label}
        </a>
      ))}
    </div>
  )
}
