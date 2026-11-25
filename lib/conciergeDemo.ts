// Sample reservations so the concierge panel can be previewed locally
// (npm run dev) before Sanity and Google sign-in are set up. Never saved.
import type { PanelReservation } from "@/lib/concierge";
import type { ConciergeService } from "@/lib/conciergeServices";

const svc = (key: string, name: string, detail: string, when: string, sortDate: string, status: ConciergeService["status"], cost: number | null, notes = "", charge = true): ConciergeService => ({
  _key: key, key, source: "guide", name, detail, when, sortDate, status, cost, notes, charge,
  ...(EN[name] ? { nameEn: EN[name] } : {}),
});
const EN: Record<string, string> = {
  "Traslado de llegada": "Arrival transfer", "Traslado de salida": "Departure transfer", "Carrito de golf adicional": "Extra golf cart",
  "Despensa antes de llegar": "Grocery pre-stocking", "Cena en la villa": "Dinner at the villa", "Celebración: Cumpleaños": "Celebration: Birthday",
};

const base = (id: string, guestName: string, villa: string, checkIn: string, checkOut: string, extra: Partial<PanelReservation>): PanelReservation => ({
  id, code: "demo", guestName, villa, checkIn, checkOut, propertyType: "villa", email: "guest@example.com", phone: "+1 555 000 0000",
  adults: 4, children: 2, answers: null, submittedAt: null, draft: null, language: "en",
  services: [], generalNotes: "", addVat: true, reminders: [], summary: "", draftLang: "", createdAt: "2026-10-20T10:00:00Z",
  ...extra,
});

export const DEMO_PANEL: PanelReservation[] = [
  base("booking-BK-0052", "Alex Johnson", "Villa Brezza", "2026-12-19", "2026-12-26", {
    submittedAt: "2026-11-03T15:00:00Z",
    generalNotes: "El cumpleaños es de la mamá (Linda), sorpresa: no mencionarlo por WhatsApp.",
    reminders: [{ _key: "r1", at: "2026-10-27T16:00:00Z", kind: "before-14", by: "automático" }],
    summary: "MAIN GUEST: Alex Johnson\nPhone: +1 555 000 0000\nEmail: guest@example.com\nVilla Brezza · Sat, Dec 19, 2026 → Sat, Dec 26, 2026\n\nGROUP (4 adults over 13, 2 children 5–13, 0 under 5)\n…",
    services: [
      svc("arr-1", "Traslado de llegada", "Suburban · 6 personas · Delta 1948 · Johnson", "sáb 19 dic · aterriza 3:45 pm", "2026-12-19", "confirmed", 2800, "Chofer: Luis"),
      svc("access-cards", "Tarjetas de acceso Club Punta Mita", "4 adultos, 2 niños de 5 a 13 · estimado USD 266.80", "sáb 19 dic", "2026-12-19", "requested", null),
      svc("cart-1", "Carrito de golf adicional", "1 × 4 pasajeros · 7 días", "sáb 19 dic → sáb 26 dic", "2026-12-19", "confirmed", 12600),
      svc("grocery", "Despensa antes de llegar", "Tarifa MXN 1,200 + 15%, más el costo de la despensa", "vie 18 dic", "2026-12-18", "requested", 1380),
      svc("dinner-2026-12-22", "Cena en la villa", "Grilled Fish, Guacamole", "mar 22 dic · 7:30 pm", "2026-12-22", "requested", 5500),
      svc("act-1", "Yate privado", "Private Yacht, Sailing & Marietas Days · 6 personas · Pedir 2 cotizaciones", "lun 21 dic o mié 23 dic", "2026-12-21", "pending", null),
      svc("act-2", "Reservación para cenar", "6 personas · Café des Artistes", "mié 23 dic 8:00 pm", "2026-12-23", "confirmed", null, "Pagan en el restaurante", false),
      svc("cel-1", "Celebración: Cumpleaños", "Pastel, Decoración", "jue 24 dic", "2026-12-24", "pending", 950),
      svc("dep-1", "Traslado de salida", "Suburban · 6 personas · Delta 2010 sale 3:30 pm · internacional", "sáb 26 dic · recoger 12:30 pm", "2026-12-26", "pending", 2800),
      svc("late-checkout", "Salida tardía", "Hasta las 1:00 pm (solicitud)", "sáb 26 dic", "2026-12-26", "unavailable", null, "Entran huéspedes ese día", false),
    ],
  }),
  base("booking-BK-0045", "Abby Tabel", "Villa Amore – Iyari B13", "2026-12-20", "2026-12-27", {
    draft: { answers: null as never, step: 3, updatedAt: "2026-11-20T18:00:00Z" },
    draftLang: "en",
  }),
  base("booking-BK-0055", "Familia Ortega", "Las Palmas 28", "2026-12-27", "2027-01-03", {
    language: "es",
    reminders: [
      { _key: "r2", at: "2026-12-13T16:00:00Z", kind: "before-14", by: "automático" },
      { _key: "r3", at: "2026-12-20T16:00:00Z", kind: "before-7", by: "automático" },
    ],
  }),
  base("booking-BK-0049", "Hye Lee", "Villa Amore – Iyari B13", "2026-11-20", "2026-11-28", {
    submittedAt: "2026-11-10T15:00:00Z",
    services: [
      svc("arr-x", "Traslado de llegada", "Suburban · 6 personas", "vie 20 nov · aterriza 2:00 pm", "2026-11-20", "confirmed", 2800),
      svc("cart-x", "Carrito de golf adicional", "1 × 6 pasajeros · 8 días", "vie 20 nov → sáb 28 nov", "2026-11-20", "confirmed", 17600),
    ],
  }),
];
