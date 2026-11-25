// Concierge panel: send the guest a reminder now.
// POST /api/concierge/reservations/<id>/remind
import { NextResponse } from "next/server";
import { getSession } from "@/lib/conciergeAuth";
import { conciergeReady, getReservationById } from "@/lib/concierge";
import { sendReminder } from "@/lib/arrivalReminders";

export const dynamic = "force-dynamic";

export async function POST(_req: Request, { params }: { params: { id: string } }) {
  const session = getSession();
  if (!session) return NextResponse.json({ ok: false, error: "signin" }, { status: 401 });
  if (!conciergeReady()) return NextResponse.json({ ok: true, demo: true });
  try {
    const r = await getReservationById(params.id);
    if (!r) return NextResponse.json({ ok: false }, { status: 404 });
    if (r.submittedAt) return NextResponse.json({ ok: false, error: "already-sent" }, { status: 409 });
    if (!r.email) return NextResponse.json({ ok: false, error: "no-email" }, { status: 409 });
    await sendReminder(r, r.draft ? "incomplete" : "not-started", `manual-${new Date().toISOString().slice(0, 10)}`, session.email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 500 });
  }
}
