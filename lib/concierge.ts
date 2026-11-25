// ─────────────────────────────────────────────────────────────
// Concierge data (reservations and guests' arrival-form answers).
// Kept in a PRIVATE Sanity dataset ("concierge"), separate from the public
// "production" dataset the website reads, because it holds guests' personal
// details. Only the server can read or write it, with SANITY_CONCIERGE_TOKEN
// (set in Vercel → Settings → Environment Variables). Never use this file
// from a "use client" component.
// ─────────────────────────────────────────────────────────────

import { SANITY_PROJECT_ID } from "@/lib/sanity";
import type { ArrivalAnswers, Reservation } from "@/lib/arrival";
import type { ConciergeService } from "@/lib/conciergeServices";

const DATASET = process.env.SANITY_CONCIERGE_DATASET || "concierge";
const API = "2024-01-01";

const token = () => process.env.SANITY_CONCIERGE_TOKEN || "";
export const conciergeReady = () => !!token();

export const isValidCode = (code: string) => /^[a-z0-9]{6,24}$/i.test(code);

// ─── Low-level Sanity calls ──────────────────────────────────────────────────

async function query<T>(groq: string, params: Record<string, unknown> = {}): Promise<T> {
  const url = new URL(`https://${SANITY_PROJECT_ID}.api.sanity.io/v${API}/data/query/${DATASET}`);
  url.searchParams.set("query", groq);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));
  const res = await fetch(url.toString(), { headers: { Authorization: `Bearer ${token()}` }, cache: "no-store" });
  if (!res.ok) throw new Error(`Concierge read failed: ${res.status}`);
  return ((await res.json()) as { result: T }).result;
}

async function mutate(mutations: unknown[]) {
  const res = await fetch(`https://${SANITY_PROJECT_ID}.api.sanity.io/v${API}/data/mutate/${DATASET}?returnIds=false`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ mutations }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Concierge save failed: ${res.status} ${await res.text()}`);
}

const parse = <T,>(json?: string | null): T | null => {
  try {
    return json ? (JSON.parse(json) as T) : null;
  } catch {
    return null;
  }
};

// ─── The guest's arrival guide ──────────────────────────────────────────────

const RESERVATION_FIELDS = `"id": _id, code, guestName, email, phone, villa,
  "propertyType": coalesce(propertyType, "villa"), checkIn, checkOut, adults, children,
  answersJson, submittedAt, draftJson, draftStep, draftUpdatedAt, language,
  "services": coalesce(services, [])`;

type RawReservation = Omit<Reservation, "answers" | "draft"> & {
  answersJson?: string | null;
  draftJson?: string | null;
  draftStep?: number | null;
  draftUpdatedAt?: string | null;
  language?: string | null;
  services?: ConciergeService[];
};

function toReservation(raw: RawReservation): Reservation & { services: ConciergeService[] } {
  const { answersJson, draftJson, draftStep, draftUpdatedAt, ...rest } = raw;
  const draftAnswers = parse<ArrivalAnswers>(draftJson);
  return {
    ...rest,
    services: raw.services || [],
    answers: parse<ArrivalAnswers>(answersJson),
    draft: draftAnswers ? { answers: draftAnswers, step: draftStep ?? 0, updatedAt: draftUpdatedAt || "" } : null,
  };
}

export async function getReservation(code: string) {
  if (!conciergeReady() || !isValidCode(code)) return null;
  const raw = await query<RawReservation | null>(
    `*[_type == "reservation" && code == $code && !(_id in path("drafts.**"))][0]{ ${RESERVATION_FIELDS} }`,
    { code }
  );
  return raw ? toReservation(raw) : null;
}

/** Save the guest's answers on their reservation, and refresh the concierge's service list. */
export async function saveAnswers(id: string, answers: ArrivalAnswers, summary: string, services?: ConciergeService[]) {
  await mutate([
    {
      patch: {
        id,
        set: {
          answersJson: JSON.stringify(answers),
          summary,
          submittedAt: new Date().toISOString(),
          status: "received",
          ...(services ? { services } : {}),
        },
      },
    },
  ]);
}

/** The guest's progress while filling in the guide (so it follows them to another device, and for reminders). */
export async function saveDraft(id: string, answers: ArrivalAnswers, step: number, lang: "en" | "es") {
  await mutate([
    { patch: { id, set: { draftJson: JSON.stringify(answers), draftStep: step, draftUpdatedAt: new Date().toISOString(), draftLang: lang } } },
  ]);
}

// ─── Concierge panel ────────────────────────────────────────────────────────

export type Reminder = { _key: string; at: string; kind: string; by: string };

export type PanelReservation = Reservation & {
  services: ConciergeService[];
  generalNotes: string;
  addVat: boolean;
  reminders: Reminder[];
  summary: string;
  draftLang: "en" | "es" | "";
  createdAt: string;
};

const PANEL_FIELDS = `${RESERVATION_FIELDS}, summary, generalNotes, draftLang,
  "addVat": coalesce(addVat, true), "reminders": coalesce(reminders, []), "createdAt": _createdAt`;

type RawPanel = RawReservation & { summary?: string; generalNotes?: string; addVat?: boolean; reminders?: Reminder[]; draftLang?: string; createdAt: string };

function toPanel(raw: RawPanel): PanelReservation {
  return {
    ...toReservation(raw),
    summary: raw.summary || "",
    generalNotes: raw.generalNotes || "",
    addVat: raw.addVat !== false,
    reminders: raw.reminders || [],
    draftLang: raw.draftLang === "es" ? "es" : raw.draftLang === "en" ? "en" : "",
    createdAt: raw.createdAt,
  };
}

export async function listReservations(): Promise<PanelReservation[]> {
  const raw = await query<RawPanel[]>(
    `*[_type == "reservation" && !(_id in path("drafts.**"))] | order(checkIn asc){ ${PANEL_FIELDS} }`
  );
  return raw.map(toPanel);
}

export async function getReservationById(id: string): Promise<PanelReservation | null> {
  if (!/^[A-Za-z0-9._-]{1,128}$/.test(id) || id.startsWith("drafts.")) return null;
  const raw = await query<RawPanel | null>(`*[_type == "reservation" && _id == $id][0]{ ${PANEL_FIELDS} }`, { id });
  return raw ? toPanel(raw) : null;
}

/** The concierge's work on a reservation: services (status, cost, notes), general notes, VAT. */
export async function saveConciergeData(id: string, data: { services: ConciergeService[]; generalNotes: string; addVat: boolean }) {
  await mutate([{ patch: { id, set: { services: data.services, generalNotes: data.generalNotes, addVat: data.addVat } } }]);
}

export async function addReminder(id: string, kind: string, by: string) {
  const item: Reminder = { _key: Math.random().toString(36).slice(2, 12), at: new Date().toISOString(), kind, by };
  await mutate([{ patch: { id, setIfMissing: { reminders: [] }, insert: { after: "reminders[-1]", items: [item] } } }]);
}

// ─── Cooks' recipe reviews ───────────────────────────────────────────────────
// Each time a cook sends her review on /cocina/recetas, her FULL recipes (every
// ingredient with her final amount) are saved as a "recipeReview" document, so
// Studio → Concierge → Recetas can download all cooks side by side.

export type ReviewedIngredient = {
  n: string; // ingredient name
  t: "base" | "opcion" | "basico";
  u: [string, string]; // unit singular / plural
  o: number; // original amount (per adult)
  q: number; // the cook's amount (0 when removed)
  x?: boolean; // removed
};
export type ReviewedDish = { id: string; name: string; ingredients: ReviewedIngredient[]; missing: string };
export type RecipeReviewPayload = { cook: string; menu: string; dishes: ReviewedDish[]; message: string };

export async function saveRecipeReview(p: RecipeReviewPayload) {
  const changed = p.dishes.filter(
    (d) => d.missing.trim() || d.ingredients.some((i) => i.x || Math.abs(i.q - i.o) > 1e-9)
  ).length;
  const res = await fetch(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${API}/data/mutate/${DATASET}?returnIds=false`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token()}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: "recipeReview",
              cook: p.cook.trim().slice(0, 80) || "Sin nombre",
              menu: p.menu.slice(0, 40),
              submittedAt: new Date().toISOString(),
              dishCount: p.dishes.length,
              changedCount: changed,
              summary: p.message.slice(0, 20000),
              recipesJson: JSON.stringify(p.dishes),
            },
          },
        ],
      }),
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`Recipe review save failed: ${res.status} ${await res.text()}`);
}

