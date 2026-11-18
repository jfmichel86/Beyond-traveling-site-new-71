// Saves a guest's arrival form on their reservation (private concierge dataset).
// POST /api/arrival/<code>  { answers }
import { NextResponse } from "next/server";
import { getReservation, isValidCode, saveAnswers, conciergeReady } from "@/lib/concierge";
import { summarize, type ArrivalAnswers } from "@/lib/arrival";

export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const code = params.code;
  if (code !== "demo" && !isValidCode(code)) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });

  const raw = await req.text();
  if (raw.length > 200_000) return NextResponse.json({ ok: false, error: "too-large" }, { status: 413 });

  let answers: ArrivalAnswers;
  try {
    answers = (JSON.parse(raw) as { answers: ArrivalAnswers }).answers;
    if (!answers || typeof answers !== "object" || !answers.main || !Array.isArray(answers.people)) throw new Error();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-data" }, { status: 400 });
  }

  // The demo link never saves anything
  if (code === "demo") return NextResponse.json({ ok: true, demo: true });

  if (!conciergeReady()) return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });

  try {
    const reservation = await getReservation(code);
    if (!reservation) return NextResponse.json({ ok: false, error: "not-found" }, { status: 404 });
    await saveAnswers(reservation.id, answers, summarize(reservation, answers));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "save-failed" }, { status: 500 });
  }
}
