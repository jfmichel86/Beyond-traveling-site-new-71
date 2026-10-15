// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, {
  generateMetadata as baseMetadata,
  generateStaticParams as baseParams,
} from "@/app/properties/[slug]/page";
import { esMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;
export default Page;

export async function generateStaticParams() {
  return baseParams();
}

export async function generateMetadata(props: Parameters<typeof baseMetadata>[0]) {
  const base = await baseMetadata(props);
  return esMetadata(`/properties/${props.params.slug}`, base as never);
}
