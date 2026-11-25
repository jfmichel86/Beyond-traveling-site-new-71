// ─────────────────────────────────────────────────────────────
// Arrival form — shared types, prices and rules.
// Every price the guest sees lives here, so the form, the website and the
// itinerary always agree. Edit a number here and it changes everywhere.
// (16% VAT is charged on top of all prices.)
// ─────────────────────────────────────────────────────────────

export type PropertyType = "villa" | "estate";

/** One-way airport transfer, by vehicle. */
export const VEHICLES = [
  { key: "suburban", name: "Suburban", seats: 6, mxn: 2800 },
  { key: "sprinter", name: "Sprinter", seats: 11, mxn: 3800 },
  { key: "xlvan", name: "XL Van", seats: 18, mxn: 4800 },
] as const;
export type VehicleKey = (typeof VEHICLES)[number]["key"];

/** Club Punta Mita access card, per person. */
export const ACCESS_FEE = {
  adultUsd: 50, // over 13
  childUsd: 30, // ages 5–13
  servicePct: 15,
  vatPct: 16,
};

/** Grocery pre-stocking: fixed fee + % of the store receipts. */
export const GROCERY_FEE: Record<PropertyType, { mxn: number; pct: number }> = {
  villa: { mxn: 1200, pct: 15 },
  estate: { mxn: 2500, pct: 20 },
};

/** Lunch or dinner preparation, per service. */
export const MEAL_PREP = { mxn: 5500, upToGuests: 10 };

/** Golf cart, per day. Low season May–October, high season November–April. */
export const GOLF_CARTS = {
  low: { "4": 1600, "6": 1800 },
  high: { "4": 1800, "6": 2200 },
} as const;
export type CartSize = "4" | "6";

export const VAT_PCT = 16;

/** Golf-cart seasons by arrival date: high Nov 1 – Apr 30, low May 1 – Oct 31. */
export const SEASON_LABEL = {
  high: { en: "high season (Nov 1 – Apr 30)", es: "temporada alta (1 nov – 30 abr)" },
  low: { en: "low season (May 1 – Oct 31)", es: "temporada baja (1 may – 31 oct)" },
} as const;

/** Earliest breakfast the cook can serve. */
export const BREAKFAST_EARLIEST = "8:45 am";

/**
 * Discover Punta Mita activities that are only ideas of what to do — guests go on
 * their own and don't book them through us (no third-party supplier). They're left
 * out of the arrival form's activity requests and listed as "no booking needed".
 * Use the activity's slug from lib/discoverPuntaMita.ts.
 */
export const INFO_ONLY_ACTIVITIES = new Set<string>([
  "punta-mita-beach-clubs",
  "party-beach-clubs",
  "other-beach-clubs",
  "punta-mita-seasonal-events-holidays",
  "signature-dinner-shows",
  "curated-nights-out",
  "sayulita-san-pancho-half-day-experiences",
  "la-cruz-bucerias-specialty-outings",
  // restaurants: booked with "Dinner reservation" (Reservations tab), naming the restaurant
  "punta-mita-fine-dining-oceanfront-restaurants",
]);

/** Discover entries that aren't activities at all (a service level), left out of the form entirely. */
export const HIDDEN_ACTIVITIES = new Set<string>(["full-stay-concierge-vip-hosting"]);

// ── What the guest fills in ──────────────────────────────────────────────

export type Person = { name: string; age: string };

export type Flight = {
  id: string;
  party: string; // family / last name
  airline: string;
  flight: string;
  date: string; // YYYY-MM-DD
  time: string; // as typed, e.g. "4:11 pm"
  people: number;
  vehicle: VehicleKey | "";
  intl: boolean; // departures: international (leave 3 h before) or domestic (2 h)
  carSeats: number;
  boosters: number;
};

export type MealDay = {
  date: string;
  breakfast: { on: boolean; time: string; savory: string; sweet: string };
  lunch: { on: boolean; time: string; dishes: string[] };
  dinner: { on: boolean; time: string; dishes: string[] };
};

