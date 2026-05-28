import Link from "next/link";
import Image from "next/image";
import { discoverCategories } from "@/lib/discoverPuntaMita";

export const metadata = {
  title: "Discover Punta Mita | Beyond Traveling",
  description:
    "Explore curated luxury activities in Punta Mita, including private yachts, Marietas, golf, wellness, private chefs, beach clubs, nightlife, and VIP experiences.",
};

export default function DiscoverPuntaMitaPage() {
  const totalActivities = discoverCategories.reduce(
    (total, category) => total + category.activities.length,
    0
  );

  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center md:py-24">
          <p className="text-[13px] uppercase tracking-[0.18em] text-slate-400">
            Beyond Traveling Concierge
          </p>

          <h1 className="mx-auto mt-5 max-w-[820px] font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
            Discover Punta Mita
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.75] text-slate-900/70">
            A curated guide to the most relevant luxury activities, private
            experiences, and local highlights for guests staying in Punta Mita.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-slate-200 px-5 py-2 text-[14px] text-slate-700">
              {discoverCategories.length} curated categories
            </span>

            <span className="rounded-full border border-slate-200 px-5 py-2 text-[14px] text-slate-700">
              {totalActivities} parent activities
            </span>

            <span className="rounded-full border border-slate-200 px-5 py-2 text-[14px] text-slate-700">
              Filter by guest interest
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6">
        <div className="border-t border-slate-200" />
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              Activity Categories
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-900 md:text-4xl">
              Choose a category, then explore the experiences inside
            </h2>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
              Each category contains a smaller number of carefully merged
              activities. Inside each activity, guests can see the different
              experiences available, what to expect, who it is best for, and
              what to bring.
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
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="text-[12px] uppercase tracking-[0.14em] text-slate-400">
                        {category.activities.length} activities
                      </p>

                      <span className="text-[13px] text-slate-500 transition group-hover:text-slate-900">
                        Explore →
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                      {category.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.activities.slice(0, 3).map((activity) => (
                        <span
                          key={activity.slug}
                          className="rounded-full border border-slate-200 px-3 py-1 text-[12px] text-slate-600"
                        >
                          {activity.title}
                        </span>
                      ))}
                    </div>
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
