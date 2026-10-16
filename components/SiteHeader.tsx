"use client";

import React from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import { usePathname } from "next/navigation";
import { stripEs } from "@/lib/locale";
import Container from "@/components/Container";
import { useLanguage } from "@/lib/language-context";
import { services } from "@/lib/services";
import { FALLBACK_VILLAS } from "@/lib/fallback-villas";
import WhatsAppLink from "@/components/WhatsAppLink";

const ES_NAV_LABELS: Record<string, string> = { SERVICES: "servicios", PROPERTIES: "propiedades", CONTACT: "contacto" };

type MenuItem = { href: string; label: React.ReactNode };

const SERVICE_ITEMS: MenuItem[] = services.map((s) => ({
  href: `/services/${s.slug}`,
  label: `${s.title} ${s.italicTitle}`,
}));

// Managed properties with their own detail page under /properties.
// The real list comes from Sanity (passed in by app/layout.tsx); this is only
// a fallback in case Sanity can't be reached.
const FALLBACK_PROPERTY_ITEMS: MenuItem[] = FALLBACK_VILLAS.map((v) => ({
  href: `/properties/${v.slug}`,
  label: v.title,
}));

// Primary contact options (owners, guests). Agents and staff/vendors live in
// the footer and on the /contact overview — deliberately not in the nav.
const CONTACT_ITEMS: MenuItem[] = [
  { href: "/contact/owners", label: "Manage Your Property" },
  { href: "/contact/reservations", label: "Book a Stay" },
];

