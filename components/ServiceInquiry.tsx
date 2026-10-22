"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "@/components/LocaleLink";
import WhatsAppLink from "@/components/WhatsAppLink";
import { isEsPath } from "@/lib/locale";
import { ES_SERVICE_NAMES } from "@/lib/services";
import { OUTLINE_CLASS } from "@/components/ui";

/**
 * Small band on each service page, just above "Other Services", for asking
 * about THIS service specifically. The WhatsApp message names the service.
 * Text is built here in both languages (and marked translate="no") because the
 * service name is dynamic.
 */
export default function ServiceInquiry({
  title,
  italic,
}: {
  title: string;
  italic: string;
}) {
  const es = isEsPath(usePathname() || "/");
  const enName = `${title} ${italic}`;
  const esName = (ES_SERVICE_NAMES[`${title}|${italic}`] ?? [title, italic]).join(" ");

  return (
    <section className="border-t border-bt-navy/10 bg-bt-cream" translate="no">
      <div className="mx-auto max-w-[640px] px-6 py-14 text-center md:py-16">
        <h2 className="font-serif text-[26px] font-light leading-[1.25] tracking-[-0.01em] text-bt-navy md:text-[30px]">
          {es ? "¿Te interesa este servicio?" : "Interested in this service?"}
        </h2>
        <p className="mx-auto mt-3 max-w-[460px] text-[15px] font-normal leading-[1.75] text-bt-charcoal/85">
          {es
            ? `Cuéntanos sobre tu propiedad y te decimos si ${esName} es lo que necesitas.`
            : `Tell us about your property and we’ll let you know if ${enName} is what you need.`}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/owners"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2 active:scale-[0.98]"
          >
            {es ? "Consultar Este Servicio" : "Ask About This Service"}
          </Link>
          <WhatsAppLink
            topic="service"
            serviceEn={enName}
            serviceEs={esName}
            className={OUTLINE_CLASS}
          >
            {es ? "Escríbenos por WhatsApp" : "WhatsApp Us"}
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
