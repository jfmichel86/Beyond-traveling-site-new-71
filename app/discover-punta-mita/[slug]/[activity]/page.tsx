import Image from "next/image";
import { notFound } from "next/navigation";
import {
  discoverCategories,
  getActivityBySlug,
  getDiscoverCategoryBySlug,
} from "@/lib/discoverPuntaMita";
import ActivityDetailClient from "./ActivityDetailClient";

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
      title: "Discover Punta Mita | Beyond Traveling",
      description:
        "Discover curated activities, ocean experiences, and things to do in Punta Mita.",
    };
  }

  return {
    title: "Discover Punta Mita | Beyond Traveling",
    description:
      "Discover curated activities, ocean experiences, and things to do in Punta Mita.",
    alternates: {
      canonical: `/discover-punta-mita/${params.slug}/${params.activity}`,
    },
    openGraph: {
      title: "Discover Punta Mita | Beyond Traveling",
      description:
        "Discover curated activities, ocean experiences, and things to do in Punta Mita.",
      url: `/discover-punta-mita/${params.slug}/${params.activity}`,
      siteName: "Beyond Traveling",
      images: [
        {
          url: activity.image,
          width: 1200,
          height: 630,
          alt: "Discover Punta Mita",
        },
      ],
      locale: "en_US",
      type: "article",
    },
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
            alt="Discover Punta Mita"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <ActivityDetailClient category={category} activity={activity} />
    </main>
  );
}
