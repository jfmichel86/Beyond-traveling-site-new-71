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

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Link
    href={`/discover-punta-mita/${category.slug}/activity-name`}
    className="block h-full group"
  >
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:shadow-lg group-hover:-translate-y-[2px]">
      <div className="aspect-[16/9] bg-slate-100" />

      <div className="flex flex-1 flex-col p-6 bg-white">
        <h2 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
          Activity Name
        </h2>

        <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
          Short description of the activity will go here.
        </p>
      </div>
    </div>
  </Link>
</div>
       
        
        
        </div>
      </section>
    </main>
  );
}
