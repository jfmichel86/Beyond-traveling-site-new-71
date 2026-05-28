import Link from "next/link";
import Image from "next/image";
import { discoverCategories } from "@/lib/discoverPuntaMita";

export const metadata = {
  title: "Discover Punta Mita | Beyond Traveling",
  description:
    "Discover curated luxury experiences in Punta Mita, including private yachts, Marietas, golf, wellness, private chefs, beach clubs, nightlife, and VIP concierge experiences.",
};

export default function DiscoverPuntaMitaPage() {
  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="mx-auto max-w-[860px] px-6 py-16 text-center md:py-24">
          <p className="text-[13px] uppercase tracking-[0.18em] text-slate-400">
            Beyond Traveling Concierge
          </p>

          <h1 className="mx-auto mt-5 max-w-[820px] font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
            Discover Punta Mita
          </h1>

          <p className="mx-auto mt-7 max-w-[760px] text-[18px] leading-[1.75] text-slate-900/70">
            A curated collection of private experiences, ocean days, wellness rituals,
            chef-led dining, golf, beach clubs, and special moments designed for guests
            staying in Punta Mita.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6">
        <div className="border-t border-slate-200" />
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 max-w-[760px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              Experiences
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-900 md:text-4xl">
              Curated for the way you want to experience Punta Mita
            </h2>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
              From private days on the water to quiet wellness rituals, family adventures,
              chef-prepared dinners, and once-in-a-trip celebrations, each category brings
              together the experiences most relevant to a luxury stay in Punta Mita.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {discoverCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/discover-punta-mita/${category.slug}`}
                className="group block h-full"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-lg">
                  <div className="overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={1600}
                      height={900}
                      className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col bg-white p-6">
                    <h3 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
