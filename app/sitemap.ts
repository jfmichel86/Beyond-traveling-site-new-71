import { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { discoverCategories } from "@/lib/discoverPuntaMita";
import { getProperties } from "@/lib/sanity";
import { FALLBACK_VILLAS } from "@/lib/fallback-villas";
import { ES_META } from "@/lib/seo";
import { withEs } from "@/lib/locale";

const BASE = "https://www.beyondtravelingmx.com";

// Every public, indexable page. Service and Discover URLs are generated from
// the same data the pages render from, so the sitemap can't drift from the
// real routes. Villa URLs come from Sanity. (villa-dining-menu is intentionally excluded — it is noindex.)
const staticPaths = [
  "/",
  "/services",
  "/properties",
  "/discover-punta-mita",
  "/about",
  "/faq",
  "/contact",
  "/contact/owners",
  "/contact/reservations",
  "/contact/agents",
  "/punta-mita-property-management",
  "/luxury-rentals-punta-mita",
  "/villa-management-punta-mita",
  "/terms-and-conditions",
  "/cancellation-policy",
  "/privacy-policy",
];

export const revalidate = 3600;

// Used only if Sanity can't be reached while the sitemap is built, so villa
// pages never silently disappear from it. Keep in step with the villa list.
const FALLBACK_VILLA_SLUGS = FALLBACK_VILLAS.map((v) => v.slug);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Villa pages come from Sanity, so new villas appear here automatically.
  const properties = await getProperties();
  const villaSlugs =
    properties.length > 0 ? properties.map((p) => p.slug) : FALLBACK_VILLA_SLUGS;

  const paths = [
    ...staticPaths,
    ...villaSlugs.map((slug) => `/properties/${slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...discoverCategories.flatMap((category) => [
      `/discover-punta-mita/${category.slug}`,
      ...category.activities.map(
        (activity) => `/discover-punta-mita/${category.slug}/${activity.slug}`
      ),
    ]),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const en = `${BASE}${path}`;

    // Pages with a real Spanish twin list both versions, each pointing at
    // the other (hreflang), so Google serves the right one by language.
    if (ES_META[path]) {
      const es = `${BASE}${withEs(path)}`;
      const alternates = { languages: { en, es } };
      entries.push({ url: en, alternates }, { url: es, alternates });
    } else {
      entries.push({ url: en });
    }
  }

  return entries;
}
