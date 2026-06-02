import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  importantServiceDetails,
  villaDiningCategories,
} from "@/lib/villaDiningMenu";

export const metadata = {
  title: "Villa Dining Menu | Beyond Traveling",
  description:
    "Private villa dining menu with fresh breakfast, lunch, private dinners, children’s menu, and desserts.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VillaDiningMenuPage() {
  return (
    <main className="bg-white">
     <section className="bg-white">
  <div className="mx-auto max-w-[920px] px-6 py-16 text-center md:py-24">
    <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/45">
      Villa Dining Menu
    </p>

    <h1 className="mx-auto max-w-[860px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
      Fresh Breakfast, Lunch
      <span className="block italic text-[0.78em] leading-[1.15]">
        & Private Dinners at Home.
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
      Enjoy relaxed, freshly prepared meals from the comfort of your
      private villa.
    </p>
  </div>
</section>
<div className="mx-auto max-w-[1100px] px-6">
  <div className="border-t border-slate-200" />
</div>

<section className="bg-white py-12 md:py-16">
  <div className="mx-auto max-w-[860px] px-6 text-center">
    <p className="text-[17px] leading-[1.75] text-slate-900/72">
      Breakfast preparation is included with your rental; however, the cost
      of groceries and ingredients is not included.
    </p>

    <p className="mx-auto mt-4 max-w-[780px] text-[17px] leading-[1.75] text-slate-900/72">
      Lunch and dinner preparation may be arranged upon request for an
      additional service cost. All meals are prepared using groceries
      purchased for your stay, based on your group size, selected dishes,
      and preferences.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a
        href="#menu-categories"
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800"
      >
        View Menu
      </a>

      <a
        href="#service-details"
        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900"
      >
        Important Service Details
      </a>
    </div>
  </div>
</section>

<div className="mx-auto max-w-[1100px] px-6">
  <div className="border-t border-slate-200" />
</div>

<section id="menu-categories" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-900/45">
              Menu Categories
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-slate-900 md:text-4xl">
              Choose the service you would like to explore
            </h2>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
              Browse breakfast, lunch, private dinner, children’s options, and
              desserts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {villaDiningCategories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/villa-dining-menu/${category.slug}`}
                className="group block h-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-4"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      priority={index < 3}
                      sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col bg-white p-6 md:min-h-[118px]">
                    <h3 className="font-serif text-2xl leading-tight text-slate-900">
                      {category.title}
                    </h3>

                  <div className="mt-3 flex-1" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="service-details"
        className="border-t border-slate-900/8 bg-[#f1f4f8]"
      >
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-20">
          <div className="max-w-[780px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-900/45">
              Please Review
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-slate-900 md:text-4xl">
              Important Service Details
            </h2>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
              These details help us keep the service clear, flexible, and easy
              to coordinate before and during your stay.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {importantServiceDetails.map((detail) => (
              <div
                key={detail}
                className="rounded-2xl border border-slate-900/10 bg-white p-5 text-[15px] leading-[1.7] text-slate-900/72 shadow-sm"
              >
                {detail}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
