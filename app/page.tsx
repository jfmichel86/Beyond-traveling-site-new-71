import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PrimaryButton,
  Eyebrow,
  FullBleedPhoto,
  PullQuoteSection,
  HairlineRow,
} from "@/components/ui";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata = {
  alternates: { canonical: "/" },
};

const Hero = () => (
  <section className="relative bg-white">
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-7 py-16 sm:px-8 md:px-12 md:py-24 lg:pl-24">
        <Eyebrow>Locally Based. Personally Run.</Eyebrow>

        <h1 className="font-serif mt-6 text-4xl font-light leading-[1.14] tracking-[-0.01em] text-bt-navy sm:text-[42px] md:text-[46px]">
          Luxury Property Management in Punta Mita.
          <br />
          <span className="italic text-bt-gold">Done Personally. Done Right.</span>
        </h1>

        <p className="mt-6 max-w-[460px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
          Beyond Traveling is a bilingual, locally based team providing
          vacation rental management, high-end property management, Home
          Watch, and concierge services across Punta Mita &mdash; serving
          homeowners since 2023.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PrimaryButton href="/contact/owners">
            Book a Property Consultation
          </PrimaryButton>
          <a
            href="tel:+523313619889"
            className="text-[12.5px] font-normal text-bt-navy/85 underline decoration-bt-navy/30 underline-offset-4 transition hover:text-bt-navy hover:decoration-bt-navy"
          >
            Or call +52 33 1361 9889
          </a>
        </div>
      </div>

      <div className="relative min-h-[320px] md:min-h-[560px]">
        <Image
          src="/home/hero.jpg"
          alt="Luxury Punta Mita terrace cared for by Beyond Traveling"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>

    {/* scroll cue — signals there's more below on tall desktop viewports */}
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute bottom-6 left-1/2 hidden h-5 w-5 -translate-x-1/2 animate-bounce text-bt-navy/35 md:block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </section>
);

