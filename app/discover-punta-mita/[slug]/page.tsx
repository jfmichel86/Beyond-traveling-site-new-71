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
            src={category.image}
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

          <div className="mt-8 max-w-[760px]">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900">
              {category.title}
            </h1>

            <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
              {category.description}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
              <div className="aspect-[16/9] bg-slate-100" />
              <div className="p-6 bg-white">
                <h2 className="font-serif text-2xl leading-tight text-slate-900">
                  Activity Name
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
                  Short description of the activity will go here.
                </p>
                <p className="mt-5 text-[14px] text-slate-900">
                  Explore →
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