// ─── Email when a guest sends the arrival form ──────────────────────────────

export const arrivalLink = (r: Reservation, lang: "en" | "es") =>
  `https://www.beyondtravelingmx.com${lang === "es" ? "/es" : ""}/arrival/${r.code}`;
// The Concierge Master Sheet's Apps Script (deployed as a web app) emails the
// full details to concierge@ and a copy to the guest, and marks the booking.
// Set in Vercel: ARRIVAL_NOTIFY_URL (the web app URL) and ARRIVAL_NOTIFY_SECRET.

export async function notifyArrival(
  r: Reservation,
  m: { summary: string; guestSummary: string; conciergeHtml: string; guestHtml: string; conciergeSubject: string; guestSubject: string },
  lang: "en" | "es"
) {
  const url = process.env.ARRIVAL_NOTIFY_URL;
  const secret = process.env.ARRIVAL_NOTIFY_SECRET;
  if (!url || !secret) return;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        bookingId: r.id.startsWith("booking-") ? r.id.slice("booking-".length) : "",
        guestName: r.guestName,
        email: r.email || "",
        villa: r.villa,
        checkIn: r.checkIn,
        checkOut: r.checkOut,
        lang,
        summary: m.summary, // plain text, English (concierge)
        guestSummary: m.guestSummary, // plain text, guest's language
        conciergeHtml: m.conciergeHtml, // designed email for the concierge
        guestHtml: m.guestHtml, // designed email for the guest
        conciergeSubject: m.conciergeSubject,
        guestSubject: m.guestSubject,
        link: arrivalLink(r, lang),
      }),
      signal: ctrl.signal,
      cache: "no-store",
    });
    if (!res.ok) console.error("Arrival email failed:", res.status);
  } catch (err) {
    console.error("Arrival email failed:", err);
  } finally {
    clearTimeout(timer);
  }
}

/** Send a ready-made email (e.g. a reminder) through the Concierge Master Sheet's web app. */
export async function sendViaSheet(m: { email: string; subject: string; html: string; text: string; bookingId?: string }) {
  const url = process.env.ARRIVAL_NOTIFY_URL;
  const secret = process.env.ARRIVAL_NOTIFY_SECRET;
  if (!url || !secret) throw new Error("Email is not set up (ARRIVAL_NOTIFY_URL / ARRIVAL_NOTIFY_SECRET).");
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, action: "reminder", ...m }),
      signal: ctrl.signal,
      cache: "no-store",
    });
    const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!res.ok || json.ok === false) throw new Error(`Email failed: ${json.error || res.status}`);
  } finally {
    clearTimeout(timer);
  }
}