export type DietNeed = { id: string; who: string; tags: string[]; notes: string };
export type GolfCart = { id: string; size: CartSize; qty: number; from: string; to: string };
export type Celebration = { id: string; date: string; occasion: string; prepare: string[]; notes: string };
export type ActivitySlot = { date: string; time: string };
export type ActivityRequest = {
  id: string;
  category: string; // e.g. "Ocean & Water"
  activity: string; // e.g. "Surf Experiences"
  option: string; // e.g. "Private Surf Lesson" (optional)
  flexible: boolean; // any day works
  slots: ActivitySlot[]; // preferred date/time options
  people: string;
  notes: string;
};

/** Own arrival / departure when the guest doesn't need our transfer. */
export type OwnFlight = { airline: string; flight: string; date: string; time: string; intl: boolean };

export type ArrivalAnswers = {
  main: { name: string; email: string; phone: string; address: string };
  people: Person[];
  transport: "" | "yes" | "no";
  /** With transport "no": arriving by plane on their own, or driving to Punta Mita. */
  ownMode: "" | "flight" | "car";
  arrivals: Flight[];
  departures: Flight[];
  ownArrival: OwnFlight;
  ownDeparture: OwnFlight;
  lateCheckout: { want: boolean; time: string };
  grocery: "" | "yes" | "no";
  diet: DietNeed[];
  meals: MealDay[];
  extraMeals: "" | "yes" | "no";
  carts: GolfCart[];
  celebrations: Celebration[];
  activities: ActivityRequest[];
  notes: string;
  confirmName: string;
  confirmed: boolean;
};

export type Reservation = {
  id: string;
  code: string;
  guestName: string;
  email?: string;
  phone?: string;
  villa: string;
  propertyType: PropertyType;
  checkIn: string; // YYYY-MM-DD
  checkOut: string;
  adults?: number | null; // from the booking
  children?: number | null;
  answers?: ArrivalAnswers | null;
  submittedAt?: string | null;
  /** The guest's unsent progress, saved on the server at each step. */
  draft?: { answers: ArrivalAnswers; step: number; updatedAt: string } | null;
  language?: string | null;
};

export const DIET_TAGS = [
  { key: "gluten-free", en: "Gluten-free", es: "Sin gluten" },
  { key: "dairy-free", en: "Dairy-free", es: "Sin lácteos" },
  { key: "nuts", en: "Nut allergy", es: "Alergia a nueces" },
  { key: "shellfish", en: "Shellfish allergy", es: "Alergia a mariscos" },
  { key: "vegetarian", en: "Vegetarian", es: "Vegetariano" },
  { key: "vegan", en: "Vegan", es: "Vegano" },
  { key: "pescatarian", en: "Pescatarian", es: "Pescetariano" },
  { key: "no-pork", en: "No pork", es: "Sin cerdo" },
];

export const CELEBRATION_EXTRAS = [
  { key: "cake", en: "Cake", es: "Pastel" },
  { key: "decoration", en: "Decoration", es: "Decoración" },
  { key: "flowers", en: "Flowers", es: "Flores" },
  { key: "champagne", en: "Champagne", es: "Champagne" },
];

// ── Rules ────────────────────────────────────────────────────────────────

export const ageOf = (p: Person) => {
  const n = parseFloat(String(p.age).replace(",", "."));
  return Number.isFinite(n) ? n : null;
};

/** Over 13 = adult access card; 5–13 = child card; under 5 = no card. */
export function groupCounts(people: Person[]) {
  let adults = 0, children = 0, under5 = 0, unknown = 0, carSeats = 0, boosters = 0;
  for (const p of people) {
    if (!p.name.trim() && !String(p.age).trim()) continue;
    const a = ageOf(p);
    if (a === null) { unknown++; continue; }
    if (a > 13) adults++;
    else if (a >= 5) children++;
    else under5++;
    if (a < 4) carSeats++;
    else if (a < 8) boosters++;
  }
  return { adults, children, under5, unknown, total: adults + children + under5 + unknown, carSeats, boosters };
}

