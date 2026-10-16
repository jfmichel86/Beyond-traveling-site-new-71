// Spanish twin of the English page — same content, /es URL, Spanish metadata.
// The page body gets `es` so counts, lists and headings built in code come out
// in Spanish (the Sanity text itself is translated by the dictionary).
import PropertyDetail, {
  generateMetadata as baseMetadata,
  generateStaticParams as baseParams,
} from "@/app/properties/[slug]/PropertyDetail";
import { esMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

export default function Page({ params }: { params: { slug: string } }) {
  return <PropertyDetail params={params} es />;
}

export async function generateStaticParams() {
  return baseParams();
}

export async function generateMetadata(props: Parameters<typeof baseMetadata>[0]) {
  const base = await baseMetadata(props);
  return esMetadata(`/properties/${props.params.slug}`, base as never);
}
