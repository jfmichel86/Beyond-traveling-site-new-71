import React from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import {
  ContactHero,
  ContactLayout,
  DirectLines,
} from "@/components/contact/ContactShell";
import ReservationForm from "./ReservationForm";

export const metadata = {
  title: "Book a Villa in Punta Mita | Request Your Dates",
  description:
    "Request availability and rates for Villa Amore, Villa Brezza, Villa Llamas or Las Palmas 28 in Punta Mita. We reply personally, usually within an hour during the day.",
  alternates: { canonical: "/contact/reservations" },
};

export default function ReservationsContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero
        eyebrow="For Guests"
        title="Plan Your"
        accent="Stay."
      >
        Tell us when you would like to visit and who is traveling. We will
        reply personally with availability and rates. Still choosing? Browse
        our{" "}
        <Link
          href="/properties"
          className="border-b border-bt-gold/50 pb-px font-medium text-bt-navy"
        >
          properties
        </Link>
        .
      </ContactHero>

      <ContactLayout
        aside={
          <>
            <Eyebrow>Reservations</Eyebrow>

            <p className="mt-6 max-w-[380px] text-[15.5px] font-normal leading-[1.75] text-bt-charcoal/85">
              We reply within an hour during the day, so you are never waiting
              long for an answer.
            </p>

            <div className="mt-9">
              <DirectLines
                rows={[
                  {
                    label: "Phone / WhatsApp",
                    value: "+52 33 1361 9889",
                    href: "https://wa.me/523313619889",
                    external: true,
                  },
                  {
                    label: "Email",
                    value: "reservations@beyondtravelingmx.com",
                    href: "mailto:reservations@beyondtravelingmx.com",
                  },
                ]}
              />
            </div>

            <div className="mt-9">
              <p className="text-[14px] font-medium text-bt-navy">
                What happens next?
              </p>
              <p className="mt-3 text-[13.5px] font-normal leading-[2] text-bt-charcoal/85">
                We check availability for your dates.
                <br />
                We reply on WhatsApp with options and rates.
                <br />
                We help you arrange the details of your stay.
              </p>
            </div>
          </>
        }
        main={
          <>
            <Eyebrow className="mb-7">Request Your Dates</Eyebrow>
            <ReservationForm />
          </>
        }
      />
    </div>
  );
}
