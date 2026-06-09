import Image from "next/image";
import { notFound } from "next/navigation";
import {
  discoverCategories,
  getDiscoverCategoryBySlug,
} from "@/lib/discoverPuntaMita";
import DiscoverCategoryClient from "./DiscoverCategoryClient";

export function generateStaticParams() {
  return discoverCategories.map((category) => ({
    slug: category.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getDiscoverCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Discover Punta Mita | Beyond Traveling",
      description:
        "Discover curated activities, ocean experiences, and things to do in Punta Mita.",
    };
  }

  return {
    title: `${category.title.en} | Discover Punta Mita`,
    description: category.description.en,
    alternates: {
      canonical: `/discover-punta-mita/${params.slug}`,
    },
    openGraph: {
      title: `${category.title.en} | Discover Punta Mita`,
      description: category.description.en,
      url: `/discover-punta-mita/${params.slug}`,
      siteName: "Beyond Traveling",
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: `${category.title.en} in Punta Mita`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default function DiscoverCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
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
            alt={category.title.en}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <DiscoverCategoryClient category={category} />
    </main>
  );
}