const TrustRow = () => {
  const items = [
    "Local Punta Mita Experts",
    "Bilingual Team",
    "Property Inspections & Maintenance",
    "Reliable Vendor Network",
    "Monthly Property Reports",
  ];

  return (
    <div className="bg-bt-navy">
      <div className="mx-auto flex max-w-[1100px] cursor-default flex-wrap items-center justify-center gap-y-2 px-7 py-6 text-center text-[11px] font-medium uppercase tracking-[0.04em] text-white/85 sm:px-8 md:px-12 lg:px-24">
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {i < items.length - 1 && (
              <span className="mx-4 text-bt-gold-light">&#9670;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({
  tag,
  highlight = false,
  title,
  italicTitle,
  description,
  href,
  linkLabel,
}: {
  tag: string;
  highlight?: boolean;
  title: string;
  italicTitle: string;
  description: string;
  href: string;
  linkLabel: string;
}) => (
  <Link
    href={href}
    className={`group block px-7 py-12 transition-colors duration-300 hover:bg-bt-navy/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-bt-gold sm:px-8 md:px-10 ${
      highlight ? "bg-bt-navy/[0.02]" : ""
    }`}
  >
    {highlight ? (
      <span className="inline-block rounded-sm bg-bt-navy px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
        {tag}
      </span>
    ) : (
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-bt-navy/80">
        {tag}
      </p>
    )}
    <h3 className="font-serif mt-3 text-xl font-normal text-bt-navy transition-colors duration-300 group-hover:text-bt-navy-light">
      {title} <span className="italic text-[#8A6228]">{italicTitle}</span>
    </h3>
    <p className="mt-3 max-w-[320px] font-normal text-[13.5px] leading-[1.75] text-bt-charcoal/85">
      {description}
    </p>
    <span className="mt-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy border-b border-bt-gold/50 pb-[3px] transition-colors duration-300 group-hover:border-bt-gold">
      {linkLabel}
      <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  </Link>
);

const comparisonColumns: { tag: string; name: string; highlight?: boolean }[] = [
  { tag: "For Vacant Homes", name: "Home Watch" },
  { tag: "For Every Stay", name: "Concierge Service" },
  { tag: "Guests & Bookings", name: "Vacation Rental Management" },
  { tag: "Property Only", name: "Property Management" },
  { tag: "Most Complete", name: "Full-Service Management", highlight: true },
];

const comparisonRows: { feature: string; values: boolean[] }[] = [
  { feature: "Scheduled Property Visits & Inspections", values: [true, false, false, true, true] },
  { feature: "Photo-Documented Visit Reports", values: [true, false, false, true, true] },
  { feature: "Arrival Prep & Guest Concierge", values: [false, true, true, false, true] },
  { feature: "Guest Communication During Stays", values: [false, true, true, false, true] },
  { feature: "Booking & Revenue Management", values: [false, false, true, false, true] },
  { feature: "Vendor Coordination & Oversight", values: [false, false, false, true, true] },
  { feature: "Bill Pay & Financial Administration", values: [false, false, false, true, true] },
  { feature: "Monthly Owner Reporting", values: [false, false, true, true, true] },
];

const WhatWeDo = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-[680px] px-7 py-16 text-center sm:px-8 md:px-12 md:py-24">
      <Eyebrow>What We Do</Eyebrow>
      <h2 className="font-serif mx-auto mt-6 text-2xl font-normal leading-[1.2] tracking-[-0.01em] text-bt-navy md:text-[32px]">
        Everything Your Home Needs.
        <br />
        <span className="italic text-bt-gold">One Team to Handle It.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-[480px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
        Occupied by guests or standing empty, the same team looks after every
        detail &mdash; inspections, upkeep, communication, and care.
      </p>
    </div>

    {/* row 1 of 2 — simplest services (3 columns) */}
    <div className="grid grid-cols-1 divide-y-2 divide-bt-navy/15 border-t-2 border-b-2 border-bt-navy/15 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
      <ServiceCard
        tag="For Vacant Homes"
        title="Home"
        italicTitle="Watch"
        description="Scheduled visits and photo-documented checks for homes standing empty between guest stays."
        href="/services/home-watch"
        linkLabel="Explore Home Watch"
      />
      <ServiceCard
        tag="For Every Stay"
        title="Concierge"
        italicTitle="Service"
        description="Arrival prep and anything a stay requires, arranged directly for you in English or Spanish."
        href="/services/concierge-service"
        linkLabel="Explore Concierge Service"
      />
      <ServiceCard
        tag="Guests & Bookings"
        title="Vacation Rental"
        italicTitle="Management"
        description="Listings, pricing, and every guest conversation — the entire rental business, run for you. Bookable on its own."
        href="/services/vacation-rental-management"
        linkLabel="Explore Vacation Rental Management"
      />
    </div>

    {/* row 2 of 2 — the two most complete services, wider to fill the same width */}
    <div className="grid grid-cols-1 divide-y-2 divide-bt-navy/15 sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0">
      <ServiceCard
        tag="Property Only"
        title="Property"
        italicTitle="Management"
        description="Maintenance, vendors, and bills for the house itself — you keep the guests and the calendar. Bookable on its own."
        href="/services/property-management"
        linkLabel="Explore Property Management"
      />
      <ServiceCard
        tag="Most Complete"
        highlight
        title="Full-Service"
        italicTitle="Management"
        description="Property Management and Vacation Rental Management, combined into one team and one report."
        href="/services/full-service-management"
        linkLabel="Explore Full-Service Management"
      />
    </div>

    {/* comparison table — cream panel, a clear shift from the white
        "What We Do" grid above it */}
    <div className="border-t-2 border-bt-navy/15 bg-bt-cream px-6 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[560px] pb-12 text-center md:pb-14">
          <h2 className="font-serif text-2xl font-normal leading-[1.3] tracking-[-0.01em] text-bt-navy md:text-[32px]">
            Which Service <span className="italic text-bt-gold">Is Right for Your Home?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] font-normal text-[14.5px] leading-[1.75] text-bt-charcoal/90">
            Each one covers a different part of the job &mdash; combine what
            you need, or let one team handle everything.
          </p>
        </div>

        <ComparisonTable columns={comparisonColumns} rows={comparisonRows} />
        <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-bt-navy/75 md:hidden">
          Swipe to compare &rarr;
        </p>

        <p className="mt-6 text-center font-normal text-[13px] text-bt-charcoal/90">
          Property Management and Vacation Rental Management cover different
          parts of the job and can be booked separately &mdash; Full-Service
          Management is simply the two together.
        </p>

        {/* compact FAQ teaser — real questions pulled from /faq, placed here
            because this is where comparison/pricing doubts surface */}
        <div className="mx-auto mt-14 max-w-[980px] border-t border-bt-navy/15 pt-12 md:mt-16">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="font-serif text-[15px] font-normal text-bt-navy">
                Are there hidden fees?
              </p>
              <p className="mt-2 font-normal text-[13px] leading-[1.75] text-bt-charcoal/90">
                No. Our fees are straightforward, and we don&rsquo;t benefit
                when your expenses go up.
              </p>
            </div>
            <div>
              <p className="font-serif text-[15px] font-normal text-bt-navy">
                Rentals, or only maintenance?
              </p>
              <p className="mt-2 font-normal text-[13px] leading-[1.75] text-bt-charcoal/90">
                Both. Guest communication and rental performance, alongside
                the upkeep that protects the property.
              </p>
            </div>
            <div>
              <p className="font-serif text-[15px] font-normal text-bt-navy">
                Do you take every property?
              </p>
              <p className="mt-2 font-normal text-[13px] leading-[1.75] text-bt-charcoal/90">
                No. We work with a limited number of homeowners on purpose,
                to stay closely involved.
              </p>
            </div>
          </div>
          <p className="mt-9 text-center">
            <Link
              href="/faq"
              className="text-[11px] font-medium uppercase tracking-[0.13em] text-bt-navy border-b border-bt-gold/50 pb-[3px] transition hover:border-bt-gold"
            >
              See All FAQs &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>

    {/* Full-Service Management callout */}
    <div className="bg-bt-navy px-6 py-20 text-center md:py-28">
      <Eyebrow className="text-bt-gold-light/90">Full-Service Management</Eyebrow>
      <h2 className="font-serif mx-auto mt-5 max-w-[560px] text-[28px] font-light italic leading-[1.4] text-white md:text-[34px]">
        The House and the Rental Business. One Team, One Report.
      </h2>
      <p className="mx-auto mt-5 max-w-[480px] font-normal text-[16px] leading-[1.75] text-white/[0.68]">
        Full-Service Management combines Property Management and Vacation
        Rental Management &mdash; maintenance, vendors, and bills, plus the
        bookings, guests, and calendar, handled by the same team. Most owners
        who want to be fully hands-off land here.
      </p>
      <Link
        href="/services/full-service-management"
        className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.13em] text-bt-gold-light border-b border-bt-gold-light/50 pb-[3px] transition hover:border-bt-gold-light"
      >
        Explore Full-Service Management &rarr;
      </Link>
    </div>
  </section>
);

