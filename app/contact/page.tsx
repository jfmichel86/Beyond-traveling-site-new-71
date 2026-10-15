import React from "react";
import Link from "@/components/LocaleLink";
import Container from "@/components/Container";
import { Eyebrow } from "@/components/ui";
import { pageAlternates } from "@/lib/seo";

export const metadata = {
  title: { absolute: "Contact Beyond Traveling | Punta Mita Property Management" },
  description:
    "Contact Beyond Traveling in Punta Mita: talk about luxury property management for your home, or request a stay at one of our villas. Clear pricing, no hidden fees.",
  alternates: pageAlternates("/contact"),
};

const options = [
  {
    audience: "For property owners",
    title: "Manage Your Property",
    body: "Talk with us about managing your home in Punta Mita: property care, guest support and rental results, with clear pricing and no hidden fees.",
    cta: "Talk about your property",
    href: "/contact/owners",
  },
  {
    audience: "For guests",
    title: "Book a Stay",
    body: "Ask about availability and rates for Villa Amore, Villa Brezza, Villa Llamas or Las Palmas 28. We reply to you personally.",
    cta: "Request your dates",
    href: "/contact/reservations",
  },
];

// Quieter, text-only entries — real but secondary audiences.
const secondary = [
  {
    lead: "Agent or travel advisor?",
    cta: "Partner with us",
    href: "/contact/agents",
  },
  {
    lead: "Looking to join our team or offer a service?",
    cta: "Work with us",
    href: "/contact/work-with-us",
  },
];

const Hero = () => (
  <section className="bg-bt-cream">
    <Container>
      <div className="mx-auto max-w-[680px] py-20 text-center md:py-28">
        <Eyebrow>Contact Beyond Traveling</Eyebrow>

        <h1 className="font-serif mt-6 text-4xl font-light leading-[1.12] tracking-[-0.01em] text-bt-navy md:text-[50px]">
          How Can We
          <br />
          <span className="italic text-bt-gold">Help?</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[460px] text-[16px] font-normal leading-[1.75] text-bt-charcoal/85">
          Whether you own a property in Punta Mita or are planning a stay,
          we are happy to help. No pressure, no sales pitch.
        </p>
      </div>
    </Container>
  </section>
);

const Options = () => (
  <section className="bg-white">
    <Container>
      <div className="mx-auto max-w-[1100px] py-16 md:py-24">
        <h2 className="sr-only">Contact options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {options.map((o, i) => (
            <Link
              key={o.href}
              href={o.href}
              className={`group block border-t border-bt-navy/15 py-10 transition-colors duration-200 hover:bg-bt-cream/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-bt-navy md:border-b md:px-12 md:py-16 ${
                i === 1 ? "md:border-l" : ""
              } ${i === options.length - 1 ? "border-b" : ""}`}
            >
              <Eyebrow>{o.audience}</Eyebrow>
              <h3 className="font-serif mt-4 text-[32px] font-light leading-[1.15] text-bt-navy md:text-[38px]">
                {o.title}
              </h3>
              <p className="mt-4 max-w-[400px] text-[15px] font-normal leading-[1.75] text-bt-charcoal/85">
                {o.body}
              </p>
              <span className="mt-7 inline-flex items-center border-b border-bt-gold/50 pb-[3px] text-[14px] font-medium text-bt-navy transition group-hover:border-bt-gold">
                {o.cta}
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center text-[14px] font-normal text-bt-charcoal/85 md:flex-row md:justify-center md:gap-14">
          {secondary.map((item) => (
            <p key={item.href}>
              {item.lead}{" "}
              <Link
                href={item.href}
                className="border-b border-bt-gold/50 pb-px font-medium text-bt-navy transition hover:border-bt-gold"
              >
                {item.cta}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const NotSure = () => (
  <section className="bg-bt-navy">
    <Container>
      <div className="mx-auto max-w-[620px] py-20 text-center md:py-24">
        <h2 className="font-serif text-3xl font-light leading-[1.2] text-white md:text-[38px]">
          Not Sure Where to Start?
        </h2>
        <p className="mx-auto mt-5 max-w-[440px] text-[15.5px] font-normal leading-[1.75] text-white/80">
          Send us a message on WhatsApp and we will point you to the right
          person.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/523313619889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:bg-bt-cream focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Options />
      <NotSure />
    </div>
  );
}
