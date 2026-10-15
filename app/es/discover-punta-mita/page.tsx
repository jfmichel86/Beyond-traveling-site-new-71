// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/discover-punta-mita/page";
import { esMetadata } from "@/lib/seo";

export default Page;
export const metadata = esMetadata("/discover-punta-mita", base as never);
