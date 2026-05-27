import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  discoverCategories,
  getDiscoverCategoryBySlug,
} from "@/lib/discoverPuntaMita";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return discoverCategories.map((category) => ({
    slug: category.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const category = getDiscoverCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Discover Punta Mita",
    };
  }

  return {
    title: `${category.title} | Discover Punta Mita`,
    description: category.description,
  };
}

export default function DiscoverCategoryPage({ params }: PageProps) {
  const category = getDiscoverCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section>
        <div className="relative aspect-[1983/793] w-full overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
         <Link
  href="/discover-punta-mita"
  className="text-[14px] text-slate-500 hover:text-slate-900 transition"
>
  ← Back to Discover
</Link>

<div className="mt-10 space-y-20">

  {[
    "Inside Punta Mita",
    "Sayulita & San Pancho",
    "Puerto Vallarta Area",
    "Punta Mita / Riviera Nayarit",
    "Sayulita",
    "Puerto Vallarta",
  ].map((region) => {
    const regionActivities = category.activities.filter(
      (activity) =>
        activity.customInfo.find(
          (item) => item.label === "Region"
        )?.value === region
    );

    if (regionActivities.length === 0) return null;

    return (
      <div key={region}>
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
          {region}
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionActivities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/discover-punta-mita/${category.slug}/${activity.slug}`}
              className="block h-full group"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:shadow-lg group-hover:-translate-y-[2px]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={1600}
                  height={900}
                  className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="flex flex-1 flex-col p-6 bg-white">
                  <h2 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
                    {activity.title}
                  </h2>

                  <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  })}
</div>
       
        
        
        </div>
      </section>
    </main>
  );
}
