import React from "react";
import Link from "@/components/LocaleLink";
import Container from "@/components/Container";
import { Eyebrow } from "@/components/ui";

/**
 * Shared page furniture for the /contact/* sub-pages: cream hero with a
 * "back to all options" link, a two-column body, and the hairline
 * email / WhatsApp rows.
 */

export function ContactHero({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-bt-cream">
      <Container>
        <div className="pt-6 md:pt-8">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy/85 transition hover:text-bt-navy"
          >
            <span aria-hidden="true" className="mr-2">
              &larr;
            </span>
            All contact options
          </Link>
        </div>

        <div className="mx-auto max-w-[680px] pb-16 pt-6 text-center md:pb-24 md:pt-8">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="font-serif mt-6 text-4xl font-light leading-[1.12] tracking-[-0.01em] text-bt-navy md:text-[50px]">
            {title}
            <br />
            <span className="italic text-bt-gold">{accent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[480px] text-[16px] font-normal leading-[1.75] text-bt-charcoal/85">
            {children}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function ContactLayout({
  aside,
  main,
}: {
  aside: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <section id="contact-form" className="bg-white">
      <Container>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-14 py-20 md:grid-cols-2 md:gap-20 md:py-24">
          <div className="min-w-0">{aside}</div>
          <div className="min-w-0">{main}</div>
        </div>
      </Container>
    </section>
  );
}

export function DirectLines({
  rows,
}: {
  rows: { label: string; value: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      {rows.map((row, i) => (
        <a
          key={row.label}
          href={row.href}
          {...(row.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`block border-t border-bt-navy/15 py-4 transition hover:text-bt-navy ${
            i === rows.length - 1 ? "border-b" : ""
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.12em] text-bt-navy/80">
            {row.label}
          </p>
          <p className="mt-1.5 break-words text-[15px] font-medium text-bt-navy">
            {row.value}
          </p>
        </a>
      ))}
    </div>
  );
}

/** Plain numbered / dashed "what to include" list used on the email-only pages. */
export function IncludeList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 border-t border-bt-navy/15">
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-bt-navy/15 py-3.5 text-[14.5px] font-normal leading-[1.7] text-bt-charcoal/90"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
