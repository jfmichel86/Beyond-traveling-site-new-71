import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Property Management Services in Punta Mita | Beyond Traveling",
  description:
    "Luxury property management services in Punta Mita with property care, guest coordination, cleaning, reporting, clear pricing, and direct owner communication.",
};

const BG = {
  hero: "bg-white",
  intro: "bg-[#f1f4f8]",
  white: "bg-white",
  cream: "bg-[#f6f0e8]",
  final: "bg-[#f1f4f8]",
} as const;

const PrimaryButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-4xl ${className}`}
  >
    {children}
  </h2>
);

const Body = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-[17px] leading-[1.75] text-slate-900/72 ${className}`}>
    {children}
  </p>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-[17px] leading-[1.75] text-slate-900/75">
    <span className="mt-[12px] h-[2px] w-3 shrink-0 bg-slate-900/40" />
    <span>{children}</span>
  </li>
);

const ValueCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur">
    <p className="text-[14px] font-semibold text-slate-900">{title}</p>
    <p className="mt-1 text-[13px] leading-6 text-slate-900/65">
      {children}
    </p>
  </div>
);

const ImageBlock = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative overflow-hidden rounded-2xl">
    <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover object-center"
      />
    </div>
    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(15,23,42,0)_45%)]" />
    <div className="absolute inset-0 ring-1 ring-slate-900/10" />
  </div>
);

const ServiceSection = ({
  title,
  italicTitle,
  description,
  bullets,
  image,
  alt,
  reverse = false,
  bg = BG.white,
}: {
  title: string;
  italicTitle: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  bg?: string;
}) => (
  <section className={`${bg} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className={`min-w-0 ${reverse ? "md:order-2" : ""}`}>
          <SectionTitle>
            {title} <span className="italic">{italicTitle}</span>
          </SectionTitle>

          <Body className="mt-5">{description}</Body>

          <ul className="mt-5 space-y-3">
            {bullets.map((bullet) => (
              <Bullet key={bullet}>{bullet}</Bullet>
            ))}
          </ul>
        </div>

        <div className={`min-w-0 ${reverse ? "md:order-1" : ""}`}>
          <ImageBlock src={image} alt={alt} />
        </div>
      </div>
    </Container>
  </section>
);

const MobileStickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-900/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
    <div className="grid grid-cols-2 gap-3">
      <a
        href="https://wa.me/523313619889"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/25 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        WhatsApp
      </a>

      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Contact
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="pb-20 md:pb-0">
      <section className={BG.hero}>
        <Container>
          <div className="mx-auto max-w-[820px] py-16 text-center md:py-24">
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/60">
              Property management services in Punta Mita
            </p>

            <h1 className="mx-auto max-w-[820px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
              The day-to-day care your property needs.
              <span className="block italic text-[0.78em] leading-[1.15]">
                Without the distance or confusion.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
              We manage luxury homes in Punta Mita with clear communication,
              thoughtful property care, reliable guest support, transparent
              reporting, and no hidden fees.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="/contact">
                Talk With Us About Your Property
              </PrimaryButton>
              <OutlineButton href="#services-included">
                See What’s Included
              </OutlineButton>
            </div>

            <div className="mx-auto mt-8 grid max-w-[760px] gap-3 sm:grid-cols-3">
              <ValueCard title="Property care">
                Inspections, maintenance, vendors, and readiness.
              </ValueCard>
              <ValueCard title="Guest support">
                Fast replies, arrivals, coordination, and local help.
              </ValueCard>
              <ValueCard title="Owner clarity">
                Clear updates, reporting, pricing, and decisions.
              </ValueCard>
            </div>
          </div>
        </Container>
      </section>

      <section className={`${BG.intro} overflow-x-hidden`}>
        <Container>
          <div className="grid w-full min-w-0 gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div className="min-w-0">
              <ImageBlock
                src="/services/our-approach.jpg"
                alt="Beyond Traveling team discussing property management for a luxury home in Punta Mita"
              />
            </div>

            <div className="min-w-0">
              <SectionTitle>
                Our <span className="italic">Approach</span>
              </SectionTitle>

              <div className="mt-6 space-y-3">
                <Body>
                  Good property management is not about making things sound
                  complicated. It is about being present, paying attention, and
                  making practical decisions before small issues become bigger
                  ones.
                </Body>

                <Body>
                  Owners work directly with people who know the home, understand
                  the priorities, and can explain what is happening without
                  vague answers or layers of staff.
                </Body>
              </div>

              <ul className="mt-6 space-y-3">
                <Bullet>This is someone’s home, not just an asset</Bullet>
                <Bullet>Decisions affect comfort, costs, and rental results</Bullet>
                <Bullet>Responsiveness matters as much as execution</Bullet>
              </ul>

              <div className="mt-8">
                <OutlineButton href="/about">
                  See Who You’ll Be Dealing With
                </OutlineButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div id="services-included" />

      <ServiceSection
        title="Property Care"
        italicTitle="& Maintenance"
        description="We keep a close eye on the home, coordinate trusted local vendors, and handle the practical work that protects the property over time."
        bullets={[
          "Regular inspections and property oversight",
          "Preventive maintenance to avoid larger issues",
          "Coordination with trusted local vendors",
          "Quick follow-up when something needs attention",
        ]}
        image="/services/property-care.jpg"
        alt="Property care and maintenance for a luxury home in Punta Mita"
      />

      <ServiceSection
        title="Guest Communication"
        italicTitle="& Coordination"
        description="Guests remember how quickly they are helped. We support the stay with clear communication, arrival coordination, and local availability when needed."
        bullets={[
          "Fast, personal responses to guest inquiries",
          "Clear check-in and stay coordination",
          "On-call availability during stays",
          "Concierge and local support coordination",
        ]}
        image="/services/guest-communication.jpg"
        alt="Guest communication and coordination for a Punta Mita rental property"
        reverse
        bg={BG.cream}
      />

      <ServiceSection
        title="Cleaning"
        italicTitle="& Readiness"
        description="A luxury stay depends on details. We coordinate cleaning, supplies, laundry, and property readiness so the home feels cared for between stays."
        bullets={[
          "Cleaning coordination and quality control",
          "Supply management without overbuying",
          "Laundry and pre-arrival preparation",
          "Property readiness between guest stays",
        ]}
        image="/services/cleaning.jpg"
        alt="Cleaning and readiness for a luxury vacation rental in Punta Mita"
      />

      <ServiceSection
        title="Financial Clarity"
        italicTitle="& Reporting"
        description="Owners should understand what is being spent, why it matters, and how the home is performing. We keep reporting clear and decisions transparent."
        bullets={[
          "Clear, understandable owner reports",
          "Transparent accounting and expense visibility",
          "Thoughtful fiscal coordination when needed",
          "No hidden fees or inflated operating costs",
        ]}
        image="/services/financial.jpg"
        alt="Financial clarity and reporting for Punta Mita property management"
        reverse
        bg={BG.cream}
      />

      <section className={BG.final}>
        <Container>
          <div className="mx-auto max-w-[860px] py-14 text-center md:py-20">
            <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-5xl">
              Good management means doing the right things consistently — and
              being available when it matters.
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
              If you want a team that knows your home, answers directly, cares
              about rental results, and keeps costs clear, we’d be happy to
              talk.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="/contact">
                Talk With Us About Your Property
              </PrimaryButton>
              <a
                href="https://wa.me/523313619889"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      <MobileStickyCta />
    </main>
  );
}
