// Saves the guest's progress at each step of the arrival guide (not sent yet).
// POST /api/arrival/<code>/draft  { answers, step, lang }
import { NextResponse } from "next/server";
import { getReservation, isValidCode, saveDraft, conciergeReady } from "@/lib/concierge";
import type { ArrivalAnswers } from "@/lib/arrival";

export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const code = params.code;
  if (code === "demo") return NextResponse.json({ ok: true, demo: true });
  if (!isValidCode(code)) return NextResponse.json({ ok: false }, { status: 400 });
  if (!conciergeReady()) return NextResponse.json({ ok: false }, { status: 503 });

  const raw = await req.text();
  if (raw.length > 200_000) return NextResponse.json({ ok: false }, { status: 413 });
  let body: { answers: ArrivalAnswers; step: number; lang?: string };
  try {
    body = JSON.parse(raw);
    if (!body.answers || typeof body.answers !== "object" || !body.answers.main || typeof body.step !== "number") throw new Error();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    const r = await getReservation(code);
    if (!r) return NextResponse.json({ ok: false }, { status: 404 });
    await saveDraft(r.id, body.answers, Math.max(0, Math.min(20, Math.round(body.step))), body.lang === "es" ? "es" : "en");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
