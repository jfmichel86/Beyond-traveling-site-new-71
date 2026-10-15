import DiscoverPuntaMitaPage from "./DiscoverIndexClient";
import { pageAlternates } from "@/lib/seo";

export const metadata = {
  title: "Discover Punta Mita | Activities, Beach Clubs & Experiences",
  description:
    "Private ocean days, golf, beach clubs, chef-led dining, family adventures and more \u2014 curated Punta Mita experiences arranged by the Beyond Traveling team.",
  alternates: pageAlternates("/discover-punta-mita"),
};

export default function Page() {
  return <DiscoverPuntaMitaPage />;
}
