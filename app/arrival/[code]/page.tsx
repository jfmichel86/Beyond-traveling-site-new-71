import React from "react";
import { notFound } from "next/navigation";
import ArrivalForm, { type MenuOptions, type Option } from "./ArrivalForm";
import { DEMO_RESERVATION, type Reservation } from "@/lib/arrival";
import { conciergeReady, getReservation } from "@/lib/concierge";
import { villaDiningCategories } from "@/lib/villaDiningMenu";
import { discoverCategories } from "@/lib/discoverPuntaMita";

// Private, per-reservation page. Never cached, never indexed.
export const dynamic = "force-dynamic";

export const metadata = {
  title: { absolute: "Arrival Guide | Beyond Traveling" },
  description: "Tell us about your group, flights, meals and plans so we can prepare your stay in Punta Mita.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your Arrival Guide | Beyond Traveling",
    description: "A few short steps so we can prepare everything for your arrival in Punta Mita.",
    images: [{ url: "/groceries/groceries-preview.jpg", width: 1200, height: 630 }],
  },
};

const dishes = (catSlug: string, subSlugs?: string[]): Option[] => {
  const cat = villaDiningCategories.find((c) => c.slug === catSlug);
  if (!cat) return [];
  return cat.subcategories
    .filter((s) => !subSlugs || subSlugs.includes(s.slug))
    .flatMap((s) => s.dishes.map((d) => ({ value: d.title, label: d.title, group: s.title, img: d.images?.[0] })));
};

function menuOptions(): MenuOptions {
  const kids = dishes("childrens-favorites");
  const seen = new Set<string>();
  const unique = (list: Option[]) => list.filter((o) => (seen.has(o.value) ? false : (seen.add(o.value), true)));
  const lunch = unique([...dishes("lunch"), ...kids, ...dishes("desserts")]);
  seen.clear();
  const dinner = unique([...dishes("private-dinner-at-home"), ...kids, ...dishes("desserts")]);
  return {
    savory: dishes("breakfast", ["savory-breakfast-options"]),
    sweet: dishes("breakfast", ["sweet-breakfast-options"]),
    lunch,
    dinner,
    discover: discoverCategories.map((c) => ({
      slug: c.slug,
      title: c.title,
      image: c.image,
      activities: c.activities.map((act) => ({
        slug: act.slug,
        title: act.title,
        image: act.image,
        options: act.experienceOptions.map((o) => o.title),
      })),
    })),
  };
}

export default async function ArrivalPage({ params }: { params: { code: string } }) {
  let reservation: Reservation | null = null;
  if (params.code === "demo") reservation = DEMO_RESERVATION;
  else if (conciergeReady()) reservation = await getReservation(params.code).catch(() => null);
  if (!reservation) notFound();

  return (
    <div translate="no" className="min-h-screen bg-bt-cream/40">
      <ArrivalForm reservation={reservation} menus={menuOptions()} />
    </div>
  );
}
