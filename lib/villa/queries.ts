// GROQ queries for Beyond Traveling's villas — the Mexican Reserve "Property"
// documents with "Show on Beyond Traveling" switched on.
import { sanityFetch, onSanityFailure } from "@/lib/sanity";
import type { Property } from "@/lib/villa/utils";

const BT = `_type == "property" && showOnBeyondTraveling == true && defined(slug.current)`;

// Card photos: hero + the (up to 3) gallery photos picked as "Mosaic" in the
// Studio's Photo Manager, falling back to the first 3 gallery photos.
const CARD_FIELDS = `
  _id, title, "slug": slug.current, tagline, shortDescription, propertyType, featured, collection,
  locationLabel, communityPuntaMita, communityPuntaDeMita, bedrooms, bathrooms, maxAdults, childOnlyBeds,
  viewsAndPool, priceOnRequest,
  "seasons": seasons[]{ seasonName, nightlyRate, "bedroomRates": bedroomRates[]{ bedrooms, nightlyRate }, minimumStay },
  heroImage { asset, hotspot },
  "mosaicPhotos": select(
    count(gallery[defined(asset) && (isMosaic == true || roomTag == "mosaic")]) > 0
      => gallery[defined(asset) && (isMosaic == true || roomTag == "mosaic")][0...3]{ asset, hotspot },
    gallery[defined(asset)][0...3]{ asset, hotspot }
  )
`;

export async function getVillaCards(): Promise<Property[]> {
  try {
    const list = await sanityFetch<Property[]>(
      `*[${BT}] | order(coalesce(btSortOrder, 999) asc, title asc) { ${CARD_FIELDS} }`
    );
    return list;
  } catch (err) {
    return onSanityFailure(err, []);
  }
}

export type VillaDetail = Property & { btExtraGuestNote?: string };

export async function getVilla(slug: string): Promise<VillaDetail | null> {
  return sanityFetch<VillaDetail | null>(
    `*[${BT} && slug.current == $slug][0] {
      ${CARD_FIELDS},
      fullDescription, taglineEs, shortDescriptionEs, fullDescriptionEs, golfCart6Seater, golfCart4Seater, memberships, bedConfiguration,
      "gallery": gallery[]{ asset, hotspot, roomTag, isMosaic },
      amenities, "staffServices": staffServices[]{ role, services }, policies, btExtraGuestNote
    }`,
    { slug }
  );
}
