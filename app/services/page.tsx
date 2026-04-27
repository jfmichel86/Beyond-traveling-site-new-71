
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

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



export default function ServicesPage() {
  return (
    <main>
     {/* HERO */}
      
<section className="bg-white">
  <Container>
    <div className="py-16 md:py-24 text-center max-w-[760px] mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900 max-w-[800px] mx-auto">
        How We Take Care of Your Property
      </h1>

      <p className="mt-6 text-[17px] leading-[1.85] text-slate-900/70">
        We focus on the details that make ownership easier and rentals perform better—while keeping communication clear and costs under control.
      </p>
    </div>
  </Container>
</section>
      
     {/* Our Approach Intro */}
<section className={`py-16 md:py-24 ${BG.intro}`}>
  <Container>
    <div className="grid w-full min-w-0 md:grid-cols-2 gap-12 md:gap-16 items-center">
      
      {/* Image Left */}
      <div className="min-w-0 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3]">
        <Image
          src="/services/guest-communication.jpg"
          alt="Beyond Traveling property management approach"
          width={900}
          height={650}
          className="object-cover w-full h-full transition duration-700 hover:scale-[1.03]"
        />
      </div>

      {/* Text Right */}
      <div className="min-w-0">
        <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
          Our <span className="italic">Approach</span>
        </h3>

        <p className="mt-6 text-[18px] leading-[1.85] text-slate-900/75">
          We manage each property with care, consistency, and direct communication. Our approach is built around the idea that a home should feel well looked after, whether the owner is nearby or away.
        </p>

        <ul className="mt-6 space-y-4 text-[18px] leading-[1.85] text-slate-900/75">
          <li>— This is someone’s home</li>
          <li>— Decisions affect both comfort and finances</li>
          <li>— Responsiveness matters as much as execution</li>
        </ul>
      </div>

    </div>
  </Container>
</section>
          

      {/* Property Care & Maintenance */}
      <section className={`py-16 md:py-24 ${BG.services}`}>
        <Container>
          <div className="grid w-full min-w-0 md:grid-cols-2 gap-10 items-center">
            <div className="min-w-0">
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
                Property Care <span className="italic">& Maintenance</span>
              </h3>
              <ul className="mt-6 space-y-4 text-[18px] leading-[1.85] text-slate-900/75">
                <li>— Regular inspections and oversight</li>
                <li>— Preventive maintenance to avoid larger issues</li>
                <li>— Coordination with trusted local vendors</li>
              </ul>
            </div>
            <div className="min-w-0 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3]">
              <Image
  src="/services/property-care.jpg"
  alt="Property care and maintenance"
  width={900}
  height={650}
  className="object-cover w-full h-full transition duration-700 hover:scale-[1.03]"
/>
            </div>
          </div>
        </Container>
      </section>

      {/* Guest Communication & Coordination */}
      <section className={`py-16 md:py-24 ${BG.local}`}>
        <Container>
          <div className="grid w-full min-w-0 md:grid-cols-2 gap-10 items-center">
            <div className="min-w-0 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] order-1 md:order-none">
            <Image
  src="/services/guest-communication.jpg"
  alt="Guest communication and coordination"
  width={900}
  height={650}
  className="object-cover w-full h-full transition duration-700 hover:scale-[1.03]"
/>
            
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
                Guest Communication <span className="italic">& Coordination</span>
              </h3>
              <ul className="mt-6 space-y-4 text-[18px] leading-[1.85] text-slate-900/75">
                <li>— Fast, personal responses to inquiries</li>
                <li>— Clear check-in and stay coordination</li>
                <li>— On-call availability during stays</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Cleaning & Readiness */}
      <section className={`py-16 md:py-24 ${BG.services}`}>
        <Container>
          <div className="grid w-full min-w-0 md:grid-cols-2 gap-10 items-center">
            <div className="min-w-0">
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
                Cleaning <span className="italic">& Readiness</span>
              </h3>
              <ul className="mt-6 space-y-4 text-[18px] leading-[1.85] text-slate-900/75">
                <li>— Cleaning coordination and quality control</li>
                <li>— Supply management without overbuying</li>
                <li>— Property readiness between stays</li>
              </ul>
            </div>
            <div className="min-w-0 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3]">
              <Image
  src="/services/cleaning.jpg"
  alt="Cleaning and property readiness"
  width={900}
  height={650}
  className="object-cover w-full h-full transition duration-700 hover:scale-[1.03]"
/>
            </div>
          </div>
        </Container>
      </section>

      {/* Financial Clarity & Reporting */}
      <section className={`py-16 md:py-24 ${BG.local}`}>
        <Container>
          <div className="grid w-full min-w-0 md:grid-cols-2 gap-10 items-center">
            <div className="min-w-0 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] order-1 md:order-none">
  <Image
  src="/services/financial.jpg"
  alt="Financial clarity and reporting"
  width={900}
  height={650}
  className="object-cover w-full h-full transition duration-700 hover:scale-[1.03]"
/>     
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
                Financial Clarity <span className="italic">& Reporting</span>
              </h3>
              <ul className="mt-6 space-y-4 text-[18px] leading-[1.85] text-slate-900/75">
                <li>— Clear, understandable reports</li>
                <li>— Transparent accounting</li>
                <li>— Thoughtful fiscal coordination when needed</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className={`py-16 md:py-24 ${BG.final}`}>
        <Container>
          <div className="text-center">
            <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-[-0.01em] text-slate-900">
              Good management isn’t about doing more. It’s about doing the right things consistently and being available when it matters.
            </h3>
            <div className="mt-12 flex justify-center">
              <button className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-6 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]">
                Talk With Us About Your Property
              </button>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
