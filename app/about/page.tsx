import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

/* Shared components */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[17px] leading-[1.7] text-slate-900/75">
    {children}
  </p>
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
    className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
  >
    {children}
  </Link>
);

/* HERO */
const AboutHero = () => (
  <section className="bg-white">
    <Container>
      <div className="py-16 md:py-24 text-center max-w-[760px] mx-auto">

        <h1 className="font-serif text-4xl md:text-5xl">
          Who We Are
        </h1>

        <p className="mt-6 text-[17px] leading-[1.7] text-slate-900/70">
          Beyond Traveling was created by people who believe property management works best when it’s personal, present, and honest.
        </p>

      </div>
    </Container>
  </section>
);


/* 🔥 STORY SECTION (FIXED + WORKING) */
const AboutStorySection = () => (
    <section className="bg-[#f1f4f8] overflow-x-hidden">
    <Container>
      <div className="py-16 md:py-24">
        <div className="grid w-full grid-cols-12 gap-6 md:gap-10">

          {/* LEFT */}
          <div className="col-span-12 md:col-span-6">
            <SectionTitle>
              Our Story. <span className="italic">A More Personal Approach</span>.
            </SectionTitle>

            <p className="mt-4 text-[17px] leading-[1.7] text-slate-900/70">
              We started this project after seeing how often homeowners felt disconnected from the people managing their homes.
            </p>

            <div className="mt-6 space-y-3">
              <Body>
                Our goal was simple: create a way of working that feels direct, transparent, and genuinely involved in the day-to-day of each property.
              </Body>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/home/partnership.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  </section>
);

/* PHILOSOPHY */
const AboutPhilosophy = () => (
   <section className="bg-white overflow-x-hidden">
    <Container>
      <div className="py-16 md:py-24">
        <div className="grid w-full grid-cols-12 gap-6 md:gap-10">

          {/* IMAGE LEFT */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/home/philosophy.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="col-span-12 md:col-span-6">

            <SectionTitle>
              Our Philosophy
            </SectionTitle>

            <div className="mt-6 space-y-3">
              <Body>
                Integrity and care guide every decision we make.
              </Body>

              <Body>We believe:</Body>

              <ul className="space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
                <li>• Transparency builds trust</li>
                <li>• Availability prevents problems</li>
                <li>• Long-term relationships matter more than fast growth</li>
              </ul>
            </div>

            <div className="mt-8">
              <div className="text-[16px] font-medium text-slate-900">
                What Makes Us Different:
              </div>

              <ul className="space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
                <li>• Local presence in Punta Mita</li>
                <li>• Limited number of properties</li>
                <li>• Direct communication with owners</li>
                <li>• Real accountability</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </Container>
  </section>
);

/* CTA */
const AboutCTA = () => (
  <section className="bg-[#f1f4f8]">
    <Container>
      <div className="py-16 md:py-24 text-center max-w-[760px] mx-auto">

        <h3 className="font-serif text-3xl md:text-4xl">
          Let’s Talk
        </h3>

        <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
          No pressure. Just a conversation.
        </p>

        <div className="mt-6">
          <OutlineButton href="/contact">Contact Us</OutlineButton>
        </div>

      </div>
    </Container>
  </section>
);

/* ✅ MAIN (ALWAYS LAST) */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutStorySection />   {/* 👈 YOU WILL SEE THIS */}
      <AboutPhilosophy />
      <AboutCTA />
    </div>
  );
}
