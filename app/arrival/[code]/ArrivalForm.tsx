"use client";

// Guest arrival form — replaces the Adobe Sign arrival guide.
// Step by step, phone-first, English or Spanish (tú). Progress is kept on the
// guest's device; "Confirm" saves the answers on the reservation.

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";
import {
  ACCESS_FEE,
  CELEBRATION_EXTRAS,
  DIET_TAGS,
  GOLF_CARTS,
  carArrivalWindow,
  cartSuggestion,
  INCLUDED_CART_SEATS,
  BREAKFAST_EARLIEST,
  GROCERY_FEE,
  MEAL_PREP,
  VAT_PCT,
  VEHICLES,
  accessFeeUsd,
  addDays,
  blankAnswers,
  datesBetween,
  fmtDate,
  groupCounts,
  mxn,
  pickupFor,
  parseTime,
  rid,
  villaArrivalWindow,
  CHECK_OUT_TIME,
  LATE_CHECKOUT_AFTER,
  seasonFor,
  summarize,
  vehicleFor,
  type ActivityRequest,
  type ArrivalAnswers,
  type Flight,
  type OwnFlight,
  type Reservation,
} from "@/lib/arrival";
import Image from "next/image";
import "@/app/properties/villa.css";
import "@/app/groceries/groceries.css";
import { GROCERY_DEADLINE_DAYS } from "@/lib/groceryList";
import "./arrival.css";

export type Option = { value: string; label: string; group?: string; img?: string };

type L10n = { en: string; es: string };
export type DiscoverActivity = { slug: string; title: L10n; image: string; options: L10n[] };
export type DiscoverCategoryLite = { slug: string; title: L10n; image: string; activities: DiscoverActivity[] };

export type MenuOptions = {
  savory: Option[];
  sweet: Option[];
  lunch: Option[];
  dinner: Option[];
  discover: DiscoverCategoryLite[];
  /** Ideas with no booking needed (beach clubs, events…), linked to Discover Punta Mita. */
  onYourOwn: { title: L10n; href: string }[];
};

/** Quick reservations that aren't Discover activities. */
const RESERVATIONS: { key: string; en: string; es: string }[] = [
  { key: "Dinner reservation", en: "Dinner reservation", es: "Reservación para cenar" },
  { key: "Tee time", en: "Tee time", es: "Horario de golf" },
  { key: "Tennis / padel / pickleball court", en: "Tennis / padel / pickleball court", es: "Cancha de tenis / pádel / pickleball" },
];

const TIMES = (() => {
  const out: Option[] = [];
  for (let m = 6 * 60; m <= 23 * 60; m += 15) {
    const h = Math.floor(m / 60), mm = m % 60;
    const label = `${((h + 11) % 12) + 1}:${String(mm).padStart(2, "0")} ${h >= 12 ? "pm" : "am"}`;
    out.push({ value: label, label });
  }
  return out;
})();

