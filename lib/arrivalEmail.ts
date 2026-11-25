// ─────────────────────────────────────────────────────────────
// Designed HTML emails for the arrival guide (concierge + guest copy).
// Email-safe: tables and inline styles only, Beyond Traveling colors.
// Sent by the Concierge Master Sheet's Apps Script (see lib/concierge.ts).
// ─────────────────────────────────────────────────────────────

import type { Itinerary } from "@/lib/arrival";

const NAVY = "#1E3A5F";
const GOLD = "#B8863E";
const GOLD_TEXT = "#8F6A2E";
const CREAM = "#F8F4EC";
const SAND = "#ECE3D2";
const TEXT = "#33363B";
const MUTED = "#5A5E65";
const SERIF = "Georgia,'Times New Roman',serif";
const SANS = "Helvetica,Arial,sans-serif";

const esc = (s: string) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

type Audience = "concierge" | "guest";

export function renderArrivalEmail(
  it: Itinerary,
  o: { audience: Audience; link: string; guestName: string; bookingId?: string }
): string {
  const es = it.lang === "es";
  const t = (en: string, esText: string) => (es ? esText : en);
  const first = (o.guestName || "").trim().split(/\s+/)[0] || "";

  const title =
    o.audience === "concierge" ? "Arrival guide received" : t("Your arrival guide", "Tu guía de llegada");
  const intro =
    o.audience === "concierge"
      ? `<b>${esc(o.guestName)}</b> sent their arrival guide${o.bookingId ? ` (${esc(o.bookingId)})` : ""}. Reply to this email to write to the guest directly.`
      : t(
          `Hi ${esc(first)}, thank you! We received your arrival guide. Here is a copy of everything you sent. Your concierge will check availability and prepare your itinerary.`,
          `Hola ${esc(first)}, ¡gracias! Recibimos tu guía de llegada. Esta es una copia de todo lo que nos enviaste. Tu concierge revisará la disponibilidad y preparará tu itinerario.`
        );
  const button =
    o.audience === "concierge" ? "Open the guest's form" : t("Review or change my answers", "Revisar o cambiar mis respuestas");

  const guestRows = it.guest
    .map(
      (g) => `<tr>
        <td style="padding:4px 0;font:13px/1.5 ${SANS};color:${MUTED};width:120px;vertical-align:top">${esc(g.label)}</td>
        <td style="padding:4px 0;font:14px/1.5 ${SANS};color:${TEXT}">${esc(g.value)}</td></tr>`
    )
    .join("");

  const sections = it.sections
    .map((sec) => {
      const items = sec.items
        .map(
          (x) => `<tr><td style="padding:9px 0;border-bottom:1px solid ${SAND};font:14px/1.55 ${SANS};color:${TEXT}">${esc(x)}</td></tr>`
        )
        .join("");
      return `<tr><td style="padding:22px 32px 0">
        <p style="margin:0 0 4px;font:600 11px/1.4 ${SANS};letter-spacing:2px;text-transform:uppercase;color:${GOLD_TEXT}">${esc(sec.title)}</p>
        ${sec.note ? `<p style="margin:0 0 4px;font:13px/1.5 ${SANS};color:${MUTED}">${esc(sec.note)}</p>` : ""}
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${items}</table>
      </td></tr>`;
    })
    .join("");

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:${CREAM}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM}">
<tr><td align="center" style="padding:24px 12px">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${SAND}">
    <tr><td style="background:${NAVY};padding:28px 32px">
      <p style="margin:0;font:600 11px/1.4 ${SANS};letter-spacing:3px;color:${GOLD}">BEYOND TRAVELING</p>
      <p style="margin:10px 0 0;font:normal 28px/1.2 ${SERIF};color:#ffffff">${esc(title)}</p>
    </td></tr>
    <tr><td style="padding:24px 32px 0">
      <p style="margin:0;font:15px/1.6 ${SANS};color:${TEXT}">${intro}</p>
    </td></tr>
    <tr><td style="padding:20px 32px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-left:3px solid ${GOLD}">
        <tr><td style="padding:16px 18px">
          <p style="margin:0;font:600 11px/1.4 ${SANS};letter-spacing:2px;text-transform:uppercase;color:${GOLD_TEXT}">${esc(t("Your stay", "Tu estancia"))}</p>
          <p style="margin:6px 0 2px;font:normal 22px/1.25 ${SERIF};color:${NAVY}">${esc(it.stay.villa)}</p>
          <p style="margin:0 0 10px;font:14px/1.5 ${SANS};color:${TEXT}">${esc(it.stay.dates)}</p>
          <table role="presentation" cellpadding="0" cellspacing="0">${guestRows}</table>
        </td></tr>
      </table>
    </td></tr>
    ${sections}
    <tr><td align="center" style="padding:30px 32px 8px">
      <a href="${esc(o.link)}" style="display:inline-block;background:${NAVY};color:#ffffff;text-decoration:none;font:600 13px/1 ${SANS};letter-spacing:2px;text-transform:uppercase;padding:15px 26px">${esc(button)}</a>
    </td></tr>
    <tr><td style="padding:10px 32px 26px">
      <p style="margin:0;font:12px/1.5 ${SANS};color:${MUTED};text-align:center">${esc(it.confirmedBy.label)}: ${esc(it.confirmedBy.value)}</p>
    </td></tr>
    <tr><td style="background:${CREAM};padding:18px 32px;border-top:1px solid ${SAND}">
      <p style="margin:0;font:12px/1.6 ${SANS};color:${MUTED};text-align:center">
        Beyond Traveling Concierge · Punta Mita, Nayarit<br>
        ${o.audience === "guest" ? esc(t("Questions? Just reply to this email.", "¿Preguntas? Solo responde a este correo.")) : "concierge@beyondtravelingmx.com"}
      </p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

