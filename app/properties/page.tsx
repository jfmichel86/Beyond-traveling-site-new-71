import React from "react";
import Link from "@/components/LocaleLink";
import Container from "@/components/Container";
import { PrimaryButton, OutlineButton, Eyebrow } from "@/components/ui";
import { getVillaCards } from "@/lib/villa/queries";
import PropertyCard from "@/components/villa/PropertyCard";
import "./villa.css";
import { pageAlternates } from "@/lib/seo";
import MobileStickyCta from "@/components/MobileStickyCta";

// Re-check Sanity for new/edited villas every minute.
export const revalidate = 60;

export const metadata = {
  title: "Managed Properties in Punta Mita",
  description:
    "Homes currently looked after by Beyond Traveling in Punta Mita. Luxury property management with direct communication, local care, guest support, and a limited portfolio.",  alternates: pageAlternates("/properties"),
};


export default async function Properties() {
  const properties = await getVillaCards();

  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[680px] py-20 text-center md:py-28">
            <Eyebrow>Managed Properties in Punta Mita</Eyebrow>

            <h1 className="font-serif mt-6 text-4xl font-light leading-[1.15] tracking-[-0.01em] text-bt-navy md:text-[46px]">
              Homes We Currently
              <br />
              <span className="italic text-bt-gold">Look After.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[480px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
              Each property here is personally managed and closely overseen.
              We do not list homes we do not manage — and we do not manage
              more than we can handle well.
            </p>
          </div>
        </Container>
      </section>

      {/* Villa cards — same card design as mexicanreserve.com */}
      <section className="mr-villa py-16 md:py-20">
        <div className="similar-grid mx-auto max-w-[1300px] px-6 md:px-16">
          {properties.map((p) => (
            <PropertyCard key={p._id} property={p} />
          ))}
        </div>
        {properties.length === 0 && (
          <p className="mx-auto max-w-[520px] px-6 text-center text-[16px] leading-[1.75] text-bt-charcoal/85">
            Our homes are taking a moment to load. Please refresh the page in a
            minute, or contact us and we&rsquo;ll send you the details directly.
          </p>
        )}
      </section>

      <section className="border-t border-bt-navy/10 bg-bt-cream">
        <div className="mx-auto max-w-[660px] px-6 py-20 text-center md:py-28">
          <h2 className="font-serif text-3xl font-light leading-[1.3] tracking-[-0.01em] text-bt-navy md:text-[34px]">
            Our Portfolio Grows Through Trust and Referrals — Not Volume
          </h2>

          <p className="mx-auto mt-5 max-w-[460px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
            If you are looking for a team that will know your home, answer
            directly, and care about rental results, let&rsquo;s talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact/owners">
              Talk With Us About Your Property
            </PrimaryButton>
            <OutlineButton href="/services">View Services</OutlineButton>
          </div>
        </div>
      </section>

      <MobileStickyCta contactHref="/contact/owners" contactLabel="Talk With Us" whatsappTopic="guest" />
    </main>
  );
}
