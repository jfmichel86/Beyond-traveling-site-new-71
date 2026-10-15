import type { Metadata } from "next";
import { withEs } from "@/lib/locale";

export const SITE = "https://www.beyondtravelingmx.com";
const BRAND = "Beyond Traveling";

/**
 * Spanish title + description for every page that has a real, indexable
 * Spanish version at /es/... Pages not listed here still exist under /es
 * (the translated interface) but are marked noindex, because their main
 * content (villa descriptions, activity guides) is written in English.
 */
export const ES_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Administración de Propiedades y Rentas de Lujo en Punta Mita",
    description:
      "Administración de propiedades de lujo en Punta Mita: manejo de rentas, Home Watch, concierge y villas para reservar. Precios claros, sin cargos ocultos y comunicación directa.",
  },
  "/services": {
    title: "Servicios de Administración de Propiedades en Punta Mita",
    description:
      "Servicios de administración de propiedades de lujo en Punta Mita: cuidado de la casa, coordinación con huéspedes, limpieza, reportes, precios claros y comunicación directa con el propietario.",
  },
  "/services/home-watch": {
    title: "Servicio de Home Watch en Punta Mita",
    description:
      "Home Watch en Punta Mita: visitas programadas, inspecciones y reportes con fotos para casas de lujo que permanecen vacías entre estancias.",
  },
  "/services/concierge-service": {
    title: "Servicio de Concierge para Villas en Punta Mita",
    description:
      "Concierge bilingüe para villas en Punta Mita: preparación de llegada, reservaciones, chefs privados, transporte y apoyo disponible durante cada estancia.",
  },
  "/services/vacation-rental-management": {
    title: "Administración de Rentas Vacacionales en Punta Mita",
    description:
      "Administración de rentas vacacionales en Punta Mita: anuncios, precios, reservaciones, comunicación con huéspedes, coordinación de llegadas y reportes mensuales para el propietario.",
  },
  "/services/property-management": {
    title: "Administración de Propiedades de Lujo en Punta Mita",
    description:
      "Administración de propiedades en Punta Mita: inspecciones, mantenimiento preventivo, proveedores de confianza, pago de cuentas y reportes mensuales para casas de lujo.",
  },
  "/services/full-service-management": {
    title: "Administración Integral de Villas en Punta Mita",
    description:
      "Administración integral de villas en Punta Mita: cuidado de la propiedad, mantenimiento, proveedores, reservaciones, huéspedes y reportes, a cargo de un solo equipo local.",
  },
  "/about": {
    title: "Nosotros | Administración de Propiedades en Punta Mita",
    description:
      "Conoce al pequeño equipo local detrás de Beyond Traveling: fundado en 2023, administramos casas de lujo en Punta Mita con precios claros y comunicación directa.",
  },
  "/faq": {
    title: "Preguntas Frecuentes | Beyond Traveling Punta Mita",
    description:
      "Preguntas frecuentes de propietarios en Punta Mita sobre precios, disponibilidad, rentas y cómo Beyond Traveling administra propiedades de lujo.",
  },
  "/contact": {
    title: "Contacto | Administración de Propiedades en Punta Mita",
    description:
      "Contacta a Beyond Traveling en Punta Mita: platica sobre la administración de tu casa de lujo o solicita una estancia en una de nuestras villas. Precios claros, sin cargos ocultos.",
  },
  "/contact/owners": {
    title: "Consultas de Propietarios | Administración de Propiedades en Punta Mita",
    description:
      "Habla con un equipo local sobre administración de propiedades de lujo en Punta Mita: cuidado de la casa, atención a huéspedes, resultados de renta, precios claros y sin cargos ocultos.",
  },
  "/contact/agents": {
    title: "Alianzas con Agentes y Asesores de Viaje | Villas en Punta Mita",
    description:
      "Agencias, agentes de viaje y agentes de renta: colabora con Beyond Traveling para llevar huéspedes a nuestras villas en Punta Mita.",
  },
  "/punta-mita-property-management": {
    title: "Administración de Propiedades en Punta Mita",
    description:
      "¿Buscas administración de propiedades en Punta Mita? Conoce cómo cuidamos casas de lujo, rentas y la experiencia del huésped con un enfoque local y cercano.",
  },
  "/villa-management-punta-mita": {
    title: "Administración de Villas en Punta Mita",
    description:
      "Administración profesional de villas en Punta Mita. Nos encargamos del mantenimiento, las rentas y la experiencia del huésped en casas de lujo.",
  },
  "/luxury-rentals-punta-mita": {
    title: "Rentas de Lujo en Punta Mita",
    description:
      "Descubre rentas de lujo en Punta Mita. Beyond Traveling administra villas de alto nivel con experiencia completa para el huésped y apoyo local.",
  },
  "/terms-and-conditions": {
    title: "Términos y Condiciones | Beyond Traveling Punta Mita",
    description:
      "Términos y condiciones para reservar una villa de lujo o trabajar con Beyond Traveling en Punta Mita: proceso de reservación, tarifas, conducta de los huéspedes y responsabilidad.",
  },
  "/cancellation-policy": {
    title: "Política de Cancelación | Beyond Traveling Punta Mita",
    description:
      "Calendario de depósitos, plazos de cancelación, reembolsos y cambios de fecha para reservaciones directas con Beyond Traveling en Punta Mita.",
  },
  "/privacy-policy": {
    title: "Política de Privacidad | Beyond Traveling Punta Mita",
    description:
      "Cómo Beyond Traveling recopila, usa y protege la información que compartes a través de nuestro sitio web, formulario de contacto y WhatsApp.",
  },
};

/** Paths that have an indexable Spanish twin. */
export const ES_INDEXABLE_PATHS = Object.keys(ES_META);

/** English page alternates: self-canonical + hreflang pair when /es exists. */
export function pageAlternates(path: string) {
  if (!ES_META[path]) return { canonical: path };
  return {
    canonical: path,
    languages: { en: path, es: withEs(path), "x-default": path },
  };
}

const withBrand = (title: string) =>
  title.includes(BRAND) ? title : `${title} | ${BRAND}`;

/**
 * Metadata for the /es twin of an English page. Indexable pages get Spanish
 * title/description, a self-canonical and hreflang; everything else is
 * noindex (the interface is translated, but the content is English).
 */
export function esMetadata(path: string, base: Metadata = {}): Metadata {
  const es = ES_META[path];

  if (!es) {
    return { ...base, alternates: undefined, robots: { index: false, follow: true } };
  }

  const title = withBrand(es.title);
  const url = `${SITE}${withEs(path)}`;

  return {
    ...base,
    title: { absolute: title },
    description: es.description,
    alternates: {
      canonical: withEs(path),
      languages: { en: path, es: withEs(path), "x-default": path },
    },
    openGraph: {
      ...(base.openGraph ?? {}),
      title,
      description: es.description,
      url,
      locale: "es_MX",
    } as Metadata["openGraph"],
    twitter: {
      ...(base.twitter ?? {}),
      title,
      description: es.description,
    } as Metadata["twitter"],
  };
}
