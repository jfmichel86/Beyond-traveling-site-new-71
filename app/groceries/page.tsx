import React from "react";
import EsText from "@/components/EsText";
import { Eyebrow } from "@/components/ui";
import { getProperties } from "@/lib/sanity";
import { FALLBACK_VILLAS } from "@/lib/fallback-villas";
import { getGroceryData } from "@/lib/groceries";
import GroceryShop from "./GroceryShop";

// Private page for booked guests (shared by the concierge) — not in Google.
export const metadata = {
  title: "Pre-Arrival Groceries | Beyond Traveling",
  description:
    "Choose the groceries you would like waiting at your villa in Punta Mita and send your list to our concierge.",
  robots: { index: false, follow: false },
};

export const revalidate = 60;

const NOTES: { en: string; es: string }[] = [
  {
    en: "Items are charged at store prices, plus a concierge fee of 15% of the total and a flat $60 USD.",
    es: "Los artículos se cobran a precio de tienda, más una tarifa de concierge del 15% del total y $60 USD fijos.",
  },
  {
    en: "Send your list at least one week before you arrive.",
    es: "Envía tu lista con al menos una semana de anticipación.",
  },
  {
    en: "Deliveries are between 2 pm and 4 pm on Monday, Wednesday and Friday.",
    es: "Las entregas son entre 2 pm y 4 pm los lunes, miércoles y viernes.",
  },
  {
    en: "This list is provided for your convenience, and availability of items cannot be guaranteed.",
    es: "Esta lista es para tu comodidad y no podemos garantizar la disponibilidad de los artículos.",
  },
  {
    en: "Unfortunately, refunds cannot be made for groceries that are not used.",
    es: "Lamentablemente, no podemos hacer reembolsos por productos que no se utilicen.",
  },
];

export default async function GroceriesPage() {
  const [data, properties] = await Promise.all([getGroceryData(), getProperties()]);
  const villas = (properties.length ? properties : FALLBACK_VILLAS).map((p) => p.title);

  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="bg-bt-cream">
        <div className="mx-auto max-w-[860px] px-6 py-20 text-center md:py-24">
          <Eyebrow>
            <EsText en="Pre-Arrival Groceries" es="Despensa Antes de tu Llegada" />
          </Eyebrow>
          <h1 className="font-serif mt-6 text-[40px] font-light leading-[1.1] text-bt-navy md:text-[58px]">
            <EsText en="Arrive to a" es="Llega a una" />
            <span className="block italic">
              <EsText en="Stocked Kitchen." es="Cocina Lista." />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-[16.5px] leading-[1.75] text-bt-charcoal/85">
            <EsText
              en="Choose what you’d like waiting at the villa. Our personal shopper picks every item, and we deliver and put everything away before you arrive."
              es="Elige lo que quieres encontrar en la villa. Nuestro personal shopper escoge cada artículo, y lo entregamos y acomodamos todo antes de que llegues."
            />
          </p>

          <ol className="mx-auto mt-10 grid max-w-[720px] gap-6 text-left sm:grid-cols-3">
            {[
              { en: "Tap “Add” and choose quantities.", es: "Toca “Agregar” y elige cantidades." },
              { en: "Add a brand or note if you have a favorite.", es: "Agrega una marca o nota si tienes alguna favorita." },
              { en: "Send your list. We confirm everything with you.", es: "Envía tu lista. Te confirmamos todo." },
            ].map((s, i) => (
              <li key={i} className="border-t border-bt-gold/50 pt-4">
                <span className="font-serif text-[22px] text-bt-gold-text">0{i + 1}</span>
                <p className="mt-1 text-[14.5px] leading-[1.6] text-bt-charcoal/90">
                  <EsText en={s.en} es={s.es} />
                </p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-8 max-w-[600px] text-[13px] leading-[1.7] text-bt-charcoal/75">
            <EsText
              en="Store prices + 15% concierge fee + $60 USD flat. Please order at least one week ahead."
              es="Precio de tienda + 15% de tarifa de concierge + $60 USD fijos. Pide con al menos una semana de anticipación."
            />
          </p>
        </div>
      </section>

      <GroceryShop data={data} villas={villas} />

      {/* Good to know */}
      <section className="border-t border-bt-navy/10 bg-bt-cream">
        <div className="mx-auto max-w-[860px] px-6 pb-28 pt-16 md:py-20">
          <Eyebrow as="h2">
            <EsText en="Good to Know" es="Para Tomar en Cuenta" />
          </Eyebrow>
          <ul className="mt-6 space-y-3">
            {NOTES.map((n, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-[1.7] text-bt-charcoal/90">
                <span aria-hidden="true" className="mt-[11px] h-px w-4 shrink-0 bg-bt-gold" />
                <span>
                  <EsText en={n.en} es={n.es} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