/** Estimated access cards, USD, with service fee and VAT. */
export function accessFeeUsd(people: Person[]) {
  const c = groupCounts(people);
  const base = c.adults * ACCESS_FEE.adultUsd + c.children * ACCESS_FEE.childUsd;
  return Math.round(base * (1 + ACCESS_FEE.servicePct / 100) * (1 + ACCESS_FEE.vatPct / 100) * 100) / 100;
}

export const vehicleFor = (people: number): VehicleKey =>
  (VEHICLES.find((v) => people <= v.seats) ?? VEHICLES[VEHICLES.length - 1]).key;

export const vehicleName = (k: string) => VEHICLES.find((v) => v.key === k)?.name ?? "";

export const seasonFor = (iso: string): "low" | "high" => {
  const m = Number(iso.slice(5, 7));
  return m >= 5 && m <= 10 ? "low" : "high";
};

/** "4:11 pm" → minutes after midnight, or null. */
export function parseTime(t: string): number | null {
  const m = /^\s*(\d{1,2})(?::(\d{2}))?\s*([ap])?\.?\s*m?\.?\s*$/i.exec(t || "");
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2] || 0);
  const ap = m[3]?.toLowerCase();
  if (ap === "p" && h < 12) h += 12;
  if (ap === "a" && h === 12) h = 0;
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

