// Shown only when the villa list can't be loaded from Sanity (menu + sitemap).
// Keep in sync with the villas that have "Show on Beyond Traveling" switched
// on in the Studio — the live list always wins when Sanity is reachable.
export const FALLBACK_VILLAS: { slug: string; title: string }[] = [
  { slug: "villa-amore", title: "Villa Amore" },
  { slug: "villa-llamas", title: "Villa Llamas" },
  { slug: "villa-brezza", title: "Villa Brezza" },
  { slug: "las-palmas-28", title: "Las Palmas 28" },
  { slug: "casa-paraiso", title: "Casa Paraíso" },
];
