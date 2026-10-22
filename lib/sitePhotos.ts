// ─────────────────────────────────────────────────────────────
// Page photos from Sanity
// The big header photos on Home, Services, each service page and the three
// guides come from the villas in Sanity: each villa's hero photo plus its
// "Mosaic" photos (the same ones the property cards use).
//
// Every page gets a different photo — none is used twice. Photos are handed
// out villa by villa (all heroes first, then the first mosaic photo of each
// villa, and so on), in the villas' "Beyond Traveling" sort order.
// To change which photo a page gets, change the villa's hero/mosaic photos or
// its sort order in the Studio, or reorder PHOTO_SLOTS below.
//
// If Sanity can't be reached, or there aren't enough photos, a page falls
// back to its local photo in /public.
// ─────────────────────────────────────────────────────────────

import { imageUrl, onSanityFailure, sanityFetch, type SanityImage } from "@/lib/sanity";

const BT = `_type == "property" && showOnBeyondTraveling == true && defined(slug.current)`;

/** Pages that take a Sanity photo — most prominent first (they get the hero photos). */
export const PHOTO_SLOTS = [
  "home-hero",
  "services",
  "service:full-service-management",
  "service:vacation-rental-management",
  "service:property-management",
  "service:home-watch",
  "service:concierge-service",
  "guide:luxury-rentals-punta-mita",
  "guide:punta-mita-property-management",
  "guide:villa-management-punta-mita",
] as const;

export type PhotoSlot = (typeof PHOTO_SLOTS)[number];

export type SitePhoto = {
  src: string;
  /** Villa the photo belongs to (for the alt text); empty for local fallbacks. */
  villa?: string;
};

type VillaPhotos = { title: string; heroImage?: SanityImage; mosaicPhotos?: SanityImage[] };

async function getPhotoPool(): Promise<{ image: SanityImage; villa: string }[]> {
  let villas: VillaPhotos[];
  try {
    villas = await sanityFetch<VillaPhotos[]>(
      `*[${BT}] | order(coalesce(btSortOrder, 999) asc, title asc) {
        title,
        heroImage { asset, hotspot },
        "mosaicPhotos": select(
          count(gallery[defined(asset) && (isMosaic == true || roomTag == "mosaic")]) > 0
            => gallery[defined(asset) && (isMosaic == true || roomTag == "mosaic")][0...3]{ asset, hotspot },
          gallery[defined(asset)][0...3]{ asset, hotspot }
        )
      }`
    );
  } catch (err) {
    return onSanityFailure(err, []);
  }

  const lists = villas.map((v) => ({
    villa: v.title,
    photos: [v.heroImage, ...(v.mosaicPhotos || [])].filter((img): img is SanityImage => !!img?.asset?._ref),
  }));

  // Round-robin across villas, skipping any photo already used.
  const seen = new Set<string>();
  const pool: { image: SanityImage; villa: string }[] = [];
  const rounds = Math.max(0, ...lists.map((l) => l.photos.length));
  for (let r = 0; r < rounds; r++) {
    for (const { villa, photos } of lists) {
      const image = photos[r];
      const ref = image?.asset?._ref;
      if (!ref || seen.has(ref)) continue;
      seen.add(ref);
      pool.push({ image, villa });
    }
  }
  return pool;
}

/** The photo for one page. `fallback` is the local /public photo used if Sanity has none. */
export async function getSitePhoto(slot: PhotoSlot, fallback: string): Promise<SitePhoto> {
  const pool = await getPhotoPool();
  const pick = pool[PHOTO_SLOTS.indexOf(slot)];
  if (!pick) return { src: fallback };
  return { src: imageUrl(pick.image, { w: 2400 }), villa: pick.villa };
}

/** Alt text naming the villa when the photo comes from Sanity. */
export const photoAlt = (photo: SitePhoto, fallbackAlt: string) =>
  photo.villa ? `${photo.villa}, a luxury villa in Punta Mita managed by Beyond Traveling` : fallbackAlt;
