"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getText } from "@/lib/i18n-types";
import type {
  Activity,
  DiscoverCategory,
  ExperienceOption,
} from "@/lib/discoverPuntaMita";
import type { LocalizedText } from "@/lib/i18n-types";

export default function ActivityDetailClient({
  category,
  activity,
}: {
  category: DiscoverCategory;
  activity: Activity;
}) {
  const { language } = useLanguage();
  const t = (value: string | LocalizedText) => getText(value, language);

  const experienceOptions = activity.experienceOptions ?? [];
  const tags = activity.tags ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name:
      language === "es"
        ? `${t(activity.title)} en Punta Mita`
        : `${t(activity.title)} in Punta Mita`,
    description: t(activity.description),
    image: activity.image,
    touristType: activity.standardInfo.find((item) => item.label.en === "Best For")
      ?.value.en,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Punta Mita",
      addressRegion: "Nayarit",
      addressCountry: "MX",
    },
  };

  return (
    <section className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1100px] px-6">
        <Link
          href={`/discover-punta-mita/${category.slug}`}
          className="text-[14px] text-slate-500 transition hover:text-slate-900"
        >
          {language === "es"
            ? `← Volver a ${t(category.title)}`
            : `← Back to ${t(category.title)}`}
        </Link>

        <div className="mt-8 max-w-[820px]">
          <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
            {t(category.title)}
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
            {t(activity.title)}
          </h1>

          <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
            {t(activity.overview)}
          </p>

          {tags.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.en}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] text-slate-700"
                >
                  {t(tag)}
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
                alt={t(activity.title)}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl text-slate-900">
            {language === "es" ? "Detalles de la Experiencia" : "Experience Details"}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {activity.standardInfo.map((item) => (
              <InfoCard key={item.label.en} label={t(item.label)} value={t(item.value)} />
            ))}
          </div>
        </div>

        {experienceOptions.length > 0 && (
          <div className="mt-20">
            <div className="max-w-[760px]">
              <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
                {language === "es"
                  ? "Opciones dentro de esta actividad"
                  : "Options inside this activity"}
              </p>

              <h2 className="mt-3 font-serif text-3xl text-slate-900 md:text-4xl">
                {language === "es"
                  ? "Elige la experiencia que mejor se adapte a tu viaje"
                  : "Choose the experience that fits your trip"}
              </h2>

              <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">
                {language === "es"
                  ? "Cada experiencia puede tomar distintas formas según el grupo, la temporada, el horario y el estilo de viaje. Estas son las principales opciones disponibles."
                  : "Each experience can take different forms depending on the group, season, timing, and preferred style of travel. Below are the main options available."}
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {experienceOptions.map((experience, index) => (
                <ExperienceSection
                  key={experience.title.en}
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
              {language === "es" ? "Bueno Saber" : "Good to Know"}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {activity.customInfo.map((item) => (
                <InfoCard key={item.label.en} label={t(item.label)} value={t(item.value)} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.75fr]">
          <div>
            <h2 className="font-serif text-3xl text-slate-900">
              {language === "es" ? "Qué Esperar" : "What to Expect"}
            </h2>

            <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/70">
              {t(activity.whatToExpect)}
            </p>

            <h2 className="mt-12 font-serif text-3xl text-slate-900">
              {language === "es" ? "Qué Llevar" : "What to Bring"}
            </h2>

            <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/70">
              {t(activity.whatToBring)}
            </p>
          </div>

          <div className="rounded-2xl bg-[#f4f0ea] p-8">
            <h3 className="font-serif text-2xl text-slate-900">
              {language === "es" ? "¿Planeando tu estancia?" : "Planning your stay?"}
            </h3>

            <p className="mt-4 text-[16px] leading-[1.75] text-slate-900/70">
              {language === "es"
                ? "Podemos ayudarte a elegir las experiencias que mejor se adapten a tu viaje según la temporada, el tamaño del grupo, el horario y el estilo de viaje."
                : "We can help you choose the experiences that fit your trip best depending on the season, group size, timing, and style of travel."}
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-6 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
            >
              {language === "es" ? "Contáctanos" : "Contact Us"}
            </Link>
          </div>
        </div>
      </div>
    </section>
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
  const { language } = useLanguage();
  const t = (value: string | LocalizedText) => getText(value, language);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[0.42fr_1fr]">
        <div className="bg-[#f4f0ea] p-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-slate-500">
            {language === "es" ? `Experiencia ${index + 1}` : `Experience ${index + 1}`}
          </p>

          <h3 className="mt-4 font-serif text-3xl leading-tight text-slate-900">
            {t(experience.title)}
          </h3>

          <p className="mt-5 text-[16px] leading-[1.75] text-slate-900/70">
            {t(experience.description)}
          </p>

          <div className="mt-7 space-y-4">
            <MiniDetail
              label={language === "es" ? "Ideal Para" : "Best For"}
              value={t(experience.bestFor)}
            />
            <MiniDetail
              label={language === "es" ? "Duración Habitual" : "Typical Duration"}
              value={t(experience.duration)}
            />
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div>
            <h4 className="font-serif text-2xl text-slate-900">
              {language === "es" ? "La Experiencia" : "The Experience"}
            </h4>

            <p className="mt-3 text-[16px] leading-[1.8] text-slate-900/70">
              {t(experience.experience)}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-serif text-2xl text-slate-900">
              {language === "es" ? "Qué Esperar" : "What to Expect"}
            </h4>

            <p className="mt-3 text-[16px] leading-[1.8] text-slate-900/70">
              {t(experience.whatToExpect)}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-serif text-2xl text-slate-900">
              {language === "es" ? "Qué Llevar" : "What to Bring"}
            </h4>

            <p className="mt-3 text-[16px] leading-[1.8] text-slate-900/70">
              {t(experience.whatToBring)}
            </p>
          </div>

          {experience.goodToKnow && (
            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h4 className="text-[12px] uppercase tracking-[0.16em] text-slate-400">
                {language === "es" ? "Bueno Saber" : "Good to Know"}
              </h4>

              <p className="mt-3 text-[16px] leading-[1.75] text-slate-900/70">
                {t(experience.goodToKnow)}
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

