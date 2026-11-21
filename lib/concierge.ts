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

const DATASET = process.env.SANITY_CONCIERGE_DATASET || "concierge";
const API = "2024-01-01";

const token = () => process.env.SANITY_CONCIERGE_TOKEN || "";
export const conciergeReady = () => !!token();

export const isValidCode = (code: string) => /^[a-z0-9]{6,24}$/i.test(code);

type RawReservation = Omit<Reservation, "answers"> & { answersJson?: string | null };

export async function getReservation(code: string): Promise<Reservation | null> {
  if (!conciergeReady() || !isValidCode(code)) return null;
  const url = new URL(`https://${SANITY_PROJECT_ID}.api.sanity.io/v${API}/data/query/${DATASET}`);
  url.searchParams.set(
    "query",
    `*[_type == "reservation" && code == $code && !(_id in path("drafts.**"))][0]{
      "id": _id, code, guestName, email, phone, villa,
      "propertyType": coalesce(propertyType, "villa"), checkIn, checkOut, adults, children, answersJson, submittedAt
    }`
  );
  url.searchParams.set("$code", JSON.stringify(code));
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token()}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Concierge read failed: ${res.status}`);
  const raw = ((await res.json()) as { result: RawReservation | null }).result;
  if (!raw) return null;
  let answers: ArrivalAnswers | null = null;
  try {
    answers = raw.answersJson ? (JSON.parse(raw.answersJson) as ArrivalAnswers) : null;
  } catch {
    answers = null;
  }
  const { answersJson: _drop, ...rest } = raw;
  void _drop;
  return { ...rest, answers };
}

/** Save the guest's answers on their reservation. */
export async function saveAnswers(id: string, answers: ArrivalAnswers, summary: string) {
  const res = await fetch(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${API}/data/mutate/${DATASET}?returnIds=false`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token()}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        mutations: [
          {
            patch: {
              id,
              set: {
                answersJson: JSON.stringify(answers),
                summary,
                submittedAt: new Date().toISOString(),
                status: "received",
              },
            },
          },
        ],
      }),
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`Concierge save failed: ${res.status} ${await res.text()}`);
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
