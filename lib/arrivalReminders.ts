// ─────────────────────────────────────────────────────────────
// Reminders to guests who haven't sent their arrival guide.
// Rules:
//  • Not started: 14, 7 and 3 days before arrival (once each), only if the
//    guide link was created at least 2 days ago.
//  • Started but not sent: 2 days after their last change (once per change).
//  • Never once the guide is sent, without an email, or within 1 day of arrival.
// Server-only.
// ─────────────────────────────────────────────────────────────

import type { PanelReservation } from "@/lib/concierge";
import { arrivalLink, sendViaSheet, addReminder } from "@/lib/concierge";
import { arrivalSubject, renderReminderEmail } from "@/lib/arrivalEmail";
import { fmtDate } from "@/lib/arrival";

const DAY = 86400_000;
const MILESTONES = [14, 7, 3];

const todayIso = () => new Date(Date.now() - 6 * 3600_000).toISOString().slice(0, 10); // Mexico time
export const daysToArrival = (r: PanelReservation) =>
  Math.round((new Date(`${r.checkIn}T12:00:00Z`).getTime() - new Date(`${todayIso()}T12:00:00Z`).getTime()) / DAY);

export type DueReminder = { kind: "not-started" | "incomplete"; tag: string };

export function dueReminder(r: PanelReservation, now = Date.now()): DueReminder | null {
  if (r.submittedAt || !r.email || !/@/.test(r.email)) return null;
  const days = daysToArrival(r);
  if (days < 1) return null;
  const sent = new Set(r.reminders.map((x) => x.kind));

  if (r.draft?.updatedAt) {
    const updated = new Date(r.draft.updatedAt).getTime();
    const tag = `incomplete-${r.draft.updatedAt.slice(0, 10)}`;
    if (now - updated >= 2 * DAY && !sent.has(tag)) return { kind: "incomplete", tag };
    return null;
  }

  if (now - new Date(r.createdAt).getTime() < 2 * DAY) return null;
  const target = MILESTONES.filter((m) => days <= m).sort((a, b) => a - b)[0];
  if (!target) return null;
  const tag = `before-${target}`;
  return sent.has(tag) ? null : { kind: "not-started", tag };
}

export function reminderLang(r: PanelReservation): "en" | "es" {
  return r.draftLang === "es" || (!r.draftLang && r.language === "es") ? "es" : "en";
}

/** Sends one reminder now and records it on the reservation. */
export async function sendReminder(r: PanelReservation, kind: "not-started" | "incomplete", tag: string, by: string) {
  if (!r.email) throw new Error("This reservation has no guest email.");
  const lang = reminderLang(r);
  const name = r.draft?.answers?.main?.name?.trim() || r.guestName;
  const { html, text } = renderReminderEmail({
    lang,
    kind,
    guestName: name,
    villa: r.villa,
    dates: `${fmtDate(r.checkIn, lang === "es", true)} → ${fmtDate(r.checkOut, lang === "es", true)}`,
    daysToArrival: Math.max(1, daysToArrival(r)),
    link: arrivalLink(r, lang),
  });
  const prefix = lang === "es" ? "Recordatorio · " : "Reminder · ";
  await sendViaSheet({
    email: r.email,
    subject: prefix + arrivalSubject(lang, name, r.villa, r.checkIn, r.checkOut),
    html,
    text,
    bookingId: r.id.startsWith("booking-") ? r.id.slice(8) : "",
  });
  await addReminder(r.id, tag, by);
}
