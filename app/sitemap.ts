import { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { discoverCategories } from "@/lib/discoverPuntaMita";
import { getProperties } from "@/lib/sanity";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Villa pages come from Sanity, so new villas appear here automatically.
  const properties = await getProperties();

  const paths = [
    ...staticPaths,
    ...properties.map((p) => `/properties/${p.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...discoverCategories.flatMap((category) => [
      `/discover-punta-mita/${category.slug}`,
      ...category.activities.map(
        (activity) => `/discover-punta-mita/${category.slug}/${activity.slug}`
      ),
    ]),
  ];

  return paths.map((path) => ({ url: `${BASE}${path === "/" ? "/" : path}` }));
}
