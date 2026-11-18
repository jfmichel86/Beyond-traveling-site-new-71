// Spanish twin of the arrival form — same page, /es URL.
import Page from "@/app/arrival/[code]/page";

export default Page;
export const dynamic = "force-dynamic";
export const metadata = {
  title: { absolute: "Guía de Llegada | Beyond Traveling" },
  description: "Cuéntanos sobre tu grupo, vuelos, comidas y planes para preparar tu estancia en Punta Mita.",
  robots: { index: false, follow: false },
};
