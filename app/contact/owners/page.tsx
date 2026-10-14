import React from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import {
  ContactHero,
  ContactLayout,
  DirectLines,
} from "@/components/contact/ContactShell";
import OwnerForm from "./OwnerForm";

export const metadata = {
  title: "Property Owner Inquiries | Punta Mita Property Management",
  description:
    "Talk with a local team about luxury property management in Punta Mita: property care, guest support, rental results, clear pricing, and no hidden fees.",
  alternates: { canonical: "/contact/owners" },
};

export default function OwnersContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero
        eyebrow="For Property Owners"
        title="Let’s Have a"
        accent="Conversation."
      >
        No pressure. No sales pitch. Whether you&rsquo;re actively looking for
        a new team or just want to understand your options, we&rsquo;re happy
        to talk. You can also explore how we work on our{" "}
        <Link
          href="/services"
          className="border-b border-bt-gold/50 pb-px font-medium text-bt-navy"
        >
          Services
        </Link>{" "}
        page.
      </ContactHero>

      <ContactLayout
        aside={
          <>
            <Eyebrow>Get in Touch</Eyebrow>

            <p className="mt-6 max-w-[380px] text-[15.5px] font-normal leading-[1.75] text-bt-charcoal/85">
              We keep communication simple and direct. Tell us a little about
              your property and what you are looking for.
            </p>

            <div className="mt-9">
              <DirectLines
                rows={[
                  {
                    label: "Email",
                    value: "management@beyondtravelingmx.com",
                    href: "mailto:management@beyondtravelingmx.com",
                  },
                  {
                    label: "Phone / WhatsApp",
                    value: "+52 33 1361 9889",
                    href: "https://wa.me/523313619889",
                    external: true,
                  },
                ]}
              />
            </div>

            <div className="mt-9">
              <p className="text-[14px] font-medium text-bt-navy">
                What happens next?
              </p>
              <p className="mt-3 text-[13.5px] font-normal leading-[2] text-bt-charcoal/85">
                We read your message carefully.
                <br />
                We reply directly, usually by email or WhatsApp.
                <br />
                If it makes sense, we schedule a simple conversation.
              </p>
            </div>
          </>
        }
        main={
          <>
            <Eyebrow className="mb-7">Tell Us About Your Property</Eyebrow>
            <OwnerForm />
          </>
        }
      />
    </div>
  );
}
