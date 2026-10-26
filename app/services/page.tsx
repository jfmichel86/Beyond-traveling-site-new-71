import React from "react";
import Link from "@/components/LocaleLink";
import Container from "@/components/Container";
import {
  PrimaryButton,
  TextLink,
  Eyebrow,
  FullBleedPhoto,
  PullQuoteSection,
} from "@/components/ui";
import { pageAlternates } from "@/lib/seo";
import MobileStickyCta from "@/components/MobileStickyCta";
import OwnerCta from "@/components/OwnerCta";
import { getSitePhoto, photoAlt } from "@/lib/sitePhotos";

export const metadata = {
  title: { absolute: "Property Management Services in Punta Mita | Beyond Traveling" },
  description:
    "Luxury property management services in Punta Mita with property care, guest coordination, cleaning, reporting, clear pricing, and direct owner communication.",  alternates: pageAlternates("/services"),
};


const ServiceItem = ({
  title,
  italicTitle,
  description,
  tags,
}: {
  title: string;
  italicTitle: string;
  description: string;
  tags: string;
}) => (
  <div>
    <div>
      <h3 className="font-serif text-2xl font-normal text-bt-navy md:text-[26px]">
        {title} <span className="italic text-bt-gold">{italicTitle}</span>
      </h3>
      <p className="mt-3 max-w-[540px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
        {description}
      </p>
      <p className="mt-4 text-[12px] font-normal tracking-[0.01em] text-bt-navy/75">
        {tags}
      </p>
    </div>
  </div>
);

export default async function ServicesPage() {
  const photo = await getSitePhoto("services", "/services/our-approach.jpg");

  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[720px] py-20 text-center md:py-24">
            <Eyebrow>Property Management Services in Punta Mita</Eyebrow>

            <h1 className="font-serif mt-6 text-4xl font-light leading-[1.15] tracking-[-0.01em] text-bt-navy md:text-[48px]">
              The Day-to-Day Care
              <br />
              Your Property Needs.
              <br />
              <span className="italic text-bt-gold">Without the Distance.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[480px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
              Clear communication, thoughtful property care, reliable guest
              support, transparent reporting — and no hidden fees.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <PrimaryButton href="/contact/owners">
                Talk With Us About Your Property
              </PrimaryButton>
              <TextLink href="#services-included">See What&rsquo;s Included</TextLink>
            </div>
          </div>
        </Container>
      </section>

      <FullBleedPhoto
        src={photo.src}
        alt={photoAlt(photo, "Covered terrace and pool at a luxury villa managed by Beyond Traveling in Punta Mita")}
      />

      <PullQuoteSection
        eyebrow="Our Approach"
        quote="Being present, paying attention, and making practical decisions before small issues become bigger ones."
        body="This is someone’s home, not just an asset. Decisions affect comfort, costs, and rental results — responsiveness matters as much as execution."
      >
        <div className="mt-6">
          <Link
            href="/about"
            className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-bt-navy border-b border-bt-gold pb-1.5"
          >
            See Who You&rsquo;ll Be Dealing With
          </Link>
        </div>
      </PullQuoteSection>

      <section id="services-included" className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[900px] py-16 md:py-20">
            <div className="flex flex-col gap-14 md:gap-16">
              <ServiceItem
                title="Property Care"
                italicTitle="& Maintenance"
                description="We keep a close eye on the home, coordinate trusted local vendors, and handle the practical work that protects the property over time."
                tags="Regular inspections · Preventive maintenance · Trusted local vendors"
              />
              <div className="h-px w-full bg-bt-navy/10" />
              <ServiceItem
                title="Guest Communication"
                italicTitle="& Coordination"
                description="Guests remember how quickly they are helped. We support the stay with clear communication, arrival coordination, and local availability when needed."
                tags="Fast, personal responses · Check-in coordination · On-call during stays"
              />
              <div className="h-px w-full bg-bt-navy/10" />
              <ServiceItem
                title="Cleaning"
                italicTitle="& Readiness"
                description="A luxury stay depends on details. We coordinate cleaning, supplies, laundry, and property readiness so the home feels cared for between stays."
                tags="Cleaning quality control · Supply management · Pre-arrival preparation"
              />
              <div className="h-px w-full bg-bt-navy/10" />
              <ServiceItem
                title="Financial Clarity"
                italicTitle="& Reporting"
                description="Owners should understand what is being spent, why it matters, and how the home is performing. We keep reporting clear and decisions transparent."
                tags="Clear owner reports · Transparent accounting · No hidden fees"
              />
            </div>
          </div>
        </Container>
      </section>

      <OwnerCta />

      <MobileStickyCta contactHref="/contact/owners" contactLabel="Talk With Us" />
    </main>
  );
}