/** True when `href` is the current page or a section the current page sits under. */
const useIsActive = (href: string) => {
  const pathname = stripEs(usePathname() || "/");
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const NavLink = ({ href, children, onClick, showTitle = true }: { href: string; children: React.ReactNode; onClick?: () => void; showTitle?: boolean }) => {
  const active = useIsActive(href);
  let title = "";

  if (href === "/") title = "Luxury Property Management in Punta Mita";
  if (href === "/services") title = "Property Management Services in Punta Mita";
  if (href === "/properties") title = "Luxury Rental Properties in Punta Mita";
  if (href === "/about") title = "Property Management Team in Punta Mita";
  if (href === "/contact") title = "Contact Property Management Punta Mita";

  return (
    <Link
      href={href}
      title={showTitle ? title : undefined}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-block py-1 text-[13px] font-normal tracking-[0.14em] transition hover:text-bt-navy ${
        active ? "text-bt-navy" : "text-bt-navy/80"
      }`}
    >
      {children}
      {/* Gold underline: always on for the current section, slides in on hover otherwise */}
      <span
        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-bt-gold transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
};

/**
 * Desktop nav item with a dropdown panel. Opens on hover and on keyboard
 * focus; the top-level label still links to the overview page.
 */
const NavDropdown = ({
  href,
  label,
  items,
}: {
  href: string;
  label: string;
  items: MenuItem[];
}) => {
  const { language } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = React.useId();

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) hide();
      }}
    >
      <div className="flex items-center gap-1.5">
        <NavLink href={href} showTitle={false}>{label}</NavLink>
        <button
          type="button"
          aria-label={
            language === "es"
              ? `${open ? "Cerrar" : "Abrir"} menú de ${ES_NAV_LABELS[label] ?? label.toLowerCase()}`
              : `${open ? "Close" : "Open"} ${label.toLowerCase()} menu`
          }
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-6 w-4 items-center justify-center text-bt-navy/70 transition hover:text-bt-navy"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <polyline points="1.5 3.5 5 7 8.5 3.5" />
          </svg>
        </button>
      </div>

      {/* Panel hangs directly under the label: its left edge (minus the item
          padding) lines up with the label text, and pt-4 bridges the gap so
          hover isn’t lost moving down into it. */}
      <div
        id={menuId}
        className={`absolute -left-5 top-full z-40 pt-4 transition duration-200 ease-out ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="w-max min-w-[220px] border-t-2 border-bt-gold bg-white py-2 shadow-[0_18px_48px_rgba(15,23,42,0.12)]">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif block whitespace-nowrap px-5 py-2.5 text-[17px] font-normal text-bt-navy transition-colors hover:bg-bt-navy/[0.03] hover:text-bt-navy-light focus-visible:bg-bt-navy/[0.03] focus-visible:outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.659 1.438 5.168L2 22l4.985-1.402A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" fillOpacity="0" stroke="currentColor" strokeWidth={1.6} />
  </svg>
);

/** Mobile menu: section link plus an indented list of its pages. */
const MobileNavGroup = ({
  href,
  label,
  items,
  onNavigate,
}: {
  href: string;
  label: string;
  items: MenuItem[];
  onNavigate: () => void;
}) => (
  <div>
    <NavLink href={href} onClick={onNavigate}>
      {label}
    </NavLink>
    <ul className="mt-2 border-l border-bt-gold/40 pl-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="font-serif block py-1.5 text-[16px] text-bt-navy/85 transition hover:text-bt-navy"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function SiteHeader({
  properties,
}: {
  properties?: { slug: string; title: string }[];
}) {
  const PROPERTY_ITEMS: MenuItem[] = properties?.length
    ? properties.map((p) => ({ href: `/properties/${p.slug}`, label: p.title }))
    : FALLBACK_PROPERTY_ITEMS;
  const [open, setOpen] = React.useState(false);
  // 0 → 1 over the first 80px of scroll, so the header's shadow/border ease
  // in smoothly instead of snapping on at a fixed threshold.
  const [scrollProgress, setScrollProgress] = React.useState(0);
  // Compact header once the visitor scrolls down. Two thresholds (shrink
  // after 80px, grow back above 20px) so it never flickers at the edge.
  const [compact, setCompact] = React.useState(false);
  const { language, setLanguage } = useLanguage();

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollProgress(Math.min(y / 80, 1));
      setCompact((c) => (c ? y > 20 : y > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top contact utility bar — desktop only; mobile keeps the sticky CTA bar instead */}
      <div className="hidden bg-bt-navy md:block">
        <Container>
          <div className="flex h-9 items-center justify-end gap-5 text-[12px] font-normal text-white/85">
            <a href="mailto:management@beyondtravelingmx.com" className="inline-flex items-center gap-2 transition hover:text-white">
              <MailIcon />
              <span><span className="text-white/70">Owners:</span> management@beyondtravelingmx.com</span>
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden />
            <a href="mailto:reservations@beyondtravelingmx.com" className="inline-flex items-center gap-2 transition hover:text-white">
              <MailIcon />
              <span><span className="text-white/70">Reservations:</span> reservations@beyondtravelingmx.com</span>
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden />
            <WhatsAppLink topic="owner" className="inline-flex items-center gap-2 transition hover:text-white">
              <WhatsAppIcon />
              +52 33 1361 9889
            </WhatsAppLink>
          </div>
        </Container>
      </div>

      <header
      data-site-header
      className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur-md"
      style={{
        boxShadow: `0 4px 24px rgba(15, 23, 42, ${0.05 * scrollProgress})`,
        borderBottomColor: `rgba(30, 58, 95, ${0.1 * scrollProgress})`,
      }}
    >
      <Container className={`transition-[padding] duration-300 ${compact ? "py-1.5 md:py-1.5" : "py-2 md:py-3"}`}>
        <div
          className={`relative flex items-center gap-6 transition-[height] duration-300 ${
            compact ? "h-[60px] md:h-[64px]" : "h-[68px] md:h-[88px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Beyond Traveling home"
            className={`relative block shrink-0 transition-all duration-300 ${
              compact ? "h-[44px] w-[102px] md:h-[50px] md:w-[115px]" : "h-[52px] w-[120px] md:h-[72px] md:w-[166px]"
            }`}
          >
            <Image src="/logo-beyond-traveling.png" alt="Beyond Traveling" fill priority className="object-contain object-left" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
            <NavDropdown href="/services" label="SERVICES" items={SERVICE_ITEMS} />
            <NavDropdown href="/properties" label="PROPERTIES" items={PROPERTY_ITEMS} />
            <NavLink href="/about">ABOUT</NavLink>
            <NavDropdown href="/contact" label="CONTACT" items={CONTACT_ITEMS} />
          </nav>

          {/* Desktop right group: language + owner call-to-action */}
          <div className="ml-auto hidden shrink-0 items-center gap-1 md:flex">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`h-9 rounded-md px-3 text-[12px] font-medium tracking-[0.12em] transition hover:bg-bt-navy/[0.08] hover:text-bt-navy ${language === "en" ? "text-bt-navy" : "text-bt-navy/75"}`}
            >
              EN
            </button>
            <span className="text-bt-navy/20">/</span>
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`h-9 rounded-md px-3 text-[12px] font-medium tracking-[0.12em] transition hover:bg-bt-navy/[0.08] hover:text-bt-navy ${language === "es" ? "text-bt-navy" : "text-bt-navy/75"}`}
            >
              ES
            </button>
            <Link
              href="/contact/owners"
              className="ml-4 hidden h-10 items-center justify-center whitespace-nowrap bg-bt-gold px-5 text-[11px] font-medium uppercase tracking-[0.13em] text-white transition hover:bg-bt-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-bt-navy focus-visible:ring-offset-2 xl:inline-flex"
            >
              Talk With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-bt-navy/10 text-bt-navy/80 transition hover:bg-bt-navy/[0.04] md:hidden"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="h-[2px] w-5 bg-bt-navy/60" />
              <span className="h-[2px] w-5 bg-bt-navy/60" />
              <span className="h-[2px] w-5 bg-bt-navy/60" />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile panel — always mounted so open/close can transition instead
          of snapping in and out */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          aria-label="Close menu overlay"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-bt-navy/20 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute left-0 right-0 top-0 max-h-[100dvh] overflow-y-auto bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
            <Container className="py-4">
              <div className="flex items-center justify-between">
                <div className="relative h-[36px] w-[83px]">
                  <Image src="/logo-beyond-traveling.png" alt="Beyond Traveling" fill className="object-contain object-left" />
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-bt-navy/10 text-bt-navy/80 transition hover:bg-bt-navy/[0.04]"
                >
                  <span className="text-[18px] leading-none">×</span>
                </button>
              </div>

              <div className="mt-6 grid gap-4 pb-6">
                <MobileNavGroup href="/services" label="SERVICES" items={SERVICE_ITEMS} onNavigate={() => setOpen(false)} />
                <MobileNavGroup href="/properties" label="PROPERTIES" items={PROPERTY_ITEMS} onNavigate={() => setOpen(false)} />
                <NavLink href="/about" onClick={() => setOpen(false)}>ABOUT</NavLink>
                <MobileNavGroup href="/contact" label="CONTACT" items={CONTACT_ITEMS} onNavigate={() => setOpen(false)} />
              </div>

              <Link
                href="/contact/owners"
                onClick={() => setOpen(false)}
                className="mb-6 flex h-12 w-full items-center justify-center bg-bt-gold text-[11px] font-medium uppercase tracking-[0.13em] text-white transition hover:bg-bt-navy"
              >
                Talk With Us
              </Link>

              <div className="h-px w-full bg-bt-navy/10" />

              <div className="flex items-center gap-2 py-4">
                <button
                  type="button"
                  onClick={() => { setLanguage("en"); setOpen(false); }}
                  className={`h-10 rounded-md px-4 text-[12px] font-medium tracking-[0.12em] transition hover:bg-bt-navy/[0.08] ${language === "en" ? "text-bt-navy" : "text-bt-navy/75"}`}
                >
                  EN
                </button>
                <span className="text-bt-navy/20">/</span>
                <button
                  type="button"
                  onClick={() => { setLanguage("es"); setOpen(false); }}
                  className={`h-10 rounded-md px-4 text-[12px] font-medium tracking-[0.12em] transition hover:bg-bt-navy/[0.08] ${language === "es" ? "text-bt-navy" : "text-bt-navy/75"}`}
                >
                  ES
                </button>
              </div>
            </Container>
        </div>
      </div>
      </header>
    </>
  );
}
