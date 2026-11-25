// ─────────────────────────────────────────────────────────────
// Concierge panel: the services a guest asked for in the arrival guide,
// one row each, with the concierge's status, cost, notes and whether it's
// charged at check-out. Shared by the server (building/merging) and the
// panel (totals). No server-only imports here.
// ─────────────────────────────────────────────────────────────

import {
  type ArrivalAnswers,
  type Reservation,
  VEHICLES,
  vehicleName,
  GOLF_CARTS,
  seasonFor,
  MEAL_PREP,
  GROCERY_FEE,
  VAT_PCT,
  fmtDate,
  pickupFor,
  accessFeeUsd,
  groupCounts,
  addDays,
  RESERVATION_LABELS,
  CELEBRATION_EXTRAS,
} from "@/lib/arrival";

export type ServiceStatus = "pending" | "requested" | "confirmed" | "unavailable";

export const STATUS_ORDER: ServiceStatus[] = ["pending", "requested", "confirmed", "unavailable"];
export const STATUS_LABEL: Record<ServiceStatus, string> = {
  pending: "Pendiente",
  requested: "Solicitado",
  confirmed: "Confirmado",
  unavailable: "No disponible",
};

export type ConciergeService = {
  _key: string; // Sanity array key
  key: string; // stable id from the guide (e.g. "arr-x1"), or "manual-…"
  source: "guide" | "manual";
  name: string;
  detail: string;
  when: string;
  sortDate: string; // YYYY-MM-DD, for ordering
  status: ServiceStatus;
  cost: number | null; // MXN charged to the guest
  notes: string;
  charge: boolean; // charged at check-out
  guestRemoved?: boolean; // the guest no longer asks for it (kept because the concierge had worked on it)
  // English versions, for the guest's statement (services from the guide only)
  nameEn?: string;
  detailEn?: string;
  whenEn?: string;
};

const daysBetween = (a: string, b: string) =>
  Math.max(1, Math.round((new Date(`${b}T12:00:00`).getTime() - new Date(`${a}T12:00:00`).getTime()) / 86400000));
const randKey = () => Math.random().toString(36).slice(2, 12);

type Draft = Omit<ConciergeService, "_key" | "status" | "notes"> & { status?: ServiceStatus; notes?: string };

/** Every service the guest asked for, in Spanish (with English copies), with the prices we already know. */
export function servicesFromAnswers(r: Reservation, a: ArrivalAnswers): Draft[] {
  const es = build(r, a, "es");
  const en = new Map(build(r, a, "en").map((x) => [x.key, x]));
  return es.map((x) => ({ ...x, nameEn: en.get(x.key)?.name, detailEn: en.get(x.key)?.detail, whenEn: en.get(x.key)?.when }));
}

