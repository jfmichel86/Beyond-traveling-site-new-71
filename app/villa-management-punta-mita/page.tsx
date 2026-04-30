import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Villa Management Punta Mita | Beyond Traveling",
  description:
    "Professional villa management in Punta Mita. We handle maintenance, rentals, and guest experience for luxury homes.",
};

export default function VillaManagementPage() {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 md:py-24 max-w-[760px] mx-auto">

          <h1 className="font-serif text-3xl md:text-4xl leading-tight text-slate-900">
            Villa Management in Punta Mita
          </h1>

          <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
  Managing a villa in Punta Mita requires constant oversight. From maintenance to guest
  coordination, every detail impacts the value and performance of the property. Our villa management services in Punta Mita are designed to maintain each property at a high standard while ensuring smooth operations and guest experience.
</p>

          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            Maintaining High-End Villas
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Villas must be maintained at a high standard at all times. This includes regular inspections,
            quick repairs, and coordination with trusted local vendors.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            Rental Performance and Operations
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Villa management also includes optimizing rentals, managing bookings, and ensuring that each
            guest experience meets expectations.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            Direct Communication With Owners
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Clear and direct communication allows owners to stay informed and confident that their
            property is being properly managed.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
            >
              Explore Services
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
