// Concierge panel: remind the guest to send their grocery list.
// POST /api/concierge/reservations/<id>/grocery-remind
import { NextResponse } from "next/server";
import { getSession } from "@/lib/conciergeAuth";
import { conciergeReady, getReservationById } from "@/lib/concierge";
import { sendGroceryReminder } from "@/lib/arrivalReminders";

export const dynamic = "force-dynamic";

export async function POST(_req: Request, { params }: { params: { id: string } }) {
  const session = getSession();
  if (!session) return NextResponse.json({ ok: false, error: "signin" }, { status: 401 });
  if (!conciergeReady()) return NextResponse.json({ ok: true, demo: true });
  try {
    const r = await getReservationById(params.id);
    if (!r) return NextResponse.json({ ok: false }, { status: 404 });
    if (!(r.answers?.main?.email || r.email)) return NextResponse.json({ ok: false, error: "no-email" }, { status: 409 });
    await sendGroceryReminder(r, session.email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 500 });
  }
}