const FinalCta = () => (
  <section id="contact" className="bg-bt-navy">
    <div className="mx-auto max-w-[600px] px-6 py-20 text-center md:py-28">
      <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white md:text-[38px]">
        Let&rsquo;s See If We&rsquo;re a Good Fit
      </h2>

      <p className="mx-auto mt-5 max-w-[440px] font-normal text-[16px] leading-[1.75] text-white/80">
        If you want a team that actually answers, stays involved, and treats
        your home like it matters, let&rsquo;s talk.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition duration-150 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy active:scale-[0.98]"
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center justify-center border border-white/35 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy active:scale-[0.98]"
        >
          View Services
        </Link>
      </div>

      <p className="mt-6">
        <Link
          href="/faq"
          className="text-[12.5px] font-normal text-white/85 underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white"
        >
          Have a question first? See common questions.
        </Link>
      </p>
    </div>
  </section>
);

const MobileStickyCta = () => (
  <div className="animate-fadeUp fixed inset-x-0 bottom-0 z-40 border-t border-bt-navy/15 bg-white p-3 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] md:hidden">
    <div className="grid grid-cols-2 gap-3">
      <a
        href="https://wa.me/523313619889"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center border border-bt-navy/25 text-[10px] font-medium uppercase tracking-[0.13em] text-bt-navy transition hover:bg-bt-navy/5 focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
      >
        WhatsApp
      </a>

      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center bg-bt-navy text-[10px] font-medium uppercase tracking-[0.13em] text-white transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
      >
        Contact
      </Link>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Hero />
      <TrustRow />
      <WhatWeDo />

      <FullBleedPhoto
        src="/home/portfolio.jpg"
        alt="Villa Brezza, a Beyond Traveling property in Punta Mita"
        caption="Villa Brezza"
        href="/properties/villa-brezza"
      />

      <PullQuoteSection
        eyebrow="Our Approach"
        quote={
          <>
            We don&rsquo;t &ldquo;manage&rdquo; homes &mdash; we look after
            them, with you.
          </>
        }
        body="We work with a limited number of homeowners, so we can stay closely involved — getting to know you, your home, and your priorities, whether that's preserving the property, stronger rental performance, or both."
        bg="bg-white"
      >
        <p className="mt-6 text-[16px] font-medium text-bt-navy">
          And you can always reach us.
        </p>
      </PullQuoteSection>

      <HairlineRow
        columns={3}
        bg="bg-bt-cream"
        items={[
          {
            title: "Always Reachable",
            body: "We respond within 1 hour during the day.",
          },
          {
            title: "No Lock-In",
            body: "No long-term contracts. Cancel anytime with 30 days' notice.",
          },
          {
            title: "Transparent Pricing",
            body: "No hidden fees — ever.",
          },
        ]}
      />

      <FinalCta />
      <MobileStickyCta />
    </div>
  );
}
