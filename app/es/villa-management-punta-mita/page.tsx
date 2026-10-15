// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/villa-management-punta-mita/page";
import { esMetadata } from "@/lib/seo";

export default Page;
export const metadata = esMetadata("/villa-management-punta-mita", base as never);
