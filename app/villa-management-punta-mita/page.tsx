import GuideTemplate from "@/components/GuideTemplate";
import { pageAlternates } from "@/lib/seo";

export const metadata = {
  title: { absolute: "Villa Management Punta Mita | Beyond Traveling" },
  description:
    "Professional villa management in Punta Mita. We handle maintenance, rentals, and guest experience for luxury homes.",  alternates: pageAlternates("/villa-management-punta-mita"),
};

export default function VillaManagementPage() {
  return (
    <GuideTemplate
      guideLabel="Guide"
      title="Villa Management in Punta Mita"
      heroImage="/properties/villa-brezza.jpg"
      heroAlt="A luxury villa in Punta Mita managed by Beyond Traveling"
      intro="Managing a villa in Punta Mita requires constant oversight. From maintenance to guest coordination, every detail impacts the value and performance of the property. Our villa management services in Punta Mita are designed to maintain each property at a high standard while ensuring smooth operations and guest experience."
      sections={[
        {
          heading: "Maintaining High-End Villas",
          body: "Villas must be maintained at a high standard at all times. This includes regular inspections, quick repairs, and coordination with trusted local vendors.",
        },
        {
          heading: "Rental Performance and Operations",
          body: "Villa management also includes optimizing rentals, managing bookings, and ensuring that each guest experience meets expectations.",
        },
        {
          heading: "Direct Communication With Owners",
          body: "Clear and direct communication allows owners to stay informed and confident that their property is being properly managed.",
        },
      ]}
      ctaHref="/services"
      ctaLabel="Explore Services"
    />
  );
}
