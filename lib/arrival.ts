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
export function summarize(r: Reservation, a: ArrivalAnswers): string {
  const L: string[] = [];
  const c = groupCounts(a.people);
  L.push(`MAIN GUEST: ${a.main.name}`);
  if (a.main.phone) L.push(`Phone: ${a.main.phone}`);
  if (a.main.email) L.push(`Email: ${a.main.email}`);
  if (a.main.address) L.push(`Address: ${a.main.address}`);
  L.push(`${r.villa} · ${fmtDate(r.checkIn, false, true)} → ${fmtDate(r.checkOut, false, true)}`);
  L.push("", `GROUP (${c.adults} ${c.adults === 1 ? "adult" : "adults"} over 13, ${c.children} ${c.children === 1 ? "child" : "children"} 5–13, ${c.under5} under 5)`);
  a.people.filter((p) => p.name.trim()).forEach((p, i) => L.push(`${i + 1}. ${p.name}${p.age ? ` (${p.age})` : ""}`));
  L.push(`Access cards (estimate): USD ${accessFeeUsd(a.people).toFixed(2)}`);

  const flights = (title: string, list: Flight[], departure: boolean) => {
    if (!list.length) return;
    L.push("", title);
    for (const f of list) {
      const extras = [f.carSeats ? `${f.carSeats} car seat(s)` : "", f.boosters ? `${f.boosters} booster(s)` : ""].filter(Boolean).join(", ");
      L.push(
        `- ${fmtDate(f.date)} · ${f.party} · ${f.airline} ${f.flight} at ${f.time} · ${f.people} people · ${vehicleName(f.vehicle)}` +
          (departure ? ` · ${f.intl ? "international" : "domestic"}${pickupFor(f.time, f.intl) ? ` · pickup ${pickupFor(f.time, f.intl)}` : ""}` : "") +
          (extras ? ` · ${extras}` : "")
      );
    }
  };
  if (a.transport === "no") {
    L.push("", "TRANSFERS: not needed (own transportation)");
    const o = a.ownArrival, d = a.ownDeparture;
    const w = villaArrivalWindow(o.time);
    if (o.flight || o.time) L.push(`- Arrival flight: ${fmtDate(o.date)} · ${o.airline} ${o.flight} lands ${o.time}${w ? ` · expected at the villa ~${w.eta} (concierge waits ${w.from}–${w.to})` : ""}`);
    if (d.flight || d.time) L.push(`- Departure flight: ${fmtDate(d.date)} · ${d.airline} ${d.flight} at ${d.time} (${d.intl ? "international" : "domestic"})`);
  }
  if (a.transport === "yes") {
    flights("ARRIVALS", a.arrivals, false);
    flights("DEPARTURES", a.departures, true);
  }

  if (a.lateCheckout?.want) L.push("", `LATE CHECK-OUT REQUESTED: until ${a.lateCheckout.time} (to be confirmed)`);
  L.push("", `GROCERY PRE-STOCKING: ${a.grocery === "yes" ? "YES – send the grocery link" : a.grocery === "no" ? "No" : "—"}`);
  if (a.diet.length) {
    L.push("", "ALLERGIES & DIET");
    a.diet.forEach((d) => L.push(`- ${d.who || "?"}: ${[...d.tags.map((t) => DIET_TAGS.find((x) => x.key === t)?.en || t), d.notes].filter(Boolean).join(", ")}`));
  }
  const mealLines: string[] = [];
  for (const m of a.meals) {
    const parts: string[] = [];
    if (m.breakfast.on) parts.push(`Breakfast ${m.breakfast.time}${m.breakfast.savory ? ` – savory: ${m.breakfast.savory}` : ""}${m.breakfast.sweet ? ` – sweet: ${m.breakfast.sweet}` : ""}`);
    if (m.lunch.on) parts.push(`Lunch ${m.lunch.time}${m.lunch.dishes.length ? ` – ${m.lunch.dishes.join(", ")}` : ""}`);
    if (m.dinner.on) parts.push(`Dinner ${m.dinner.time}${m.dinner.dishes.length ? ` – ${m.dinner.dishes.join(", ")}` : ""}`);
    if (parts.length) mealLines.push(`${fmtDate(m.date)}: ${parts.join(" | ")}`);
  }
  if (mealLines.length) L.push("", "MEALS", ...mealLines);

  if (a.carts.length) {
    L.push("", "GOLF CARTS");
    a.carts.forEach((g) => L.push(`- ${g.qty} × ${g.size}-passenger · ${fmtDate(g.from)} → ${fmtDate(g.to)}`));
  }
  if (a.celebrations.length) {
    L.push("", "CELEBRATIONS");
    a.celebrations.forEach((x) => L.push(`- ${fmtDate(x.date)} · ${x.occasion}${x.prepare.length ? ` · prepare: ${x.prepare.map((p) => CELEBRATION_EXTRAS.find((e) => e.key === p)?.en || p).join(", ")}` : ""}${x.notes ? ` · ${x.notes}` : ""}`));
  }
  if (a.activities.length) {
    L.push("", "ACTIVITIES & RESERVATIONS");
    a.activities.forEach((x) => {
      const when = x.flexible
        ? "any day"
        : x.slots.filter((s) => s.date).map((s) => `${fmtDate(s.date)}${s.time ? ` ${s.time}` : ""}`).join(" or ") || "dates to confirm";
      L.push(`- ${x.option || x.activity}${x.option ? ` (${x.activity})` : ""} · ${when}${x.people ? ` · ${x.people} people` : ""}${x.notes ? ` · ${x.notes}` : ""}`);
    });
  }
  if (a.notes.trim()) L.push("", "OTHER NOTES", a.notes.trim());
  L.push("", `Confirmed by: ${a.confirmName}`);
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
