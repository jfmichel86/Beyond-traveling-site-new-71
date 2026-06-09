"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { discoverCategories } from "@/lib/discoverPuntaMita";
import { useLanguage } from "@/lib/language-context";
import { getText } from "@/lib/i18n-types";
import type { LocalizedText } from "@/lib/i18n-types";

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

function CategoryCard({
  category,
  priority = false,
}: {
  category: (typeof discoverCategories)[number];
  priority?: boolean;
}) {
  const { language } = useLanguage();
  const t = (value: string | LocalizedText) => getText(value, language);

  return (
    <Link
      href={`/discover-punta-mita/${category.slug}`}
      aria-label={
        language === "es"
          ? `Explorar experiencias de ${t(category.title)} en Punta Mita`
          : `Explore ${t(category.title)} experiences in Punta Mita`
      }
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-4"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={category.image}
            alt={
              language === "es"
                ? `Experiencias de ${t(category.title)} en Punta Mita`
                : `${t(category.title)} experiences in Punta Mita`
            }
            fill
            priority={priority}
            sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_50%,rgba(15,23,42,0.20)_100%)]" />
        </div>

        <div className="flex flex-1 flex-col bg-white p-6">
          <h3 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
            {t(category.title)}
          </h3>

          <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-slate-900/68">
            {t(category.description)}
          </p>

          <p className="mt-5 text-[14px] font-semibold text-slate-900 underline decoration-slate-900/20 underline-offset-4 transition group-hover:decoration-slate-900">
            {language === "es" ? "Explorar experiencias" : "Explore experiences"}
          </p>
        </div>
      </article>
    </Link>
  );
}

function MobileStickyCta() {
  const { language } = useLanguage();

  return (
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
          {language === "es" ? "Contacto" : "Contact"}
        </Link>
      </div>
    </div>
  );
}

export default function DiscoverPuntaMitaPage() {
  const { language } = useLanguage();

  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center md:py-24">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/45">
            {language === "es" ? "Experiencias en Punta Mita" : "Punta Mita Experiences"}
          </p>

          <h1 className="mx-auto max-w-[820px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
            {language === "es" ? "Descubre Punta Mita." : "Discover Punta Mita."}
            <span className="block italic text-[0.78em] leading-[1.15]">
              {language === "es"
                ? "Te ayudamos a planear lo mejor de tu estancia."
                : "We’ll help you plan the good parts."}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
            {language === "es"
              ? "Días privados en el mar, bienestar, clubes de playa, golf, cenas con chef, aventuras familiares, vida nocturna y momentos especiales organizados alrededor de la forma en que quieres disfrutar tu estancia."
              : "Private ocean days, wellness, beach clubs, golf, chef-led dining, family adventures, nightlife, and special moments arranged around the way you want to enjoy your stay."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">
              {language === "es" ? "Pídenos Ayuda Para Planear Tu Estancia" : "Ask Us to Plan Your Stay"}
            </PrimaryButton>
            <OutlineButton href="#experiences">
              {language === "es" ? "Ver Experiencias" : "View Experiences"}
            </OutlineButton>
          </div>

          <div className="mx-auto mt-8 grid max-w-[760px] gap-3 sm:grid-cols-3">
            <ValueCard title={language === "es" ? "Recomendaciones locales" : "Local recommendations"}>
              {language === "es"
                ? "Opciones reales que tienen sentido para tu grupo."
                : "Real options that make sense for your group."}
            </ValueCard>

            <ValueCard title={language === "es" ? "Planeación fácil" : "Easy planning"}>
              {language === "es"
                ? "Te ayudamos con los detalles antes y durante tu estancia."
                : "We help with the details before and during your stay."}
            </ValueCard>

            <ValueCard title={language === "es" ? "Expectativas claras" : "Clear expectations"}>
              {language === "es"
                ? "Una idea clara de cómo se siente cada experiencia antes de decidir."
                : "A clear sense of what each experience feels like before you decide."}
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
              {language === "es" ? "Experiencias" : "Experiences"}
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-slate-900 md:text-4xl">
              {language === "es"
                ? "Pensado para la forma en que quieres vivir Punta Mita"
                : "Curated for the way you want to experience Punta Mita"}
            </h2>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
              {language === "es"
                ? "Elige una categoría y explora experiencias diseñadas para distintos estilos de viaje, desde días tranquilos en la villa hasta celebraciones, planes familiares, aventuras en el mar y noches memorables."
                : "Choose a category below and explore experiences designed around different travel styles, from quiet villa days to celebrations, family outings, ocean adventures, and memorable nights out."}
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
            {language === "es"
              ? "Dinos qué tipo de estancia quieres. Te ayudamos a darle forma al plan."
              : "Tell us what kind of stay you want. We’ll help shape the plan."}
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
            {language === "es"
              ? "Ya sea que quieras una cena tranquila en la villa, un día privado en yate, una aventura familiar o un itinerario completo, lo mantenemos práctico, personal y fácil de entender."
              : "Whether you want a quiet villa dinner, a private yacht day, a family adventure, or a full itinerary, we’ll keep it practical, personal, and easy to understand."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">
              {language === "es" ? "Pídenos Ayuda Para Planear Tu Estancia" : "Ask Us to Plan Your Stay"}
            </PrimaryButton>

            <a
              href="https://wa.me/523313619889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              {language === "es" ? "Escríbenos por WhatsApp" : "WhatsApp Us"}
            </a>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </main>
  );
}