/** "Guía de Llegada - Name - Property - 4 ene – 8 ene 2027" / "Arrival Guide - Name - Property - Jan 4 – Jan 8, 2027" */
export function arrivalSubject(lang: "en" | "es", guestName: string, villa: string, checkIn: string, checkOut: string): string {
  const es = lang === "es";
  const at = (iso: string) => new Date(`${iso}T12:00:00`);
  const sameYear = checkIn.slice(0, 4) === checkOut.slice(0, 4);
  const fmt = (iso: string, year: boolean) =>
    at(iso).toLocaleDateString(es ? "es-MX" : "en-US", { day: "numeric", month: "short", ...(year ? { year: "numeric" } : {}) }).replace(/\./g, "");
  const dates = `${fmt(checkIn, !sameYear)} – ${fmt(checkOut, true)}`;
  return [es ? "Guía de Llegada" : "Arrival Guide", guestName, villa, dates].filter((x) => String(x || "").trim()).join(" - ");
}

/** Reminder for a guest who hasn't sent the arrival guide (not started, or left half done). */
export function renderReminderEmail(o: {
  lang: "en" | "es";
  kind: "not-started" | "incomplete";
  guestName: string;
  villa: string;
  dates: string;
  daysToArrival: number;
  link: string;
}): { html: string; text: string } {
  const es = o.lang === "es";
  const t = (en: string, esText: string) => (es ? esText : en);
  const first = (o.guestName || "").trim().split(/\s+/)[0] || "";
  const title = o.kind === "incomplete" ? t("You're almost done", "Ya casi terminas") : t("Your arrival guide is waiting", "Tu guía de llegada te espera");
  const days = o.daysToArrival;
  const when = es ? `en ${days} ${days === 1 ? "día" : "días"}` : `in ${days} ${days === 1 ? "day" : "days"}`;
  const body =
    o.kind === "incomplete"
      ? t(
          `Hi ${first}, you started your arrival guide for ${o.villa} but haven't sent it yet. Your answers are saved: open the link to continue right where you left off. It only takes a few minutes.`,
          `Hola ${first}, empezaste tu guía de llegada para ${o.villa} pero todavía no la envías. Tus respuestas están guardadas: abre el enlace para continuar donde te quedaste. Solo toma unos minutos.`
        )
      : t(
          `Hi ${first}, your stay at ${o.villa} is ${when}. Please fill in your arrival guide so we can prepare everything: your group, flights, meals, golf carts and anything you'd like to book. It takes about 5 minutes.`,
          `Hola ${first}, tu estancia en ${o.villa} es ${when}. Llena tu guía de llegada para que preparemos todo: tu grupo, vuelos, comidas, carritos de golf y lo que quieras reservar. Toma unos 5 minutos.`
        );
  const button = o.kind === "incomplete" ? t("Continue my arrival guide", "Continuar mi guía de llegada") : t("Fill in my arrival guide", "Llenar mi guía de llegada");

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:${CREAM}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM}">
<tr><td align="center" style="padding:24px 12px">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${SAND}">
    <tr><td style="background:${NAVY};padding:28px 32px">
      <p style="margin:0;font:600 11px/1.4 ${SANS};letter-spacing:3px;color:${GOLD}">BEYOND TRAVELING</p>
      <p style="margin:10px 0 0;font:normal 28px/1.2 ${SERIF};color:#ffffff">${esc(title)}</p>
    </td></tr>
    <tr><td style="padding:26px 32px 0">
      <p style="margin:0;font:15px/1.6 ${SANS};color:${TEXT}">${esc(body)}</p>
    </td></tr>
    <tr><td style="padding:20px 32px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM}">
        <tr><td style="padding:14px 18px">
          <p style="margin:0;font:normal 20px/1.25 ${SERIF};color:${NAVY}">${esc(o.villa)}</p>
          <p style="margin:2px 0 0;font:14px/1.5 ${SANS};color:${TEXT}">${esc(o.dates)}</p>
        </td></tr>
      </table>
    </td></tr>
    <tr><td align="center" style="padding:28px 32px 30px">
      <a href="${esc(o.link)}" style="display:inline-block;background:${NAVY};color:#ffffff;text-decoration:none;font:600 13px/1 ${SANS};letter-spacing:2px;text-transform:uppercase;padding:15px 26px">${esc(button)}</a>
    </td></tr>
    <tr><td style="background:${CREAM};padding:18px 32px;border-top:1px solid ${SAND}">
      <p style="margin:0;font:12px/1.6 ${SANS};color:${MUTED};text-align:center">Beyond Traveling Concierge · Punta Mita, Nayarit<br>${esc(t("Questions? Just reply to this email.", "¿Preguntas? Solo responde a este correo."))}</p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
  const text = `${title}\n\n${body}\n\n${o.villa} · ${o.dates}\n\n${button}: ${o.link}`;
  return { html, text };
}
