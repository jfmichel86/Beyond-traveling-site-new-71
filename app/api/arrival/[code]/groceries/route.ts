// Saves the grocery list a guest sends from /groceries?code=… on their reservation,
// and lets concierge@ know by email.
// POST /api/arrival/<code>/groceries  { list }
import { NextResponse } from "next/server";
import { getReservation, getReservationById, isValidCode, saveGroceryList, sendViaSheet } from "@/lib/concierge";
import { cleanGroceryList, groceryTextEs } from "@/lib/groceryList";
import { GROCERY_EMAIL } from "@/lib/groceries";
import { renderGroceryReceivedEmail, grocerySubject } from "@/lib/arrivalEmail";
import { fmtDate } from "@/lib/arrival";

export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const code = params.code;
  if (code !== "demo" && !isValidCode(code)) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });

  const raw = await req.text();
  if (raw.length > 200_000) return NextResponse.json({ ok: false, error: "too-large" }, { status: 413 });
  let list;
  try {
    list = cleanGroceryList((JSON.parse(raw) as { list?: unknown }).list);
  } catch {
    list = null;
  }
  if (!list) return NextResponse.json({ ok: false, error: "empty" }, { status: 400 });

  // The demo link never saves anything
  if (code === "demo") return NextResponse.json({ ok: true, demo: true });

  try {
    const r = await getReservation(code);
    if (!r) return NextResponse.json({ ok: false, error: "not-found" }, { status: 404 });
    const again = !!(await getReservationById(r.id))?.grocery;
    await saveGroceryList(r.id, list);

    // Heads-up to the concierge (doesn't block the guest if email fails)
    try {
      const guest = r.answers?.main?.name || r.guestName;
      const { html, text } = renderGroceryReceivedEmail({
        guestName: guest,
        villa: r.villa,
        dates: `${fmtDate(r.checkIn, true)} → ${fmtDate(r.checkOut, true, true)}`,
        updated: again,
        party: list.party,
        allergies: list.allergies,
        listText: groceryTextEs(list),
        count: list.items.length,
        panelLink: `https://www.beyondtravelingmx.com/concierge/${encodeURIComponent(r.id)}/despensa`,
      });
      await sendViaSheet({
        email: GROCERY_EMAIL,
        subject: `${again ? "Lista de despensa actualizada" : "Lista de despensa recibida"} - ${grocerySubject(guest, r.villa, r.checkIn, r.checkOut)}`,
        html,
        text,
        bookingId: r.id.startsWith("booking-") ? r.id.slice(8) : "",
      });
    } catch (err) {
      console.error("Grocery heads-up email failed:", err);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "save-failed" }, { status: 500 });
  }
}
