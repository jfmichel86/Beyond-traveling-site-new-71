import GuideTemplate from "@/components/GuideTemplate";
import { pageAlternates } from "@/lib/seo";

export const metadata = {
  title: { absolute: "Property Management Punta Mita | Beyond Traveling" },
  description:
    "Looking for property management in Punta Mita? Learn how we manage luxury homes, rentals, and guest experience with a local, hands-on approach.",  alternates: pageAlternates("/punta-mita-property-management"),
};

export default function PuntaMitaPropertyManagementPage() {
  return (
    <GuideTemplate
      guideLabel="Guide"
      title="Property Management in Punta Mita"
      heroImage="/home/services.jpg"
      heroAlt="A luxury property in Punta Mita cared for by Beyond Traveling"
      intro="Managing a property in Punta Mita requires more than coordination. It requires local presence, responsiveness, and a clear understanding of how luxury homes operate in a rental environment. Our property management services in Punta Mita are designed to keep homes well maintained while ensuring a smooth and high-quality guest experience."
      sections={[
        {
          heading: "Why Property Management in Punta Mita Is Different",
          body: "Punta Mita is a unique market where expectations are high and response times matter. Homes are not only valuable assets, but also rental properties that require constant attention, maintenance, and guest coordination.",
        },
        {
          heading: "What Good Property Management Includes",
          body: "Effective property management in Punta Mita goes beyond maintenance. It includes overseeing daily operations, coordinating guest stays, managing cleaning and readiness, and ensuring that the property remains in excellent condition at all times while performing well as a rental property.",
        },
        {
          heading: "A More Personal Approach",
          body: "At Beyond Traveling, we work closely with a limited number of homeowners. This allows us to stay involved, respond quickly, and treat each home with the level of care it deserves.",
        },
      ]}
      pullQuote="Some owners care most about preserving the property. Others want stronger rental performance. Most want both."
      pullQuoteAfter={0}
      ctaHref="/services"
      ctaLabel="Explore Our Services"
    />
  );
}
