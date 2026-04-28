import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

/** Content locked. Layout/styling only. */

const Hairline = ({ className = "" }: { className?: string }) => <div className={`h-px w-full bg-slate-900/10 ${className}`} />;

const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
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
    className="inline-flex h-11 items-center text-[15px] font-medium text-slate-900 underline decoration-transparent underline-offset-4 transition hover:decoration-slate-900/60"
  >
    {children}
  </Link>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900 ${className}`}>
    {children}
  </h2>
);

const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[17px] leading-[1.75] text-slate-900/70 ${className}`}>
    {children}
  </p>
);

// Palette per your latest request
const BG = {
  header: "bg-white",
  hero: "bg-[#f4f0ea]",
  intro: "bg-[#f1f4f8]",
  partnership: "bg-white",
  fees: "bg-[#f6f0e8]",
  services: "bg-white",
  local: "bg-[#f6f0e8]",
  portfolio: "bg-white",
  final: "bg-[#f1f4f8]"
} as const;

const Hero = () => (
  <section id="home" className={`relative overflow-hidden ${BG.hero}`}>
    <div className="absolute inset-0">
      <div className="h-full w-full" style={{ backgroundImage:
        "linear-gradient(90deg, rgba(244,240,234,0.92) 0%, rgba(244,240,234,0.55) 45%, rgba(244,240,234,0.12) 72%, rgba(244,240,234,0) 100%), radial-gradient(1200px 800px at 70% 55%, rgba(15,23,42,0.18), rgba(15,23,42,0) 55%)"
      }} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02))" }} />
      <div className="absolute inset-y-0 right-0 w-[58%]">
        
        <div className="absolute inset-0">
          <Image
            src="/home/hero.jpg"
            alt="Luxury property management in Punta Mita for high-end vacation homes"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,234,0.98)_0%,rgba(244,240,234,0.86)_28%,rgba(244,240,234,0.55)_52%,rgba(244,240,234,0.22)_74%,rgba(244,240,234,0)_100%)]" />

<div className="h-full w-full" style={{ backgroundImage:
          "linear-gradient(90deg, rgba(244,240,234,0.95) 0%, rgba(244,240,234,0.45) 28%, rgba(244,240,234,0.12) 55%, rgba(244,240,234,0) 78%), radial-gradient(900px 700px at 70% 55%, rgba(15,23,42,0.10), rgba(15,23,42,0) 60%)"
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.35),rgba(148,163,184,0.08),rgba(148,163,184,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_75%_45%,rgba(226,232,240,0.55),rgba(226,232,240,0)_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(203,213,225,0.55),rgba(203,213,225,0.10),rgba(203,213,225,0))]" />
      </div>
    </div>

    <div className="relative z-10">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 max-w-[700px] py-12 md:col-span-7 md:py-20">
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.08] tracking-[-0.015em] text-slate-900 md:text-6xl">
              Luxury Property Management in Punta Mita <span className="hidden md:inline"><br /></span>
              <span className="italic text-[0.8em]">Done Personally. Done Right.</span>
            </h1>
            <p className="mt-5 max-w-[680px] text-[17px] leading-[1.7] text-slate-900/70">
              Full-service luxury property management in Punta Mita. We work directly with homeowners to care for their homes, respond quickly to guests, and manage rentals thoughtfully—without hidden fees or distance from your property.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OutlineButton href="/services">Discover How We Work</OutlineButton>
            <TextLink href="/contact">Talk With Us About Your Property</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>
);

