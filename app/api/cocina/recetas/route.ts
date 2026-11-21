// Saves a cook's full recipe review (private concierge dataset).
// POST /api/cocina/recetas  { cook, menu, dishes, message }
import { NextResponse } from "next/server";
import { conciergeReady, saveRecipeReview, type RecipeReviewPayload } from "@/lib/concierge";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const raw = await req.text();
  if (raw.length > 300_000) return NextResponse.json({ ok: false, error: "too-large" }, { status: 413 });

  let p: RecipeReviewPayload;
  try {
    p = JSON.parse(raw) as RecipeReviewPayload;
    if (typeof p.cook !== "string" || typeof p.menu !== "string" || !Array.isArray(p.dishes) || p.dishes.length > 100) throw new Error();
    for (const d of p.dishes) {
      if (typeof d.name !== "string" || !Array.isArray(d.ingredients) || typeof d.missing !== "string") throw new Error();
    }
    if (typeof p.message !== "string") p.message = "";
  } catch {
    return NextResponse.json({ ok: false, error: "bad-data" }, { status: 400 });
  }

  if (!conciergeReady()) return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });

  try {
    await saveRecipeReview(p);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "save-failed" }, { status: 500 });
  }
}