function build(r: Reservation, a: ArrivalAnswers, lang: "en" | "es"): Draft[] {
  const ES = lang === "es";
  const t = (en: string, esText: string) => (ES ? esText : en);
  const d = (iso: string) => fmtDate(iso, ES);
  const out: Draft[] = [];
  const add = (x: Omit<Draft, "source">) => out.push({ source: "guide", ...x });

  // Access cards (Club Punta Mita)
  const c = groupCounts(a.people);
  if (c.adults + c.children > 0)
    add({
      key: "access-cards",
      name: t("Club Punta Mita access cards", "Tarjetas de acceso Club Punta Mita"),
      detail: t(
        `${c.adults} ${c.adults === 1 ? "adult" : "adults"}, ${c.children} ${c.children === 1 ? "child" : "children"} 5–13 · estimate USD ${accessFeeUsd(a.people).toFixed(2)}`,
        `${c.adults} ${c.adults === 1 ? "adulto" : "adultos"}, ${c.children} ${c.children === 1 ? "niño" : "niños"} de 5 a 13 · estimado USD ${accessFeeUsd(a.people).toFixed(2)}`
      ),
      when: d(r.checkIn),
      sortDate: r.checkIn,
      cost: null,
      charge: true,
    });

  // Transfers
  if (a.transport === "yes") {
    for (const f of a.arrivals) {
      const v = VEHICLES.find((x) => x.key === f.vehicle);
      add({
        key: `arr-${f.id}`,
        name: t("Arrival transfer", "Traslado de llegada"),
        detail: [vehicleName(f.vehicle), `${f.people} ${t("people", "personas")}`, `${f.airline} ${f.flight}`.trim(), f.party, f.carSeats ? `${f.carSeats} ${t("car seat(s)", "silla(s)")}` : "", f.boosters ? `${f.boosters} booster(s)` : ""].filter(Boolean).join(" · "),
        when: `${d(f.date)} · ${t("lands", "aterriza")} ${f.time}`,
        sortDate: f.date,
        cost: v ? v.mxn : null,
        charge: true,
      });
    }
    for (const f of a.departures) {
      const v = VEHICLES.find((x) => x.key === f.vehicle);
      const pickup = pickupFor(f.time, f.intl);
      add({
        key: `dep-${f.id}`,
        name: t("Departure transfer", "Traslado de salida"),
        detail: [vehicleName(f.vehicle), `${f.people} ${t("people", "personas")}`, `${f.airline} ${f.flight} ${t("departs", "sale")} ${f.time}`.trim(), f.intl ? t("international", "internacional") : t("domestic", "nacional"), f.party].filter(Boolean).join(" · "),
        when: `${d(f.date)}${pickup ? ` · ${t("pickup", "recoger")} ${pickup}` : ""}`,
        sortDate: f.date,
        cost: v ? v.mxn : null,
        charge: true,
      });
    }
  }

  if (a.lateCheckout?.want)
    add({
      key: "late-checkout",
      name: t("Late check-out", "Salida tardía"),
      detail: t(`Until ${a.lateCheckout.time || "?"} (request)`, `Hasta las ${a.lateCheckout.time || "?"} (solicitud)`),
      when: d(r.checkOut),
      sortDate: r.checkOut,
      cost: null,
      charge: false,
    });

  // Groceries
  if (a.grocery === "yes") {
    const fee = GROCERY_FEE[r.propertyType] || GROCERY_FEE.villa;
    add({
      key: "grocery",
      name: t("Grocery pre-stocking", "Despensa antes de llegar"),
      detail: t(
        `Fee MXN ${fee.mxn.toLocaleString("en-US")} + ${fee.pct}%, plus the cost of the groceries`,
        `Tarifa MXN ${fee.mxn.toLocaleString("en-US")} + ${fee.pct}%, más el costo de la despensa`
      ),
      when: d(addDays(r.checkIn, -1)),
      sortDate: addDays(r.checkIn, -1),
      cost: Math.round(fee.mxn * (1 + fee.pct / 100)),
      charge: true,
    });
  }

  // Lunch / dinner prepared by the cook
  for (const m of a.meals) {
    for (const meal of ["lunch", "dinner"] as const) {
      const x = m[meal];
      if (!x.on) continue;
      add({
        key: `${meal}-${m.date}`,
        name: meal === "lunch" ? t("Lunch at the villa", "Comida en la villa") : t("Dinner at the villa", "Cena en la villa"),
        detail: x.dishes.length ? x.dishes.join(", ") : t("Dishes to be decided", "Platillos por definir"),
        when: `${d(m.date)} · ${x.time}`,
        sortDate: m.date,
        cost: MEAL_PREP.mxn,
        charge: true,
      });
    }
  }

  // Extra golf carts
  const season = seasonFor(r.checkIn);
  for (const g of a.carts) {
    const days = daysBetween(g.from, g.to);
    add({
      key: `cart-${g.id}`,
      name: t("Extra golf cart", "Carrito de golf adicional"),
      detail: t(`${g.qty} × ${g.size}-passenger · ${days} ${days === 1 ? "day" : "days"}`, `${g.qty} × ${g.size} pasajeros · ${days} ${days === 1 ? "día" : "días"}`),
      when: `${d(g.from)} → ${d(g.to)}`,
      sortDate: g.from,
      cost: GOLF_CARTS[season][g.size] * g.qty * days,
      charge: true,
    });
  }

  // Celebrations
  for (const x of a.celebrations) {
    const prep = x.prepare.map((p) => { const e = CELEBRATION_EXTRAS.find((y) => y.key === p); return e ? (ES ? e.es : e.en) : p; }).join(", ");
    add({
      key: `cel-${x.id}`,
      name: `${t("Celebration", "Celebración")}: ${x.occasion || t("to be decided", "por definir")}`,
      detail: [prep, x.notes].filter(Boolean).join(" · ") || "—",
      when: d(x.date),
      sortDate: x.date,
      cost: null,
      charge: true,
    });
  }

  // Activities & reservations
  for (const x of a.activities) {
    const lbl = RESERVATION_LABELS[x.activity];
    const label = lbl ? (ES ? lbl.es : lbl.en) : x.activity;
    const slots = x.slots.filter((sl) => sl.date);
    add({
      key: `act-${x.id}`,
      name: x.option || label,
      detail: [x.option ? label : "", x.people ? `${x.people} ${t("people", "personas")}` : "", x.notes].filter(Boolean).join(" · ") || "—",
      when: x.flexible ? t("Any day", "Cualquier día") : slots.map((sl) => `${d(sl.date)}${sl.time ? ` ${sl.time}` : ""}`).join(t(" or ", " o ")) || t("To be confirmed", "Por confirmar"),
      sortDate: slots[0]?.date || r.checkIn,
      cost: null,
      charge: x.activity !== "Dinner reservation", // dinners are paid at the restaurant
    });
  }

  return out;
}

