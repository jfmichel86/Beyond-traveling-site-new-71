// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/villa-dining-menu/page";
import { esMetadata } from "@/lib/seo";

export default Page;
export const metadata = esMetadata("/villa-dining-menu", base as never);
