// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/punta-mita-property-management/page";
import { esMetadata } from "@/lib/seo";

export default Page;
export const metadata = esMetadata("/punta-mita-property-management", base as never);
