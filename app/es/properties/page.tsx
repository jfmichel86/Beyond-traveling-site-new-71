// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/properties/page";
import { esMetadata } from "@/lib/seo";

export const revalidate = 60;
export default Page;
export const metadata = esMetadata("/properties", base as never);