// ── A dropdown in the site's own style (same as the villa pages) ──────────
function Picker({
  value,
  options,
  placeholder,
  onChange,
  label,
}: {
  value: string;
  options: Option[];
  placeholder: string;
  onChange: (v: string) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);
  const current = options.find((o) => o.value === value);
  let lastGroup = "";
  return (
    <div className="iq-field" ref={ref}>
      {label && <span className="iq-label">{label}</span>}
      <button
        type="button"
        className={`iq-dd-trigger${open ? " is-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={`iq-dd-val${current ? "" : " ph"}`}>{current?.label || placeholder}</span>
        <svg className="iq-dd-arrow" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      {open && (
        <div className="iq-dd-panel gro-options arr-scroll" role="listbox">
          {options.map((o) => {
            const head = o.group && o.group !== lastGroup ? o.group : "";
            lastGroup = o.group || lastGroup;
            return (
              <React.Fragment key={o.value}>
                {head && <div className="arr-group">{head}</div>}
                <button
                  type="button"
                  role="option"
                  aria-selected={o.value === value}
                  className={`iq-opt${o.value === value ? " is-selected" : ""}`}
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                >
                  {o.label}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Counter({ value, onChange, min = 0, label, sub }: { value: number; onChange: (n: number) => void; min?: number; label: string; sub?: string }) {
  return (
    <div className="g-row arr-counter">
      <div className="g-info">
        <div className="g-type">{label}</div>
        {sub && <div className="g-age">{sub}</div>}
      </div>
      <div className="g-counter">
        <button className="ctr-btn" type="button" disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))} aria-label={`${label} −1`}>&#8722;</button>
        <span className="ctr-val">{value}</span>
        <button className="ctr-btn" type="button" onClick={() => onChange(value + 1)} aria-label={`${label} +1`}>+</button>
      </div>
    </div>
  );
}

function YesNo({ value, onChange, yes, no }: { value: string; onChange: (v: "yes" | "no") => void; yes: string; no: string }) {
  return (
    <div className="arr-yesno" role="radiogroup">
      {(["yes", "no"] as const).map((k) => (
        <button key={k} type="button" role="radio" aria-checked={value === k} className={`arr-choice${value === k ? " is-on" : ""}`} onClick={() => onChange(k)}>
          {k === "yes" ? yes : no}
        </button>
      ))}
    </div>
  );
}

// ── Dishes as photo cards (scroll sideways), like the menu ───────────────
function DishPicker({
  options,
  selected,
  onToggle,
  noneLabel,
  multi = false,
}: {
  options: Option[];
  selected: string[];
  onToggle: (v: string) => void;
  noneLabel?: string;
  multi?: boolean;
}) {
  return (
    <div className="arr-dishes" role={multi ? "group" : "radiogroup"}>
      {noneLabel && !multi && (
        <button type="button" className={`arr-dish-card arr-dish-none${selected.length === 0 ? " is-on" : ""}`} onClick={() => onToggle("")}>
          <span>{noneLabel}</span>
        </button>
      )}
      {options.map((o) => {
        const on = selected.includes(o.value);
        return (
          <button key={o.value} type="button" aria-pressed={on} className={`arr-dish-card${on ? " is-on" : ""}`} onClick={() => onToggle(o.value)}>
            {o.img && (
              <span className="arr-dish-img">
                <Image src={o.img} alt="" fill sizes="150px" className="object-cover" />
              </span>
            )}
            <span className="arr-dish-name">{o.label}</span>
            {on && <span className="arr-dish-check">✓</span>}
          </button>
        );
      })}
    </div>
  );
}

export default function ArrivalForm({ reservation, menus }: { reservation: Reservation; menus: MenuOptions }) {
  const es = isEsPath(usePathname() || "/");
  const t = (en: string, esText: string) => (es ? esText : en);
  const r = reservation;
  const KEY = `bt-arrival-${r.code}`;

  const [a, setA] = useState<ArrivalAnswers>(() => (r.answers ? { ...blankAnswers(r), ...r.answers } : blankAnswers(r)));
  const [stepError, setStepError] = useState("");
  const [discoverCat, setDiscoverCat] = useState(menus.discover[0]?.slug || "");
  const [step, setStep] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<"" | "ok" | "demo">(r.submittedAt ? "ok" : "");
  const [error, setError] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);

  // Restore unsent progress from this device (newer than what was saved, if any)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { a: ArrivalAnswers; step: number };
        if (saved?.a?.main) {
          const base = blankAnswers(r);
          setA({
            ...base,
            ...saved.a,
            activities: (saved.a.activities || []).filter((x: ActivityRequest) => Array.isArray(x.slots)),
          });
          setStep(saved.step || 0);
          setSent("");
        }
      } else if (r.draft?.answers?.main && !r.submittedAt) {
        // Progress saved from another device
        const base = blankAnswers(r);
        setA({ ...base, ...r.draft.answers, activities: (r.draft.answers.activities || []).filter((x: ActivityRequest) => Array.isArray(x.slots)) });
        setStep(r.draft.step || 0);
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, [KEY]);

  useEffect(() => {
    if (!loaded || sent) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ a, step }));
    } catch {
      /* ignore */
    }
  }, [a, step, loaded, sent, KEY]);

  const up = (fn: (x: ArrivalAnswers) => ArrivalAnswers) => {
    setA((x) => fn(x));
    setError("");
    setStepError("");
  };

  const counts = groupCounts(a.people);
  const stayDates = useMemo(() => datesBetween(r.checkIn, r.checkOut), [r.checkIn, r.checkOut]);
  const flightDates = useMemo(() => datesBetween(addDays(r.checkIn, -2), addDays(r.checkOut, 2)), [r.checkIn, r.checkOut]);
  const dateOpts = (list: string[]): Option[] => list.map((d) => ({ value: d, label: fmtDate(d, es) }));
  const fee = GROCERY_FEE[r.propertyType] || GROCERY_FEE.villa;
  const season = seasonFor(r.checkIn);
  const peopleNames: Option[] = [
    { value: t("Everyone", "Todos"), label: t("Everyone", "Todos") },
    ...a.people.filter((p) => p.name.trim()).map((p) => ({ value: p.name.trim(), label: p.name.trim() })),
  ];

  const STEPS = [
    t("Welcome", "Bienvenida"),
    t("Your group", "Tu grupo"),
    t("Airport transfers", "Traslados"),
    t("Meals", "Comidas"),
    t("Golf carts", "Carritos de golf"),
    t("Celebrations & activities", "Celebraciones y actividades"),
    t("Review & confirm", "Revisar y confirmar"),
  ];

  const go = (n: number) => {
    const target = Math.max(0, Math.min(STEPS.length - 1, n));
    setStepError("");
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Save progress on the server, so it follows the guest to another device and the concierge sees where they are
    if (r.code !== "demo" && !sent) {
      try {
        void fetch(`/api/arrival/${encodeURIComponent(r.code)}/draft`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: a, step: target, lang: es ? "es" : "en" }),
          keepalive: true,
        }).catch(() => undefined);
      } catch {
        /* ignore */
      }
    }
  };

  // What still needs filling before moving on (empty = all good)
  const missingFor = (s: number): string => {
    if (s === 0) {
      const m = a.main;
      if (!m.name.trim() || !m.phone.trim() || !m.email.trim() || !m.address.trim())
        return t("Please fill in all four fields. We need them to process your Club Punta Mita access cards.", "Llena los cuatro campos. Los necesitamos para tramitar tus tarjetas de acceso del Club Punta Mita.");
      if (!/^\S+@\S+\.\S+$/.test(m.email.trim())) return t("Please check the email address.", "Revisa el correo electrónico.");
    }
    if (s === 1) {
      const rows = a.people.filter((p) => p.name.trim() || String(p.age).trim());
      if (!rows.length) return t("Please add at least one guest.", "Agrega al menos un huésped.");
      if (rows.some((p) => !p.name.trim() || !String(p.age).trim()))
        return t("Please add the name and age of every guest (or remove empty rows).", "Agrega nombre y edad de cada huésped (o quita las filas vacías).");
    }
    if (s === 2) {
      if (!a.transport) return t("Please choose Yes or No.", "Elige Sí o No.");
      if (a.transport === "yes") {
        if (!a.arrivals.length || !a.departures.length) return t("Please add at least one arrival and one departure.", "Agrega al menos una llegada y una salida.");
        const bad = [...a.arrivals, ...a.departures].some((f) => !f.party.trim() || !f.airline.trim() || !f.flight.trim() || !f.date || parseTime(f.time) === null || f.people < 1 || !f.vehicle);
        if (bad) return t("Please complete every flight: family name, airline, flight number, date, time (e.g. 3:45 pm), people and vehicle.", "Completa cada vuelo: apellido, aerolínea, número de vuelo, fecha, hora (ej. 3:45 pm), personas y vehículo.");
      }
      if (a.transport === "no") {
        const o = a.ownArrival;
        if (!a.ownMode) return t("Please tell us how you're getting to Punta Mita: by plane or by car.", "Cuéntanos cómo llegas a Punta Mita: en avión o en auto.");
        if (a.ownMode === "flight" && (!o.airline.trim() || !o.flight.trim() || !o.date || parseTime(o.time) === null))
          return t("Please add your arrival flight and the time it lands (e.g. 3:45 pm), so your concierge can be ready for you.", "Agrega tu vuelo de llegada y la hora en que aterriza (ej. 3:45 pm), para que tu concierge te espere.");
        if (a.ownMode === "car" && (!o.date || parseTime(o.time) === null || !a.ownDeparture.date || parseTime(a.ownDeparture.time) === null))
          return t("Please add the day and approximate time you'll arrive at the villa and when you'll leave.", "Agrega el día y la hora aproximada en que llegarás a la villa y cuándo te irás.");
      }
    }
    if (s === 5) {
      if (a.activities.some((x) => x.activity === "Dinner reservation" && !x.notes.trim()))
        return t("Please tell us which restaurant you'd like for your dinner reservation.", "Cuéntanos qué restaurante prefieres para tu reservación de cena.");
    }
    return "";
  };

  const next = () => {
    const miss = missingFor(step);
    if (miss) {
      setStepError(miss);
      return;
    }
    go(step + 1);
  };

  // Departure on check-out day after 2 pm → offer a late check-out request
  const lateDeparture = (() => {
    if (a.transport === "no" && a.ownMode === "car")
      return a.ownDeparture.date === r.checkOut && (parseTime(a.ownDeparture.time) ?? 0) > (parseTime(CHECK_OUT_TIME) ?? 660);
    const deps: { date: string; time: string }[] = a.transport === "yes" ? a.departures : a.transport === "no" ? [a.ownDeparture] : [];
    return deps.some((d) => d.date === r.checkOut && (parseTime(d.time) ?? 0) >= LATE_CHECKOUT_AFTER);
  })();

  const kidsAges = a.people.filter((p) => { const n = parseFloat(String(p.age)); return Number.isFinite(n) && n < 8; }).map((p) => p.age);

  // ── Flights ──────────────────────────────────────────────────────────────
  const newFlight = (dep: boolean): Flight => {
    const lastName = (a.main.name.trim().split(/\s+/).pop() || "").trim();
    const people = Math.max(1, counts.total || 1);
    return {
      id: rid(),
      party: lastName,
      airline: "",
      flight: "",
      date: dep ? r.checkOut : r.checkIn,
      time: "",
      people,
      vehicle: vehicleFor(people),
      carSeats: counts.carSeats,
      boosters: counts.boosters,
      intl: true,
    };
  };
  const setFlight = (dep: boolean, id: string, patch: Partial<Flight>) =>
    up((x) => {
      const key = dep ? "departures" : "arrivals";
      return {
        ...x,
        [key]: x[key].map((f) => {
          if (f.id !== id) return f;
          const next = { ...f, ...patch };
          if (patch.people !== undefined && patch.vehicle === undefined) next.vehicle = vehicleFor(next.people);
          return next;
        }),
      };
    });

  const flightCards = (dep: boolean) => {
    const list = dep ? a.departures : a.arrivals;
    return (
      <div className="space-y-5">
        {list.map((f, i) => (
          <div key={f.id} className="arr-card">
            <div className="flex items-center justify-between">
              <p className="arr-card-title">{dep ? t(`Departure ${i + 1}`, `Salida ${i + 1}`) : t(`Arrival ${i + 1}`, `Llegada ${i + 1}`)}</p>
              <button type="button" className="arr-link" onClick={() => up((x) => ({ ...x, [dep ? "departures" : "arrivals"]: list.filter((y) => y.id !== f.id) }))}>
                {t("Remove", "Quitar")}
              </button>
            </div>
            <div className="iq-field">
              <span className="iq-label">{t("Family / last name", "Familia / apellido")}</span>
              <input className="iq-input" value={f.party} onChange={(e) => setFlight(dep, f.id, { party: e.target.value })} placeholder={t("e.g. Smith", "ej. Smith")} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="iq-field">
                <span className="iq-label">{t("Airline", "Aerolínea")}</span>
                <input className="iq-input" value={f.airline} onChange={(e) => setFlight(dep, f.id, { airline: e.target.value })} placeholder="Delta" />
              </div>
              <div className="iq-field">
                <span className="iq-label">{t("Flight #", "Vuelo #")}</span>
                <input className="iq-input" value={f.flight} onChange={(e) => setFlight(dep, f.id, { flight: e.target.value })} placeholder="1948" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Picker label={t("Date", "Fecha")} value={f.date} options={dateOpts(flightDates)} placeholder={t("Select", "Elige")} onChange={(v) => setFlight(dep, f.id, { date: v })} />
              <div className="iq-field">
                <span className="iq-label">{dep ? t("Flight departs", "Sale el vuelo") : t("Lands at", "Llega a las")}</span>
                <input className="iq-input" value={f.time} onChange={(e) => setFlight(dep, f.id, { time: e.target.value })} placeholder="3:45 pm" />
              </div>
            </div>
            {dep && (
              <div className="arr-yesno mb-3">
                {[true, false].map((v) => (
                  <button key={String(v)} type="button" className={`arr-choice${f.intl === v ? " is-on" : ""}`} onClick={() => setFlight(dep, f.id, { intl: v })}>
                    {v ? t("International", "Internacional") : t("Domestic (Mexico)", "Nacional")}
                  </button>
                ))}
              </div>
            )}
            {dep && pickupFor(f.time, f.intl) && (
              <p className="arr-hint">{t(`We'll pick you up at about ${pickupFor(f.time, f.intl)} (${f.intl ? 3 : 2} hours before your flight).`, `Pasaremos por ustedes cerca de las ${pickupFor(f.time, f.intl)} (${f.intl ? 3 : 2} horas antes del vuelo).`)}</p>
            )}
            <div className="arr-box">
              <Counter label={t("People", "Personas")} value={f.people} min={1} onChange={(n) => setFlight(dep, f.id, { people: n })} />
              <Counter label={t("Car seats", "Sillas de auto")} sub={t("Under 4", "Menores de 4")} value={f.carSeats} onChange={(n) => setFlight(dep, f.id, { carSeats: n })} />
              <Counter label={t("Booster seats", "Elevadores")} sub={t("Ages 4–7", "4 a 7 años")} value={f.boosters} onChange={(n) => setFlight(dep, f.id, { boosters: n })} />
            </div>
            <Picker
              label={t("Vehicle", "Vehículo")}
              value={f.vehicle}
              placeholder={t("Select", "Elige")}
              options={VEHICLES.map((v) => ({ value: v.key, label: `${v.name} · ${t("up to", "hasta")} ${v.seats} · ${mxn(v.mxn)}` }))}
              onChange={(v) => setFlight(dep, f.id, { vehicle: v as Flight["vehicle"] })}
            />
          </div>
        ))}
        <button type="button" className="arr-add" onClick={() => up((x) => ({ ...x, [dep ? "departures" : "arrivals"]: [...list, newFlight(dep)] }))}>
          + {dep ? t("Add a departure", "Agregar una salida") : t("Add an arrival", "Agregar una llegada")}
        </button>
        {list.length === 0 && <p className="arr-hint">{t("If your group flies in on different flights, add one for each.", "Si su grupo llega en vuelos distintos, agrega uno por cada vuelo.")}</p>}
      </div>
    );
  };

  const ownFlightFields = (which: "ownArrival" | "ownDeparture") => {
    const o = a[which];
    const set = (patch: Partial<OwnFlight>) => up((x) => ({ ...x, [which]: { ...x[which], ...patch } }));
    const dep = which === "ownDeparture";
    return (
      <div className="arr-card">
        <p className="arr-card-title">{dep ? t("Your departure flight", "Tu vuelo de salida") : t("Your arrival flight", "Tu vuelo de llegada")}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="iq-field"><span className="iq-label">{t("Airline", "Aerolínea")}</span>
            <input className="iq-input" value={o.airline} onChange={(e) => set({ airline: e.target.value })} placeholder="Delta" /></div>
          <div className="iq-field"><span className="iq-label">{t("Flight #", "Vuelo #")}</span>
            <input className="iq-input" value={o.flight} onChange={(e) => set({ flight: e.target.value })} placeholder="1948" /></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Picker label={t("Date", "Fecha")} value={o.date} options={dateOpts(flightDates)} placeholder={t("Select", "Elige")} onChange={(v) => set({ date: v })} />
          <div className="iq-field"><span className="iq-label">{dep ? t("Flight departs", "Sale el vuelo") : t("Lands at", "Aterriza a las")}</span>
            <input className="iq-input" value={o.time} onChange={(e) => set({ time: e.target.value })} placeholder="3:45 pm" /></div>
        </div>
        {dep && (
          <div className="arr-yesno mb-3">
            {[true, false].map((v) => (
              <button key={String(v)} type="button" className={`arr-choice${o.intl === v ? " is-on" : ""}`} onClick={() => set({ intl: v })}>
                {v ? t("International", "Internacional") : t("Domestic (Mexico)", "Nacional")}
              </button>
            ))}
          </div>
        )}
        {!dep && villaArrivalWindow(o.time) && (
          <p className="arr-note">
            {t(
              `You should reach the villa at about ${villaArrivalWindow(o.time)!.eta}. Your concierge will be waiting for you from ${villaArrivalWindow(o.time)!.from} to ${villaArrivalWindow(o.time)!.to}.`,
              `Deberías llegar a la villa cerca de las ${villaArrivalWindow(o.time)!.eta}. Tu concierge te esperará de ${villaArrivalWindow(o.time)!.from} a ${villaArrivalWindow(o.time)!.to}.`
            )}
          </p>
        )}
      </div>
    );
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const submit = async () => {
    for (const s0 of [0, 1, 2, 5]) {
      const miss = missingFor(s0);
      if (miss) {
        setError(`${STEPS[s0]}: ${miss}`);
        return;
      }
    }
    if (!a.main.name.trim() || !a.confirmName.trim() || !a.confirmed) {
      setError(t("Please type your name and tick the box to confirm.", "Escribe tu nombre y marca la casilla para confirmar."));
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch(`/api/arrival/${encodeURIComponent(r.code)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: a, lang: es ? "es" : "en" }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; demo?: boolean };
      if (!res.ok || !json.ok) throw new Error();
      try {
        window.localStorage.removeItem(KEY);
      } catch {
        /* ignore */
      }
      setSent(json.demo ? "demo" : "ok");
      setTimeout(() => window.scrollTo({ top: 0 }), 50);
    } catch {
      setError(t("We couldn't send it. Please check your connection and try again.", "No se pudo enviar. Revisa tu conexión e intenta de nuevo."));
    } finally {
      setSending(false);
    }
  };

  if (!loaded) return <div className="min-h-[60vh]" />;

  // Erase everything on this device and start from step 1
  // (the details from the reservation, like name and dates, stay pre-filled)
  const startOver = () => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    setA(blankAnswers(r));
    setStep(0);
    setStepError("");
    setError("");
    setConfirmReset(false);
    setSent("");
    setTimeout(() => window.scrollTo({ top: 0 }), 50);
  };

  const resetBox = confirmReset && (
    <div className="arr-card arr-reset" role="alertdialog" aria-live="polite">
      <p className="arr-p">{t("Erase all your answers and start the arrival guide from the beginning?", "¿Borrar todas tus respuestas y empezar la guía de llegada desde el principio?")}</p>
      <div className="arr-reset-actions">
        <button type="button" className="arr-primary" onClick={startOver}>{t("Yes, start over", "Sí, empezar de nuevo")}</button>
        <button type="button" className="arr-link" onClick={() => setConfirmReset(false)}>{t("Cancel", "Cancelar")}</button>
      </div>
    </div>
  );

  // ── Thank you ────────────────────────────────────────────────────────────
  if (sent) {
    return (
      <div className="mr-villa gro-details arr-wrap">
        <p className="arr-eyebrow">{r.villa}</p>
        <h1 className="arr-h1">{t("Thank you!", "¡Gracias!")}</h1>
        <p className="arr-p">
          {sent === "demo"
            ? t("This is the demo link, so nothing was saved. On a real reservation link, your concierge receives everything right away.", "Este es el enlace de prueba, así que no se guardó nada. En un enlace real, tu concierge recibe todo al instante.")
            : t("Your concierge has your details and will prepare your itinerary. You can come back to this link at any time to make changes.", "Tu concierge ya tiene tus datos y preparará tu itinerario. Puedes volver a este enlace cuando quieras para hacer cambios.")}
        </p>
        <button type="button" className="arr-primary" onClick={() => { setSent(""); setStep(STEPS.length - 1); }}>
          {t("Review or change my answers", "Revisar o cambiar mis respuestas")}
        </button>
        {!confirmReset && (
          <button type="button" className="arr-link arr-reset-link" onClick={() => setConfirmReset(true)}>
            {t("Start again from the beginning", "Empezar de nuevo desde el principio")}
          </button>
        )}
        {resetBox}
      </div>
    );
  }

  const last = step === STEPS.length - 1;

  return (
    <div className="mr-villa gro-details arr-wrap">
      {/* Progress */}
      <div className="arr-progress">
        <div className="flex items-center justify-between">
          <span className="arr-step-label">{t(`Step ${step + 1} of ${STEPS.length}`, `Paso ${step + 1} de ${STEPS.length}`)} · {STEPS[step]}</span>
          <button type="button" className="arr-link arr-reset-link" onClick={() => setConfirmReset((v) => !v)}>
            ↺ {t("Start over", "Empezar de nuevo")}
          </button>
        </div>
        <div className="arr-bar"><div style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} /></div>
        {resetBox}
      </div>

      {/* 0 · Welcome */}
      {step === 0 && (
        <section>
          <p className="arr-eyebrow">{t("Arrival guide", "Guía de llegada")}</p>
          <h1 className="arr-h1">{t(`Welcome, ${a.main.name.split(" ")[0] || ""}`, `Bienvenido, ${a.main.name.split(" ")[0] || ""}`)}</h1>
          <div className="arr-card arr-stay">
            <p className="arr-card-title">{r.villa}</p>
            <p className="arr-p">{fmtDate(r.checkIn, es, true)} → {fmtDate(r.checkOut, es, true)}</p>
          </div>
          <p className="arr-p">
            {t(
              "A few short steps so we can prepare everything for your arrival: your group, flights, meals, golf carts and anything you'd like to celebrate or book. It takes about 5 minutes, and your progress is saved on this device.",
              "Unos pasos cortos para preparar todo para tu llegada: tu grupo, vuelos, comidas, carritos de golf y lo que quieras celebrar o reservar. Toma unos 5 minutos y tu avance se guarda en este dispositivo."
            )}
          </p>
          <p className="arr-note">{t("All four fields are required: we need them to process your Club Punta Mita access cards.", "Los cuatro campos son obligatorios: los necesitamos para tramitar tus tarjetas de acceso del Club Punta Mita.")}</p>
          <div className="iq-field"><span className="iq-label">{t("Main guest name", "Nombre del huésped principal")}</span>
            <input className="iq-input" value={a.main.name} onChange={(e) => up((x) => ({ ...x, main: { ...x.main, name: e.target.value } }))} autoComplete="name" /></div>
          <div className="iq-field"><span className="iq-label">{t("Mobile phone (WhatsApp)", "Celular (WhatsApp)")}</span>
            <input className="iq-input" type="tel" value={a.main.phone} onChange={(e) => up((x) => ({ ...x, main: { ...x.main, phone: e.target.value } }))} autoComplete="tel" placeholder="+1 555 123 4567" /></div>
          <div className="iq-field"><span className="iq-label">Email</span>
            <input className="iq-input" type="email" value={a.main.email} onChange={(e) => up((x) => ({ ...x, main: { ...x.main, email: e.target.value } }))} autoComplete="email" /></div>
          <div className="iq-field"><span className="iq-label">{t("Home address", "Dirección")}</span>
            <input className="iq-input" value={a.main.address} onChange={(e) => up((x) => ({ ...x, main: { ...x.main, address: e.target.value } }))} autoComplete="street-address" /></div>
        </section>
      )}

      {/* 1 · Group */}
      {step === 1 && (
        <section>
          <h1 className="arr-h1">{t("Who's coming?", "¿Quiénes vienen?")}</h1>
          <p className="arr-p">{t("Add everyone in your group with their age. We use it for the Club Punta Mita access cards and car seats.", "Agrega a todas las personas del grupo con su edad. La usamos para las tarjetas de acceso del Club Punta Mita y las sillas de auto.")}</p>
          <div className="space-y-3">
            {a.people.map((p, i) => (
              <div key={i} className="arr-person">
                <input className="iq-input" value={p.name} placeholder={t(`Guest ${i + 1} name`, `Nombre del huésped ${i + 1}`)} onChange={(e) => up((x) => ({ ...x, people: x.people.map((q, j) => (j === i ? { ...q, name: e.target.value } : q)) }))} />
                <input className="iq-input arr-age" inputMode="decimal" value={p.age} placeholder={t("Age", "Edad")} onChange={(e) => up((x) => ({ ...x, people: x.people.map((q, j) => (j === i ? { ...q, age: e.target.value } : q)) }))} />
                <button type="button" className="arr-x" aria-label={t("Remove", "Quitar")} onClick={() => up((x) => ({ ...x, people: x.people.filter((_, j) => j !== i) }))}>×</button>
              </div>
            ))}
          </div>
          <button type="button" className="arr-add" onClick={() => up((x) => ({ ...x, people: [...x.people, { name: "", age: "" }] }))}>+ {t("Add a guest", "Agregar huésped")}</button>

          <div className="arr-card arr-summary">
            <p><b>{counts.total}</b> {counts.total === 1 ? t("guest", "huésped") : t("guests", "huéspedes")}: {counts.adults} {t("over 13", "mayores de 13")} · {counts.children} {t("ages 5–13", "de 5 a 13")} · {counts.under5} {t("under 5", "menores de 5")}</p>
            <p className="mt-2">
              {t("Club Punta Mita access cards", "Tarjetas de acceso Club Punta Mita")}: <b>≈ USD {accessFeeUsd(a.people).toFixed(2)}</b>
            </p>
            <p className="arr-hint">
              {t(
                `USD ${ACCESS_FEE.adultUsd} per guest over 13 and USD ${ACCESS_FEE.childUsd} per child 5–13, plus ${ACCESS_FEE.servicePct}% service and ${ACCESS_FEE.vatPct}% VAT. Includes beach clubs, golf course, gym and racquet center (food and green fees not included). Your concierge will send a payment link in MXN.`,
                `USD ${ACCESS_FEE.adultUsd} por huésped mayor de 13 y USD ${ACCESS_FEE.childUsd} por niño de 5 a 13, más ${ACCESS_FEE.servicePct}% de servicio y ${ACCESS_FEE.vatPct}% de IVA. Incluye beach clubs, campo de golf, gimnasio y centro de raqueta (consumos y green fees no incluidos). Tu concierge te enviará un link de pago en MXN.`
              )}
            </p>
            {counts.unknown > 0 && <p className="arr-warn">{t("Please add an age for every guest.", "Agrega la edad de cada huésped.")}</p>}
          </div>
        </section>
      )}

      {/* 2 · Transfers */}
      {step === 2 && (
        <section>
          <h1 className="arr-h1">{t("Airport transfers (to and from)", "Traslados desde y hacia el aeropuerto")}</h1>
          <p className="arr-p">{t("Would you like private transportation to and from the airport?", "¿Quieres transporte privado desde y hacia el aeropuerto?")}</p>
          <YesNo value={a.transport} onChange={(v) => up((x) => ({ ...x, transport: v, arrivals: v === "yes" && !x.arrivals.length ? [newFlight(false)] : x.arrivals, departures: v === "yes" && !x.departures.length ? [newFlight(true)] : x.departures }))} yes={t("Yes, please", "Sí, por favor")} no={t("No, thanks", "No, gracias")} />
          {a.transport === "yes" && (
            <>
              <p className="arr-hint mt-4">
                {VEHICLES.map((v) => `${v.name} (${t("up to", "hasta")} ${v.seats}) ${mxn(v.mxn)}`).join(" · ")} · {t("one way", "por trayecto")}. {t("Car and booster seats at no extra cost.", "Sillas de auto y elevadores sin costo.")}
              </p>
              {kidsAges.length > 0 && (
                <p className="arr-note">
                  {t(
                    `You're traveling with children (ages ${kidsAges.join(", ")}). We recommend a car seat for children under 4 and a booster seat for ages 4–7. We've added them below; adjust if needed.`,
                    `Viajas con niños (edades ${kidsAges.join(", ")}). Recomendamos silla de auto para menores de 4 años y elevador de 4 a 7 años. Ya los agregamos abajo; ajústalos si hace falta.`
                  )}
                </p>
              )}
              <h2 className="arr-h2">{t("Arrivals", "Llegadas")}</h2>
              {flightCards(false)}
              <h2 className="arr-h2">{t("Departures", "Salidas")}</h2>
              <p className="arr-note">{t(`Check-out is at ${CHECK_OUT_TIME} at the latest. We recommend leaving Punta Mita 3 hours before an international flight and 2 hours before a domestic flight.`, `La salida es a más tardar a las ${CHECK_OUT_TIME}. Recomendamos salir de Punta Mita 3 horas antes de un vuelo internacional y 2 horas antes de uno nacional.`)}</p>
              {flightCards(true)}
            </>
          )}
          {a.transport === "no" && (
            <div className="mt-5 space-y-4">
              <p className="arr-p">{t("No problem. How are you getting to Punta Mita?", "Sin problema. ¿Cómo llegas a Punta Mita?")}</p>
              <div className="arr-yesno">
                {([["flight", t("By plane", "En avión")], ["car", t("By car", "En auto")]] as const).map(([k, label]) => (
                  <button key={k} type="button" className={`arr-choice${a.ownMode === k ? " is-on" : ""}`} onClick={() => up((x) => ({ ...x, ownMode: k }))}>{label}</button>
                ))}
              </div>
              {a.ownMode === "flight" && (
                <>
                  <p className="arr-p">{t("Please tell us your arrival flight so we can estimate when you'll reach the villa and have your concierge waiting for you.", "Cuéntanos tu vuelo de llegada para calcular a qué hora llegarás a la villa y que tu concierge te espere.")}</p>
                  {ownFlightFields("ownArrival")}
                  <p className="arr-note">{t(`Check-out is at ${CHECK_OUT_TIME} at the latest. We recommend leaving Punta Mita 3 hours before an international flight and 2 hours before a domestic flight.`, `La salida es a más tardar a las ${CHECK_OUT_TIME}. Recomendamos salir de Punta Mita 3 horas antes de un vuelo internacional y 2 horas antes de uno nacional.`)}</p>
                  {ownFlightFields("ownDeparture")}
                </>
              )}
              {a.ownMode === "car" && (
                <>
                  <div className="arr-card">
                    <p className="arr-card-title">{t("Your arrival", "Tu llegada")}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Picker label={t("Date", "Fecha")} value={a.ownArrival.date} options={dateOpts(flightDates)} placeholder={t("Select", "Elige")} onChange={(v) => up((x) => ({ ...x, ownArrival: { ...x.ownArrival, date: v } }))} />
                      <Picker label={t("Arrival at the villa (approx.)", "Llegada a la villa (aprox.)")} value={a.ownArrival.time} options={TIMES} placeholder="4:00 pm" onChange={(v) => up((x) => ({ ...x, ownArrival: { ...x.ownArrival, time: v } }))} />
                    </div>
                    {carArrivalWindow(a.ownArrival.time) && (
                      <p className="arr-note">
                        {t(
                          `Your concierge will be waiting for you from ${carArrivalWindow(a.ownArrival.time)!.from} to ${carArrivalWindow(a.ownArrival.time)!.to}. If your plans change on the road, just send them a message.`,
                          `Tu concierge te esperará de ${carArrivalWindow(a.ownArrival.time)!.from} a ${carArrivalWindow(a.ownArrival.time)!.to}. Si cambia tu hora en el camino, solo mándale un mensaje.`
                        )}
                      </p>
                    )}
                  </div>
                  <div className="arr-card">
                    <p className="arr-card-title">{t("Your departure", "Tu salida")}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Picker label={t("Date", "Fecha")} value={a.ownDeparture.date} options={dateOpts(flightDates)} placeholder={t("Select", "Elige")} onChange={(v) => up((x) => ({ ...x, ownDeparture: { ...x.ownDeparture, date: v } }))} />
                      <Picker label={t("Leaving the villa", "Salida de la villa")} value={a.ownDeparture.time} options={TIMES} placeholder="11:00 am" onChange={(v) => up((x) => ({ ...x, ownDeparture: { ...x.ownDeparture, time: v } }))} />
                    </div>
                    <p className="arr-hint">{t(`Check-out is at ${CHECK_OUT_TIME} at the latest.`, `La salida es a más tardar a las ${CHECK_OUT_TIME}.`)}</p>
                  </div>
                </>
              )}
            </div>
          )}
          {lateDeparture && (
            <div className="arr-card mt-5">
              <p className="arr-card-title">{t("Late check-out", "Salida tardía")}</p>
              <label className="arr-toggle">
                <input type="checkbox" checked={a.lateCheckout.want} onChange={(e) => up((x) => ({ ...x, lateCheckout: { ...x.lateCheckout, want: e.target.checked } }))} />
                <span>{a.transport === "no" && a.ownMode === "car"
                    ? t(`Check-out is at ${CHECK_OUT_TIME}. Would you like to request a late check-out?`, `La salida es a las ${CHECK_OUT_TIME}. ¿Quieres solicitar una salida tardía?`)
                    : t("Your flight leaves in the afternoon. Would you like to request a late check-out?", "Tu vuelo sale por la tarde. ¿Quieres solicitar una salida tardía?")}</span>
              </label>
              {a.lateCheckout.want && (
                <div className="mt-3">
                  <Picker label={t("Until", "Hasta")} value={a.lateCheckout.time} options={TIMES.slice(24, 41)} placeholder="1:00 pm" onChange={(v) => up((x) => ({ ...x, lateCheckout: { ...x.lateCheckout, time: v } }))} />
                  <p className="arr-hint">{t("This is a request: it depends on the next guests' arrival and isn't guaranteed. Your concierge will confirm.", "Es una solicitud: depende de la llegada de los siguientes huéspedes y no está garantizada. Tu concierge te confirmará.")}</p>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* 3 · Meals */}
      {step === 3 && (
        <section>
          <h1 className="arr-h1">{t("Meals", "Comidas")}</h1>

          <h2 className="arr-h2">{t("Grocery pre-stocking", "Despensa antes de tu llegada")}</h2>
          <p className="arr-p">{t(`We shop and stock the villa before you arrive. Service fee: ${mxn(fee.mxn)} + ${fee.pct}% of the store receipts; groceries are charged at the end of your stay.`, `Hacemos las compras y llenamos la despensa antes de que llegues. Tarifa: ${mxn(fee.mxn)} + ${fee.pct}% de los tickets; la despensa se cobra al final de tu estancia.`)}</p>
          <YesNo value={a.grocery} onChange={(v) => up((x) => ({ ...x, grocery: v }))} yes={t("Yes, I'd like that", "Sí, me interesa")} no={t("No, thanks", "No, gracias")} />
          {a.grocery === "yes" && (
            <div className="arr-card mt-4">
              <p className="arr-p">{t("Choose your groceries on our grocery page. It opens in a new tab, so you won't lose your progress here.", "Elige tu despensa en nuestra página de despensa. Se abre en otra pestaña, así no pierdes lo que llevas aquí.")}</p>
              <a
                className="arr-primary arr-btn-link"
                href={`${es ? "/es" : ""}/groceries?code=${encodeURIComponent(r.code)}&name=${encodeURIComponent(a.main.name)}&villa=${encodeURIComponent(r.villa)}&arrival=${r.checkIn}`}
                target="_blank"
                rel="noopener"
              >
                {t("Open the grocery list ↗", "Abrir la lista de despensa ↗")}
              </a>
              <p className="arr-hint">{t(`Prefer to do it later? No problem: just send it by ${fmtDate(addDays(r.checkIn, -GROCERY_DEADLINE_DAYS), es)} so we have time to shop.`, `¿Prefieres hacerlo después? Sin problema: solo mándala a más tardar el ${fmtDate(addDays(r.checkIn, -GROCERY_DEADLINE_DAYS), es)} para tener tiempo de comprar.`)}</p>
            </div>
          )}

          <h2 className="arr-h2">{t("Allergies & diet", "Alergias y dieta")}</h2>
          <div className="space-y-4">
            {a.diet.map((d) => (
              <div key={d.id} className="arr-card">
                <div className="flex items-center justify-between">
                  <p className="arr-card-title">{d.who || t("Who?", "¿Quién?")}</p>
                  <button type="button" className="arr-link" onClick={() => up((x) => ({ ...x, diet: x.diet.filter((y) => y.id !== d.id) }))}>{t("Remove", "Quitar")}</button>
                </div>
                <Picker value={d.who} options={peopleNames} placeholder={t("Select guest", "Elige huésped")} onChange={(v) => up((x) => ({ ...x, diet: x.diet.map((y) => (y.id === d.id ? { ...y, who: v } : y)) }))} />
                <div className="arr-chips">
                  {DIET_TAGS.map((tag) => {
                    const on = d.tags.includes(tag.key);
                    return (
                      <button key={tag.key} type="button" className={`arr-chip${on ? " is-on" : ""}`} aria-pressed={on} onClick={() => up((x) => ({ ...x, diet: x.diet.map((y) => (y.id === d.id ? { ...y, tags: on ? y.tags.filter((k) => k !== tag.key) : [...y.tags, tag.key] } : y)) }))}>
                        {es ? tag.es : tag.en}
                      </button>
                    );
                  })}
                </div>
                <input className="iq-input mt-3" value={d.notes} placeholder={t("Other details (optional)", "Otros detalles (opcional)")} onChange={(e) => up((x) => ({ ...x, diet: x.diet.map((y) => (y.id === d.id ? { ...y, notes: e.target.value } : y)) }))} />
              </div>
            ))}
          </div>
          <button type="button" className="arr-add" onClick={() => up((x) => ({ ...x, diet: [...x.diet, { id: rid(), who: "", tags: [], notes: "" }] }))}>+ {t("Add an allergy or diet", "Agregar alergia o dieta")}</button>

          <h2 className="arr-h2">{t("Breakfast", "Desayuno")}</h2>
          <p className="arr-p">{t("Breakfast preparation is included (groceries are charged separately). It always comes with fresh fruit, juice, coffee, granola and yogurt. Choose a savory and a sweet option for each morning.", "La preparación del desayuno está incluida (la despensa se cobra aparte). Siempre incluye fruta fresca, jugo, café, granola y yogurt. Elige una opción salada y una dulce para cada mañana.")}</p>
          <a className="arr-menu-link" href={`${es ? "/es" : ""}/villa-dining-menu/breakfast`} target="_blank" rel="noopener">{t("See the breakfast menu with descriptions ↗", "Ver el menú de desayuno con descripciones ↗")}</a>
          <div className="space-y-4">
            {a.meals.map((m, i) => (
              m.date === r.checkIn ? null : (
                <div key={m.date} className="arr-card">
                  <div className="flex items-center justify-between">
                    <p className="arr-card-title">{fmtDate(m.date, es)}</p>
                    <label className="arr-toggle">
                      <input type="checkbox" checked={m.breakfast.on} onChange={(e) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, breakfast: { ...y.breakfast, on: e.target.checked } } : y)) }))} />
                      <span>{t("Breakfast", "Desayuno")}</span>
                    </label>
                  </div>
                  {m.breakfast.on && (
                    <>
                      <Picker label={t("Time", "Hora")} value={m.breakfast.time} options={TIMES.slice(TIMES.findIndex((o) => o.value === BREAKFAST_EARLIEST), 22)} placeholder="9:00 am" onChange={(v) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, breakfast: { ...y.breakfast, time: v } } : y)) }))} />
                      <span className="iq-label">{t("Savory", "Salado")}</span>
                      <DishPicker options={menus.savory} selected={m.breakfast.savory ? [m.breakfast.savory] : []} noneLabel={t("No savory", "Sin salado")} onToggle={(v) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, breakfast: { ...y.breakfast, savory: y.breakfast.savory === v ? "" : v } } : y)) }))} />
                      <span className="iq-label">{t("Sweet", "Dulce")}</span>
                      <DishPicker options={menus.sweet} selected={m.breakfast.sweet ? [m.breakfast.sweet] : []} noneLabel={t("No sweet", "Sin dulce")} onToggle={(v) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, breakfast: { ...y.breakfast, sweet: y.breakfast.sweet === v ? "" : v } } : y)) }))} />
                    </>
                  )}
                </div>
              )
            ))}
          </div>

          <h2 className="arr-h2">{t("Lunch & dinner at the villa", "Comida y cena en la villa")}</h2>
          <p className="arr-p">{t(`Our cook can also prepare lunch or dinner: ${mxn(MEAL_PREP.mxn)} per service for up to ${MEAL_PREP.upToGuests} guests, plus groceries.`, `Nuestro cocinero también puede preparar comida o cena: ${mxn(MEAL_PREP.mxn)} por servicio para hasta ${MEAL_PREP.upToGuests} personas, más la despensa.`)}</p>
          <YesNo value={a.extraMeals} onChange={(v) => up((x) => ({ ...x, extraMeals: v }))} yes={t("Yes, I'd like that", "Sí, me interesa")} no={t("No, thanks", "No, gracias")} />
          {a.extraMeals === "yes" && (
            <div className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-x-5">
                <a className="arr-menu-link" href={`${es ? "/es" : ""}/villa-dining-menu/lunch`} target="_blank" rel="noopener">{t("Lunch menu ↗", "Menú de comida ↗")}</a>
                <a className="arr-menu-link" href={`${es ? "/es" : ""}/villa-dining-menu/private-dinner-at-home`} target="_blank" rel="noopener">{t("Dinner menu ↗", "Menú de cena ↗")}</a>
              </div>
              {a.meals.map((m, i) => (
                m.date === r.checkOut ? null : (
                  <div key={m.date} className="arr-card">
                    <p className="arr-card-title">{fmtDate(m.date, es)}</p>
                    {(["lunch", "dinner"] as const).map((meal) => (
                      <div key={meal} className="mt-3">
                        <label className="arr-toggle">
                          <input type="checkbox" checked={m[meal].on} onChange={(e) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, [meal]: { ...y[meal], on: e.target.checked } } : y)) }))} />
                          <span>{meal === "lunch" ? t("Lunch", "Comida") : t("Dinner", "Cena")}</span>
                        </label>
                        {m[meal].on && (
                          <div className="mt-2">
                            <Picker label={t("Time", "Hora")} value={m[meal].time} options={meal === "lunch" ? TIMES.slice(20, 40) : TIMES.slice(44, 64)} placeholder={meal === "lunch" ? "2:00 pm" : "7:30 pm"} onChange={(v) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, [meal]: { ...y[meal], time: v } } : y)) }))} />
                            <span className="iq-label">{t("Dishes (tap to choose)", "Platillos (toca para elegir)")}</span>
                            <DishPicker
                              multi
                              options={meal === "lunch" ? menus.lunch : menus.dinner}
                              selected={m[meal].dishes}
                              onToggle={(v) => up((x) => ({ ...x, meals: x.meals.map((y, j) => (j === i ? { ...y, [meal]: { ...y[meal], dishes: y[meal].dishes.includes(v) ? y[meal].dishes.filter((d) => d !== v) : [...y[meal].dishes, v] } } : y)) }))}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )
              ))}
            </div>
          )}
        </section>
      )}

      {/* 4 · Golf carts */}
      {step === 4 && (
        <section>
          <h1 className="arr-h1">{t("Golf carts", "Carritos de golf")}</h1>
          <p className="arr-p">
            {t(
              `The easiest way to get around Punta Mita and the town of Punta de Mita. Per day: 4-passenger ${mxn(GOLF_CARTS[season]["4"])} · 6-passenger ${mxn(GOLF_CARTS[season]["6"])}. Driving is at your own risk; damage is charged by the rental company.`,
              `La forma más fácil de moverse en Punta Mita y el pueblo de Punta de Mita. Por día: 4 pasajeros ${mxn(GOLF_CARTS[season]["4"])} · 6 pasajeros ${mxn(GOLF_CARTS[season]["6"])}. Se maneja bajo tu propio riesgo; los daños los cobra la arrendadora.`
            )}
          </p>
          <div className="arr-note">
            {t(
              `Your rental already includes one ${INCLUDED_CART_SEATS}-passenger golf cart. Add carts here only if you'd like extra ones.`,
              `Tu renta ya incluye un carrito de golf de ${INCLUDED_CART_SEATS} pasajeros. Agrega carritos aquí solo si quieres adicionales.`
            )}
          </div>
          {(() => {
            const sug = cartSuggestion(counts.total);
            if (!sug) return null;
            const seats = a.carts.reduce((n, g) => n + Number(g.size) * g.qty, 0);
            const enough = INCLUDED_CART_SEATS + seats >= counts.total;
            if (enough && a.carts.length) return null;
            const label = es
              ? `${sug.qty} carrito${sug.qty > 1 ? "s" : ""} de ${sug.size} pasajeros`
              : `${sug.qty} ${sug.size}-passenger cart${sug.qty > 1 ? "s" : ""}`;
            return (
              <div className="arr-card mb-4">
                <p className="arr-p mb-3">
                  {t(
                    `You're a group of ${counts.total}, so the included cart won't fit everyone. We suggest adding ${label} so you can all get around together.`,
                    `Son ${counts.total} personas, así que el carrito incluido no alcanza para todos. Te sugerimos agregar ${label} para que puedan moverse todos juntos.`
                  )}
                </p>
                <button
                  type="button"
                  className="arr-add mt-0"
                  onClick={() => up((x) => ({ ...x, carts: [...x.carts, { id: rid(), size: sug.size, qty: sug.qty, from: r.checkIn, to: r.checkOut }] }))}
                >
                  + {t(`Add ${label}`, `Agregar ${label}`)}
                </button>
              </div>
            );
          })()}
          <div className="space-y-4">
            {a.carts.map((g) => (
              <div key={g.id} className="arr-card">
                <div className="flex items-center justify-between">
                  <p className="arr-card-title">{t("Extra golf cart", "Carrito adicional")}</p>
                  <button type="button" className="arr-link" onClick={() => up((x) => ({ ...x, carts: x.carts.filter((y) => y.id !== g.id) }))}>{t("Remove", "Quitar")}</button>
                </div>
                <div className="arr-yesno">
                  {(["4", "6"] as const).map((sz) => (
                    <button key={sz} type="button" className={`arr-choice${g.size === sz ? " is-on" : ""}`} onClick={() => up((x) => ({ ...x, carts: x.carts.map((y) => (y.id === g.id ? { ...y, size: sz } : y)) }))}>
                      {sz} {t("passengers", "pasajeros")}
                    </button>
                  ))}
                </div>
                <div className="arr-box mt-3"><Counter label={t("How many", "Cuántos")} value={g.qty} min={1} onChange={(n) => up((x) => ({ ...x, carts: x.carts.map((y) => (y.id === g.id ? { ...y, qty: n } : y)) }))} /></div>
                <div className="grid grid-cols-2 gap-3">
                  <Picker label={t("From", "Desde")} value={g.from} options={dateOpts(stayDates)} placeholder={t("Select", "Elige")} onChange={(v) => up((x) => ({ ...x, carts: x.carts.map((y) => (y.id === g.id ? { ...y, from: v } : y)) }))} />
                  <Picker label={t("To", "Hasta")} value={g.to} options={dateOpts(stayDates)} placeholder={t("Select", "Elige")} onChange={(v) => up((x) => ({ ...x, carts: x.carts.map((y) => (y.id === g.id ? { ...y, to: v } : y)) }))} />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="arr-add" onClick={() => up((x) => ({ ...x, carts: [...x.carts, { id: rid(), size: "6", qty: 1, from: r.checkIn, to: r.checkOut }] }))}>+ {t("Add a golf cart", "Agregar carrito de golf")}</button>
          {a.carts.length === 0 && <p className="arr-hint">{t("Skip this step if you don't need extra golf carts.", "Salta este paso si no necesitas carritos adicionales.")}</p>}
        </section>
      )}

      {/* 5 · Celebrations & activities */}
      {step === 5 && (
        <section>
          <h1 className="arr-h1">{t("Celebrations & activities", "Celebraciones y actividades")}</h1>

          <h2 className="arr-h2">{t("Celebrating something?", "¿Celebran algo?")}</h2>
          <div className="space-y-4">
            {a.celebrations.map((c) => (
              <div key={c.id} className="arr-card">
                <div className="flex items-center justify-between">
                  <p className="arr-card-title">{c.occasion || t("Celebration", "Celebración")}</p>
                  <button type="button" className="arr-link" onClick={() => up((x) => ({ ...x, celebrations: x.celebrations.filter((y) => y.id !== c.id) }))}>{t("Remove", "Quitar")}</button>
                </div>
                <Picker label={t("Date", "Fecha")} value={c.date} options={dateOpts(stayDates)} placeholder={t("Select", "Elige")} onChange={(v) => up((x) => ({ ...x, celebrations: x.celebrations.map((y) => (y.id === c.id ? { ...y, date: v } : y)) }))} />
                <div className="iq-field"><span className="iq-label">{t("Occasion and who", "Ocasión y quién")}</span>
                  <input className="iq-input" value={c.occasion} placeholder={t("e.g. Kristen's 50th birthday", "ej. Cumpleaños 50 de Kristen")} onChange={(e) => up((x) => ({ ...x, celebrations: x.celebrations.map((y) => (y.id === c.id ? { ...y, occasion: e.target.value } : y)) }))} /></div>
                <span className="iq-label">{t("Should we prepare something?", "¿Preparamos algo?")}</span>
                <div className="arr-chips">
                  {CELEBRATION_EXTRAS.map((ex) => {
                    const on = c.prepare.includes(ex.key);
                    return (
                      <button key={ex.key} type="button" aria-pressed={on} className={`arr-chip${on ? " is-on" : ""}`} onClick={() => up((x) => ({ ...x, celebrations: x.celebrations.map((y) => (y.id === c.id ? { ...y, prepare: on ? y.prepare.filter((k) => k !== ex.key) : [...y.prepare, ex.key] } : y)) }))}>
                        {es ? ex.es : ex.en}
                      </button>
                    );
                  })}
                </div>
                <input className="iq-input mt-3" value={c.notes} placeholder={t("Details (flavor, colors…)", "Detalles (sabor, colores…)")} onChange={(e) => up((x) => ({ ...x, celebrations: x.celebrations.map((y) => (y.id === c.id ? { ...y, notes: e.target.value } : y)) }))} />
              </div>
            ))}
          </div>
          <button type="button" className="arr-add" onClick={() => up((x) => ({ ...x, celebrations: [...x.celebrations, { id: rid(), date: "", occasion: "", prepare: [], notes: "" }] }))}>+ {t("Add a celebration", "Agregar celebración")}</button>

          <h2 className="arr-h2">{t("Activities & reservations", "Actividades y reservaciones")}</h2>
          <p className="arr-p">{t("Tap anything you'd like to do. Most activities depend on availability, so give us a few date options (or tell us you're flexible) and your concierge will confirm the best one.", "Toca lo que te gustaría hacer. La mayoría de las actividades dependen de disponibilidad, así que danos algunas opciones de fecha (o dinos si eres flexible) y tu concierge confirmará la mejor.")}</p>
          <a className="arr-menu-link" href={`${es ? "/es" : ""}/discover-punta-mita`} target="_blank" rel="noopener">{t("Explore all activities on Discover Punta Mita ↗", "Explora todas las actividades en Descubre Punta Mita ↗")}</a>

          {/* Category tabs with photos */}
          <div className="arr-cats">
            {menus.discover.map((c) => (
              <button key={c.slug} type="button" className={`arr-cat${discoverCat === c.slug ? " is-on" : ""}`} onClick={() => setDiscoverCat(c.slug)}>
                <span className="arr-cat-img"><Image src={c.image} alt="" fill sizes="64px" className="object-cover" /></span>
                <span>{es ? c.title.es : c.title.en}</span>
              </button>
            ))}
            <button type="button" className={`arr-cat${discoverCat === "_res" ? " is-on" : ""}`} onClick={() => setDiscoverCat("_res")}>
              <span className="arr-cat-img arr-cat-icon">🍽</span>
              <span>{t("Reservations", "Reservaciones")}</span>
            </button>
          </div>

          {/* One photo for the chosen category, then its activities */}
          {discoverCat !== "_res" && (() => {
            const c = menus.discover.find((x) => x.slug === discoverCat);
            return c ? <div className="arr-cat-banner"><Image src={c.image} alt="" fill sizes="(min-width: 640px) 600px, 100vw" className="object-cover" /><span>{es ? c.title.es : c.title.en}</span></div> : null;
          })()}
          <div className="arr-acts">
            {discoverCat === "_res"
              ? RESERVATIONS.map((res) => {
                  const added = a.activities.some((x) => x.activity === res.key);
                  return (
                    <button key={res.key} type="button" className={`arr-act arr-act-text${added ? " is-on" : ""}`} onClick={() => !added && up((x) => ({ ...x, activities: [...x.activities, { id: rid(), category: "Reservations", activity: res.key, option: "", flexible: false, slots: [{ date: "", time: "" }], people: String(counts.total || ""), notes: "" }] }))}>
                      <span className="arr-act-name">{es ? res.es : res.en}</span>
                      <span className="arr-act-add">{added ? t("Added ✓", "Agregado ✓") : t("+ Add", "+ Agregar")}</span>
                    </button>
                  );
                })
              : (menus.discover.find((c) => c.slug === discoverCat)?.activities || []).map((act) => {
                  const cat = menus.discover.find((c) => c.slug === discoverCat)!;
                  const added = a.activities.some((x) => x.activity === act.title.en);
                  return (
                    <button key={act.slug} type="button" className={`arr-act${act.image === cat.image ? " arr-act-text" : ""}${added ? " is-on" : ""}`} onClick={() => !added && up((x) => ({ ...x, activities: [...x.activities, { id: rid(), category: cat.title.en, activity: act.title.en, option: "", flexible: false, slots: [{ date: "", time: "" }], people: String(counts.total || ""), notes: "" }] }))}>
                      {act.image !== cat.image && <span className="arr-act-img"><Image src={act.image} alt="" fill sizes="(min-width: 640px) 280px, 45vw" className="object-cover" /></span>}
                      <span className="arr-act-name">{es ? act.title.es : act.title.en}</span>
                      <span className="arr-act-add">{added ? t("Added ✓", "Agregado ✓") : t("+ Add", "+ Agregar")}</span>
                    </button>
                  );
                })}
          </div>

          {/* What they picked */}
          {a.activities.length > 0 && (
            <>
              <h2 className="arr-h2">{t("Your requests", "Tus solicitudes")}</h2>
              <div className="space-y-4">
                {a.activities.map((x0) => {
                  const act = menus.discover.flatMap((c) => c.activities).find((v) => v.title.en === x0.activity);
                  const res = RESERVATIONS.find((v) => v.key === x0.activity);
                  const title = act ? (es ? act.title.es : act.title.en) : res ? (es ? res.es : res.en) : x0.activity;
                  const set = (patch: Partial<ActivityRequest>) => up((x) => ({ ...x, activities: x.activities.map((y) => (y.id === x0.id ? { ...y, ...patch } : y)) }));
                  return (
                    <div key={x0.id} className="arr-card">
                      <div className="flex items-center justify-between gap-3">
                        <p className="arr-card-title">{title}</p>
                        <button type="button" className="arr-link" onClick={() => up((x) => ({ ...x, activities: x.activities.filter((y) => y.id !== x0.id) }))}>{t("Remove", "Quitar")}</button>
                      </div>
                      {act && act.options.length > 0 && (
                        <>
                          <span className="iq-label">{t("Which experience? (optional)", "¿Qué experiencia? (opcional)")}</span>
                          <div className="arr-chips mb-3">
                            {act.options.map((o) => {
                              const on = x0.option === o.en;
                              return (
                                <button key={o.en} type="button" aria-pressed={on} className={`arr-chip${on ? " is-on" : ""}`} onClick={() => set({ option: on ? "" : o.en })}>
                                  {es ? o.es : o.en}
                                </button>
                              );
                            })}
                          </div>
                        </>
                      )}
                      <label className="arr-toggle mb-3">
                        <input type="checkbox" checked={x0.flexible} onChange={(e) => set({ flexible: e.target.checked })} />
                        <span>{t("I'm flexible: any day works", "Soy flexible: cualquier día me funciona")}</span>
                      </label>
                      {!x0.flexible && (
                        <>
                          {x0.slots.map((sl, k) => (
                            <div key={k} className="grid grid-cols-[1fr_1fr_32px] items-end gap-2">
                              <Picker label={t(`Option ${k + 1}: date`, `Opción ${k + 1}: fecha`)} value={sl.date} options={dateOpts(stayDates)} placeholder={t("Select", "Elige")} onChange={(v) => set({ slots: x0.slots.map((z, n) => (n === k ? { ...z, date: v } : z)) })} />
                              <Picker label={t("Time", "Hora")} value={sl.time} options={[{ value: "", label: t("Any time", "Cualquier hora") }, ...TIMES]} placeholder={t("Any time", "Cualquier hora")} onChange={(v) => set({ slots: x0.slots.map((z, n) => (n === k ? { ...z, time: v } : z)) })} />
                              {x0.slots.length > 1 ? (
                                <button type="button" className="arr-x mb-3" aria-label={t("Remove", "Quitar")} onClick={() => set({ slots: x0.slots.filter((_, n) => n !== k) })}>×</button>
                              ) : <span />}
                            </div>
                          ))}
                          {x0.slots.length < 3 && (
                            <button type="button" className="arr-add mt-0" onClick={() => set({ slots: [...x0.slots, { date: "", time: "" }] })}>+ {t("Add another option", "Agregar otra opción")}</button>
                          )}
                        </>
                      )}
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="iq-field"><span className="iq-label">{t("People", "Personas")}</span>
                          <input className="iq-input" inputMode="numeric" value={x0.people} onChange={(e) => set({ people: e.target.value })} /></div>
                        <div className="iq-field">
                          <span className="iq-label">{x0.activity === "Dinner reservation" ? t("Preferred restaurant *", "Restaurante de tu preferencia *") : t("Notes", "Notas")}</span>
                          <input className="iq-input" value={x0.notes} placeholder={x0.activity === "Dinner reservation" ? t("e.g. Café des Artistes", "ej. Café des Artistes") : ""} onChange={(e) => set({ notes: e.target.value })} /></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="arr-hint">{t("All activities are subject to availability. Your concierge will confirm dates, times and prices.", "Todas las actividades están sujetas a disponibilidad. Tu concierge confirmará fechas, horarios y precios.")}</p>
            </>
          )}

          {menus.onYourOwn.length > 0 && (
            <div className="arr-note mt-6">
              <p className="arr-p">
                <b>{t("Also in Punta Mita, no booking needed:", "También en Punta Mita, sin reservar:")}</b>{" "}
                {menus.onYourOwn.map((o, i) => (
                  <React.Fragment key={o.href}>
                    {i > 0 && " · "}
                    <a className="underline underline-offset-2" href={`${es ? "/es" : ""}${o.href}`} target="_blank" rel="noopener">{es ? o.title.es : o.title.en}</a>
                  </React.Fragment>
                ))}
                . {t("You can simply go whenever you like; ask your concierge if you need directions or transportation.", "Puedes ir cuando quieras; pregunta a tu concierge si necesitas indicaciones o transporte.")}
              </p>
            </div>
          )}

          <h2 className="arr-h2">{t("Anything else?", "¿Algo más?")}</h2>
          <textarea className="iq-input" rows={3} value={a.notes} placeholder={t("Anything we should know or prepare", "Cualquier cosa que debamos saber o preparar")} onChange={(e) => up((x) => ({ ...x, notes: e.target.value }))} />
        </section>
      )}

      {/* 6 · Review */}
      {last && (
        <section>
          <h1 className="arr-h1">{t("Review & confirm", "Revisar y confirmar")}</h1>
          <p className="arr-p">{t("Please check everything. Tap a step above to change it.", "Revisa todo. Toca un paso para cambiarlo.")}</p>
          <div className="arr-jump">
            {STEPS.slice(1, -1).map((s, i) => (
              <button key={s} type="button" className="arr-chip" onClick={() => go(i + 1)}>{s}</button>
            ))}
          </div>
          <pre className="arr-review">{summarize(r, a, es ? "es" : "en").replace(/\n(Confirmed by|Confirmado por):.*$/, "")}</pre>
          <p className="arr-hint">{t(`${VAT_PCT}% VAT is charged on top of all prices.`, `A todos los precios se les suma ${VAT_PCT}% de IVA.`)}</p>
          <div className="iq-field mt-5"><span className="iq-label">{t("Type your full name to confirm", "Escribe tu nombre completo para confirmar")}</span>
            <input className="iq-input" value={a.confirmName} onChange={(e) => up((x) => ({ ...x, confirmName: e.target.value }))} autoComplete="name" /></div>
          <label className="arr-toggle mt-2">
            <input type="checkbox" checked={a.confirmed} onChange={(e) => up((x) => ({ ...x, confirmed: e.target.checked }))} />
            <span>{t("I confirm this information is correct and agree to the prices shown.", "Confirmo que esta información es correcta y acepto los precios indicados.")}</span>
          </label>
          {error && <p className="arr-warn mt-3" role="alert">{error}</p>}
          <button type="button" className="arr-primary" disabled={sending} onClick={submit}>
            {sending ? t("Sending…", "Enviando…") : t("Confirm & send to my concierge", "Confirmar y enviar a mi concierge")}
          </button>
        </section>
      )}

      {/* Navigation */}
      {!last && stepError && <p className="arr-warn mt-6" role="alert">{stepError}</p>}
      {!last && (
        <div className="arr-nav">
          {step > 0 && <button type="button" className="arr-back" onClick={() => go(step - 1)}>←</button>}
          <button type="button" className="arr-next" onClick={next}>
            {step === 0 ? t("Start", "Empezar") : t("Continue", "Continuar")}
          </button>
        </div>
      )}
      {last && (
        <button type="button" className="arr-link mt-6" onClick={() => go(step - 1)}>← {t("Back", "Atrás")}</button>
      )}
    </div>
  );
}
