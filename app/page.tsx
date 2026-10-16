import React from "react";
import Link from "@/components/LocaleLink";
import Image from "next/image";
import {
  PrimaryButton,
  Eyebrow,
  PullQuoteSection,
  HairlineRow,
} from "@/components/ui";
import ComparisonTable from "@/components/ComparisonTable";
import ServiceName from "@/components/ServiceName";
import PropertyCard from "@/components/villa/PropertyCard";
import { getVillaCards } from "@/lib/villa/queries";
import type { Property } from "@/lib/villa/utils";
import "./properties/villa.css";
import { pageAlternates } from "@/lib/seo";
import MobileStickyCta from "@/components/MobileStickyCta";
import WhatsAppLink from "@/components/WhatsAppLink";

// Re-check Sanity for new/edited villas every minute (villas strip below).
export const revalidate = 60;

const HOME_TITLE = "Punta Mita Property Management & Luxury Rentals";
const HOME_DESCRIPTION =
  "Luxury property management in Punta Mita: rental management, Home Watch, concierge, and villas to book. Clear pricing, no hidden fees, direct communication.";

export const metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: pageAlternates("/"),
  openGraph: {
    title: `${HOME_TITLE} | Beyond Traveling`,
    description: HOME_DESCRIPTION,
    url: "https://www.beyondtravelingmx.com",
    siteName: "Beyond Traveling",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury property management in Punta Mita",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOME_TITLE} | Beyond Traveling`,
    description: HOME_DESCRIPTION,
    images: ["/og-home.jpg"],
  },
};

/** Questions shown in the comparison panel's FAQ teaser — also emitted as
 *  FAQPage JSON-LD, so the markup always matches the visible text. */
const HOME_FAQ = [
  {
    question: "Are there hidden fees?",
    answer:
      "No. Our fees are straightforward, and we don\u2019t benefit when your expenses go up.",
  },
  {
    question: "Rentals, or only maintenance?",
    answer:
      "Both. Guest communication and rental performance, alongside the upkeep that protects the property.",
  },
  {
    question: "Do you take every property?",
    answer:
      "No. We work with a limited number of homeowners on purpose, to stay closely involved.",
  },
];

const Hero = () => (
  <section className="relative bg-white">
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-7 py-16 sm:px-8 md:px-12 md:py-24 lg:pl-24">
        <Eyebrow>Locally Based. Personally Run.</Eyebrow>

        <h1 className="font-serif mt-6 text-4xl font-light leading-[1.14] tracking-[-0.01em] text-bt-navy sm:text-[42px] md:text-[46px]">
          Luxury Property Management in Punta Mita.
          <br />
          <span className="italic text-bt-gold-text">Done Personally. Done Right.</span>
        </h1>

        <p className="order-4 mt-6 max-w-[460px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85 md:order-3">
          A bilingual, locally based team serving homeowners in Punta Mita
          since 2023. We provide Property Management, Vacation Rental
          Management, Home Watch, Concierge Service.
        </p>

        <div className="order-3 mt-8 flex flex-wrap items-center gap-5 md:order-4">
          <PrimaryButton href="/contact/owners">
            Talk With Us About Your Property
          </PrimaryButton>
        </div>
      </div>

      <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[560px]">
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

  </section>
);

const TRUST_ICONS: Record<string, React.ReactNode> = {
  star: <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4l-5.300 3 1.200-6L3.400 9.300l6-.7z" />,
  pin: (
    <>
      <path d="M12 21s-6-5.600-6-10a6 6 0 0112 0c0 4.400-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.200" />
    </>
  ),
  chat: <path d="M4 5h16v10H10l-4 4v-4H4z" />,
  tool: (
    <path d="M14.700 6.300a4 4 0 00-5 5L4 17l3 3 5.700-5.700a4 4 0 005-5l-2.400 2.400-2.300-.7-.7-2.300z" />
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.500-3 8-7 10-4-2-7-5.500-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  report: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M9 12h7M9 16h7M9 8h3" />
    </>
  ),
};

