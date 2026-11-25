// Concierge panel: save the work on one reservation (services, notes, VAT).
// PUT /api/concierge/reservations/<id>  { services, generalNotes, addVat }
import { NextResponse } from "next/server";
import { getSession } from "@/lib/conciergeAuth";
import { conciergeReady, getReservationById, saveConciergeData } from "@/lib/concierge";
import { STATUS_ORDER, sortServices, type ConciergeService } from "@/lib/conciergeServices";

export const dynamic = "force-dynamic";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");

function clean(list: unknown): ConciergeService[] | null {
  if (!Array.isArray(list) || list.length > 200) return null;
  const out: ConciergeService[] = [];
  for (const x of list as Record<string, unknown>[]) {
    if (!x || typeof x !== "object") return null;
    const key = str(x.key, 80);
    const _key = str(x._key, 40);
    if (!key || !/^[A-Za-z0-9_-]+$/.test(_key)) return null;
    const status = STATUS_ORDER.includes(x.status as never) ? (x.status as ConciergeService["status"]) : "pending";
    const cost = typeof x.cost === "number" && Number.isFinite(x.cost) && x.cost >= 0 && x.cost < 1e9 ? Math.round(x.cost * 100) / 100 : null;
    out.push({
      _key,
      key,
      source: x.source === "manual" ? "manual" : "guide",
      name: str(x.name, 200),
      detail: str(x.detail, 600),
      when: str(x.when, 200),
      sortDate: /^\d{4}-\d{2}-\d{2}$/.test(str(x.sortDate, 10)) ? str(x.sortDate, 10) : "",
      status,
      cost,
      notes: str(x.notes, 1000),
      charge: x.charge !== false,
      ...(x.guestRemoved ? { guestRemoved: true } : {}),
      ...(typeof x.nameEn === "string" ? { nameEn: str(x.nameEn, 200), detailEn: str(x.detailEn, 600), whenEn: str(x.whenEn, 200) } : {}),
    });
  }
  return sortServices(out);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  if (!getSession()) return NextResponse.json({ ok: false, error: "signin" }, { status: 401 });
  if (!conciergeReady()) return NextResponse.json({ ok: true, demo: true });
  const raw = await req.text();
  if (raw.length > 300_000) return NextResponse.json({ ok: false }, { status: 413 });
  let body: { services?: unknown; generalNotes?: unknown; addVat?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const services = clean(body.services);
  if (!services) return NextResponse.json({ ok: false, error: "bad-data" }, { status: 400 });
  try {
    if (!(await getReservationById(params.id))) return NextResponse.json({ ok: false }, { status: 404 });
    await saveConciergeData(params.id, { services, generalNotes: str(body.generalNotes, 5000), addVat: body.addVat !== false });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "save-failed" }, { status: 500 });
  }
}
