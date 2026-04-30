import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Luxury Rentals Punta Mita | Beyond Traveling",
  description:
    "Discover luxury rentals in Punta Mita. Beyond Traveling manages high-end villas with full guest experience and local support.",
};

export default function LuxuryRentalsPage() {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 md:py-24 max-w-[760px] mx-auto">

          <h1 className="font-serif text-3xl md:text-4xl leading-tight text-slate-900">
            Luxury Rentals in Punta Mita
          </h1>

          <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
  Punta Mita is one of the most exclusive destinations in Mexico, known for its private villas,
  oceanfront properties, and high-end guest experiences. Luxury rentals in Punta Mita require
  careful management, attention to detail, and a consistent approach to guest experience.
</p>

          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            What Defines a Luxury Rental
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Luxury rentals are not just about the property itself. They involve service, preparation,
            and coordination. Every stay must meet expectations from arrival to departure.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            Managing Rentals in Punta Mita
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
  Managing luxury rentals in Punta Mita includes handling bookings, coordinating cleaning and maintenance,
  and ensuring that each guest has a seamless experience throughout their stay while maintaining the property at a high standard.
</p>

          <h2 className="mt-10 font-serif text-2xl text-slate-900">
            A Local, Hands-On Approach
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            Being present in Punta Mita allows for faster response times, better coordination,
            and a more personalized approach to both homeowners and guests.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/properties"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
            >
              View Properties
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
