import React from "react";
import Container from "@/components/Container";
import {
  PrimaryButton,
  OutlineAnchor,
  TextLink,
  Eyebrow,
  FullBleedPhoto,
  PullQuoteSection,
} from "@/components/ui";

export const metadata = {
  title: "Property Management Services in Punta Mita | Beyond Traveling",
  description:
    "Luxury property management services in Punta Mita with property care, guest coordination, cleaning, reporting, clear pricing, and direct owner communication.",  alternates: { canonical: "/services" },
};

const MobileStickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bt-navy/10 bg-white/95 p-3 backdrop-blur md:hidden">
    <div className="grid grid-cols-2 gap-3">
      <a
        href="https://wa.me/523313619889"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center border border-bt-navy/25 text-[10px] font-medium uppercase tracking-[0.13em] text-bt-navy transition hover:bg-bt-cream focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
      >
        WhatsApp
      </a>

      <a
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center bg-bt-navy text-[10px] font-medium uppercase tracking-[0.13em] text-white transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
      >
        Contact
      </a>
    </div>
  </div>
);

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

export default function ServicesPage() {
  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[720px] py-20 text-center md:py-28">
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
        src="/services/our-approach.jpg"
        alt="Covered terrace and pool at a luxury villa managed by Beyond Traveling in Punta Mita"
      />

      <PullQuoteSection
        eyebrow="Our Approach"
        quote="Being present, paying attention, and making practical decisions before small issues become bigger ones."
        body="This is someone's home, not just an asset. Decisions affect comfort, costs, and rental results — responsiveness matters as much as execution."
      >
        <div className="mt-6">
          <a
            href="/about"
            className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-bt-navy border-b border-bt-gold pb-1.5"
          >
            See Who You&rsquo;ll Be Dealing With
          </a>
        </div>
      </PullQuoteSection>

      <section id="services-included" className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[900px] py-20 md:py-24">
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

      <section className="border-t border-bt-navy/10 bg-white">
        <div className="mx-auto max-w-[660px] px-6 py-20 text-center md:py-28">
          <h3 className="font-serif text-3xl font-light leading-[1.3] tracking-[-0.01em] text-bt-navy md:text-[34px]">
            Doing the Right Things Consistently — and Being Available When It
            Matters
          </h3>

          <p className="mx-auto mt-5 max-w-[440px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
            If you want a team that knows your home, answers directly, and
            keeps costs clear, let&rsquo;s talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact/owners">
              Talk With Us About Your Property
            </PrimaryButton>
            <OutlineAnchor href="https://wa.me/523313619889">
              WhatsApp Us
            </OutlineAnchor>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </main>
  );
}
