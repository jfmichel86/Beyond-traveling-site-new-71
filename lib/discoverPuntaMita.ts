export const discoverCategories = [
  {
    title: "Ocean & Water Activities",
    slug: "ocean-water-activities",
    image: "/discover-punta-mita/ocean-water-activities.jpg",
    heroImage: "/discover-punta-mita/heroes/ocean-water-activities-hero.jpg",
    description:
      "Boat days, surfing, snorkeling, whale watching, fishing, and ocean adventures around Punta Mita.",
  },
  {
    title: "Luxury & Relaxation",
    slug: "luxury-relaxation",
    image: "/discover-punta-mita/luxury-relaxation.jpg",
    heroImage: "/discover-punta-mita/heroes/luxury-relaxation-hero.jpg",
    description:
      "Private chefs, spa treatments, yoga, tastings, wellness experiences, and relaxed luxury moments.",
  },
  {
    title: "Golf & Sports",
    slug: "golf-sports",
    image: "/discover-punta-mita/golf-sports.jpg",
    heroImage: "/discover-punta-mita/heroes/golf-sports-hero.jpg",
    description:
      "Golf, tennis, pickleball, fitness, hiking, horseback riding, and active experiences.",
  },
  {
    title: "Beach Clubs & Day Clubs",
    slug: "beach-clubs-day-clubs",
    image: "/discover-punta-mita/beach-clubs-day-clubs.jpg",
    heroImage: "/discover-punta-mita/heroes/beach-clubs-day-clubs-hero.jpg",
    description:
      "Beach clubs, ocean clubs, day clubs, and stylish places to spend the day by the water.",
  },
  {
    title: "Nightlife & Parties",
    slug: "nightlife-parties",
    image: "/discover-punta-mita/nightlife-parties.jpg",
    heroImage: "/discover-punta-mita/heroes/nightlife-parties-hero.jpg",
    description:
      "Cocktail bars, rooftop lounges, DJ nights, beach parties, and Puerto Vallarta nightlife.",
  },
  {
    title: "Food & Dining Experiences",
    slug: "food-dining-experiences",
    image: "/discover-punta-mita/food-dining-experiences.jpg",
    heroImage: "/discover-punta-mita/heroes/food-dining-experiences-hero.jpg",
    description:
      "Fine dining, seafood, taco tours, private dining, cooking classes, and local restaurants.",
  },
  {
    title: "Nearby Destinations & Day Trips",
    slug: "nearby-destinations-day-trips",
    image: "/discover-punta-mita/nearby-destinations-day-trips.jpg",
    heroImage: "/discover-punta-mita/heroes/nearby-destinations-day-trips-hero.jpg",
    description:
      "Sayulita, San Pancho, Yelapa, Puerto Vallarta, Marietas Islands, Bucerías, and more.",
  },
  {
    title: "Family-Friendly Activities",
    slug: "family-friendly-activities",
    image: "/discover-punta-mita/family-friendly-activities.jpg",
    heroImage: "/discover-punta-mita/heroes/family-friendly-activities-hero.jpg",
    description:
      "Kid-friendly surf lessons, turtle releases, boat days, nature tours, ziplining, and family fun.",
  },
  {
    title: "Seasonal Experiences",
    slug: "seasonal-experiences",
    image: "/discover-punta-mita/seasonal-experiences.jpg",
    heroImage: "/discover-punta-mita/heroes/seasonal-experiences-hero.jpg",
    description:
      "Whale watching, turtle season, fishing tournaments, holiday events, festivals, and seasonal highlights.",
  },
  {
    title: "High-End / VIP Experiences",
    slug: "high-end-vip-experiences",
    image: "/discover-punta-mita/high-end-vip-experiences.jpg",
    heroImage: "/discover-punta-mita/heroes/high-end-vip-experiences-hero.jpg",
    description:
      "Helicopter tours, VIP tables, private photographers, yacht experiences, and luxury concierge moments.",
  },
];

export function getDiscoverCategoryBySlug(slug: string) {
  return discoverCategories.find((category) => category.slug === slug);
}
