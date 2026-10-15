// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/contact/work-with-us/page";
import { esMetadata } from "@/lib/seo";

export default Page;
export const metadata = esMetadata("/contact/work-with-us", base as never);
