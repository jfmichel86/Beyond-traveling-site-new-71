import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  discoverCategories,
  getActivityBySlug,
  getDiscoverCategoryBySlug,
} from "@/lib/discoverPuntaMita";

type PageProps = {
  params: {
    slug: string;
    activity: string;
  };
};

export function generateStaticParams() {
  return discoverCategories.flatMap((category) =>
    category.activities.map((activity) => ({
      slug: category.slug,
      activity: activity.slug,
    }))
  );
}

export function generateMetadata({ params }: PageProps) {
  const activity = getActivityBySlug(params.slug, params.activity);

  if (!activity) {
    return {
      title: "Discover Punta Mita",
    };
  }

  return {
    title: `${activity.title} in Punta Mita | Beyond Traveling`,
    description: activity.description,
  };
}

export default function ActivityPage({ params }: PageProps) {
  const category = getDiscoverCategoryBySlug(params.slug);
  const activity = getActivityBySlug(params.slug, params.activity);

  if (!category || !activity) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section>
        <div className="relative aspect-[1983/793] w-full overflow-hidden">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Link
            href={`/discover-punta-mita/${category.slug}`}
            className="text-[14px] text-slate-500 hover:text-slate-900 transition"
          >
            ← Back to {category.title}
          </Link>

          <div className="mt-8 max-w-[760px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              {category.title}
            </p>

            <h1 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900">
              {activity.title}
            </h1>

            <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
              {activity.overview}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {activity.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={activity.title}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-3xl text-slate-900">
              Experience Details
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {[...activity.standardInfo, ...activity.customInfo].map((item) => (
                <InfoCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_0.75fr] gap-12">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">
                What to Expect
              </h2>

              <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/70">
                {activity.whatToExpect}
              </p>

              <h2 className="mt-12 font-serif text-3xl text-slate-900">
                What to Bring
              </h2>

              <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/70">
                {activity.whatToBring}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f0ea] p-8">
              <h3 className="font-serif text-2xl text-slate-900">
                Planning your stay?
              </h3>

              <p className="mt-4 text-[16px] leading-[1.75] text-slate-900/70">
                We can help guests understand which experiences fit their trip best depending on the season, group size, and style of travel.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-6 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-[12px] uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>

      <p className="mt-3 text-[16px] leading-[1.6] text-slate-800">
        {value}
      </p>
    </div>
  );
}
