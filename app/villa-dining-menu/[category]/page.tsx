import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryShouldShowDishesDirectly,
  getVillaDiningCategoryBySlug,
  villaDiningCategories,
} from "@/lib/villaDiningMenu";

type PageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return villaDiningCategories.map((category) => ({
    category: category.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const category = getVillaDiningCategoryBySlug(params.category);

  if (!category) {
    return {
      title: "Villa Dining Menu | Beyond Traveling",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${category.title} | Villa Dining Menu`,
    description: category.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function VillaDiningCategoryPage({ params }: PageProps) {
  const category = getVillaDiningCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const showDishesDirectly = categoryShouldShowDishesDirectly(category.slug);
  const directDishes = showDishesDirectly
    ? category.subcategories.flatMap((subcategory) => subcategory.dishes)
    : [];

  return (
    <main className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Link
            href="/villa-dining-menu"
            className="text-[14px] text-slate-500 transition hover:text-slate-900"
          >
            ← Back to Villa Dining Menu
          </Link>

          <div className="mt-8 max-w-[820px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              Villa Dining Menu
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
              {category.title}
            </h1>

            <p className="mt-6 text-[20px] leading-[1.65] text-slate-900/80">
              {category.description}
            </p>

            {category.intro && (
              <p className="mt-5 text-[17px] leading-[1.8] text-slate-900/70">
                {category.intro}
              </p>
            )}
          </div>

          {showDishesDirectly ? (
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {directDishes.map((dish) => (
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
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.slug}
                  href={`/villa-dining-menu/${category.slug}/${subcategory.slug}`}
                  className="group block h-full"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-lg">
                    <div className="overflow-hidden">
                      <Image
                        src={subcategory.image}
                        alt={subcategory.title}
                        width={1600}
                        height={900}
                        className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col bg-white p-6">
                      <h2 className="font-serif text-2xl leading-tight text-slate-900">
                        {subcategory.title}
                      </h2>

                      {subcategory.description && (
                        <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-slate-600">
                          {subcategory.description}
                        </p>
                      )}

                      <p className="mt-5 text-[14px] font-semibold text-slate-900 underline decoration-slate-900/20 underline-offset-4 transition group-hover:decoration-slate-900">
                        View dishes
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
