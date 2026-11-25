import React from "react";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/conciergeAuth";
import { fmtDate, groupCounts, carArrivalWindow, villaArrivalWindow, vehicleName } from "@/lib/arrival";
import type { PanelReservation } from "@/lib/concierge";
import PanelTop from "../PanelTop";
import ReservationPanel from "./ReservationPanel";
import { guideState, isDemo, loadOne, nights, peopleText, servicesOf } from "../data";

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
        reminders={r.reminders.map((x) => ({ at: fmtDate(x.at.slice(0, 10), true), by: x.by }))}
        canRemind={!r.submittedAt && !!r.email}
        summary={r.summary}
        initial={{ services: servicesOf(r), generalNotes: r.generalNotes, addVat: r.addVat }}
        unsaved={!r.services.length && servicesOf(r).length > 0}
      />
    </>
  );
}
