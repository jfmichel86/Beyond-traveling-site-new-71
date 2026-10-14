import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Eyebrow, FullBleedPhoto } from "@/components/ui";

type Section = {
  heading: string;
  body: string;
};

export default function GuideTemplate({
  guideLabel,
  title,
  heroImage,
  heroAlt,
  intro,
  sections,
  pullQuote,
  pullQuoteAfter = 0,
  ctaHref,
  ctaLabel,
}: {
  guideLabel: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  sections: Section[];
  pullQuote?: string;
  /** Index (0-based) of the section AFTER which the pull-quote is inserted. */
  pullQuoteAfter?: number;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <main className="bg-white">
      <Container>
        <p className="pt-6 text-[12px] font-normal tracking-[0.02em] text-bt-navy/70">
          Guides <span className="mx-1.5">/</span>
          <span className="text-bt-navy">{title}</span>
        </p>

        <div className="mx-auto max-w-[680px] pb-10 pt-6 text-center md:pt-8">
          <Eyebrow>{guideLabel}</Eyebrow>
          <h1 className="font-serif mt-6 text-3xl font-light leading-[1.18] tracking-[-0.01em] text-bt-navy md:text-[42px]">
            {title}
          </h1>
        </div>
      </Container>

      <FullBleedPhoto src={heroImage} alt={heroAlt} heightClass="h-[280px] md:h-[420px]" />

      <Container>
        <div className="mx-auto max-w-[680px] py-16 md:py-20">
          <p className="font-normal text-[16.5px] leading-[1.9] text-bt-charcoal/85">
            {intro}
          </p>

          {sections.map((section, i) => (
            <React.Fragment key={section.heading}>
              <h2 className="font-serif mt-14 text-[26px] font-normal text-bt-navy">
                {section.heading}
              </h2>
              <p className="mt-4 font-normal text-[16px] leading-[1.9] text-bt-charcoal/85">
                {section.body}
              </p>

              {pullQuote && i === pullQuoteAfter && (
                <div className="my-14 border-y border-bt-navy/10 py-9 text-center">
                  <p className="font-serif text-[24px] font-normal italic leading-[1.5] text-bt-navy">
                    {pullQuote}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="mt-14 flex flex-wrap items-center gap-8">
            <Link
              href={ctaHref}
              className="inline-flex min-h-11 items-center justify-center bg-bt-navy px-8 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-bt-navy-light"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-bt-navy border-b border-bt-gold/50 pb-[3px] transition hover:border-bt-gold"
            >
              Talk With Us
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
