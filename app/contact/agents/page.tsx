import React from "react";
import Link from "next/link";
import { Eyebrow, OutlineButton } from "@/components/ui";
import {
  ContactHero,
  ContactLayout,
  DirectLines,
  IncludeList,
} from "@/components/contact/ContactShell";

export const metadata = {
  title: "Agent & Travel Advisor Partnerships | Punta Mita Villas",
  description:
    "Agencies, travel agents and rental agents: partner with Beyond Traveling to bring guests to our villas in Punta Mita.",
  alternates: { canonical: "/contact/agents" },
};

const EMAIL = "agents@beyondtravelingmx.com";

const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Partnership inquiry"
)}&body=${encodeURIComponent(
  [
    "Hello,",
    "",
    "Name:",
    "Agency / company:",
    "Website:",
    "Markets or regions you work with:",
    "How you would like to collaborate:",
    "",
    "Thank you!",
  ].join("\n")
)}`;

export default function AgentsContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero
        eyebrow="For Agents & Partners"
        title="Let’s Work"
        accent="Together."
      >
        We would be glad to work with agencies, travel agents and rental agents
        who want to offer their guests a villa in Punta Mita, backed by a team
        that answers personally.
      </ContactHero>

      <ContactLayout
        aside={
          <>
            <Eyebrow>What to Include</Eyebrow>

            <p className="mt-6 max-w-[400px] text-[15.5px] font-normal leading-[1.75] text-bt-charcoal/85">
              A short email is enough to start. It helps us to know a little
              about you:
            </p>

            <IncludeList
              items={[
                "Your name, and your agency or company",
                "Your website or portfolio",
                "The markets or regions you work with, and the guests you serve",
                "How you would like to collaborate",
                "Which of our properties interest you",
              ]}
            />
          </>
        }
        main={
          <>
            <Eyebrow className="mb-7">Write to Us</Eyebrow>

            <DirectLines
              rows={[{ label: "Email", value: EMAIL, href: mailto }]}
            />

            <p className="mt-6 max-w-[400px] text-[14px] font-normal leading-[1.75] text-bt-charcoal/85">
              Selecting the address opens your email app with a short template
              ready to fill in.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <OutlineButton href="/properties">View Our Properties</OutlineButton>
            </div>

            <p className="mt-10 text-[13.5px] font-normal leading-[1.75] text-bt-charcoal/85">
              Looking to stay, or to have your own property managed? Head to{" "}
              <Link
                href="/contact"
                className="border-b border-bt-gold/50 pb-px font-medium text-bt-navy"
              >
                all contact options
              </Link>
              .
            </p>
          </>
        }
      />
    </div>
  );
}
