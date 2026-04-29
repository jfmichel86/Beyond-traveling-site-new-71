import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Property Management Punta Mita | Beyond Traveling",
  description:
    "Looking for property management in Punta Mita? Learn how we manage luxury homes, rentals, and guest experience with a local, hands-on approach.",
};

export default function PuntaMitaPropertyManagementPage() {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 md:py-24 max-w-[760px] mx-auto">

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl leading-tight text-slate-900">
            Property Management in Punta Mita
          </h1>

          {/* Intro */}
          <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
            Managing a property in Punta Mita requires more than coordination. It requires local presence,
            responsiveness, and a clear understanding of how luxury homes operate in a rental environment.
          </p>

          {/* Section 1 */}
          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            Why Property Management in Punta Mita Is Different
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Punta Mita is a unique market where expectations are high and response times matter. Homes are
            not only valuable assets, but also rental properties that require constant attention, maintenance,
            and guest coordination.
          </p>

          {/* Section 2 */}
          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            What Good Property Management Includes
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Effective property management goes beyond maintenance. It includes overseeing daily operations,
            coordinating guest stays, managing cleaning and readiness, and ensuring that the property remains
            in excellent condition at all times.
          </p>

          {/* Section 3 */}
          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            A More Personal Approach
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            At Beyond Traveling, we work closely with a limited number of homeowners. This allows us to stay
            involved, respond quickly, and treat each home with the level of care it deserves.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center text-[15px] font-medium text-slate-900 underline underline-offset-4"
            >
              Talk With Us
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
