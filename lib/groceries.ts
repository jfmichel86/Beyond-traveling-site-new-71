// ─────────────────────────────────────────────────────────────
// Pre-arrival groceries — guests pick items on /groceries and send the list
// to the concierge by WhatsApp or email. Everything is edited in the Mexican
// Reserve Sanity Studio → Groceries:
//   groceryCategory — sections; a main section has a "side" (Ready to Enjoy /
//                     Cooking for Yourself); a category can sit inside a group
//   groceryItem     — products ("Also Show In" lists one item in more places)
// ─────────────────────────────────────────────────────────────

import { sanityFetch } from "@/lib/sanity";
import { GROCERY_FALLBACK } from "@/lib/groceryFallback";

/** Where grocery lists are sent. */
export const GROCERY_WHATSAPP = "523316029391"; // concierge WhatsApp (country code + number, digits only)
export const GROCERY_EMAIL = "concierge@beyondtravelingmx.com";

export type GroceryUnit =
  | "piece" | "kg" | "bunch" | "package" | "loaf" | "box" | "can"
  | "bottle" | "carton" | "six-pack" | "jar" | "dozen" | "bag";

export type GrocerySide = "enjoy" | "cooking";

export type GroceryItem = {
  id: string;
  name: string;
  nameEs?: string;
  unit: GroceryUnit;
  seasonal?: boolean;
  price?: number;
  /** A copy shown here from another category ("Also Show In"). */
  alsoListed?: boolean;
};

export type GroceryCategory = {
  id: string;
  slug: string;
  title: string;
  titleEs?: string;
  /** Only on main sections. */
  side?: GrocerySide;
  items: GroceryItem[];
  /** Sub-categories, for a group such as "The Bar". */
  children?: GroceryCategory[];
};

export type GroceryData = { catalog: GroceryCategory[] };

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

const ITEM_FIELDS = `"id": _id, name, nameEs, unit, seasonal, price`;
const ITEMS = `"items": *[_type == "groceryItem" && category._ref == ^._id && available != false]
    | order(coalesce(sortOrder, 999) asc, name asc) { ${ITEM_FIELDS} },
  "also": *[_type == "groceryItem" && ^._id in alsoIn[]._ref && available != false]
    | order(name asc) { ${ITEM_FIELDS}, "alsoListed": true }`;

type RawCategory = GroceryCategory & { also?: GroceryItem[]; children?: RawCategory[] };

/** Merge "Also Show In" copies, drop empty categories and empty groups. */
function tidy(cats: RawCategory[]): GroceryCategory[] {
  return cats
    .map((c) => {
      const { also, children, ...rest } = c;
      return {
        ...rest,
        items: [...(c.items || []), ...(also || [])],
        children: children ? tidy(children) : undefined,
      };
    })
    .filter((c) => c.items.length || c.children?.length);
}

export async function getGroceryData(): Promise<GroceryData> {
  try {
    const data = await sanityFetch<{ catalog: RawCategory[] }>(
      `{
        "catalog": *[_type == "groceryCategory" && !defined(parent)] | order(coalesce(sortOrder, 999) asc, title asc) {
          "id": _id, "slug": slug.current, title, titleEs, "side": coalesce(side, "enjoy"),
          ${ITEMS},
          "children": *[_type == "groceryCategory" && parent._ref == ^._id] | order(coalesce(sortOrder, 999) asc, title asc) {
            "id": _id, "slug": slug.current, title, titleEs,
            ${ITEMS}
          }
        }
      }`
    );
    const catalog = tidy(data?.catalog || []);
    // Nothing uploaded to Sanity yet → use the built-in list
    if (!catalog.length) return GROCERY_FALLBACK;
    return { catalog };
  } catch (err) {
    // Never leave guests without a list: fall back to the built-in copy
    console.error(err);
    return GROCERY_FALLBACK;
  }
}
