// ─────────────────────────────────────────────────────────────
// Pre-arrival groceries — guests pick items on /groceries and send the list
// to the concierge by WhatsApp or email. Items and categories are edited in
// the Mexican Reserve Sanity Studio → Groceries (types groceryCategory and
// groceryItem). Turn an item's "Available" switch off to hide it.
// ─────────────────────────────────────────────────────────────

import { sanityFetch } from "@/lib/sanity";
import { GROCERY_FALLBACK } from "@/lib/groceryFallback";

/** Where grocery lists are sent. */
export const GROCERY_WHATSAPP = "523316029391"; // concierge WhatsApp (country code + number, digits only)
export const GROCERY_EMAIL = "concierge@beyondtravelingmx.com";

export type GroceryUnit =
  | "piece" | "kg" | "bunch" | "package" | "loaf" | "box" | "can"
  | "bottle" | "carton" | "six-pack" | "jar" | "dozen" | "bag";

export type GroceryItem = {
  id: string;
  name: string;
  nameEs?: string;
  unit: GroceryUnit;
  seasonal?: boolean;
  price?: number;
};

export type GroceryCategory = {
  id: string;
  slug: string;
  title: string;
  titleEs?: string;
  items: GroceryItem[];
  /** Sub-categories, for a group such as "Alcoholic Drinks". */
  children?: GroceryCategory[];
};

/** [singular, plural] for each unit, in English and Spanish. */
export const UNIT_LABELS: Record<GroceryUnit, { en: [string, string]; es: [string, string] }> = {
  piece: { en: ["piece", "pieces"], es: ["pieza", "piezas"] },
  kg: { en: ["kg", "kg"], es: ["kg", "kg"] },
  bunch: { en: ["bunch", "bunches"], es: ["manojo", "manojos"] },
  package: { en: ["pack", "packs"], es: ["paquete", "paquetes"] },
  loaf: { en: ["loaf", "loaves"], es: ["pieza", "piezas"] },
  box: { en: ["box", "boxes"], es: ["caja", "cajas"] },
  can: { en: ["can", "cans"], es: ["lata", "latas"] },
  bottle: { en: ["bottle", "bottles"], es: ["botella", "botellas"] },
  carton: { en: ["carton", "cartons"], es: ["envase", "envases"] },
  "six-pack": { en: ["six-pack", "six-packs"], es: ["six-pack", "six-packs"] },
  jar: { en: ["jar", "jars"], es: ["frasco", "frascos"] },
  dozen: { en: ["dozen", "dozen"], es: ["docena", "docenas"] },
  bag: { en: ["bag", "bags"], es: ["bolsa", "bolsas"] },
};

const ITEMS = `*[_type == "groceryItem" && category._ref == ^._id && available != false]
  | order(coalesce(sortOrder, 999) asc, name asc) {
    "id": _id, name, nameEs, unit, seasonal, price
  }`;

/** Drop empty categories, and groups left with no sub-categories. */
function prune(cats: GroceryCategory[]): GroceryCategory[] {
  return cats
    .map((c) => ({ ...c, items: c.items || [], children: c.children?.filter((k) => k.items?.length) }))
    .filter((c) => c.items.length || c.children?.length);
}

export async function getGroceryCatalog(): Promise<GroceryCategory[]> {
  try {
    const cats = await sanityFetch<GroceryCategory[]>(
      `*[_type == "groceryCategory" && !defined(parent)] | order(coalesce(sortOrder, 999) asc, title asc) {
        "id": _id, "slug": slug.current, title, titleEs,
        "items": ${ITEMS},
        "children": *[_type == "groceryCategory" && parent._ref == ^._id] | order(coalesce(sortOrder, 999) asc, title asc) {
          "id": _id, "slug": slug.current, title, titleEs,
          "items": ${ITEMS}
        }
      }`
    );
    const pruned = prune(cats || []);
    // Nothing uploaded to Sanity yet → use the built-in list
    return pruned.length ? pruned : GROCERY_FALLBACK;
  } catch (err) {
    // Never leave guests without a list: fall back to the built-in copy
    console.error(err);
    return GROCERY_FALLBACK;
  }
}
