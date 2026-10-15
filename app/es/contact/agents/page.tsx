// Spanish twin of the English page — same content, /es URL, Spanish metadata.
import Page, { metadata as base } from "@/app/contact/agents/page";
import { esMetadata } from "@/lib/seo";

export default Page;
export const metadata = esMetadata("/contact/agents", base as never);
