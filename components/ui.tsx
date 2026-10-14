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
    className="inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2 active:scale-[0.98]"
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
    className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
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
    className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
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
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  /** Render as a real heading (h2/h3) when the label titles a section. */
  as?: "p" | "h2" | "h3";
}) => (
  <Tag
    className={`text-[11px] font-medium uppercase tracking-[0.2em] text-bt-navy/85 ${className}`}
  >
    {children}
  </Tag>
);

/**
 * Full-width photo band — the one-photo "breather" between text sections.
 * Pass `caption` (and optionally `href`) to name the specific property shown
 * rather than leaving the photo anonymous.
 */
export const FullBleedPhoto = ({
  src,
  alt,
  heightClass = "h-[340px] md:h-[480px]",
  caption,
  href,
}: {
  src: string;
  alt: string;
  heightClass?: string;
  caption?: string;
  href?: string;
}) => {
  const photo = (
    <section className={`group relative w-full ${heightClass}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-7 pb-6 pt-16 sm:px-8 md:px-12 lg:px-24">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-bt-gold-light">
            Featured Property
          </p>
          <p className="font-serif mt-1 text-xl font-light text-white">
            {caption}
            {href && (
              <span className="ml-3 align-middle font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 transition-colors duration-300 group-hover:text-white">
                View Property &rarr;
              </span>
            )}
          </p>
        </div>
      )}
    </section>
  );

  return href ? (
    <Link href={href} className="block">
      {photo}
    </Link>
  ) : (
    photo
  );
};

/**
 * Centered "positioning statement" block: eyebrow + italic serif pull-quote
 * + supporting body copy + optional link/closing line.
 */
export const PullQuoteSection = ({
  eyebrow,
  quote,
  body,
  bg = "bg-white",
  dark = false,
  children,
}: {
  eyebrow: string;
  quote: React.ReactNode;
  body?: React.ReactNode;
  bg?: string;
  /** Set when `bg` is a dark color (e.g. bg-bt-navy) so text stays legible. */
  dark?: boolean;
  children?: React.ReactNode;
}) => (
  <section className={bg}>
    <div className="mx-auto max-w-[720px] px-6 py-20 text-center md:py-28">
      <Eyebrow className={dark ? "text-bt-gold-light/90" : ""}>{eyebrow}</Eyebrow>
      <h2
        className={`font-serif mt-6 text-[28px] font-light italic leading-[1.4] md:text-[34px] ${
          dark ? "text-white" : "text-bt-navy"
        }`}
      >
        {quote}
      </h2>
      {body && (
        <p
          className={`mx-auto mt-6 max-w-[540px] font-normal text-[16px] leading-[1.75] ${
            dark ? "text-white/[0.68]" : "text-bt-charcoal/85"
          }`}
        >
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
      {heading && <Eyebrow as="h2" className="mb-12 text-center">{heading}</Eyebrow>}
      <div
        className={`grid gap-y-10 sm:grid-cols-2 md:gap-0 md:divide-x md:divide-bt-navy/15 ${
          columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <div key={item.title} className="px-0 text-center md:px-8">
            <p className="font-serif text-[20px] font-normal text-bt-navy">{item.title}</p>
            <p className="mt-3 font-normal text-[13px] leading-[1.75] text-bt-charcoal/85">
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
