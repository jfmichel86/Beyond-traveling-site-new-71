// ─────────────────────────────────────────────────────────────
// Sanity — Beyond Traveling villas
// Villas are the same "Property" documents used by mexicanreserve.com, edited
// in the Mexican Reserve Sanity Studio. Turn on "Show on Beyond Traveling"
// (Identity tab) to list one here; see the "Beyond Traveling Villas" list.
// Uses Sanity's plain HTTP API, so no extra npm packages are needed.
// ─────────────────────────────────────────────────────────────

import {
  AMENITIES,
  AMENITY_SECTIONS,
  BEDS,
  MEMBERSHIPS,
  STAFF_ROLES,
  STAFF_SERVICES,
  VIEWS,
  pretty,
} from "@/lib/sanityLabels";

export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "sshxckpv";
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_VERSION = "2024-01-01";

/** How often (seconds) the site re-checks Sanity for changes. */
export const REVALIDATE_SECONDS = 60;

export type SanityImage = {
  asset?: { _ref?: string };
  hotspot?: { x: number; y: number };
};

export type PortableBlock = {
  _key: string;
  _type: string;
  children?: { _key: string; text: string; marks?: string[] }[];
};

export type PropertySummary = {
  _id: string;
  title: string;
  slug: string;
  cardDescription?: string;
  image?: SanityImage;
};

export type Property = PropertySummary & {
  gallery: SanityImage[];
  about?: PortableBlock[];
  bedrooms?: { _key: string; name?: string; beds?: string; bathroom?: string }[];
  staffAmenities?: string[];
  featureGroups?: { _key: string; title?: string; items?: string[] }[];
  seasonalRates?: { _key: string; season?: string; nightlyRate?: number }[];
  rateNotes?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

// Properties are the Mexican Reserve "Property" documents with the
// "Show on Beyond Traveling" switch turned on (Studio → Identity tab).
const VISIBLE = `_type == "property" && showOnBeyondTraveling == true && defined(slug.current)`;

const BASE_RATE_NOTES = [
  "The rental of the property requires a refundable Security Deposit equivalent to one night.",
  "Taxes: 16% VAT + 5% tourism tax may apply.",
  "Service fee may apply.",
  "Rates are quoted per night and in USD.",
  "Rates do not include the cost of Food and Beverage.",
  "Rates do not include Staff Gratuities, recommended at 10% to 15% of the reservation pre-tax total.",
  "Rates are subject to change without notice.",
];

// Beyond Traveling shows the date ranges next to these two seasons
const SEASON_LABELS: Record<string, string> = {
  "low season": "Low Season (May 1st to Oct 31st)",
  "high season": "High Season (Nov 1st to April 30th)",
};

export async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${SANITY_DATASET}`
  );
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));

  const res = await fetch(url.toString(), { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`Sanity request failed: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { result: T };
  return json.result;
}

export async function getProperties(): Promise<PropertySummary[]> {
  try {
    return await sanityFetch<PropertySummary[]>(
      `*[${VISIBLE}] | order(coalesce(btSortOrder, 999) asc, title asc) {
        _id, title, "slug": slug.current,
        "cardDescription": coalesce(shortDescription, tagline),
        "image": coalesce(heroImage, gallery[0]){ asset, hotspot }
      }`
    );
  } catch (err) {
    console.error(err);
    return [];
  }
}

type RawProperty = {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  tagline?: string;
  heroImage?: SanityImage;
  gallery?: SanityImage[];
  fullDescription?: PortableBlock[];
  bedConfiguration?: {
    _key?: string;
    name?: string;
    beds?: { bedType?: string; count?: number }[];
    enSuite?: boolean;
    bathAmenities?: string[];
  }[];
  staffServices?: { role?: string; services?: string[] }[];
  memberships?: string;
  golfCart6Seater?: number;
  golfCart4Seater?: number;
  viewsAndPool?: string[];
  amenities?: string[];
  priceOnRequest?: boolean;
  seasons?: { _key?: string; seasonName?: string; nightlyRate?: number; bedroomRates?: { nightlyRate?: number }[] }[];
  btExtraGuestNote?: string;
};

export async function getProperty(slug: string): Promise<Property | null> {
  const raw = await sanityFetch<RawProperty | null>(
    `*[${VISIBLE} && slug.current == $slug][0] {
      _id, title, "slug": slug.current, shortDescription, tagline,
      heroImage{ asset, hotspot }, "gallery": gallery[defined(asset)]{ asset, hotspot },
      fullDescription, bedConfiguration, staffServices, memberships,
      golfCart6Seater, golfCart4Seater, viewsAndPool, amenities,
      priceOnRequest, seasons, btExtraGuestNote
    }`,
    { slug }
  );
  return raw ? toProperty(raw) : null;
}

