import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  discoverCategories,
  getDiscoverCategoryBySlug,
} from "@/lib/discoverPuntaMita";
import ActivityFilterGrid from "./ActivityFilterGrid";

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
      title: "Discover Punta Mita | Beyond Traveling",
      description:
        "Discover curated activities, ocean experiences, and things to do in Punta Mita.",
    };
  }

  return {
    title: `${category.title} | Discover Punta Mita`,
    description: category.description,
    alternates: {
      canonical: `/discover-punta-mita/${params.slug}`,
    },
    openGraph: {
      title: `${category.title} | Discover Punta Mita`,
      description: category.description,
      url: `/discover-punta-mita/${params.slug}`,
      siteName: "Beyond Traveling",
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: `${category.title} in Punta Mita`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
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
            className="text-[14px] text-slate-500 transition hover:text-slate-900"
          >
            ← Back to Discover
          </Link>

          <div className="mt-8 max-w-[820px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              Discover Punta Mita
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
              {category.title}
            </h1>

            <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
              {category.description}
            </p>
          </div>

          <div className="mt-12">
            <ActivityFilterGrid
              categorySlug={category.slug}
              activities={category.activities}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
