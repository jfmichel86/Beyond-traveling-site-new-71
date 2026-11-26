import React from "react";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/conciergeAuth";
import { fmtDate, GROCERY_LATE_FEE, groupCounts, carArrivalWindow, villaArrivalWindow, vehicleName } from "@/lib/arrival";
import type { PanelReservation } from "@/lib/concierge";
import PanelTop from "../PanelTop";
import ReservationPanel from "./ReservationPanel";
import { guideState, isDemo, loadOne, nights, peopleText, servicesOf } from "../data";
import { daysToArrival, groceryDeadline, isGroceryReminder } from "@/lib/arrivalReminders";
import { GROCERY_DEADLINE_DAYS } from "@/lib/groceryList";

export const dynamic = "force-dynamic";

/** How the guest is getting there, in one line. */
function arrivalLine(r: PanelReservation): string {
  const a = r.answers || r.draft?.answers;
  if (!a || !a.transport) return "";
  if (a.transport === "yes") {
    const f = a.arrivals[0];
    return f ? `Traslado reservado · ${vehicleName(f.vehicle)} · llega ${fmtDate(f.date, true)} ${f.time}` : "Traslado reservado";
  }
  if (a.ownMode === "car") {
    const w = carArrivalWindow(a.ownArrival.time);
    return `Llega en auto · ${fmtDate(a.ownArrival.date, true)} ~${a.ownArrival.time}${w ? ` (esperar ${w.from}–${w.to})` : ""}`;
  }
  const w = villaArrivalWindow(a.ownArrival.time);
  return `Llega en avión por su cuenta · aterriza ${a.ownArrival.time}${w ? ` · a la villa ~${w.eta}` : ""}`;
}

export default async function ReservationPage({ params }: { params: { id: string } }) {
  const session = getSession();
  if (!session) redirect("/concierge/login");
  const r = await loadOne(decodeURIComponent(params.id));
  if (!r) notFound();

  const a = r.answers;
  const counts = a ? groupCounts(a.people) : null;
  const people = counts
    ? `${counts.total} huéspedes (${counts.adults} adultos, ${counts.children + counts.under5} niños)`
    : peopleText(r);
  const g = guideState(r);
  const guideReminders = r.reminders.filter((x) => !isGroceryReminder(x.kind));
  const groceryReminders = r.reminders.filter((x) => isGroceryReminder(x.kind));
  const lastGr = groceryReminders[groceryReminders.length - 1];
  const email = a?.main.email || r.email || "";
  const lateFeeMxn = GROCERY_LATE_FEE[r.propertyType];
  const mx = (iso: string) => new Date(new Date(iso).getTime() - 6 * 3600_000).toISOString().slice(0, 10);
  const groceryLate = r.grocery ? mx(r.grocery.firstAt) > groceryDeadline(r) : daysToArrival(r) < GROCERY_DEADLINE_DAYS;

  return (
    <>
      <PanelTop email={session.email} back={{ href: "/concierge", label: "Todas las rentas" }} />
      <ReservationPanel
        demo={isDemo()}
        id={r.id}
        bookingId={r.id.startsWith("booking-") ? r.id.slice(8) : ""}
        guest={a?.main.name || r.guestName}
        villa={r.villa}
        checkIn={r.checkIn}
        dates={`${fmtDate(r.checkIn, true)} → ${fmtDate(r.checkOut, true, true)} · ${nights(r.checkIn, r.checkOut)} noches${people ? ` · ${people}` : ""}`}
        contact={[a?.main.phone || r.phone || "", a?.main.email || r.email || ""].filter(Boolean)}
        arrival={arrivalLine(r)}
        guide={g}
        reminders={guideReminders.map((x) => ({ at: fmtDate(x.at.slice(0, 10), true), by: x.by }))}
        canRemind={!r.submittedAt && !!r.email && !r.archived}
        summary={r.summary}
        grocery={{
          received: r.grocery
            ? `Lista recibida · ${fmtDate(r.grocery.sentAt.slice(0, 10), true)}${r.grocery.times > 1 ? ` (actualizada ${r.grocery.times} veces)` : ""}`
            : "",
          items: r.grocery ? r.grocery.list.items.length : 0,
          deadline: fmtDate(groceryDeadline(r), true),
          overdue: !r.grocery && daysToArrival(r) < GROCERY_DEADLINE_DAYS,
          reminders: groceryReminders.length,
          lastReminder: lastGr ? `${fmtDate(lastGr.at.slice(0, 10), true)} (${lastGr.by})` : "",
          canRemind: !r.grocery && !!email && !r.archived && daysToArrival(r) >= 0,
          lateFee: groceryLate && lateFeeMxn ? `Llegó tarde: aplica tarifa de MXN ${lateFeeMxn.toLocaleString("en-US")}` : "",
        }}
        initial={{ services: servicesOf(r), generalNotes: r.generalNotes, addVat: r.addVat }}
        unsaved={!r.services.length && servicesOf(r).length > 0}
        archived={r.archived ? `Archivada${r.archivedAt ? ` el ${fmtDate(r.archivedAt.slice(0, 10), true)}` : ""}${r.archivedBy ? ` por ${r.archivedBy}` : ""}.` : ""}
      />
    </>
  );
}
