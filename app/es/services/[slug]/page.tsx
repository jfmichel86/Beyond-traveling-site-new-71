// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, {
  generateMetadata as baseMetadata,
  generateStaticParams as baseParams,
} from "@/app/services/[slug]/page";
import { esMetadata } from "@/lib/seo";

export default Page;

export async function generateStaticParams() {
  return baseParams();
}

export async function generateMetadata(props: Parameters<typeof baseMetadata>[0]) {
  const base = await baseMetadata(props);
  return esMetadata(`/services/${props.params.slug}`, base as never);
}
