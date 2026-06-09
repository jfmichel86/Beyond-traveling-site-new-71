"use client";

import { useLanguage } from "@/lib/language-context";
import { getText } from "@/lib/i18n-types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { discoverCategories } from "@/lib/discoverPuntaMita";

const PrimaryButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const ValueCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur">
    <p className="text-[14px] font-semibold text-slate-900">{title}</p>
    <p className="mt-1 text-[13px] leading-6 text-slate-900/65">
      {children}
    </p>
  </div>
);

const CategoryCard = ({
  category,
  priority = false,
}: {
  category: (typeof discoverCategories)[number];
  priority?: boolean;
}) => (
  <Link
    href={`/discover-punta-mita/${category.slug}`}
    aria-label={`Explore ${category.title} experiences in Punta Mita`}
    className="group block h-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-4"
  >
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={category.image}
          alt={`${category.title} experiences in Punta Mita`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_50%,rgba(15,23,42,0.20)_100%)]" />
      </div>

      <div className="flex flex-1 flex-col bg-white p-6">
        <h3 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
          {category.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-slate-900/68">
          {category.description}
        </p>

        <p className="mt-5 text-[14px] font-semibold text-slate-900 underline decoration-slate-900/20 underline-offset-4 transition group-hover:decoration-slate-900">
          Explore experiences
        </p>
      </div>
    </article>
  </Link>
);

const MobileStickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-900/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
    <div className="grid grid-cols-2 gap-3">
      <a
        href="https://wa.me/523313619889"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/25 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        WhatsApp
      </a>

      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Contact
      </Link>
    </div>
  </div>
);

export default function DiscoverPuntaMitaPage() {
  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center md:py-24">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/45">
            Punta Mita Experiences
          </p>

          <h1 className="mx-auto max-w-[820px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
            Discover Punta Mita.
            <span className="block italic text-[0.78em] leading-[1.15]">
              We’ll help you plan the good parts.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
            Private ocean days, wellness, beach clubs, golf, chef-led dining,
            family adventures, nightlife, and special moments arranged around
            the way you want to enjoy your stay.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">Ask Us to Plan Your Stay</PrimaryButton>
            <OutlineButton href="#experiences">View Experiences</OutlineButton>
          </div>

          <div className="mx-auto mt-8 grid max-w-[760px] gap-3 sm:grid-cols-3">
            <ValueCard title="Local recommendations">
              Real options that make sense for your group.
            </ValueCard>

            <ValueCard title="Easy planning">
              We help with the details before and during your stay.
            </ValueCard>

            <ValueCard title="Clear expectations">
              A clear sense of what each experience feels like before you decide.
            </ValueCard>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6">
        <div className="border-t border-slate-200" />
      </div>

      <section id="experiences" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-900/45">
              Experiences
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-slate-900 md:text-4xl">
              Curated for the way you want to experience Punta Mita
            </h2>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
              Choose a category below and explore experiences designed around
              different travel styles, from quiet villa days to celebrations,
              family outings, ocean adventures, and memorable nights out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {discoverCategories.map((category, index) => (
              <CategoryCard
                key={category.slug}
                category={category}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-900/8 bg-[#f1f4f8]">
        <div className="mx-auto max-w-[900px] px-6 py-14 text-center md:py-20">
          <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-5xl">
            Tell us what kind of stay you want. We’ll help shape the plan.
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
            Whether you want a quiet villa dinner, a private yacht day, a family
            adventure, or a full itinerary, we’ll keep it practical, personal,
            and easy to understand.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">Ask Us to Plan Your Stay</PrimaryButton>

            <a
              href="https://wa.me/523313619889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </main>
  );
}