function toProperty(p: RawProperty): Property {
  // Photos: hero first, then the gallery (no duplicates)
  const seen = new Set<string>();
  const gallery = [p.heroImage, ...(p.gallery || [])].filter((img): img is SanityImage => {
    const ref = img?.asset?._ref;
    if (!ref || seen.has(ref)) return false;
    seen.add(ref);
    return true;
  });

  const bedrooms = (p.bedConfiguration || []).map((b, i) => ({
    _key: b._key || `bed-${i}`,
    name: b.name || `Bedroom ${i + 1}`,
    beds: (b.beds || [])
      .filter((x) => x?.bedType)
      .map((x) => {
        const n = x.count || 1;
        const label = BEDS[x.bedType!] || pretty(x.bedType);
        const noun = /bed$/i.test(label) ? "" : " Bed";
        return `${n} ${label}${noun}${n > 1 ? "s" : ""}`;
      })
      .join(" plus "),
    bathroom: [b.enSuite ? "Ensuite bathroom" : "", ...(b.bathAmenities || []).map((a) => BEDS[a] || pretty(a))]
      .filter(Boolean)
      .join(" · "),
  }));

  const staffAmenities: string[] = (p.staffServices || []).map((s) => {
    const role = STAFF_ROLES[s.role || ""] || pretty(s.role);
    const services = (s.services || []).map((v) => STAFF_SERVICES[v] || pretty(v));
    return services.length ? `${role} — ${services.join(", ")}` : role;
  });
  if (p.memberships) staffAmenities.push(MEMBERSHIPS[p.memberships] || pretty(p.memberships));
  if (p.golfCart6Seater) staffAmenities.push(`${p.golfCart6Seater > 1 ? `${p.golfCart6Seater} × ` : ""}6 seater golf cart`);
  if (p.golfCart4Seater) staffAmenities.push(`${p.golfCart4Seater > 1 ? `${p.golfCart4Seater} × ` : ""}4 seater golf cart`);

  const featureGroups: { _key: string; title: string; items: string[] }[] = [];
  const views = (p.viewsAndPool || []).map((v) => VIEWS[v] || pretty(v));
  if (views.length) featureGroups.push({ _key: "views", title: "Key Features", items: views });
  const bySection = new Map<string, string[]>();
  for (const a of p.amenities || []) {
    const info = AMENITIES[a] || { label: pretty(a), section: "Other" };
    bySection.set(info.section, [...(bySection.get(info.section) || []), info.label]);
  }
  for (const title of [...AMENITY_SECTIONS, "Other"]) {
    const items = bySection.get(title);
    if (items) featureGroups.push({ _key: title, title, items });
  }

  const seasonalRates = (p.seasons || [])
    .filter((s) => s?.seasonName)
    .map((s, i) => {
      let n = s.nightlyRate;
      if (typeof n !== "number" && s.bedroomRates?.length)
        n = Math.max(...s.bedroomRates.map((r) => r.nightlyRate || 0)); // full-villa rate
      const name = s.seasonName!;
      return {
        _key: s._key || `rate-${i}`,
        season: SEASON_LABELS[name.trim().toLowerCase()] || name,
        nightlyRate: p.priceOnRequest || !n ? undefined : n,
      };
    });

  return {
    _id: p._id,
    title: p.title,
    slug: p.slug,
    cardDescription: p.shortDescription || p.tagline,
    image: p.heroImage || gallery[0],
    gallery,
    about: (p.fullDescription || []).filter((b) => b._type === "block"),
    bedrooms,
    staffAmenities,
    featureGroups,
    seasonalRates,
    rateNotes: [...(p.btExtraGuestNote ? [p.btExtraGuestNote] : []), ...BASE_RATE_NOTES],
    // Mexican Reserve's own SEO text mentions that brand, so use the short description
    seoDescription: p.shortDescription || p.tagline,
  };
}

/** "Villa Amore" → "villa-amore" (used to redirect old Beyond Traveling URLs) */
export const slugify = (s = "") =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * Build a Sanity CDN URL for an image.
 * ref looks like "image-<id>-<w>x<h>-<ext>".
 */
export function imageUrl(
  image: SanityImage | undefined,
  opts: { w?: number; h?: number; q?: number } = {}
): string {
  const ref = image?.asset?._ref;
  if (!ref) return "";
  const [, id, dims, ext] = ref.split("-");
  const url = new URL(
    `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}`
  );
  url.searchParams.set("auto", "format");
  url.searchParams.set("q", String(opts.q ?? 80));
  if (opts.w) url.searchParams.set("w", String(opts.w));
  if (opts.h) url.searchParams.set("h", String(opts.h));
  if (opts.w && opts.h) {
    url.searchParams.set("fit", "crop");
    if (image?.hotspot) {
      url.searchParams.set("crop", "focalpoint");
      url.searchParams.set("fp-x", image.hotspot.x.toFixed(3));
      url.searchParams.set("fp-y", image.hotspot.y.toFixed(3));
    }
  } else {
    url.searchParams.set("fit", "max");
  }
  return url.toString();
}

export const formatUsd = (n?: number) =>
  typeof n === "number" ? `$${n.toLocaleString("en-US")} USD per night` : "";

export function startingRate(p: Pick<Property, "seasonalRates">): number | undefined {
  const rates = (p.seasonalRates || [])
    .map((r) => r.nightlyRate)
    .filter((n): n is number => typeof n === "number" && n > 0);
  return rates.length ? Math.min(...rates) : undefined;
}

export const blockText = (b: PortableBlock) => (b.children || []).map((c) => c.text).join("");
