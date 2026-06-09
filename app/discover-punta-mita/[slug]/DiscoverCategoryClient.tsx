"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { getText } from "@/lib/i18n-types";
import type { DiscoverCategory } from "@/lib/discoverPuntaMita";
import ActivityFilterGrid from "./ActivityFilterGrid";

export default function DiscoverCategoryClient({
  category,
}: {
  category: DiscoverCategory;
}) {
  const { language } = useLanguage();
  const t = (value: Parameters<typeof getText>[0]) => getText(value, language);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Link
          href="/discover-punta-mita"
          className="text-[14px] text-slate-500 transition hover:text-slate-900"
        >
          {language === "es" ? "← Volver a Descubre" : "← Back to Discover"}
        </Link>

        <div className="mt-8 max-w-[820px]">
          <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
            {language === "es" ? "Descubre Punta Mita" : "Discover Punta Mita"}
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
            {t(category.title)}
          </h1>

          <p className="mt-6 text-[18px] leading-[1.75] text-slate-900/70">
            {t(category.description)}
          </p>
        </div>

        <div className="mt-12">
          <ActivityFilterGrid
            categorySlug={category.slug}
            activities={category.activities}
          />
        </div>
      </div>
    </section>
  );
}
