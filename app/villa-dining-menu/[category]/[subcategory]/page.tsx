import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getVillaDiningCategoryBySlug,
  getVillaDiningSubcategoryBySlug,
  villaDiningCategories,
} from "@/lib/villaDiningMenu";

type PageProps = {
  params: {
    category: string;
    subcategory: string;
  };
};

export function generateStaticParams() {
  return villaDiningCategories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      category: category.slug,
      subcategory: subcategory.slug,
    }))
  );
}

export function generateMetadata({ params }: PageProps) {
  const category = getVillaDiningCategoryBySlug(params.category);
  const subcategory = getVillaDiningSubcategoryBySlug(
    params.category,
    params.subcategory
  );

  if (!category || !subcategory) {
    return {
      title: "Villa Dining Menu | Beyond Traveling",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${subcategory.title} | ${category.title} | Villa Dining Menu`,
    description: subcategory.description || category.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function VillaDiningSubcategoryPage({ params }: PageProps) {
  const category = getVillaDiningCategoryBySlug(params.category);
  const subcategory = getVillaDiningSubcategoryBySlug(
    params.category,
    params.subcategory
  );

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Link
            href={`/villa-dining-menu/${category.slug}`}
            className="text-[14px] text-slate-500 transition hover:text-slate-900"
          >
            ← Back to {category.title}
          </Link>

          <div className="mt-8 max-w-[820px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              {category.title}
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
              {subcategory.title}
            </h1>

            {subcategory.description && (
              <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
                {subcategory.description}
              </p>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {subcategory.dishes.map((dish) => (
              <article
                key={dish.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm"
              >
                <div className="bg-slate-100">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={dish.images[0]}
                      alt={dish.title}
                      fill
                      sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col bg-white p-6">
                  <h2 className="font-serif text-2xl leading-tight text-slate-900">
                    {dish.title}
                  </h2>

                  <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                    {dish.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
