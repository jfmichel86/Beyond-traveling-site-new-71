import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "About Beyond Traveling | Punta Mita Property Management",
  description:
    "Meet Beyond Traveling, a local Punta Mita property management team focused on direct communication, transparent pricing, reliable oversight, guest support, and personal care for luxury homes.",
};

const BG = {
  hero: "bg-white",
  intro: "bg-[#f1f4f8]",
  white: "bg-white",
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
  <li className="flex gap-3 text-[16px] leading-[1.75] text-slate-900/75">
    <span className="mt-[11px] h-[2px] w-3 shrink-0 bg-slate-900/40" />
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
    <div className="relative aspect-[16/10] w-full">
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

const AboutHero = () => (
  <section className={BG.hero}>
    <Container>
      <div className="mx-auto max-w-[820px] py-16 text-center md:py-24">
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/60">
          About Beyond Traveling
        </p>

        <h1 className="mx-auto max-w-[820px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
          Who We Are.
          <span className="block italic text-[0.78em] leading-[1.15]">
            People You Can Actually Reach.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
          Beyond Traveling was created by a local team focused on personal,
          present, and honest property management in Punta Mita. We believe
          owners should know who is caring for their home, what is happening,
          and why decisions are being made.
        </p>

        <div className="mx-auto mt-8 grid max-w-[760px] gap-3 sm:grid-cols-3">
          <ValueCard title="Direct communication">
            Owners deal with people, not layers.
          </ValueCard>

          <ValueCard title="Local presence">
            We stay close to the homes we manage.
          </ValueCard>

          <ValueCard title="Clear accountability">
            No vague answers or disappearing after onboarding.
          </ValueCard>
        </div>
      </div>
    </Container>
  </section>
);

const AboutStorySection = () => (
  <section className={`${BG.intro} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0">
          <SectionTitle>
            Our Story. <span className="italic">A More Personal Approach.</span>
          </SectionTitle>

          <div className="mt-6 space-y-3">
            <Body>
              We started this project after seeing how often homeowners felt
              disconnected from the people managing their homes in Punta Mita.
              Too many owners were left waiting for updates, unclear about
              costs, or unsure who was actually looking after the property.
            </Body>

            <Body>
              Our goal was simple: create a way of working that feels direct,
              transparent, and genuinely involved in the day-to-day of each
              home.
            </Body>
          </div>

          <div className="mt-8">
            <OutlineButton href="/services">
              See How We Manage Properties
            </OutlineButton>
          </div>
        </div>

        <div className="min-w-0">
          <ImageBlock
            src="/about/partnership.jpg"
            alt="Beyond Traveling team member walking through a luxury property in Punta Mita"
          />
        </div>
      </div>
    </Container>
  </section>
);

const AboutPhilosophy = () => (
  <section className={`${BG.white} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0">
          <ImageBlock
            src="/about/philosophy.jpg"
            alt="Beyond Traveling team member speaking with a local property vendor in Punta Mita"
          />
        </div>

        <div className="min-w-0">
          <SectionTitle>Our Philosophy</SectionTitle>

          <Body className="mt-6">
            Good management is not about making things complicated. It is about
            being present, communicating clearly, and doing the right things
            consistently.
          </Body>

          <div className="mt-7">
            <p className="text-[16px] font-semibold text-slate-900">
              What we believe:
            </p>

            <ul className="mt-4 space-y-3">
              <Bullet>Transparency builds trust.</Bullet>
              <Bullet>Availability prevents problems.</Bullet>
              <Bullet>Long-term relationships matter more than fast growth.</Bullet>
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-[16px] font-semibold text-slate-900">
              What makes us different:
            </p>

            <ul className="mt-4 space-y-3">
              <Bullet>Local presence in Punta Mita.</Bullet>
              <Bullet>A limited number of properties.</Bullet>
              <Bullet>Direct communication with owners.</Bullet>
              <Bullet>Real accountability when something needs attention.</Bullet>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const AboutCTA = () => (
  <section className={`${BG.final} border-t border-slate-900/8`}>
    <Container>
      <div className="mx-auto max-w-[820px] py-14 text-center md:py-20">
        <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-5xl">
          Let’s see if we’re the right people for your home.
        </h2>

        <p className="mx-auto mt-5 max-w-[720px] text-[17px] leading-[1.75] text-slate-900/72">
          If you want direct communication, clear pricing, local oversight, and
          a team that stays involved, we’d be happy to talk.
        </p>

        <p className="mt-4 text-[17px] font-semibold text-slate-900">
          No pressure. Just a conversation.
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
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <AboutHero />
      <AboutStorySection />
      <AboutPhilosophy />
      <AboutCTA />
      <MobileStickyCta />
    </main>
  );
}
