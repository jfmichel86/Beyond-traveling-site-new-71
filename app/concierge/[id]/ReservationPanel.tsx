"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  STATUS_LABEL,
  STATUS_ORDER,
  newManualService,
  serviceTotals,
  type ConciergeService,
  type ServiceStatus,
} from "@/lib/conciergeServices";
import type { GuideState } from "../data";

const STATUS_STYLE: Record<ServiceStatus, string> = {
  pending: "bg-bt-sand text-[#4A4E55]",
  requested: "bg-[#DCE6F2] text-bt-navy",
  confirmed: "bg-[#DDEEDF] text-[#1F6B3A]",
  unavailable: "bg-[#F6E0CF] text-[#8A4B12]",
};
const GUIDE_STYLE: Record<string, string> = {
  received: "bg-[#DDEEDF] text-[#1F6B3A]",
  incomplete: "bg-[#F6E0CF] text-[#8A4B12]",
  "not-started": "bg-bt-sand text-[#4A4E55]",
};

const money = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
const costText = (c: number | null) => (c == null ? "" : c.toLocaleString("en-US", { maximumFractionDigits: 2 }));

type Props = {
  demo: boolean;
  id: string;
  bookingId: string;
  guest: string;
  villa: string;
  checkIn: string;
  dates: string;
  contact: string[];
  arrival: string;
  guide: GuideState;
  reminders: { at: string; by: string }[];
  canRemind: boolean;
  summary: string;
  /** The guest's grocery list: received (label) or pending (deadline, reminders). */
  grocery: {
    received: string;
    items: number;
    deadline: string;
    overdue: boolean;
    reminders: number;
    lastReminder: string;
    canRemind: boolean;
    /** "Llegó tarde: aplica tarifa de MXN 1,400", or "". */
    lateFee: string;
  };
  initial: { services: ConciergeService[]; generalNotes: string; addVat: boolean };
  /** Services were just built from the guest's answers and aren't saved yet. */
  unsaved: boolean;
  /** Archived: hidden from the lists. Text like "Archivada el 25 nov por ana@…", or "" when active. */
  archived: string;
};