const IntroCompact = () => (
  <section className={BG.intro}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionTitle>A More Personal Way to Manage Your Home</SectionTitle>
          <div className="mt-4 space-y-3">
            <Body>Beyond Traveling isn’t built like a traditional property management company.</Body>
            <Body>
              We’re a small, hands-on team that works closely with a limited number of homeowners. That allows us to stay available, respond quickly, and treat each property with the attention it deserves—not as a number, but as someone’s home.
            </Body>
            <Body>When owners work with us, they work with people, not a system.</Body>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Partnership = () => (
  <section className={`${BG.partnership} overflow-x-hidden`}>
    <Container>
      <div className="py-16 md:py-24">
       <div className="grid w-full min-w-0 grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 min-w-0 md:col-span-6">
            <SectionTitle>We Don’t “Manage” Homes. <span className="italic">We Look After Them With You</span>.</SectionTitle>
            <p className="mt-4 text-[17px] leading-[1.7] text-slate-900/70">Good property management feels like teamwork.</p>
            <div className="mt-6 space-y-3">
              <Body>
                We get to know you, your home, and your priorities. Some owners care most about preserving the property. Others want strong rental performance. Most want both. Our role is to align with you, communicate clearly, and make decisions as if the home were our own.
              </Body>
            </div>
            <div className="mt-6">
              <div className="text-[16px] font-medium text-slate-900">You’ll always know:</div>
              <ul className="mt-3 space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
                <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Who is taking care of your property</li>
                <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />What’s happening day to day</li>
                <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Why decisions are being made</li>
              </ul>
            </div>
            <p className="mt-6 text-[17px] font-medium text-slate-900/85">And you’ll always be able to reach us.</p>
          </div>
         <div className="col-span-12 min-w-0 md:col-span-6">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3]">
                <Image
                  src="/home/partnership.jpg"
                  alt="Homeowner and property management team discussing a luxury home in Punta Mita"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(15,23,42,0)_45%)]" />
              <div className="absolute inset-0 ring-1 ring-slate-900/10" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const FeesCosts = () => (
  <section className={`${BG.fees} overflow-x-hidden`}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="grid w-full min-w-0 grid-cols-12 gap-6 md:gap-10">
         <div className="col-span-12 min-w-0 md:col-span-6 md:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3]">
                <Image
                  src="/home/fees.jpg"
                  alt="Transparent property management pricing for luxury homes in Punta Mita"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(15,23,42,0)_45%)]" />
              <div className="absolute inset-0 ring-1 ring-slate-900/10" />
            </div>
          </div>
          <div className="col-span-12 min-w-0 md:col-span-6 md:order-2">
            <SectionTitle>Clear Pricing. <span className="italic">No Surprises</span>.</SectionTitle>
            <div className="mt-6 space-y-3">
              <Body>Many owners come to us after feeling frustrated by unclear charges or constantly rising costs.</Body>
              <Body>We believe trust starts with transparency.</Body>
            </div>
            <Body className="mt-6">Our fees are straightforward, and we actively look for ways to save owners money, including:</Body>
            <ul className="mt-4 space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Avoiding unnecessary maintenance work</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Managing cleaning and supplies efficiently</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Being thoughtful about operational and fiscal decisions</li>
            </ul>
            <Body className="mt-6">We don’t inflate costs—and we don’t benefit when expenses go up.</Body>
            <div className="mt-8">
              <OutlineButton href="/services">How Our Management Works</OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Services = () => (
  <section className={`${BG.services} overflow-x-hidden`}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="grid w-full min-w-0 grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 min-w-0 md:col-span-6">
            <SectionTitle>What We Take Care Of</SectionTitle>
            <p className="mt-4 text-[17px] leading-[1.7] text-slate-900/70">So you don’t have to worry about the day-to-day.</p>
            <ul className="mt-6 space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Regular maintenance and oversight</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Fast, personal response to guest inquiries</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Guest coordination and concierge support</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Cleaning and property readiness</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Accounting, reporting, and owner updates</li>
            </ul>
            <p className="mt-6 text-[17px] font-medium text-slate-900/85">Most importantly: we stay involved.</p>
            <p className="mt-3 text-[17px] leading-[1.7] text-slate-900/75">We don’t disappear after onboarding, and we don’t hand your property off to layers of staff.</p>
          </div>
          <div className="col-span-12 min-w-0 md:col-span-6">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3]">
                <Image
                  src="/home/services.jpg"
                  alt="Luxury villa management services in Punta Mita"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(15,23,42,0)_45%)]" />
              <div className="absolute inset-0 ring-1 ring-slate-900/10" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const LocalAvailability = () => (
  <section className={`${BG.local} overflow-x-hidden`}>
    <Container>
      <div className="py-16 md:py-24">
        <div className="grid w-full min-w-0 grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 min-w-0 md:col-span-6 md:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3]">
                <Image
                  src="/home/local.jpg"
                  alt="Local property management team available in Punta Mita"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(15,23,42,0)_45%)]" />
              <div className="absolute inset-0 ring-1 ring-slate-900/10" />
            </div>
          </div>
          <div className="col-span-12 min-w-0 md:col-span-6 md:order-2">
            <SectionTitle>We’re Here. <span className="italic">And We Answer</span>.</SectionTitle>
            <div className="mt-6 space-y-3">
              <Body>We live and work in Punta Mita, and we’re close to the homes we manage.</Body>
              <Body>That means:</Body>
            </div>
            <ul className="mt-4 space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Faster responses to guests</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Quick action when something needs attention</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />Real relationships with local vendors</li>
              <li className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />No “we’ll check on that Monday” mentality</li>
            </ul>
            <div className="mt-6 space-y-3">
              <Body>Good rentals depend on responsiveness.</Body>
              <Body>Good ownership depends on availability.</Body>
              <Body>We take both seriously.</Body>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);


const FinalCta = () => (
  <section id="contact" className={BG.final}>
    <Container>
      <div className="py-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h3 className="font-serif text-3xl leading-[1.15] tracking-[-0.01em] text-slate-900 md:text-4xl">Let’s See If We’re a Good Fit</h3>
          <div className="mt-6 space-y-3">
            <Body>If you’re looking for a team that will actually answer, stay involved, and treat your home with respect, we’d be happy to talk.</Body>
            <Body>No pressure. Just a conversation.</Body>
          </div>
          <div className="mt-8 flex justify-center">
            <OutlineButton href="/contact">Contact Us</OutlineButton>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <IntroCompact />
      <Partnership />
      <FeesCosts />
      <Services />
      <LocalAvailability />
      <FinalCta />
      <div id="about" />
</div>
  );
}
