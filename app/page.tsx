import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const OutlineButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-900/35 bg-white/70 px-6 text-[15px] font-semibold text-slate-900 shadow-sm transition hover:border-slate-900 hover:bg-white"
  >
    {children}
  </Link>
);

const PrimaryButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-6 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800"
  >
    {children}
  </Link>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-slate-900 md:text-5xl ${className}`}>
    {children}
  </h2>
);

const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[17px] leading-[1.75] text-slate-700 ${className}`}>{children}</p>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-[16px] leading-[1.7] text-slate-700">
    <span className="mt-[11px] h-[2px] w-4 shrink-0 bg-slate-900/45" />
    <span>{children}</span>
  </li>
);

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
    <h3 className="font-serif text-2xl leading-tight text-slate-900">{title}</h3>
    <p className="mt-3 text-[15px] leading-[1.7] text-slate-700">{children}</p>
  </div>
);

const BG = {
  hero: "bg-[#f4f0ea]",
  softBlue: "bg-[#f1f4f8]",
  cream: "bg-[#f6f0e8]",
  white: "bg-white",
} as const;

const Hero = () => (
  <section id="home" className={`relative overflow-hidden ${BG.hero}`}>
    <div className="absolute inset-0">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <Image
          src="/home/hero.jpg"
          alt="Luxury property management in Punta Mita"
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,234,0.96)_0%,rgba(244,240,234,0.72)_35%,rgba(244,240,234,0.18)_75%,rgba(244,240,234,0)_100%)]" />
      </div>
    </div>

    <Container>
      <div className="relative z-10 grid min-h-[620px] items-center py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Punta Mita luxury property management
          </p>

          <h1 className="max-w-[760px] font-serif text-5xl leading-[1.03] tracking-[-0.03em] text-slate-900 md:text-7xl">
            Your home, looked after by people you can actually reach.
          </h1>

          <Body className="mt-6 max-w-[680px]">
            Hands-on property management in Punta Mita for owners who want honest communication,
            strong rental results, clear pricing, and no hidden fees.
          </Body>

          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/contact">Talk About Your Property</PrimaryButton>
            <OutlineButton href="/services">See How We Work</OutlineButton>
          </div>

          <div className="mt-8 grid max-w-[680px] grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-900/10 bg-white/65 p-4">
              <div className="text-sm font-semibold text-slate-900">People, not layers</div>
              <div className="mt-1 text-sm text-slate-600">Direct communication with the team.</div>
            </div>
            <div className="rounded-2xl border border-slate-900/10 bg-white/65 p-4">
              <div className="text-sm font-semibold text-slate-900">No hidden fees</div>
              <div className="mt-1 text-sm text-slate-600">Clear costs from the beginning.</div>
            </div>
            <div className="rounded-2xl border border-slate-900/10 bg-white/65 p-4">
              <div className="text-sm font-semibold text-slate-900">Rental-focused</div>
              <div className="mt-1 text-sm text-slate-600">Care, guest service, and performance.</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const IntroCompact = () => (
  <section className={BG.softBlue}>
    <Container>
      <div className="py-16 md:py-22">
        <div className="mx-auto max-w-[850px] text-center">
          <SectionTitle>A more personal way to manage your home.</SectionTitle>
          <Body className="mt-5">
            We’re a small, hands-on team. We stay close to the homes we manage, keep owners informed,
            answer quickly, and treat each property like a real home — not another account in a system.
          </Body>
        </div>
      </div>
    </Container>
  </section>
);