export const fmtTime = (mins: number) => {
  const h = Math.floor(((mins % 1440) + 1440) % 1440 / 60);
  const m = ((mins % 60) + 60) % 60;
  const ap = h >= 12 ? "pm" : "am";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${ap}`;
};

/** Leave Punta Mita 3 h before an international flight, 2 h before a domestic one. */
export const pickupFor = (flightTime: string, intl = true) => {
  const t = parseTime(flightTime);
  return t === null ? "" : fmtTime(t - (intl ? 180 : 120));
};

/** About 1 h 30 from landing at PVR to the villa (immigration, bags, drive). */
export const VILLA_ARRIVAL_AFTER_LANDING = 90;
export const CHECK_OUT_TIME = "11:00 am";
/** Flights after this time can ask for a late check-out. */
export const LATE_CHECKOUT_AFTER = 14 * 60;

export function villaArrivalWindow(landing: string) {
  const t = parseTime(landing);
  if (t === null) return null;
  const eta = t + VILLA_ARRIVAL_AFTER_LANDING;
  return { eta: fmtTime(eta), from: fmtTime(eta - 30), to: fmtTime(eta + 30) };
}

/** Arriving by car: the concierge waits 30 minutes before and after their estimated time. */
export function carArrivalWindow(time: string) {
  const t = parseTime(time);
  if (t === null) return null;
  return { eta: fmtTime(t), from: fmtTime(t - 30), to: fmtTime(t + 30) };
}

/** Every property includes one 6-passenger golf cart in the rent. */
export const INCLUDED_CART_SEATS = 6;

/** Suggested extra cart(s) for the group size: 8–10 people → one 4-passenger; 11+ → 6-passenger(s). */
export function cartSuggestion(total: number): { size: CartSize; qty: number } | null {
  if (total >= 11) return { size: "6", qty: Math.ceil((total - INCLUDED_CART_SEATS) / 6) };
  if (total >= 8) return { size: "4", qty: 1 };
  return null;
}

/** All dates from a to b, inclusive (YYYY-MM-DD). */
export function datesBetween(a: string, b: string): string[] {
  if (!a || !b) return [];
  const out: string[] = [];
  const d = new Date(`${a}T12:00:00`);
  const end = new Date(`${b}T12:00:00`);
  for (let i = 0; d <= end && i < 60; i++) {
    out.push(d.toISOString().slice(0, 10));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

export const addDays = (iso: string, n: number) => {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

export const fmtDate = (iso: string, es = false, withYear = false) => {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString(es ? "es-MX" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    ...(withYear ? { year: "numeric" } : {}),
  });
};

export const mxn = (n: number) => `MXN ${n.toLocaleString("en-US")}`;

/** Empty answers for a reservation: meal days from the stay, main guest prefilled. */
export function blankAnswers(r: Reservation): ArrivalAnswers {
  const breakfastDays = datesBetween(addDays(r.checkIn, 1), r.checkOut);
  const allDays = Array.from(new Set([...datesBetween(r.checkIn, r.checkOut)]));
  return {
    main: { name: r.guestName || "", email: r.email || "", phone: r.phone || "", address: "" },
    people: Array.from({ length: Math.max(1, (r.adults || 0) + (r.children || 0) || 2) }, (_, i) => ({
      name: i === 0 ? r.guestName || "" : "",
      age: "",
    })),
    transport: "",
    ownMode: "",
    arrivals: [],
    departures: [],
    ownArrival: { airline: "", flight: "", date: r.checkIn, time: "", intl: true },
    ownDeparture: { airline: "", flight: "", date: r.checkOut, time: "", intl: true },
    lateCheckout: { want: false, time: "1:00 pm" },
    grocery: "",
    diet: [],
    meals: allDays.map((date) => ({
      date,
      breakfast: { on: breakfastDays.includes(date), time: "9:00 am", savory: "", sweet: "" },
      lunch: { on: false, time: "2:00 pm", dishes: [] },
      dinner: { on: false, time: "7:30 pm", dishes: [] },
    })),
    extraMeals: "",
    carts: [],
    celebrations: [],
    activities: [],
    notes: "",
    confirmName: "",
    confirmed: false,
  };
}

/** Plain-text summary for the concierge (Sanity) and the guest's review step. */
/** Quick reservations (not Discover activities): key stored in the answers → label. */
export const RESERVATION_LABELS: Record<string, { en: string; es: string }> = {
  "Dinner reservation": { en: "Dinner reservation", es: "Reservación para cenar" },
  "Tee time": { en: "Tee time", es: "Horario de golf" },
  "Tennis / padel / pickleball court": { en: "Tennis / padel / pickleball court", es: "Cancha de tenis / pádel / pickleball" },
};

export type ItinerarySection = { title: string; note?: string; items: string[] };
export type Itinerary = {
  lang: "en" | "es";
  guest: { label: string; value: string }[];
  stay: { villa: string; dates: string };
  sections: ItinerarySection[];
  confirmedBy: { label: string; value: string };
};

/** The guest's answers organized in sections, in English (concierge) or the guest's language. */
export function itinerary(r: Reservation, a: ArrivalAnswers, lang: "en" | "es" = "en"): Itinerary {
  const es = lang === "es";
  const t = (en: string, esText: string) => (es ? esText : en);
  const d = (iso: string, withYear = false) => fmtDate(iso, es, withYear);
  const n = (k: number, one: string, many: string) => `${k} ${k === 1 ? one : many}`;
  const sections: ItinerarySection[] = [];
  const add = (title: string, items: string[], note?: string) => {
    if (items.length) sections.push({ title, items, ...(note ? { note } : {}) });
  };

  const guest = [
    { label: t("Main guest", "Huésped principal"), value: a.main.name },
    { label: t("Phone", "Teléfono"), value: a.main.phone },
    { label: t("Email", "Correo"), value: a.main.email },
    { label: t("Address", "Dirección"), value: a.main.address },
  ].filter((x) => x.value.trim());

  // Group
  const c = groupCounts(a.people);
  add(
    t("Group", "Grupo"),
    [
      ...a.people.filter((p) => p.name.trim()).map((p, i) => `${i + 1}. ${p.name}${p.age ? ` (${p.age})` : ""}`),
      `${t("Access cards (estimate)", "Tarjetas de acceso (estimado)")}: USD ${accessFeeUsd(a.people).toFixed(2)}`,
    ],
    es
      ? `${n(c.adults, "adulto mayor de 13", "adultos mayores de 13")}, ${n(c.children, "niño de 5 a 13", "niños de 5 a 13")}, ${n(c.under5, "menor de 5", "menores de 5")}`
      : `${n(c.adults, "adult", "adults")} over 13, ${n(c.children, "child", "children")} 5–13, ${c.under5} under 5`
  );

  // Transfers / arrival
  const kind = (intl: boolean) => (intl ? t("international", "internacional") : t("domestic", "nacional"));
  const flightLines = (list: Flight[], departure: boolean) =>
    list.map((f) => {
      const extras = [
        f.carSeats ? `${f.carSeats} ${t("car seat(s)", "silla(s) para auto")}` : "",
        f.boosters ? `${f.boosters} ${t("booster(s)", "booster(s)")}` : "",
      ].filter(Boolean).join(", ");
      const pickup = pickupFor(f.time, f.intl);
      return (
        `${d(f.date)} · ${f.party} · ${f.airline} ${f.flight} ${t("at", "a las")} ${f.time} · ${f.people} ${t("people", "personas")} · ${vehicleName(f.vehicle)}` +
        (departure ? ` · ${kind(f.intl)}${pickup ? ` · ${t("pickup", "recogida")} ${pickup}` : ""}` : "") +
        (extras ? ` · ${extras}` : "")
      );
    });
  if (a.transport === "yes") {
    add(t("Airport transfers · arrivals", "Traslados · llegadas"), flightLines(a.arrivals, false));
    add(t("Airport transfers · departures", "Traslados · salidas"), flightLines(a.departures, true));
  }
  if (a.transport === "no") {
    const o = a.ownArrival, dep = a.ownDeparture;
    const items: string[] = [];
    if (a.ownMode === "car") {
      const w = carArrivalWindow(o.time);
      if (o.time) items.push(`${t("Arriving by car", "Llegada en auto")}: ${d(o.date)} ~${o.time}` + (w ? ` (${t("concierge waits", "el concierge espera de")} ${w.from}–${w.to})` : ""));
      if (dep.time) items.push(`${t("Leaving the villa", "Salida de la villa")}: ${d(dep.date)} ${dep.time}`);
      add(t("Arrival · no transfers (by car)", "Llegada · sin traslados (en auto)"), items.length ? items : ["—"]);
    } else {
      const w = villaArrivalWindow(o.time);
      if (o.flight || o.time)
        items.push(
          `${t("Arrival flight", "Vuelo de llegada")}: ${d(o.date)} · ${o.airline} ${o.flight} ${t("lands", "aterriza")} ${o.time}` +
            (w ? ` · ${t("expected at the villa", "llegada estimada a la villa")} ~${w.eta} (${t("concierge waits", "el concierge espera de")} ${w.from}–${w.to})` : "")
        );
      if (dep.flight || dep.time) items.push(`${t("Departure flight", "Vuelo de salida")}: ${d(dep.date)} · ${dep.airline} ${dep.flight} ${t("at", "a las")} ${dep.time} (${kind(dep.intl)})`);
      add(t("Arrival · no transfers (own transportation)", "Llegada · sin traslados (transporte propio)"), items.length ? items : ["—"]);
    }
  }
  if (a.lateCheckout?.want)
    add(t("Late check-out", "Salida tardía"), [t(`Requested until ${a.lateCheckout.time} (to be confirmed)`, `Solicitada hasta las ${a.lateCheckout.time} (por confirmar)`)]);

  // Food
  add(t("Grocery pre-stocking", "Despensa antes de llegar"), [
    a.grocery === "yes" ? t("Yes – send the grocery link", "Sí – enviar el enlace de despensa") : a.grocery === "no" ? "No" : "—",
  ]);
  add(
    t("Allergies & diet", "Alergias y dieta"),
    a.diet.map((x) => `${x.who || "?"}: ${[...x.tags.map((tg) => { const k = DIET_TAGS.find((y) => y.key === tg); return k ? (es ? k.es : k.en) : tg; }), x.notes].filter(Boolean).join(", ")}`)
  );
  const mealLines: string[] = [];
  for (const m of a.meals) {
    const parts: string[] = [];
    if (m.breakfast.on)
      parts.push(`${t("Breakfast", "Desayuno")} ${m.breakfast.time}${m.breakfast.savory ? ` – ${t("savory", "salado")}: ${m.breakfast.savory}` : ""}${m.breakfast.sweet ? ` – ${t("sweet", "dulce")}: ${m.breakfast.sweet}` : ""}`);
    if (m.lunch.on) parts.push(`${t("Lunch", "Comida")} ${m.lunch.time}${m.lunch.dishes.length ? ` – ${m.lunch.dishes.join(", ")}` : ""}`);
    if (m.dinner.on) parts.push(`${t("Dinner", "Cena")} ${m.dinner.time}${m.dinner.dishes.length ? ` – ${m.dinner.dishes.join(", ")}` : ""}`);
    if (parts.length) mealLines.push(`${d(m.date)}: ${parts.join(" | ")}`);
  }
  add(t("Meals", "Comidas"), mealLines);

  // Extras
  add(
    t("Extra golf carts", "Carritos de golf adicionales"),
    a.carts.map((g) => `${g.qty} × ${g.size} ${t("passengers", "pasajeros")} · ${d(g.from)} → ${d(g.to)}`),
    t("one 6-passenger cart is included", "incluye un carrito de 6 pasajeros")
  );
  add(
    t("Celebrations", "Celebraciones"),
    a.celebrations.map(
      (x) =>
        `${d(x.date)} · ${x.occasion}${
          x.prepare.length ? ` · ${t("prepare", "preparar")}: ${x.prepare.map((p) => { const k = CELEBRATION_EXTRAS.find((e) => e.key === p); return k ? (es ? k.es : k.en) : p; }).join(", ")}` : ""
        }${x.notes ? ` · ${x.notes}` : ""}`
    )
  );
  add(
    t("Activities & reservations", "Actividades y reservaciones"),
    a.activities.map((x) => {
      const when = x.flexible
        ? t("any day", "cualquier día")
        : x.slots.filter((sl) => sl.date).map((sl) => `${d(sl.date)}${sl.time ? ` ${sl.time}` : ""}`).join(t(" or ", " o ")) || t("dates to confirm", "fechas por confirmar");
      const act = RESERVATION_LABELS[x.activity] ? (es ? RESERVATION_LABELS[x.activity].es : RESERVATION_LABELS[x.activity].en) : x.activity;
      return `${x.option || act}${x.option ? ` (${act})` : ""} · ${when}${x.people ? ` · ${x.people} ${t("people", "personas")}` : ""}${x.notes ? ` · ${x.notes}` : ""}`;
    })
  );
  if (a.notes.trim()) add(t("Other notes", "Otras notas"), [a.notes.trim()]);

  return {
    lang,
    guest,
    stay: { villa: r.villa, dates: `${d(r.checkIn, true)} → ${d(r.checkOut, true)}` },
    sections,
    confirmedBy: { label: t("Confirmed by", "Confirmado por"), value: a.confirmName },
  };
}

/**
 * Plain-text summary of the guest's answers. English for the concierge (Sanity);
 * the guest's own language on the review screen.
 */
export function summarize(r: Reservation, a: ArrivalAnswers, lang: "en" | "es" = "en"): string {
  const it = itinerary(r, a, lang);
  const L: string[] = [];
  it.guest.forEach((g, i) => L.push(i === 0 ? `${g.label.toUpperCase()}: ${g.value}` : `${g.label}: ${g.value}`));
  L.push(`${it.stay.villa} · ${it.stay.dates}`);
  for (const sec of it.sections) {
    L.push("", `${sec.title.toUpperCase()}${sec.note ? ` (${sec.note})` : ""}`);
    sec.items.forEach((x) => L.push(/^\d+\. /.test(x) ? x : `- ${x}`));
  }
  L.push("", `${it.confirmedBy.label}: ${it.confirmedBy.value}`);
  return L.join("\n");
}

/** Small random id for list rows. */
export const rid = () => Math.random().toString(36).slice(2, 9);

/** A demo reservation, so the form can be tried at /arrival/demo before setup. */
export const DEMO_RESERVATION: Reservation = {
  id: "demo",
  code: "demo",
  guestName: "Alex Johnson",
  email: "",
  phone: "",
  villa: "Villa Brezza",
  propertyType: "villa",
  checkIn: "2026-12-19",
  checkOut: "2026-12-26",
  answers: null,
  submittedAt: null,
};
