import React from "react";
import Link from "next/link";

/** Navy bar at the top of every concierge page. */
export default function PanelTop({ email, back }: { email?: string; back?: { href: string; label: string } }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-bt-navy px-5 py-3.5 sm:px-8 print:hidden">
      <div className="flex items-center gap-4">
        <Link href="/concierge" className="text-[11px] font-semibold tracking-[0.28em] text-bt-gold-light no-underline">
          BEYOND TRAVELING
        </Link>
        <span className="hidden text-[13px] text-bt-mist sm:inline">Panel del concierge</span>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-[13px]">
        {back && (
          <Link href={back.href} className="text-white no-underline hover:text-bt-gold-light">
            ← {back.label}
          </Link>
        )}
        {email && (
          <>
            <span className="text-bt-mist">{email}</span>
            <a href="/api/concierge/auth/logout" className="text-bt-mist underline underline-offset-4 hover:text-white">
              Salir
            </a>
          </>
        )}
      </div>
    </div>
  );
}
