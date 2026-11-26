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
import { arrivalSubject, renderReminderEmail, grocerySubject, renderGroceryReminderEmail } from "@/lib/arrivalEmail";
import { fmtDate, addDays, GROCERY_FEE, GROCERY_LATE_FEE } from "@/lib/arrival";
import { GROCERY_DEADLINE_DAYS } from "@/lib/groceryList";

const DAY = 86400_000;
const MILESTONES = [14, 7, 3];

const todayIso = () => new Date(Date.now() - 6 * 3600_000).toISOString().slice(0, 10); // Mexico time
export const daysToArrival = (r: PanelReservation) =>
  Math.round((new Date(`${r.checkIn}T12:00:00Z`).getTime() - new Date(`${todayIso()}T12:00:00Z`).getTime()) / DAY);

export type DueReminder = { kind: "not-started" | "incomplete"; tag: string };

export function dueReminder(r: PanelReservation, now = Date.now()): DueReminder | null {
  if (r.archived || r.submittedAt || !r.email || !/@/.test(r.email)) return null;
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

// ─── Grocery list reminders ──────────────────────────────────────────────────
// Guests who asked for grocery pre-stocking in their guide and haven't sent the
// list: one reminder a day from 10 days before arrival until the day before.
// From 6 days before, the email warns about the late fee; under 5 days it says
// the late fee applies. The concierge can also send one from the panel.

const GROCERY_FIRST_REMINDER_DAYS = 10;
const LATE_WARNING_DAYS = 6;

/** Last day to receive the grocery list (YYYY-MM-DD). */
export const groceryDeadline = (r: PanelReservation) => addDays(r.checkIn, -GROCERY_DEADLINE_DAYS);

/** The grocery page, filled in for this guest; what they send is saved on the reservation. */
export const groceryLink = (r: PanelReservation, lang: "en" | "es") => {
  const name = r.answers?.main?.name || r.draft?.answers?.main?.name || r.guestName;
  const q = new URLSearchParams({ code: r.code, name, villa: r.villa, arrival: r.checkIn });
  return `https://www.beyondtravelingmx.com${lang === "es" ? "/es" : ""}/groceries?${q.toString()}`;
};

/** Reminder tags start with "grocery-" so they never mix with the arrival-guide reminders. */
export const isGroceryReminder = (kind: string) => kind.startsWith("grocery-");

/** Mexico date (YYYY-MM-DD) of an ISO timestamp. */
const mxDate = (iso: string) => new Date(new Date(iso).getTime() - 6 * 3600_000).toISOString().slice(0, 10);

/** True when today's automatic grocery reminder should go out. */
export function groceryReminderDue(r: PanelReservation): boolean {
  if (r.archived || r.grocery || r.answers?.grocery !== "yes") return false;
  const email = r.answers?.main?.email || r.email;
  if (!email || !/@/.test(email)) return false;
  const days = daysToArrival(r);
  if (days < 1 || days > GROCERY_FIRST_REMINDER_DAYS) return false;
  const today = todayIso();
  return !r.reminders.some((x) => isGroceryReminder(x.kind) && mxDate(x.at) === today);
}

export async function sendGroceryReminder(r: PanelReservation, by: string) {
  const email = r.answers?.main?.email || r.email;
  if (!email || !/@/.test(email)) throw new Error("This reservation has no guest email.");
  const lang = reminderLang(r);
  const es = lang === "es";
  const name = r.answers?.main?.name?.trim() || r.guestName;
  const deadlineIso = groceryDeadline(r);
  const days = daysToArrival(r);
  const base = GROCERY_FEE[r.propertyType] || GROCERY_FEE.villa;
  const lateFee = GROCERY_LATE_FEE[r.propertyType];
  const fee =
    lateFee && days <= LATE_WARNING_DAYS
      ? { stage: days < GROCERY_DEADLINE_DAYS ? ("applies" as const) : ("warn" as const), normal: base.mxn, late: lateFee, pct: base.pct }
      : undefined;
  const deadline = new Date(`${deadlineIso}T12:00:00`).toLocaleDateString(es ? "es-MX" : "en-US", { weekday: "long", month: "long", day: "numeric" });
  const { html, text } = renderGroceryReminderEmail({
    lang,
    guestName: name,
    villa: r.villa,
    dates: `${fmtDate(r.checkIn, es, true)} → ${fmtDate(r.checkOut, es, true)}`,
    deadline,
    late: days < GROCERY_DEADLINE_DAYS,
    link: groceryLink(r, lang),
    fee,
  });
  await sendViaSheet({
    email,
    subject: `${es ? "Recordatorio · Lista de despensa" : "Reminder · Grocery list"} - ${grocerySubject(name, r.villa, r.checkIn, r.checkOut, lang)}`,
    html,
    text,
    bookingId: r.id.startsWith("booking-") ? r.id.slice(8) : "",
  });
  await addReminder(r.id, `grocery-${new Date().toISOString().slice(0, 10)}`, by);
}
