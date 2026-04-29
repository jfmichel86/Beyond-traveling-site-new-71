"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { useLanguage } from "@/lib/language-context";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  let title = "";

  if (href === "/") title = "Luxury Property Management in Punta Mita";
  if (href === "/services") title = "Property Management Services in Punta Mita";
  if (href === "/properties") title = "Luxury Rental Properties in Punta Mita";
  if (href === "/about") title = "Property Management Team in Punta Mita";
  if (href === "/contact") title = "Contact Property Management Punta Mita";

  return (
    <Link
      href={href}
      title={title}
      onClick={onClick}
      className="text-[13px] font-semibold tracking-[0.14em] text-slate-900/70 transition hover:text-slate-900"
    >
      {children}
    </Link>
  );
};

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();

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
    <header className="sticky top-0 z-30 border-b border-slate-900/10 bg-white">
      <Container className="py-2 md:py-3">
        <div className="relative flex h-[76px] items-center md:h-[104px]">
          {/* Logo */}
          <Link href="/" aria-label="Beyond Traveling home" className="relative block h-[64px] w-[360px] md:h-[96px] md:w-[840px]">
            <Image src="/logo-beyond-traveling.jpg" alt="Beyond Traveling" fill priority className="object-contain object-left" />
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/services">SERVICES</NavLink>
            <NavLink href="/properties">PROPERTIES</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
          </nav>

          {/* Desktop language */}
          <div className="ml-auto hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`h-9 rounded-md px-3 text-[12px] font-semibold tracking-[0.12em] transition hover:bg-slate-900/[0.03] hover:text-slate-900 ${language === "en" ? "text-slate-900" : "text-slate-900/60"}`}
            >
              EN
            </button>
            <span className="text-slate-900/20">/</span>
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`h-9 rounded-md px-3 text-[12px] font-semibold tracking-[0.12em] transition hover:bg-slate-900/[0.03] hover:text-slate-900 ${language === "es" ? "text-slate-900" : "text-slate-900/60"}`}
            >
              ES
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-900/70 transition hover:bg-slate-900/[0.03] md:hidden"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="h-[2px] w-5 bg-slate-900/60" />
              <span className="h-[2px] w-5 bg-slate-900/60" />
              <span className="h-[2px] w-5 bg-slate-900/60" />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button aria-label="Close menu overlay" onClick={() => setOpen(false)} className="absolute inset-0 bg-slate-900/20" />
          <div className="absolute left-0 right-0 top-0 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <Container className="py-4">
              <div className="flex items-center justify-between">
                <div className="relative h-[42px] w-[280px]">
                  <Image src="/logo-beyond-traveling.jpg" alt="Beyond Traveling" fill className="object-contain object-left" />
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-900/70 transition hover:bg-slate-900/[0.03]"
                >
                  <span className="text-[18px] leading-none">×</span>
                </button>
              </div>

              <div className="mt-6 grid gap-4 pb-6">
                <NavLink href="/" onClick={() => setOpen(false)}>HOME</NavLink>
                <NavLink href="/services" onClick={() => setOpen(false)}>SERVICES</NavLink>
                <NavLink href="/properties" onClick={() => setOpen(false)}>PROPERTIES</NavLink>
                <NavLink href="/about" onClick={() => setOpen(false)}>ABOUT</NavLink>
                <NavLink href="/contact" onClick={() => setOpen(false)}>CONTACT</NavLink>
              </div>

              <div className="h-px w-full bg-slate-900/10" />

              <div className="flex items-center gap-2 py-4">
                <button
                  type="button"
                  onClick={() => { setLanguage("en"); setOpen(false); }}
                  className={`h-10 rounded-md px-4 text-[12px] font-semibold tracking-[0.12em] transition hover:bg-slate-900/[0.03] ${language === "en" ? "text-slate-900" : "text-slate-900/70"}`}
                >
                  EN
                </button>
                <span className="text-slate-900/20">/</span>
                <button
                  type="button"
                  onClick={() => { setLanguage("es"); setOpen(false); }}
                  className={`h-10 rounded-md px-4 text-[12px] font-semibold tracking-[0.12em] transition hover:bg-slate-900/[0.03] ${language === "es" ? "text-slate-900" : "text-slate-900/70"}`}
                >
                  ES
                </button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
