"use client";

import React from "react";
import Link from "@/components/LocaleLink";
import Image from "next/image";
import Container from "@/components/Container";
import { discoverCategories } from "@/lib/discoverPuntaMita";
import { useLanguage } from "@/lib/language-context";
import { getText } from "@/lib/i18n-types";
import type { LocalizedText } from "@/lib/i18n-types";
import { PrimaryButton, OutlineButton, OUTLINE_CLASS, Eyebrow } from "@/components/ui";
import WhatsAppLink from "@/components/WhatsAppLink";

function CategoryTile({
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
      className="group relative block aspect-[4/3] overflow-hidden focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-4"
    >
      <Image
        src={category.image}
        alt={
          language === "es"
            ? `Experiencias de ${t(category.title)} en Punta Mita`
            : `${t(category.title)} experiences in Punta Mita`
        }
        fill
        priority={priority}
        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
        className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,16,26,0.55)_0%,rgba(10,16,26,0)_55%)]" />
      <p className="font-serif absolute bottom-4 left-5 text-[22px] font-normal text-white">
        {t(category.title)}
      </p>
    </Link>
  );
}

function MobileStickyCta() {
  const { language } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bt-navy/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <WhatsAppLink
          topic="discover"
          className="inline-flex min-h-11 items-center justify-center border border-bt-navy/25 text-[10px] font-medium uppercase tracking-[0.13em] text-bt-navy transition hover:bg-bt-cream focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
        >
          WhatsApp
        </WhatsAppLink>

        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center bg-bt-navy text-[10px] font-medium uppercase tracking-[0.13em] text-white transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
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
      <section className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[680px] py-20 text-center md:py-24">
            <Eyebrow>
              {language === "es" ? "Experiencias en Punta Mita" : "Punta Mita Experiences"}
            </Eyebrow>

            <h1 className="font-serif mt-6 text-4xl font-light leading-[1.12] tracking-[-0.01em] text-bt-navy md:text-[48px]">
              {language === "es" ? "Descubre Punta Mita." : "Discover Punta Mita."}
              <br />
              <span className="italic text-bt-gold">
                {language === "es"
                  ? "Te ayudamos a planear lo mejor de tu estancia."
                  : "We’ll help you plan the good parts."}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[520px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
              {language === "es"
                ? "Días privados en el mar, bienestar, clubes de playa, golf, cenas con chef, aventuras familiares, vida nocturna y momentos especiales organizados alrededor de la forma en que quieres disfrutar tu estancia."
                : "Private ocean days, wellness, beach clubs, golf, chef-led dining, family adventures, nightlife, and special moments arranged around the way you want to enjoy your stay."}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <PrimaryButton href="/contact/reservations">
                {language === "es" ? "Pídenos Ayuda Para Planear Tu Estancia" : "Ask Us to Plan Your Stay"}
              </PrimaryButton>
              <OutlineButton href="#experiences">
                {language === "es" ? "Ver Experiencias" : "View Experiences"}
              </OutlineButton>
            </div>
          </div>
        </Container>
      </section>

      <section id="experiences" className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto mb-14 max-w-[700px] text-center">
            <Eyebrow>{language === "es" ? "Experiencias" : "Experiences"}</Eyebrow>
            <h2 className="font-serif mt-5 text-3xl font-light text-bt-navy md:text-[34px]">
              {language === "es"
                ? "Pensado para la forma en que quieres vivir Punta Mita"
                : "Curated for the way you want to experience Punta Mita"}
            </h2>
          </div>

          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {discoverCategories.map((category, index) => (
              <CategoryTile
                key={category.slug}
                category={category}
                priority={index < 3}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-bt-navy/10 bg-bt-cream">
        <div className="mx-auto max-w-[660px] px-6 py-20 text-center md:py-24">
          <h2 className="font-serif text-3xl font-light leading-[1.3] tracking-[-0.01em] text-bt-navy md:text-[34px]">
            {language === "es"
              ? "Dinos qué tipo de estancia quieres"
              : "Tell Us What Kind of Stay You Want"}
          </h2>

          <p className="mx-auto mt-5 max-w-[460px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
            {language === "es"
              ? "Ya sea que quieras una cena tranquila en la villa, un día privado en yate, una aventura familiar o un itinerario completo, lo mantenemos práctico, personal y fácil de entender."
              : "A quiet villa dinner, a private yacht day, a family adventure, or a full itinerary — we’ll keep it practical, personal, and easy to understand."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact/reservations">
              {language === "es" ? "Pídenos Ayuda Para Planear Tu Estancia" : "Ask Us to Plan Your Stay"}
            </PrimaryButton>
            <WhatsAppLink topic="discover" className={OUTLINE_CLASS}>
              {language === "es" ? "Escríbenos por WhatsApp" : "WhatsApp Us"}
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </main>
  );
}
