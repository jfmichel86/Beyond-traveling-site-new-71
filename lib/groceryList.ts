// ─────────────────────────────────────────────────────────────
// A guest's grocery list, saved on their reservation when they send it from
// /groceries?code=… (the link in their arrival guide or in a reminder).
// Shared by the grocery page, the API and the concierge panel; no server-only
// imports here.
// ─────────────────────────────────────────────────────────────

/** The concierge needs the list at least this many days before arrival. */
export const GROCERY_DEADLINE_DAYS = 5;

export type GroceryLine = {
  id: string;
  cat: string; // category, English
  catEs: string; // category, Spanish
  name: string;
  nameEs: string;
  qty: number;
  unit: string; // unit label, English (already singular/plural)
  unitEs: string; // unit label, Spanish
  note: string;
};

export type GroceryList = {
  items: GroceryLine[];
  party: string; // "2 adultos, 1 niño"
  allergies: string;
  requests: string;
  lang: "en" | "es";
};

export type SavedGroceryList = {
  list: GroceryList;
  sentAt: string; // last time the guest sent it (ISO)
  firstAt: string; // first time (ISO)
  times: number; // how many times it was sent
};

const fmtQty = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

/** Plain text in Spanish, for the concierge and the shopper (English name in brackets). */
export function groceryTextEs(l: GroceryList): string {
  const out: string[] = [];
  let last = "";
  for (const i of l.items) {
    const cat = i.catEs || i.cat;
    if (cat !== last) {
      out.push("", cat.toUpperCase());
      last = cat;
    }
    const en = i.name && i.name !== i.nameEs ? ` (${i.name})` : "";
    out.push(`• ${fmtQty(i.qty)} ${i.unitEs || i.unit} – ${i.nameEs || i.name}${en}${i.note ? ` – ${i.note}` : ""}`);
  }
  if (l.requests) out.push("", "OTRAS SOLICITUDES", l.requests);
  return out.join("\n").trim();
}

/** Cleans what the browser sent (sizes, types). Returns null when it isn't a list. */
export function cleanGroceryList(raw: unknown): GroceryList | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  if (!Array.isArray(r.items)) return null;
  const items: GroceryLine[] = r.items.slice(0, 400).flatMap((x) => {
    if (!x || typeof x !== "object") return [];
    const o = x as Record<string, unknown>;
    const qty = Number(o.qty);
    if (!Number.isFinite(qty) || qty <= 0 || qty > 999) return [];
    const name = str(o.name, 120) || str(o.nameEs, 120);
    if (!name) return [];
    return [{
      id: str(o.id, 80), cat: str(o.cat, 80), catEs: str(o.catEs, 80), name, nameEs: str(o.nameEs, 120) || name,
      qty: Math.round(qty * 10) / 10, unit: str(o.unit, 30), unitEs: str(o.unitEs, 30), note: str(o.note, 200),
    }];
  });
  const list: GroceryList = {
    items,
    party: str(r.party, 120),
    allergies: str(r.allergies, 500),
    requests: str(r.requests, 3000),
    lang: r.lang === "es" ? "es" : "en",
  };
  return list.items.length || list.requests ? list : null;
}
