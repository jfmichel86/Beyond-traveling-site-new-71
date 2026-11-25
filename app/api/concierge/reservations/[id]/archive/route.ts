// Concierge panel: archive a reservation (hide it from the lists) or bring it back.
// POST /api/concierge/reservations/<id>/archive  { archived: true | false }
import { NextResponse } from "next/server";
import { getSession } from "@/lib/conciergeAuth";
import { conciergeReady, getReservationById, setArchived } from "@/lib/concierge";

export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const session = getSession();
  if (!session) return NextResponse.json({ ok: false, error: "signin" }, { status: 401 });
  if (!conciergeReady()) return NextResponse.json({ ok: true, demo: true });
  let archived = true;
  try {
    const body = (await req.json()) as { archived?: unknown };
    archived = body.archived !== false;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  try {
    if (!(await getReservationById(params.id))) return NextResponse.json({ ok: false }, { status: 404 });
    await setArchived(params.id, archived, session.email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "save-failed" }, { status: 500 });
  }
}
