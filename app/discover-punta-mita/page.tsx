import Link from "next/link";
import Image from "next/image";
import { discoverCategories } from "@/lib/discoverPuntaMita";

export const metadata = {
  title: "Discover Punta Mita",
  description:
    "Discover things to do in Punta Mita, including surfing, golf, private boat trips, wellness, restaurants, and local experiences.",
};

export default function DiscoverPuntaMitaPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="py-16 md:py-24 mx-auto max-w-[760px] px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900 max-w-[800px] mx-auto">
            Discover Punta Mita
          </h1>

          <p className="mt-6 text-[17px] leading-[1.75] text-slate-900/70">
            A curated guide to the experiences, activities, and places that make Punta Mita special.
            From ocean adventures to golf, wellness, dining, and local discoveries.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6">
        <div className="border-t border-slate-200" />
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discoverCategories.map((activity) => (
              <Link
                key={activity.slug}
                href={`/discover-punta-mita/${activity.slug}`}
                className="block group"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:shadow-lg group-hover:-translate-y-[2px]">
                  <div className="overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      width={1600}
                      height={1100}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-6 bg-white">
                    <h2 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
                      {activity.title}
                    </h2>

                    <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
                      {activity.description}
                    </p>

                    <p className="mt-5 text-[14px] text-slate-900">
                      Explore →
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
