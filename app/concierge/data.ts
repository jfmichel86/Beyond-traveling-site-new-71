// Server-side helpers for the concierge pages (real data, or sample data when Sanity isn't set up locally).
import { conciergeReady, getReservationById, listReservations, type PanelReservation } from "@/lib/concierge";
import { DEMO_PANEL } from "@/lib/conciergeDemo";
import { mergeServices, servicesFromAnswers, serviceTotals } from "@/lib/conciergeServices";
import { fmtDate } from "@/lib/arrival";

export const isDemo = () => !conciergeReady();

/** A reservation's services: the saved ones, or built from the guest's answers if the concierge hasn't opened it yet. */
export const servicesOf = (r: PanelReservation) =>
  r.services.length || !r.answers ? r.services : mergeServices([], servicesFromAnswers(r, r.answers));

export async function loadAll(): Promise<PanelReservation[]> {
  return isDemo() ? DEMO_PANEL : listReservations();
}

export async function loadOne(id: string): Promise<PanelReservation | null> {
  if (isDemo()) return DEMO_PANEL.find((r) => r.id === id) || null;
  return getReservationById(id);
}

export const STEP_NAMES = ["Bienvenida", "Tu grupo", "Traslados", "Comidas", "Carritos de golf", "Celebraciones y actividades", "Revisión"];

export type GuideState = { state: "received" | "incomplete" | "not-started"; label: string; note: string };

export function guideState(r: PanelReservation): GuideState {
  const n = r.reminders.length;
  const rem = n ? `${n} recordatorio${n > 1 ? "s" : ""}` : "Sin recordatorios";
  if (r.submittedAt) return { state: "received", label: `Recibida · ${fmtDate(r.submittedAt.slice(0, 10), true)}`, note: rem };
  if (r.draft) return { state: "incomplete", label: "Incompleta", note: `Se quedó en ${STEP_NAMES[r.draft.step] || "el paso " + (r.draft.step + 1)} · ${rem}` };
  return { state: "not-started", label: "Sin abrir", note: rem };
}

export const nights = (a: string, b: string) =>
  Math.max(0, Math.round((new Date(`${b}T12:00:00`).getTime() - new Date(`${a}T12:00:00`).getTime()) / 86400000));

export const peopleText = (r: PanelReservation) => {
  const total = (r.adults || 0) + (r.children || 0);
  return total ? `${total} huéspedes` : "";
};

export function rowOf(r: PanelReservation) {
  const t = serviceTotals(servicesOf(r), r.addVat);
  return {
    id: r.id,
    bookingId: r.id.startsWith("booking-") ? r.id.slice(8) : "",
    guest: r.guestName,
    villa: r.villa,
    checkIn: r.checkIn,
    checkOut: r.checkOut,
    dates: `${fmtDate(r.checkIn, true)} → ${fmtDate(r.checkOut, true)}`,
    people: peopleText(r),
    guide: guideState(r),
    confirmed: t.confirmed,
    active: t.active,
    total: t.total,
  };
}
export type Row = ReturnType<typeof rowOf>;
