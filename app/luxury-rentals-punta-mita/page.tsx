import GuideTemplate from "@/components/GuideTemplate";
import { pageAlternates } from "@/lib/seo";

export const metadata = {
  title: { absolute: "Luxury Rentals Punta Mita | Beyond Traveling" },
  description:
    "Discover luxury rentals in Punta Mita. Beyond Traveling manages high-end villas with full guest experience and local support.",  alternates: pageAlternates("/luxury-rentals-punta-mita"),
};

export default function LuxuryRentalsPage() {
  return (
    <GuideTemplate
      guideLabel="Guide"
      title="Luxury Rentals in Punta Mita"
      heroImage="/home/portfolio.jpg"
      heroAlt="A luxury rental villa in Punta Mita managed by Beyond Traveling"
      intro="Punta Mita is one of the most exclusive destinations in Mexico, known for its private villas, oceanfront properties, and high-end guest experiences. Luxury rentals in Punta Mita require careful management, attention to detail, and a consistent approach to guest experience."
      sections={[
        {
          heading: "What Defines a Luxury Rental",
          body: "Luxury rentals are not just about the property itself. They involve service, preparation, and coordination. Every stay must meet expectations from arrival to departure.",
        },
        {
          heading: "Managing Rentals in Punta Mita",
          body: "Managing luxury rentals in Punta Mita includes handling bookings, coordinating cleaning and maintenance, and ensuring that each guest has a seamless experience throughout their stay while maintaining the property at a high standard.",
        },
        {
          heading: "A Local, Hands-On Approach",
          body: "Being present in Punta Mita allows for faster response times, better coordination, and a more personalized approach to both homeowners and guests.",
        },
      ]}
      ctaHref="/properties"
      ctaLabel="View Properties"
    />
  );
}
