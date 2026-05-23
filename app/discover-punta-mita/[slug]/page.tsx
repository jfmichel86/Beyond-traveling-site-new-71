import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivityBySlug } from "@/lib/discoverPuntaMita";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
    return {
      title: "Discover Punta Mita",
    };
  }

  return {
    title: `${activity.title} in Punta Mita`,
    description: activity.description,
  };
}

export default function ActivityPage({ params }: PageProps) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
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
            ← Back to Discover Punta Mita
          </Link>

          <div className="mt-8 max-w-[760px]">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900">
              {activity.title}
            </h1>

            <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
              {activity.description}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl">
            <Image
              src={activity.image}
              alt={activity.title}
              width={2000}
              height={1200}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[900px] px-6">
          <p className="text-[17px] leading-[1.85] text-slate-900/70">
            {activity.content}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-serif text-3xl text-slate-900">
            Gallery
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {activity.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-2xl bg-white">
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
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="font-serif text-3xl text-slate-900">
            Want help planning your stay?
          </h2>

          <p className="mt-4 text-[17px] leading-[1.75] text-slate-900/70">
            We can help guests choose the right experiences depending on the season,
            the group, and the type of stay they want.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-6 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