const TrustRow = () => {
  const items = [
    { icon: "star", label: "Luxury Home Specialists" },
    { icon: "pin", label: "Local Punta Mita Experts" },
    { icon: "chat", label: "Bilingual Team" },
    { icon: "tool", label: "Property Inspections & Maintenance" },
    { icon: "shield", label: "Reliable Vendor Network" },
    { icon: "report", label: "Monthly Property Reports" },
  ];

  const rows = [items.slice(0, 3), items.slice(3)];

  return (
    <div className="bg-bt-navy">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-6 py-6 lg:gap-3.5 lg:px-12 lg:py-5">
        {rows.map((row, r) => (
          <ul
            key={r}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12"
          >
            {row.map((item) => (
              <li
                key={item.label}
                className="flex flex-col items-center gap-1.5 text-center lg:flex-row lg:gap-2.5 lg:text-left"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] shrink-0 fill-none stroke-bt-gold-light stroke-[1.4]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {TRUST_ICONS[item.icon]}
                </svg>
                <span className="text-[11px] font-medium uppercase leading-[1.6] tracking-[0.08em] text-white/90">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
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
    className={`group flex h-full flex-col px-7 py-8 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-bt-gold sm:px-8 sm:py-12 ${
      highlight
        ? "bg-bt-navy hover:bg-bt-navy-light"
        : "hover:bg-bt-navy/[0.03]"
    }`}
  >
    {highlight ? (
      <span className="inline-block self-start rounded-sm bg-bt-gold-light px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-bt-navy">
        {tag}
      </span>
    ) : (
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bt-navy/80">
        {tag}
      </p>
    )}
    <h3
      className={`font-serif mt-3 text-xl font-normal transition-colors duration-300 ${
        highlight
          ? "text-white"
          : "text-bt-navy group-hover:text-bt-navy-light"
      }`}
    >
      <ServiceName
        title={title}
        italic={italicTitle}
        italicClassName={`italic ${highlight ? "text-bt-gold-light" : "text-bt-gold-text"}`}
      />
    </h3>
    <p
      className={`mt-3 max-w-[320px] font-normal text-[13.5px] leading-[1.75] ${
        highlight ? "text-white/85" : "text-bt-charcoal/85"
      }`}
    >
      {description}
    </p>
    <span className="mt-auto flex pt-6">
      <span
        className={`inline-flex items-center border-b pb-[3px] text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
          highlight
            ? "border-bt-gold-light/50 text-bt-gold-light group-hover:border-bt-gold-light"
            : "border-bt-gold/50 text-bt-navy group-hover:border-bt-gold"
        }`}
      >
        {linkLabel}
        <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
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
    <div className="mx-auto max-w-[860px] px-7 py-12 text-center sm:px-8 md:px-12 md:py-16">
      <Eyebrow>What We Do</Eyebrow>
      <h2 className="font-serif mx-auto mt-6 text-2xl font-normal leading-[1.2] tracking-[-0.01em] text-bt-navy md:text-[32px]">
        Your Home,
        <br />
        <span className="italic text-bt-gold-text">Cared For Like It&rsquo;s Ours.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-[760px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
        Occupied by guests or standing empty, the same team looks after every
        detail &mdash; inspections, upkeep, communication, and care.
      </p>
    </div>

    {/* Service cards — two centered, narrower rows (not full-bleed). Row 1:
        the three simplest services. Row 2: the two most complete, narrower
        still. The Full-Service card carries the emphasis (navy fill). */}
    <div className="px-6 pb-16 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-[1040px] border-y border-bt-navy/15">
        <div className="grid grid-cols-1 divide-y divide-bt-navy/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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
      </div>

      <div className="mx-auto max-w-[700px] border-b border-bt-navy/15">
        <div className="grid grid-cols-1 divide-y divide-bt-navy/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
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
            description="The house and the rental business, handled by one team in one report. Most owners who want to be fully hands-off choose this."
            href="/services/full-service-management"
            linkLabel="Explore Full-Service Management"
          />
        </div>
      </div>
    </div>

    {/* comparison table — cream panel, a clear shift from the white
        "What We Do" grid above it */}
    <div className="bg-bt-cream px-6 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[560px] pb-12 text-center md:pb-14">
          <h2 className="font-serif text-2xl font-normal leading-[1.3] tracking-[-0.01em] text-bt-navy md:text-[32px]">
            Which Service <span className="italic text-bt-gold-text">Is Right for Your Home?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] font-normal text-[14.5px] leading-[1.75] text-bt-charcoal/90">
            Each one covers a different part of the job &mdash; combine what
            you need, or let one team handle everything.
          </p>
        </div>

        <ComparisonTable columns={comparisonColumns} rows={comparisonRows} />

        <p className="mt-6 text-center font-normal text-[13px] text-bt-charcoal/90">
          Property Management and Vacation Rental Management cover different
          parts of the job and can be booked separately &mdash; Full-Service
          Management is simply the two together.
        </p>

        {/* compact FAQ teaser — real questions pulled from /faq, placed here
            because this is where comparison/pricing doubts surface */}
        <div className="mx-auto mt-14 max-w-[980px] border-t border-bt-navy/15 pt-12 md:mt-16">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {HOME_FAQ.map((item) => (
              <div key={item.question}>
                <p className="font-serif text-[15px] font-normal text-bt-navy">
                  {item.question}
                </p>
                <p className="mt-2 font-normal text-[13px] leading-[1.75] text-bt-charcoal/90">
                  {item.answer}
                </p>
              </div>
            ))}
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
  </section>
);

const HowItWorks = () => (
  <section className="bg-white">
    <div className="mx-auto grid max-w-[1100px] items-stretch gap-12 px-6 py-20 md:grid-cols-[5fr_7fr] md:gap-20 md:px-12 md:py-28">
      <div className="flex flex-col justify-center md:pr-4">
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="font-serif mt-6 text-[34px] font-normal leading-[1.1] tracking-[-0.015em] text-bt-navy md:text-[52px]">
          Getting Started
          <br />
          <span className="italic text-bt-gold-text">Is Simple.</span>
        </h2>
        <span aria-hidden="true" className="mt-8 block h-px w-14 bg-bt-gold" />
        <p className="mt-8 font-serif text-[20px] font-normal italic leading-[1.55] text-bt-navy/90 md:text-[24px]">
          Every home is different, so we start with a conversation and prepare a
          proposal built around your property.
        </p>
      </div>

      <ol className="divide-y divide-bt-navy/15 border-y border-bt-navy/15">
        {[
          {
            title: "We talk.",
            body: "A conversation about your home, how you use it, and what you need.",
          },
          {
            title: "You get a proposal.",
            body: "A clear quote built around your property and the services you choose.",
          },
          {
            title: "We take over.",
            body: "Once you\u2019re happy, we handle the day-to-day and keep you informed.",
          },
        ].map((step, i) => (
          <li key={step.title} className="flex gap-6 py-8 md:gap-8">
            <span
              aria-hidden="true"
              className="font-serif w-10 shrink-0 text-[40px] font-light italic leading-none text-bt-gold-text"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-serif text-[22px] font-normal text-bt-navy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[420px] font-normal text-[14.5px] leading-[1.75] text-bt-charcoal/85">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const VillasWeManage = ({ villas }: { villas: Property[] }) => (
  <section className="bg-bt-cream">
    <div className="mx-auto max-w-[680px] px-6 pb-4 pt-20 text-center md:pt-28">
      <Eyebrow>Homes We Manage</Eyebrow>
      <h2 className="font-serif mx-auto mt-6 text-2xl font-normal leading-[1.2] tracking-[-0.01em] text-bt-navy md:text-[32px]">
        The Homes in Our Care,
        <br />
        <span className="italic text-bt-gold-text">Ready to Welcome Guests.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-[480px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
        Each one is personally managed by our team and available to book for
        your stay in Punta Mita.
      </p>
    </div>

    {villas.length > 0 ? (
      <div className="mr-villa pb-20 pt-12 md:pb-28 md:pt-14">
        <div className="similar-grid mx-auto max-w-[1300px] px-6 md:px-16">
          {villas.map((p) => (
            <PropertyCard key={p._id} property={p} />
          ))}
        </div>
      </div>
    ) : (
      /* Lightweight fallback if the villa data can't be loaded: no heavy photo,
         just a clear path to the full list. */
      <div className="pb-20 pt-8 text-center md:pb-28">
        <Link
          href="/properties"
          className="inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2 active:scale-[0.98]"
        >
          See Our Homes
        </Link>
      </div>
    )}

  </section>
);

const FinalCta = () => (
  <section className="bg-bt-navy">
    <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:gap-16 md:px-12 md:py-24">
      <div>
        <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white md:text-[38px]">
          Let&rsquo;s See If We&rsquo;re a Good Fit
        </h2>

        <p className="mt-5 max-w-[480px] font-normal text-[16px] leading-[1.75] text-white/80">
          If you want a team that actually answers, stays involved, and treats
          your home like it matters, let&rsquo;s talk.
        </p>

        <p className="mt-6">
          <Link
            href="/faq"
            className="text-[12.5px] font-normal text-white/85 underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white"
          >
            Have a question first? See common questions.
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
        <Link
          href="/contact/owners"
          className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition duration-150 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy active:scale-[0.98]"
        >
          Talk With Us About Your Property
        </Link>
        <WhatsAppLink
          audience="owner"
          className="inline-flex min-h-11 items-center justify-center border border-white/35 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy active:scale-[0.98]"
        >
          WhatsApp Us
        </WhatsAppLink>
      </div>
    </div>
  </section>
);


export default async function HomePage() {
  const villas = await getVillaCards();

  return (
    <div className="bg-white pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Hero />
      <TrustRow />
      <WhatWeDo />

      <HowItWorks />

      <VillasWeManage villas={villas} />

      <PullQuoteSection
        eyebrow="Why Owners Choose Us"
        quote={
          <>
            We don&rsquo;t &ldquo;manage&rdquo; homes &mdash; we look after
            them, with you.
          </>
        }
        body="We work with a limited number of homeowners, so we can stay closely involved — getting to know you, your home, and your priorities, whether that’s preserving the property, stronger rental performance, or both."
        bg="bg-white"
      />

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
            body: "No long-term contracts. Cancel anytime with 30 days’ notice.",
          },
          {
            title: "Transparent Pricing",
            body: "No hidden fees — ever.",
          },
        ]}
      />

      <FinalCta />
      <MobileStickyCta contactHref="/contact/owners" contactLabel="Talk With Us" />
    </div>
  );
}
