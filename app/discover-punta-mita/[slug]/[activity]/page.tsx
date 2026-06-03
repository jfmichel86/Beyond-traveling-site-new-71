import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  discoverCategories,
  getActivityBySlug,
  getDiscoverCategoryBySlug,
} from "@/lib/discoverPuntaMita";

type PageProps = {
  params: {
    slug: string;
    activity: string;
  };
};

type ExperienceOption = {
  title: string;
  description: string;
  bestFor: string;
  duration: string;
  experience: string;
  whatToExpect: string;
  whatToBring: string;
  goodToKnow?: string;
};

type ActivityWithExperienceOptions = ReturnType<typeof getActivityBySlug> & {
  experienceOptions?: ExperienceOption[];
  tags?: string[];
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
    title: `${activity.title} in Punta Mita | Beyond Traveling`,
    description: activity.description,
    alternates: {
      canonical: `/discover-punta-mita/${params.slug}/${params.activity}`,
    },
    openGraph: {
      title: `${activity.title} in Punta Mita | Beyond Traveling`,
      description: activity.description,
      url: `/discover-punta-mita/${params.slug}/${params.activity}`,
      siteName: "Beyond Traveling",
      images: [
        {
          url: activity.image,
          width: 1200,
          height: 630,
          alt: `${activity.title} in Punta Mita`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default function ActivityPage({ params }: PageProps) {
  const category = getDiscoverCategoryBySlug(params.slug);
  const activity = getActivityBySlug(
    params.slug,
    params.activity
  ) as ActivityWithExperienceOptions;

  if (!category || !activity) {
    notFound();
  }

  const experienceOptions = activity.experienceOptions ?? [];
  const tags = activity.tags ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: `${activity.title} in Punta Mita`,
    description: activity.description,
    image: activity.image,
    touristType: activity.standardInfo.find((item) => item.label === "Best For")
      ?.value,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Punta Mita",
      addressRegion: "Nayarit",
      addressCountry: "MX",
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section>
        <div className="relative aspect-[1983/793] w-full overflow-hidden">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Link
            href={`/discover-punta-mita/${category.slug}`}
            className="text-[14px] text-slate-500 transition hover:text-slate-900"
          >
            ← Back to {category.title}
          </Link>

          <div className="mt-8 max-w-[820px]">
            <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
              {category.title}
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
              {activity.title}
            </h1>

            <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
              {activity.overview}
            </p>

            {tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {activity.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-2xl">
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

          <div className="mt-16">
            <h2 className="font-serif text-3xl text-slate-900">
              Experience Details
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {activity.standardInfo.map((item) => (
                <InfoCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          {experienceOptions.length > 0 && (
            <div className="mt-20">
              <div className="max-w-[760px]">
                <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
                  Options inside this activity
                </p>

                <h2 className="mt-3 font-serif text-3xl text-slate-900 md:text-4xl">
                  Choose the experience that fits your trip
                </h2>

                <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
                  This activity can be arranged in different ways depending on
                  the group, season, timing, and style of travel. Below are the
                  main experiences that can be included or customized.
                </p>
              </div>

              <div className="mt-10 space-y-8">
                {experienceOptions.map((experience, index) => (
                  <ExperienceSection
                    key={experience.title}
                    experience={experience}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {activity.customInfo.length > 0 && (
            <div className="mt-20">
              <h2 className="font-serif text-3xl text-slate-900">
                Good to Know
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                {activity.customInfo.map((item) => (
                  <InfoCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.75fr]">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">
                What to Expect
              </h2>

              <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/70">
                {activity.whatToExpect}
              </p>

              <h2 className="mt-12 font-serif text-3xl text-slate-900">
                What to Bring
              </h2>

              <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/70">
                {activity.whatToBring}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f0ea] p-8">
              <h3 className="font-serif text-2xl text-slate-900">
                Planning your stay?
              </h3>

              <p className="mt-4 text-[16px] leading-[1.75] text-slate-900/70">
                We can help you choose the experiences that fit your trip
                best depending on the season, group size, timing, and style of
                travel.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-6 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-[12px] uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>

      <p className="mt-3 text-[16px] leading-[1.6] text-slate-800">
        {value}
      </p>
    </div>
  );
}

function ExperienceSection({
  experience,
  index,
}: {
  experience: ExperienceOption;
  index: number;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[0.42fr_1fr]">
        <div className="bg-[#f4f0ea] p-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-slate-500">
            Experience {index + 1}
          </p>

          <h3 className="mt-4 font-serif text-3xl leading-tight text-slate-900">
            {experience.title}
          </h3>

          <p className="mt-5 text-[16px] leading-[1.75] text-slate-900/70">
            {experience.description}
          </p>

          <div className="mt-7 space-y-4">
            <MiniDetail label="Best For" value={experience.bestFor} />
            <MiniDetail label="Typical Duration" value={experience.duration} />
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div>
            <h4 className="font-serif text-2xl text-slate-900">
              The Experience
            </h4>

            <p className="mt-3 text-[16px] leading-[1.8] text-slate-900/70">
              {experience.experience}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-serif text-2xl text-slate-900">
              What to Expect
            </h4>

            <p className="mt-3 text-[16px] leading-[1.8] text-slate-900/70">
              {experience.whatToExpect}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-serif text-2xl text-slate-900">
              What to Bring
            </h4>

            <p className="mt-3 text-[16px] leading-[1.8] text-slate-900/70">
              {experience.whatToBring}
            </p>
          </div>

          {experience.goodToKnow && (
            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h4 className="text-[12px] uppercase tracking-[0.16em] text-slate-400">
                Good to Know
              </h4>

              <p className="mt-3 text-[16px] leading-[1.75] text-slate-900/70">
                {experience.goodToKnow}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function MiniDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-[15px] leading-[1.6] text-slate-800">
        {value}
      </p>
    </div>
  );
}