const Partnership = () => (
  <section className={BG.white}>
    <Container>
      <div className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <SectionTitle>We don’t “manage” homes. <span className="italic">We look after them with you.</span></SectionTitle>
          <Body className="mt-5">
            Some owners care most about preserving the property. Others want stronger rental performance.
            Most want both. Our job is to align with you, communicate clearly, and make good decisions day to day.
          </Body>

          <ul className="mt-6 space-y-3">
            <Bullet>Know who is taking care of your property.</Bullet>
            <Bullet>Know what is happening day to day.</Bullet>
            <Bullet>Know why decisions are being made.</Bullet>
          </ul>

          <p className="mt-6 text-[17px] font-semibold text-slate-900">
            And when you need us, you can reach us.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/home/partnership.jpg"
              alt="Homeowner and property management team discussing a luxury home in Punta Mita"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const ValueCards = () => (
  <section className={BG.cream}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="max-w-[760px]">
          <SectionTitle>What owners usually want is simple.</SectionTitle>
          <Body className="mt-5">
            Clear answers, careful property care, better rental performance, and no surprises.
          </Body>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card title="Clear pricing">
            Straightforward fees, no hidden charges, and no incentive for us to inflate your operating costs.
          </Card>
          <Card title="Local response">
            We live and work close to the properties we manage, so small issues do not become expensive problems.
          </Card>
          <Card title="Better guest experience">
            Fast replies, clean arrivals, thoughtful coordination, and the kind of service that helps rentals perform.
          </Card>
        </div>
      </div>
    </Container>
  </section>
);

const Services = () => (
  <section className={BG.white}>
    <Container>
      <div className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <SectionTitle>What we take care of.</SectionTitle>
          <Body className="mt-5">The day-to-day work that protects the home and supports the rental experience.</Body>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card title="Property care">Maintenance oversight, inspections, vendor coordination, and readiness checks.</Card>
            <Card title="Guest support">Fast guest communication, arrivals, local help, and concierge coordination.</Card>
            <Card title="Housekeeping">Cleaning coordination, supplies, laundry, and pre-arrival preparation.</Card>
            <Card title="Owner updates">Clear reporting, honest communication, and practical recommendations.</Card>
          </div>

          <div className="mt-8">
            <OutlineButton href="/services">View Services</OutlineButton>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/home/services.jpg"
              alt="Luxury villa management services in Punta Mita"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const LocalAvailability = () => (
  <section className={BG.cream}>
    <Container>
      <div className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="relative overflow-hidden rounded-3xl md:order-1">
          <div className="relative aspect-[4/3]">
            <Image
              src="/home/local.jpg"
              alt="Local property management team available in Punta Mita"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:order-2">
          <SectionTitle>We’re here. <span className="italic">And we answer.</span></SectionTitle>
          <Body className="mt-5">
            Good rentals depend on responsiveness. Good ownership depends on availability.
            We take both seriously.
          </Body>

          <ul className="mt-6 space-y-3">
            <Bullet>Faster responses to guests.</Bullet>
            <Bullet>Quick action when something needs attention.</Bullet>
            <Bullet>Real relationships with local vendors.</Bullet>
            <Bullet>No “we’ll check on that Monday” mentality.</Bullet>
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

const Process = () => (
  <section className={BG.white}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-[780px] text-center">
          <SectionTitle>How it starts.</SectionTitle>
          <Body className="mt-5">
            No pressure. No hard sell. We first understand your home, your goals, and whether we are the right fit.
          </Body>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <Card title="1. We talk">You tell us what you need, what has worked, and what has not.</Card>
          <Card title="2. We review">We look at the property, operations, guest experience, and current setup.</Card>
          <Card title="3. We plan">We recommend a simple management structure with clear responsibilities.</Card>
          <Card title="4. We manage">We stay involved, communicate clearly, and keep improving the home and rental results.</Card>
        </div>
      </div>
    </Container>
  </section>
);

const FAQ = () => (
  <section className={BG.softBlue}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="max-w-[760px]">
          <SectionTitle>Questions owners usually ask.</SectionTitle>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <details className="rounded-2xl bg-white p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Do you handle rentals too?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              Yes. We help with guest communication, readiness, coordination, and the details that support stronger rental performance.
            </p>
          </details>

          <details className="rounded-2xl bg-white p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Are there hidden fees?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              No. Our focus is clear pricing and honest operating decisions. We do not benefit when your costs go up.
            </p>
          </details>

          <details className="rounded-2xl bg-white p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Will I deal with one person or a system?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              You deal with people. We keep communication direct and avoid passing your home through layers of staff.
            </p>
          </details>

          <details className="rounded-2xl bg-white p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">Where do you work?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              We focus on Punta Mita and nearby luxury homes in Riviera Nayarit.
            </p>
          </details>
        </div>
      </div>
    </Container>
  </section>
);

const FinalCta = () => (
  <section id="contact" className="bg-slate-900">
    <Container>
      <div className="py-16 text-center md:py-24">
        <h2 className="mx-auto max-w-[780px] font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-white md:text-6xl">
          Let’s see if we’re a good fit.
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[1.75] text-white/75">
          If you want a team that answers, stays involved, protects your home, and works honestly,
          we’d be happy to talk.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Contact Us
          </Link>
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
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-900/20 text-sm font-semibold text-slate-900"
      >
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
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
      <IntroCompact />
      <Partnership />
      <ValueCards />
      <Services />
      <LocalAvailability />
      <Process />
      <FAQ />
      <FinalCta />
      <MobileStickyCta />
    </div>
  );
}
