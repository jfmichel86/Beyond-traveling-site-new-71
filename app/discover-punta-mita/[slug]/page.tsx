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
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
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

          <div className="mt-12 overflow-hidden rounded-2xl">
            <Image
              src={category.image}
              alt={category.title}
              width={2000}
              height={1200}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
