import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

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

const TextLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center text-[15px] font-semibold text-slate-900 underline decoration-slate-900/20 underline-offset-4 transition hover:decoration-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
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

const ServiceCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
    <h3 className="font-serif text-[22px] leading-tight text-slate-900">
      {title}
    </h3>
    <p className="mt-3 text-[15px] leading-[1.7] text-slate-900/70">
      {children}
    </p>
  </div>
);

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => (
  <details className="group rounded-2xl border border-slate-900/10 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-slate-900">
      {question}
      <span className="text-xl leading-none text-slate-900/45 transition group-open:rotate-45">
        +
      </span>
    </summary>
    <div className="mt-3 text-[15px] leading-[1.75] text-slate-900/70">
      {answer}
    </div>
  </details>
);

const ImageBlock = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
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

const BG = {
  hero: "bg-[#f4f0ea]",
  intro: "bg-[#f1f4f8]",
  white: "bg-white",
  cream: "bg-[#f6f0e8]",
  final: "bg-[#f1f4f8]",
} as const;

const Hero = () => (
  <section id="home" className={`relative overflow-hidden ${BG.hero}`}>
    <div className="absolute inset-0">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <Image
          src="/home/hero.jpg"
          alt="Luxury property management in Punta Mita for high-end vacation homes"
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,234,0.98)_0%,rgba(244,240,234,0.86)_30%,rgba(244,240,234,0.45)_62%,rgba(244,240,234,0)_100%)]" />
      </div>
    </div>

    <Container>
      <div className="relative z-10 grid min-h-[610px] items-center py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/60">
            Punta Mita luxury property management
          </p>

          <h1 className="max-w-[760px] font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-slate-900 sm:text-5xl md:text-6xl">
            Luxury Property Management in Punta Mita.
            <span className="block italic text-[0.78em] leading-[1.15]">
              Done Personally. Done Right.
            </span>
          </h1>

          <p className="mt-6 max-w-[680px] text-[17px] leading-[1.75] text-slate-900/72">
            We look after luxury homes, support guests, and help owners protect
            their property and rental results — with clear pricing, direct
            communication, and no hidden fees.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/contact">
              Talk With Us About Your Property
            </PrimaryButton>
            <TextLink href="/services">See How We Work</TextLink>
          </div>

          <div className="mt-8 grid max-w-[700px] gap-3 sm:grid-cols-3">
            <ValueCard title="Direct communication">
              You deal with people, not layers.
            </ValueCard>

            <ValueCard title="Clear pricing">
              No hidden fees or vague charges.
            </ValueCard>

            <ValueCard title="Rental-minded care">
              Better stays help create better results.
            </ValueCard>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const IntroCompact = () => (
  <section className={BG.intro}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-[790px] text-center">
          <SectionTitle>A More Personal Way to Manage Your Home</SectionTitle>

          <div className="mt-5 space-y-3">
            <Body>
              Beyond Traveling isn’t built like a traditional property
              management company.
            </Body>

            <Body>
              We work closely with a limited number of homeowners so we can
              stay available, respond quickly, and treat each property with the
              attention it deserves — not as a number, but as someone’s home.
            </Body>

            <p className="text-[18px] font-semibold leading-[1.65] text-slate-900">
              When owners work with us, they work with people, not a system.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Partnership = () => (
  <section className={`${BG.white} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0">
          <SectionTitle>
            We Don’t “Manage” Homes.{" "}
            <span className="italic">We Look After Them With You.</span>
          </SectionTitle>

          <p className="mt-4 text-[17px] leading-[1.7] text-slate-900/70">
            Good property management feels like teamwork.
          </p>

          <div className="mt-6 space-y-3">
            <Body>
              We get to know you, your home, and your priorities. Some owners
              care most about preserving the property. Others want stronger
              rental performance. Most want both.
            </Body>

            <Body>
              Our role is to align with you, communicate clearly, and make
              thoughtful decisions day to day.
            </Body>
          </div>

          <div className="mt-6">
            <div className="text-[16px] font-semibold text-slate-900">
              You’ll always know:
            </div>

            <ul className="mt-3 space-y-3">
              <Bullet>Who is taking care of your property</Bullet>
              <Bullet>What’s happening day to day</Bullet>
              <Bullet>Why decisions are being made</Bullet>
            </ul>
          </div>

          <p className="mt-6 text-[17px] font-semibold text-slate-900">
            And you’ll always be able to reach us.
          </p>
        </div>

        <div className="min-w-0">
          <ImageBlock
            src="/home/partnership.jpg"
            alt="Homeowner and property management team discussing a luxury home in Punta Mita"
          />
        </div>
      </div>
    </Container>
  </section>
);

const FeesCosts = () => (
  <section className={`${BG.cream} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0">
          <ImageBlock
            src="/home/fees.jpg"
            alt="Clear property management pricing for luxury homes in Punta Mita"
          />
        </div>

        <div className="min-w-0">
          <SectionTitle>
            Clear Pricing. <span className="italic">No Surprises.</span>
          </SectionTitle>

          <div className="mt-6 space-y-3">
            <Body>
              Many owners come to us after feeling frustrated by unclear charges
              or constantly rising costs.
            </Body>

            <Body>We believe trust starts with transparency.</Body>
          </div>

          <Body className="mt-6">
            Our fees are straightforward, and we actively look for ways to save
            owners money, including:
          </Body>

          <ul className="mt-4 space-y-3">
            <Bullet>Avoiding unnecessary maintenance work</Bullet>
            <Bullet>Managing cleaning and supplies efficiently</Bullet>
            <Bullet>
              Being thoughtful about operational and fiscal decisions
            </Bullet>
          </ul>

          <p className="mt-6 text-[17px] font-semibold leading-[1.7] text-slate-900">
            We don’t inflate costs — and we don’t benefit when expenses go up.
          </p>

          <div className="mt-8">
            <OutlineButton href="/services">
              How Our Management Works
            </OutlineButton>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Services = () => (
  <section className={`${BG.white} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-start md:py-24">
        <div className="min-w-0">
          <SectionTitle>What We Take Care Of</SectionTitle>

          <p className="mt-4 text-[17px] leading-[1.7] text-slate-900/70">
            So you don’t have to worry about the day-to-day.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ServiceCard title="Property care">
              Maintenance oversight, inspections, vendor coordination, and
              property readiness.
            </ServiceCard>

            <ServiceCard title="Guest support">
              Fast guest communication, arrival coordination, local help, and
              concierge support.
            </ServiceCard>

            <ServiceCard title="Housekeeping">
              Cleaning coordination, supplies, laundry, and pre-arrival
              preparation.
            </ServiceCard>

            <ServiceCard title="Owner updates">
              Clear reporting, honest communication, and practical
              recommendations.
            </ServiceCard>
          </div>

          <p className="mt-7 text-[17px] font-semibold text-slate-900">
            Most importantly: we stay involved.
          </p>

          <p className="mt-3 text-[17px] leading-[1.7] text-slate-900/75">
            We don’t disappear after onboarding, and we don’t hand your property
            off to layers of staff.
          </p>
        </div>

        <div className="min-w-0">
          <ImageBlock
            src="/home/services.jpg"
            alt="Luxury villa management services in Punta Mita"
          />
        </div>
      </div>
    </Container>
  </section>
);

const LocalAvailability = () => (
  <section className={`${BG.cream} overflow-x-hidden`}>
    <Container>
      <div className="grid w-full min-w-0 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0">
          <ImageBlock
            src="/home/local.jpg"
            alt="Local property management team available in Punta Mita"
          />
        </div>

        <div className="min-w-0">
          <SectionTitle>
            We’re Here. <span className="italic">And We Answer.</span>
          </SectionTitle>

          <div className="mt-6 space-y-3">
            <Body>
              We live and work in Punta Mita, close to the homes we manage.
            </Body>

            <Body>
              That matters because good rentals depend on responsiveness, and
              good ownership depends on availability.
            </Body>
          </div>

          <ul className="mt-5 space-y-3">
            <Bullet>Faster responses to guests</Bullet>
            <Bullet>Quick action when something needs attention</Bullet>
            <Bullet>Real relationships with local vendors</Bullet>
            <Bullet>No “we’ll check on that Monday” mentality</Bullet>
          </ul>

          <p className="mt-6 text-[17px] font-semibold text-slate-900">
            We take both the home and the guest experience seriously.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

const FAQ = () => (
  <section className={BG.intro}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-[780px] text-center">
          <SectionTitle>Questions Owners Usually Ask</SectionTitle>

          <Body className="mt-5">
            A few simple answers before we talk.
          </Body>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FAQItem question="Do you handle rentals too?">
            Yes. We help with guest communication, property readiness, local
            coordination, and the details that support stronger rental
            performance.
          </FAQItem>

          <FAQItem question="Are there hidden fees?">
            No. Clear pricing is one of the main reasons owners work with us.
            We believe owners should understand what they are paying for and
            why.
          </FAQItem>

          <FAQItem question="Will I deal with one person or a system?">
            You deal with people. We keep communication direct and avoid passing
            your home through layers of staff.
          </FAQItem>

          <FAQItem question="Where do you work?">
            We focus on Punta Mita and nearby luxury homes in Riviera Nayarit.
          </FAQItem>
        </div>
      </div>
    </Container>
  </section>
);

const FinalCta = () => (
  <section id="contact" className={BG.final}>
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-[780px] text-center">
          <h3 className="font-serif text-3xl leading-[1.15] tracking-[-0.01em] text-slate-900 md:text-5xl">
            Let’s See If We’re a Good Fit
          </h3>

          <div className="mt-6 space-y-3">
            <Body>
              If you’re looking for a team that will actually answer, stay
              involved, treat your home with respect, and care about rental
              results, we’d be happy to talk.
            </Body>

            <p className="text-[17px] font-semibold text-slate-900">
              No pressure. Just a conversation.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">Contact Us</PrimaryButton>
            <OutlineButton href="/services">View Services</OutlineButton>
          </div>
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Hero />
      <IntroCompact />
      <Partnership />
      <FeesCosts />
      <Services />
      <LocalAvailability />
      <FAQ />
      <FinalCta />
      <MobileStickyCta />
      <div id="about" />
    </div>
  );
}
