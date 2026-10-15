import React from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import ServiceName from "@/components/ServiceName";
import { pageAlternates } from "@/lib/seo";
import Container from "@/components/Container";
import {
  PrimaryButton,
  Eyebrow,
  PullQuoteSection,
} from "@/components/ui";
import { getServiceBySlug, services } from "@/lib/services";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Services" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: pageAlternates(`/services/${service.slug}`),
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      {/* Hero — split text / photo, same layout as Home */}
      <section className="bg-white">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-7 py-16 sm:px-8 md:px-12 md:py-24 lg:pl-24">
            <nav aria-label="Breadcrumb" className="mb-6 text-[11px] font-normal tracking-[0.08em] text-bt-navy/75">
              <Link href="/services" className="transition hover:text-bt-navy">
                Services
              </Link>
              <span className="mx-2 text-bt-gold">/</span>
              <span className="text-bt-navy/80">
                <ServiceName title={service.title} italic={service.italicTitle} plain />
              </span>
            </nav>

            <Eyebrow>{service.eyebrow}</Eyebrow>

            <h1 className="font-serif mt-6 text-4xl font-light leading-[1.14] tracking-[-0.01em] text-bt-navy sm:text-[42px] md:text-[46px]">
              {service.heroLine}
              <br />
              <span className="italic text-bt-gold">{service.heroItalic}</span>
            </h1>

            <p className="mt-6 max-w-[480px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PrimaryButton href="/contact/owners">Talk With Us About Your Property</PrimaryButton>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[560px]">
            <Image
              src={service.heroImage}
              alt={service.heroAlt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <PullQuoteSection
        eyebrow="Who It's For"
        quote={service.idealFor.quote}
        body={service.idealFor.body}
        bg="bg-bt-cream"
      />

      {/* What's included */}
      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[900px] py-20 md:py-24">
            <div className="pb-12 text-center md:pb-14">
              <Eyebrow>What&rsquo;s Included</Eyebrow>
              <h2 className="font-serif mt-5 text-3xl font-light leading-[1.2] tracking-[-0.01em] text-bt-navy md:text-[36px]">
                <ServiceName title={service.title} italic={service.italicTitle} italicClassName="italic text-bt-gold" />
              </h2>
            </div>

            <div className="flex flex-col">
              {service.included.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-bt-navy/10 py-8"
                >
                  <div>
                    <h3 className="font-serif text-[22px] font-normal text-bt-navy md:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[560px] font-normal text-[15px] leading-[1.75] text-bt-charcoal/85">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
              <div className="h-px w-full bg-bt-navy/10" />
            </div>

            {service.note && (
              <p className="mt-8 text-center font-normal text-[12.5px] text-bt-charcoal/55">
                {service.note}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-bt-navy/10 bg-bt-mist/25">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-20">
          <Eyebrow className="mb-12 text-center">How It Works</Eyebrow>
          <div className="grid gap-y-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-bt-navy/15">
            {service.steps.map((step, i) => (
              <div key={step.title} className="px-0 text-center md:px-8">
                <span className="font-serif text-[20px] italic text-bt-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif mt-2 text-[20px] font-normal text-bt-navy">{step.title}</p>
                <p className="mx-auto mt-3 max-w-[280px] font-normal text-[13px] leading-[1.75] text-bt-charcoal/62">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-bt-navy/10 bg-white">
        <div className="mx-auto max-w-[1220px] px-6 py-16 md:py-20">
          <Eyebrow className="mb-10 text-center">Other Services</Eyebrow>
          <div className="grid grid-cols-1 divide-y divide-bt-navy/15 border-y border-bt-navy/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col px-6 py-8 transition-colors duration-300 hover:bg-bt-navy/[0.03]"
              >
                {s.highlight ? (
                  <span className="self-start rounded-sm bg-bt-navy px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                    {s.tag}
                  </span>
                ) : (
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-bt-navy/70">
                    {s.tag}
                  </span>
                )}
                <span className="font-serif mt-3 text-[19px] font-normal text-bt-navy">
                  <ServiceName title={s.title} italic={s.italicTitle} italicClassName="italic text-bt-gold" />
                </span>
                <span className="mt-2 font-normal text-[13px] leading-[1.7] text-bt-charcoal/85">
                  {s.summary}
                </span>
                <span className="mt-4 text-[10.5px] font-medium uppercase tracking-[0.14em] text-bt-navy">
                  Explore
                  <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-bt-navy">
        <div className="mx-auto max-w-[600px] px-6 py-20 text-center md:py-28">
          <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white md:text-[38px]">
            Let&rsquo;s Talk About Your Home
          </h2>
          <p className="mx-auto mt-5 max-w-[440px] font-normal text-[16px] leading-[1.75] text-white/80">
            Tell us about the property and what you need. We&rsquo;ll tell you
            honestly whether{" "}
            <ServiceName title={service.title} italic={service.italicTitle} plain />{" "}
            is the right fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/owners"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy"
            >
              Talk With Us About Your Property
            </Link>
            <a
              href="https://wa.me/523313619889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-white/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/[0.06]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