/**
 * Combine what the guest asked for now with what the concierge already has.
 * Keeps the concierge's status, cost, notes and charge; refreshes the description.
 * A request the guest removed disappears if nobody worked on it, or stays marked.
 */
export function mergeServices(existing: ConciergeService[], fresh: Draft[]): ConciergeService[] {
  const byKey = new Map(existing.map((s) => [s.key, s]));
  const out: ConciergeService[] = [];
  const seen = new Set<string>();
  for (const f of fresh) {
    seen.add(f.key);
    const old = byKey.get(f.key);
    if (old)
      out.push({ ...old, name: f.name, detail: f.detail, when: f.when, sortDate: f.sortDate, nameEn: f.nameEn, detailEn: f.detailEn, whenEn: f.whenEn, guestRemoved: false });
    else
      out.push({ _key: randKey(), status: "pending", notes: "", ...f } as ConciergeService);
  }
  for (const s of existing) {
    if (seen.has(s.key)) continue;
    if (s.source === "manual") out.push(s);
    else if (s.status !== "pending" || s.notes.trim()) out.push({ ...s, guestRemoved: true });
  }
  return sortServices(out);
}

export const sortServices = (list: ConciergeService[]) =>
  [...list].sort((x, y) => (x.sortDate || "9").localeCompare(y.sortDate || "9"));

export function newManualService(date: string): ConciergeService {
  const k = randKey();
  return {
    _key: k,
    key: `manual-${k}`,
    source: "manual",
    name: "",
    detail: "Solicitado durante la estancia",
    when: "",
    sortDate: date,
    status: "pending",
    cost: null,
    notes: "",
    charge: true,
  };
}

/** Progress and the check-out total. */
export function serviceTotals(list: ConciergeService[], addVat: boolean) {
  const active = list.filter((s) => s.status !== "unavailable" && !s.guestRemoved);
  const confirmed = active.filter((s) => s.status === "confirmed");
  const charged = active.filter((s) => s.charge && (s.cost ?? 0) > 0);
  const subtotal = charged.reduce((n, s) => n + (s.cost ?? 0), 0);
  const vat = addVat ? Math.round(subtotal * (VAT_PCT / 100) * 100) / 100 : 0;
  return { active: active.length, confirmed: confirmed.length, charged: charged.length, subtotal, vat, total: subtotal + vat };
}

export const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