export default function ReservationPanel(p: Props) {
  const [services, setServices] = useState<ConciergeService[]>(p.initial.services);
  const [costs, setCosts] = useState<Record<string, string>>(() => Object.fromEntries(p.initial.services.map((s) => [s._key, costText(s.cost)])));
  const [notes, setNotes] = useState(p.initial.generalNotes);
  const [addVat, setAddVat] = useState(p.initial.addVat);
  const [save, setSave] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [remind, setRemind] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [grRemind, setGrRemind] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [archiving, setArchiving] = useState<"idle" | "working" | "error">("idle");
  const router = useRouter();
  const first = useRef(true);

  // Autosave, a moment after the last change
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setSave("saving");
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/concierge/reservations/${encodeURIComponent(p.id)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ services, generalNotes: notes, addVat }),
        });
        if (res.status === 401) {
          window.location.href = "/concierge/login";
          return;
        }
        setSave(res.ok ? "saved" : "error");
      } catch {
        setSave("error");
      }
    }, 800);
    return () => clearTimeout(t);
  }, [services, notes, addVat, p.id]);

  // Saved the very first time the panel opens with services built from the guest's answers
  useEffect(() => {
    if (!p.demo && p.unsaved) setServices((s) => [...s]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const patch = (key: string, change: Partial<ConciergeService>) =>
    setServices((list) => list.map((s) => (s._key === key ? { ...s, ...change } : s)));
  const cycle = (s: ConciergeService) => patch(s._key, { status: STATUS_ORDER[(STATUS_ORDER.indexOf(s.status) + 1) % STATUS_ORDER.length] });
  const setCost = (key: string, text: string) => {
    setCosts((c) => ({ ...c, [key]: text }));
    const n = parseFloat(text.replace(/[^0-9.]/g, ""));
    patch(key, { cost: Number.isFinite(n) ? n : null });
  };
  const addService = () => {
    const s = newManualService(p.checkIn);
    setServices((list) => [...list, s]);
    setCosts((c) => ({ ...c, [s._key]: "" }));
  };
  const remove = (key: string) => {
    if (!window.confirm("¿Quitar este servicio?")) return;
    setServices((list) => list.filter((s) => s._key !== key));
  };

  const sendReminder = async () => {
    if (!window.confirm("¿Enviar ahora un recordatorio por correo al huésped?")) return;
    setRemind("sending");
    try {
      const res = await fetch(`/api/concierge/reservations/${encodeURIComponent(p.id)}/remind`, { method: "POST" });
      setRemind(res.ok ? "sent" : "error");
    } catch {
      setRemind("error");
    }
  };

  const sendGroceryReminder = async () => {
    if (!window.confirm("¿Enviar ahora al huésped un recordatorio de su lista de despensa?")) return;
    setGrRemind("sending");
    try {
      const res = await fetch(`/api/concierge/reservations/${encodeURIComponent(p.id)}/grocery-remind`, { method: "POST" });
      if (res.status === 401) {
        window.location.href = "/concierge/login";
        return;
      }
      setGrRemind(res.ok ? "sent" : "error");
    } catch {
      setGrRemind("error");
    }
  };

  const gr = p.grocery;
  const groceryStatus = (
    <div className="mt-1.5 flex flex-col items-start gap-1.5">
      {gr.received ? (
        <>
          <span className="rounded-full bg-[#DDEEDF] px-2.5 py-1 text-[12px] font-semibold text-[#1F6B3A]">{gr.received}</span>
          {gr.lateFee && <span className="text-[12px] font-semibold text-[#8A4B12]">{gr.lateFee}</span>}
          <Link
            href={`/concierge/${encodeURIComponent(p.id)}/despensa`}
            className="text-[13px] font-semibold text-bt-navy underline underline-offset-4"
          >
            Ver lista ({gr.items} artículo{gr.items === 1 ? "" : "s"}) →
          </Link>
        </>
      ) : (
        <>
          <span className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${gr.overdue ? "bg-[#F6E0CF] text-[#8A4B12]" : "bg-bt-sand text-[#4A4E55]"}`}>
            {gr.overdue ? `Lista vencida · era el ${gr.deadline}` : `Lista pendiente · fecha límite ${gr.deadline}`}
          </span>
          {gr.overdue && gr.lateFee && <span className="text-[12px] font-semibold text-[#8A4B12]">{gr.lateFee.replace("Llegó tarde: aplica", "Si llega, aplica")}</span>}
          <span className="text-[12px] text-bt-charcoal-light">
            {gr.reminders ? `${gr.reminders} recordatorio${gr.reminders > 1 ? "s" : ""} · último ${gr.lastReminder}` : "Sin recordatorios"}
          </span>
          {gr.canRemind && (
            <button
              type="button"
              onClick={sendGroceryReminder}
              disabled={grRemind === "sending" || grRemind === "sent" || p.demo}
              className="min-h-[36px] border border-bt-navy px-3 text-[12.5px] font-semibold text-bt-navy disabled:opacity-60"
            >
              {grRemind === "sending" ? "Enviando…" : grRemind === "sent" ? "Recordatorio enviado ✓" : grRemind === "error" ? "No se pudo enviar · reintentar" : "Recordar lista de despensa"}
            </button>
          )}
        </>
      )}
    </div>
  );
  const hasGroceryRow = services.some((s) => s.key === "grocery");

  const archive = async (on: boolean) => {
    const q = on
      ? "¿Archivar esta renta?\n\nDejará de aparecer en las listas y no se enviarán recordatorios automáticos. No se borra nada: la puedes ver y restaurar en la pestaña \"Archivadas\"."
      : "¿Restaurar esta renta? Volverá a aparecer en las listas.";
    if (!window.confirm(q)) return;
    setArchiving("working");
    try {
      const res = await fetch(`/api/concierge/reservations/${encodeURIComponent(p.id)}/archive`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archived: on }),
      });
      if (!res.ok) throw new Error();
      setArchiving("idle");
      if (on) router.push("/concierge");
      else router.refresh();
    } catch {
      setArchiving("error");
    }
  };

  const t = serviceTotals(services, addVat);
  const pct = t.active ? Math.round((t.confirmed / t.active) * 100) : 0;

  const saveLabel = p.demo
    ? "Vista de prueba: no se guarda"
    : { idle: "", saving: "Guardando…", saved: "Guardado ✓", error: "No se pudo guardar. Revisa tu conexión." }[save];

  return (
    <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-4 pb-16 pt-8 sm:px-6">
      {p.archived && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-l-2 border-bt-gold bg-white px-4 py-3">
          <span className="text-[14px]">
            <b>Renta archivada.</b> No aparece en las listas y no recibe recordatorios automáticos. {p.archived}
          </span>
          <button
            type="button"
            onClick={() => archive(false)}
            disabled={archiving === "working" || p.demo}
            className="min-h-[40px] border border-bt-navy px-4 text-[13px] font-semibold text-bt-navy disabled:opacity-60"
          >
            {archiving === "working" ? "Restaurando…" : "Restaurar"}
          </button>
        </div>
      )}
      {archiving === "error" && (
        <p role="alert" className="border-l-2 border-[#8A4B12] bg-white px-4 py-3 text-[14px] text-[#8A4B12]">No se pudo cambiar. Revisa tu conexión e intenta de nuevo.</p>
      )}
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-1.5">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-bt-gold-text">{[p.bookingId, p.villa].filter(Boolean).join(" · ")}</span>
          <h1 className="m-0 font-serif text-[40px] font-medium leading-none text-bt-navy sm:text-[44px]">{p.guest}</h1>
          <span className="text-[15px]">{p.dates}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`text-[13px] ${save === "error" ? "text-[#8A4B12]" : "text-bt-charcoal-light"}`} aria-live="polite">{saveLabel}</span>
          <Link
            href={`/concierge/${encodeURIComponent(p.id)}/cuenta`}
            className="flex min-h-[44px] items-center bg-bt-navy px-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white no-underline hover:bg-bt-navy-light"
          >
            Estado de cuenta
          </Link>
          {!p.archived && (
            <button
              type="button"
              onClick={() => archive(true)}
              disabled={archiving === "working" || p.demo}
              title={p.demo ? "No disponible en la vista de prueba" : "Ocultar esta renta de las listas (prueba, cancelada…)"}
              className="flex min-h-[44px] items-center border border-bt-sand-dark bg-white px-4 text-[13px] font-semibold text-bt-charcoal-light hover:border-bt-navy hover:text-bt-navy disabled:opacity-60"
            >
              {archiving === "working" ? "Archivando…" : "Archivar"}
            </button>
          )}
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col gap-1.5 border border-bt-sand bg-white px-5 py-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bt-gold-text">Contacto</span>
          {p.contact.map((c) => (
            <span key={c} className="break-all text-[14px]">{c}</span>
          ))}
          {p.arrival && <span className="text-[13px] text-bt-charcoal-light">{p.arrival}</span>}
        </div>
        <div className="flex flex-col items-start gap-2 border border-bt-sand bg-white px-5 py-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bt-gold-text">Guía de llegada</span>
          <span className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${GUIDE_STYLE[p.guide.state]}`}>{p.guide.label}</span>
          <span className="text-[13px] text-bt-charcoal-light">{p.guide.note}</span>
          {p.reminders.length > 0 && (
            <span className="text-[12px] text-bt-charcoal-light">Último: {p.reminders[p.reminders.length - 1].at} ({p.reminders[p.reminders.length - 1].by})</span>
          )}
          {p.canRemind && (
            <button
              type="button"
              onClick={sendReminder}
              disabled={remind === "sending" || remind === "sent"}
              className="mt-1 min-h-[40px] border border-bt-navy px-4 text-[13px] font-semibold text-bt-navy disabled:opacity-60"
            >
              {remind === "sending" ? "Enviando…" : remind === "sent" ? "Recordatorio enviado ✓" : remind === "error" ? "No se pudo enviar · reintentar" : "Enviar recordatorio ahora"}
            </button>
          )}
        </div>
        <div className="flex flex-col gap-2 border border-bt-sand bg-white px-5 py-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bt-gold-text">Avance</span>
          <span className="font-serif text-[30px] leading-none text-bt-navy">{t.active ? `${t.confirmed} de ${t.active} confirmados` : "Sin servicios"}</span>
          <span className="block h-[6px] overflow-hidden rounded-full bg-bt-sand">
            <span className="block h-[6px] bg-bt-gold" style={{ width: `${pct}%` }} />
          </span>
        </div>
      </div>

      {/* Services */}
      <div className="border border-bt-sand bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bt-sand px-5 py-4 sm:px-6">
          <h2 className="m-0 font-serif text-[28px] font-medium text-bt-navy">Servicios solicitados</h2>
          <span className="text-[13px] text-bt-charcoal-light">Toca el estado para cambiarlo · el costo es lo que se cobra al huésped (MXN)</span>
        </div>

        <div className="hidden grid-cols-[2.2fr_1.3fr_1.1fr_1.1fr_2fr_0.9fr] gap-4 bg-bt-cream px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bt-charcoal-light lg:grid">
          <span>Servicio</span><span>Fecha y hora</span><span>Estado</span><span>Costo (MXN)</span><span>Notas</span><span>Cobrar</span>
        </div>

        {!hasGroceryRow && gr.received && (
          <div className="flex flex-col gap-1 border-b border-bt-sand px-4 py-4 sm:px-6">
            <span className="text-[14px] font-semibold text-bt-navy">Lista de despensa</span>
            <span className="text-[13px] text-bt-charcoal-light">El huésped envió una lista aunque no pidió la despensa en su guía.</span>
            {groceryStatus}
          </div>
        )}

        {services.length === 0 && (
          <p className="px-6 py-8 text-[15px] text-bt-charcoal-light">
            {p.guide.state === "received" ? "El huésped no pidió servicios." : "Aparecerán aquí cuando el huésped envíe su guía de llegada."}
          </p>
        )}

        {services.map((s) => {
          const manual = s.source === "manual";
          const off = s.status === "unavailable" || s.guestRemoved;
          return (
            <div
              key={s._key}
              className={`grid grid-cols-1 gap-3 border-t border-bt-sand px-4 py-4 first:border-t-0 sm:px-6 lg:grid-cols-[2.2fr_1.3fr_1.1fr_1.1fr_2fr_0.9fr] lg:items-center lg:gap-4 lg:first:border-t ${off ? "bg-bt-cream/50" : ""}`}
            >
              <div className="flex flex-col gap-1">
                {manual ? (
                  <input
                    aria-label="Nombre del servicio"
                    value={s.name}
                    onChange={(e) => patch(s._key, { name: e.target.value })}
                    placeholder="¿Qué servicio?"
                    className="min-h-[40px] border border-bt-sand-dark px-3 text-[14px] font-semibold text-bt-navy"
                  />
                ) : (
                  <span className={`text-[14px] font-semibold ${off ? "text-bt-charcoal-light line-through" : "text-bt-navy"}`}>{s.name}</span>
                )}
                <span className="text-[13px] text-bt-charcoal-light">{s.detail}</span>
                {s.guestRemoved && <span className="text-[12px] font-semibold text-[#8A4B12]">El huésped ya no lo pide en su guía</span>}
                {s.key === "grocery" && !s.guestRemoved && groceryStatus}
              </div>

              <div className="flex items-center gap-2 lg:block">
                <span className="w-[86px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-bt-charcoal-light lg:hidden">Fecha</span>
                {manual ? (
                  <input
                    aria-label="Fecha y hora"
                    value={s.when}
                    onChange={(e) => patch(s._key, { when: e.target.value })}
                    placeholder="ej. jue 24 dic · 7 pm"
                    className="min-h-[40px] w-full border border-bt-sand-dark px-3 text-[13px]"
                  />
                ) : (
                  <span className="text-[13px]">{s.when}</span>
                )}
              </div>

              <div className="flex items-center gap-2 lg:block">
                <span className="w-[86px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-bt-charcoal-light lg:hidden">Estado</span>
                <button
                  type="button"
                  onClick={() => cycle(s)}
                  aria-label={`Estado de ${s.name || "servicio"}: ${STATUS_LABEL[s.status]}. Toca para cambiar.`}
                  className={`min-h-[34px] rounded-full px-3.5 text-[12px] font-semibold ${STATUS_STYLE[s.status]}`}
                >
                  {STATUS_LABEL[s.status]}
                </button>
              </div>

              <div className="flex items-center gap-2 lg:block">
                <span className="w-[86px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-bt-charcoal-light lg:hidden">Costo</span>
                <label className="flex min-h-[40px] w-full items-center gap-1.5 border border-bt-sand-dark bg-white px-2.5">
                  <span className="text-[13px] text-bt-charcoal-light">$</span>
                  <input
                    aria-label={`Costo de ${s.name || "servicio"}`}
                    inputMode="decimal"
                    value={costs[s._key] ?? ""}
                    onChange={(e) => setCost(s._key, e.target.value)}
                    placeholder="—"
                    className="w-full border-0 bg-transparent text-[14px] outline-none"
                  />
                </label>
              </div>

              <div className="flex items-center gap-2 lg:block">
                <span className="w-[86px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-bt-charcoal-light lg:hidden">Notas</span>
                <input
                  aria-label={`Notas de ${s.name || "servicio"}`}
                  value={s.notes}
                  onChange={(e) => patch(s._key, { notes: e.target.value })}
                  placeholder="Agregar nota"
                  className="min-h-[40px] w-full border border-bt-sand-dark px-3 text-[13px]"
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-[13px]">
                  <input type="checkbox" checked={s.charge} onChange={() => patch(s._key, { charge: !s.charge })} className="h-[18px] w-[18px] accent-bt-navy" />
                  <span className="lg:hidden">Cobrar al huésped</span>
                  <span className="hidden lg:inline">{s.charge ? "Sí" : "No"}</span>
                </label>
                {(manual || s.guestRemoved) && (
                  <button type="button" onClick={() => remove(s._key)} aria-label="Quitar servicio" className="min-h-[34px] px-2 text-[12px] text-bt-charcoal-light underline underline-offset-4">
                    Quitar
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <div className="border-t border-bt-sand px-5 py-4 sm:px-6">
          <button type="button" onClick={addService} className="min-h-[44px] border-b border-bt-gold px-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-bt-navy">
            + Agregar servicio durante la estancia
          </button>
        </div>
      </div>

      {/* Notes + totals */}
      <div className="flex flex-wrap items-start gap-5">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-2.5 border border-bt-sand bg-white px-5 py-5 sm:px-6">
          <label htmlFor="general-notes" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bt-gold-text">
            Notas generales de la renta
          </label>
          <textarea
            id="general-notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ej. llegan con perro pequeño; prefieren que el chef no use cilantro."
            className="resize-y border border-bt-sand-dark p-3 text-[14px]"
          />
          {p.summary && (
            <details className="mt-2">
              <summary className="cursor-pointer text-[13px] font-semibold text-bt-navy">Ver las respuestas completas del huésped</summary>
              <pre className="mt-3 max-h-[420px] overflow-auto whitespace-pre-wrap bg-bt-cream p-4 font-sans text-[13px] leading-relaxed">{p.summary}</pre>
            </details>
          )}
        </div>
        <div className="flex flex-[1_1_320px] flex-col gap-2.5 bg-bt-navy px-6 py-5 text-white">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bt-gold-light">Cobro en el check-out</span>
          <div className="flex justify-between text-[14px]"><span>Subtotal ({t.charged} servicios)</span><span>{money(t.subtotal)}</span></div>
          <label className="flex cursor-pointer items-center justify-between gap-3 text-[14px] text-bt-mist">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked={addVat} onChange={() => setAddVat(!addVat)} className="h-4 w-4 accent-bt-gold" />
              IVA 16%
            </span>
            <span>{money(t.vat)}</span>
          </label>
          <div className="h-px bg-bt-navy-light" />
          <div className="flex items-baseline justify-between"><span className="text-[14px]">Total</span><span className="font-serif text-[34px]">MXN {money(t.total)}</span></div>
          <span className="text-[12px] text-bt-mist">No cuenta servicios no disponibles ni los que no se cobran.</span>
        </div>
      </div>
    </div>
  );
}
