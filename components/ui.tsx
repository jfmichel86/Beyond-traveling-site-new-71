import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Shared "Quiet Boutique" primitives — used across every page after the
 * editorial redesign. Consolidated here (rather than redefined per page,
 * the previous pattern) since the same handful of components now appear
 * on every single page.
 *
 * Design language: no box-shadow, no border-radius beyond 2px (rounded-sm
 * at most), no card borders — hairline dividers (border-*-bt-navy/10..15)
 * and full-bleed photography instead. Serif (Cormorant Garamond) for
 * headings, light-weight Inter for body copy, generous whitespace.
 */

export const PrimaryButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
  >
    {children}
  </Link>
);

export const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
  >
    {children}
  </Link>
);

export const OutlineAnchor = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
  >
    {children}
  </a>
);

/** Small underlined text link — the "See How We Work" style CTA. */
export const TextLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="text-[14px] font-medium text-bt-navy border-b border-bt-gold/50 pb-[3px] transition hover:border-bt-gold"
  >
    {children}
  </Link>
);

/** Uppercase, wide-tracked micro-label used above every hero/section title. */
export const Eyebrow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-[11px] font-normal uppercase tracking-[0.32em] text-bt-navy/55 ${className}`}
  >
    {children}
  </p>
);

/** Full-width photo band — the one-photo "breather" between text sections. */
export const FullBleedPhoto = ({
  src,
  alt,
  heightClass = "h-[340px] md:h-[480px]",
}: {
  src: string;
  alt: string;
  heightClass?: string;
}) => (
  <section className={`relative w-full ${heightClass}`}>
    <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
  </section>
);

/**
 * Centered "positioning statement" block: eyebrow + italic serif pull-quote
 * + supporting body copy + optional link/closing line.
 */
export const PullQuoteSection = ({
  eyebrow,
  quote,
  body,
  bg = "bg-white",
  children,
}: {
  eyebrow: string;
  quote: React.ReactNode;
  body?: React.ReactNode;
  bg?: string;
  children?: React.ReactNode;
}) => (
  <section className={bg}>
    <div className="mx-auto max-w-[720px] px-6 py-20 text-center md:py-28">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif mt-6 text-[28px] font-light italic leading-[1.4] text-bt-navy md:text-[34px]">
        {quote}
      </h2>
      {body && (
        <p className="mx-auto mt-6 max-w-[540px] font-light text-[16px] leading-[1.85] text-bt-charcoal/72">
          {body}
        </p>
      )}
      {children}
    </div>
  </section>
);

/** Hairline-divided N-column row of short value statements — replaces card grids. */
export const HairlineRow = ({
  items,
  columns = 3,
  bg = "bg-bt-cream",
  heading,
}: {
  items: { title: string; body: string }[];
  columns?: 3 | 4;
  bg?: string;
  heading?: string;
}) => (
  <section className={bg}>
    <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-20">
      {heading && <Eyebrow className="mb-12 text-center">{heading}</Eyebrow>}
      <div
        className={`grid gap-y-10 sm:grid-cols-2 md:gap-0 md:divide-x md:divide-bt-navy/15 ${
          columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <div key={item.title} className="px-0 text-center md:px-8">
            <p className="font-serif text-[20px] font-normal text-bt-navy">{item.title}</p>
            <p className="mt-3 font-light text-[13px] leading-[1.75] text-bt-charcoal/62">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** Hairline divider — a plain 1px rule, used between stacked content blocks. */
export const Hairline = ({ className = "" }: { className?: string }) => (
  <div className={`h-px w-full bg-bt-navy/10 ${className}`} />
);
