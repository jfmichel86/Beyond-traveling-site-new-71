"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { Row } from "./data";

type Filter = "upcoming" | "stay" | "pending" | "past" | "all" | "archived";

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const GUIDE_STYLE: Record<string, string> = {
  received: "bg-[#DDEEDF] text-[#1F6B3A]",
  incomplete: "bg-[#F6E0CF] text-[#8A4B12]",
  "not-started": "bg-bt-sand text-[#4A4E55]",
};

const money = (n: number) => `MXN $${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;

export default function ConciergeList({ rows: allRows, demo }: { rows: Row[]; demo: boolean }) {
  const [filter, setFilter] = useState<Filter>("upcoming");
  // Archived reservations (tests, cancellations…) only show in their own tab
  const rows = useMemo(() => allRows.filter((r) => !r.archived), [allRows]);
  const archived = useMemo(() => allRows.filter((r) => r.archived), [allRows]);
  const [q, setQ] = useState("");
  const t = today();

  const is = {
    upcoming: (r: Row) => r.checkOut >= t,
    stay: (r: Row) => r.checkIn <= t && r.checkOut >= t,
    pending: (r: Row) => r.checkOut >= t && (r.active > r.confirmed || r.guide.state !== "received"),
    past: (r: Row) => r.checkOut < t,
    all: () => true,
    archived: () => true,
  };

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = (filter === "archived" ? archived : rows.filter(is[filter])).filter((r) => !term || `${r.guest} ${r.villa} ${r.bookingId}`.toLowerCase().includes(term));
    return filter === "past" ? list.reverse() : list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, archived, filter, q]);

  const upcoming = rows.filter(is.upcoming);
  const in7 = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  })();
  const stats = [
    { label: "Servicios por confirmar", value: upcoming.reduce((n, r) => n + (r.active - r.confirmed), 0) },
    { label: "Guías sin enviar", value: upcoming.filter((r) => r.guide.state !== "received" && r.checkIn >= t).length },
    { label: "Llegan esta semana", value: rows.filter((r) => r.checkIn >= t && r.checkIn <= in7).length },
  ];

  const tabs: [Filter, string][] = [
    ["upcoming", `Próximas (${rows.filter(is.upcoming).length})`],
    ["stay", `En estancia (${rows.filter(is.stay).length})`],
    ["pending", `Con pendientes (${rows.filter(is.pending).length})`],
    ["past", "Pasadas"],
    ["all", "Todas"],
    ...(archived.length ? ([["archived", `Archivadas (${archived.length})`]] as [Filter, string][]) : []),
  ];

  return (
    <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 pb-16 pt-8 sm:px-6">
      {demo && (
        <p className="border-l-2 border-bt-gold bg-white px-4 py-3 text-[14px]">
          Vista de prueba con datos de ejemplo: los cambios no se guardan.
        </p>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="m-0 font-serif text-[44px] font-medium leading-none text-bt-navy">Rentas</h1>
        <label className="flex min-h-[44px] w-full items-center border border-bt-sand-dark bg-white px-3 sm:w-[300px]">
          <span className="sr-only">Buscar</span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A5E65" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar huésped, villa o booking" className="ml-2 w-full border-0 bg-transparent text-[14px] outline-none" />
        </label>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar rentas">
        {tabs.map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setFilter(k)}
            aria-pressed={filter === k}
            className={`min-h-[40px] border px-4 text-[13px] ${filter === k ? "border-bt-navy bg-bt-navy font-semibold text-white" : "border-bt-sand-dark bg-white text-bt-navy"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="border border-bt-sand bg-white px-5 py-4">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-bt-gold-text">{s.label}</span>
            <span className="font-serif text-[34px] text-bt-navy">{s.value}</span>
          </div>
        ))}
      </div>

      <div className="border border-bt-sand bg-white">
        <div className="hidden grid-cols-[1.6fr_1.5fr_1.3fr_1.6fr_1.2fr_1fr] gap-4 bg-bt-cream px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bt-charcoal-light lg:grid">
          <span>Huésped</span><span>Propiedad</span><span>Fechas</span><span>Guía de llegada</span><span>Servicios</span><span>Por cobrar</span>
        </div>
        {shown.length === 0 && <p className="px-6 py-8 text-[15px] text-bt-charcoal-light">No hay rentas en esta vista.</p>}
        {shown.map((r) => {
          const pct = r.active ? Math.round((r.confirmed / r.active) * 100) : 0;
          return (
            <Link
              key={r.id}
              href={`/concierge/${encodeURIComponent(r.id)}`}
              className="grid grid-cols-1 gap-2 border-t border-bt-sand px-5 py-4 text-bt-charcoal no-underline first:border-t-0 hover:bg-bt-cream/60 lg:grid-cols-[1.6fr_1.5fr_1.3fr_1.6fr_1.2fr_1fr] lg:items-center lg:gap-4 lg:px-6 lg:first:border-t"
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-bt-navy">{r.guest}</span>
                <span className="text-[12px] text-bt-charcoal-light">{[r.bookingId, r.people].filter(Boolean).join(" · ")}</span>
              </span>
              <span className="text-[14px]">{r.villa}</span>
              <span className="text-[13px]">{r.dates}</span>
              <span className="flex flex-col items-start gap-1">
                <span className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${GUIDE_STYLE[r.guide.state]}`}>{r.guide.label}</span>
                <span className="text-[12px] text-bt-charcoal-light">{r.guide.note}</span>
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="text-[13px]">{r.active ? `${r.confirmed} de ${r.active} confirmados` : "—"}</span>
                <span className="block h-[5px] overflow-hidden rounded-full bg-bt-sand">
                  <span className="block h-[5px] bg-bt-gold" style={{ width: `${pct}%` }} />
                </span>
              </span>
              <span className="text-[14px] font-semibold text-bt-navy">{r.total ? money(r.total) : "—"}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
