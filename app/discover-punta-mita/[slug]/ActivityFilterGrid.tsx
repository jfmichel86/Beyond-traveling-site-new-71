"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ActivityCardItem = {
  title: string;
  slug: string;
  image: string;
  description: string;
  tags?: string[];
};

type ActivityFilterGridProps = {
  categorySlug: string;
  activities: ActivityCardItem[];
};

export default function ActivityFilterGrid({
  categorySlug,
  activities,
}: ActivityFilterGridProps) {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();

    activities.forEach((activity) => {
      activity.tags?.forEach((tag) => uniqueTags.add(tag));
    });

    return ["All", ...Array.from(uniqueTags).sort()];
  }, [activities]);

  const filteredActivities =
    activeTag === "All"
      ? activities
      : activities.filter((activity) => activity.tags?.includes(activeTag));

  return (
    <div>
      {tags.length > 1 && (
        <div className="mb-10">
          <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
            Filter by interest
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isActive = activeTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={[
                    "rounded-full border px-4 py-2 text-[14px] transition",
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400",
                  ].join(" ")}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.slug}
              categorySlug={categorySlug}
              activity={activity}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="font-serif text-2xl text-slate-900">
            No activities found
          </h2>

          <p className="mt-3 text-[16px] leading-[1.7] text-slate-900/70">
            Try selecting a different tag.
          </p>
        </div>
      )}
    </div>
  );
}

function ActivityCard({
  categorySlug,
  activity,
}: {
  categorySlug: string;
  activity: ActivityCardItem;
}) {
  return (
    <Link
      href={`/discover-punta-mita/${categorySlug}/${activity.slug}`}
      className="group block h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-lg">
        <Image
          src={activity.image}
          alt={activity.title}
          width={1600}
          height={900}
          className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="flex flex-1 flex-col bg-white p-6">
          <h2 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
            {activity.title}
          </h2>

          <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
            {activity.description}
          </p>

          {activity.tags && activity.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {activity.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 px-3 py-1 text-[12px] text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
