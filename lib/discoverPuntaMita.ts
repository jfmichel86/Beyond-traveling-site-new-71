export const discoverCategories = [
  {
    title: "Ocean & Water Activities",
    slug: "ocean-water-activities",
    image: "/discover-punta-mita/ocean-water-activities.jpg",
    heroImage: "/discover-punta-mita/heroes/ocean-water-activities-hero.jpg",
    description:
      "Boat days, surfing, snorkeling, whale watching, fishing, and ocean adventures around Punta Mita.",
    activities: [
      {
        title: "Private Yacht Charters",
        slug: "private-yacht-charters",
        image: "/discover-punta-mita/activities/private-yacht-charters.jpg",
        description:
          "A private ocean experience with space to relax, swim, explore the coast, and enjoy Punta Mita from the water.",
        priceRange: "$$$$",
        bestTime: "Morning or sunset",
        duration: "3 to 6 hours",
        location: "Punta de Mita, La Cruz Marina, or nearby marinas",
        whatToWear:
          "Swimwear, hat, sunglasses, sandals, and light cover-up",
        goodFor: "Families, couples, groups, celebrations",
        seasonality: "Year-round",
        overview:
          "Private yacht charters are one of the most memorable ways to experience Punta Mita. Guests can enjoy the coastline, hidden beaches, snorkeling areas, seasonal wildlife, and a relaxed day on the water.",
        whatToExpect:
          "Most yacht experiences include cruising, swimming stops, optional snorkeling, drinks, snacks, and time to relax on board.",
        whatToBring:
          "Bring sunscreen, swimwear, sunglasses, a hat, a towel, and a light layer for the return ride.",
        gallery: [
          "/discover-punta-mita/activities/private-yacht-charters.jpg",
          "/discover-punta-mita/activities/private-yacht-charters-2.jpg",
          "/discover-punta-mita/activities/private-yacht-charters-3.jpg",
        ],
      },
    ],
  },

  {
    title: "Luxury & Relaxation",
    slug: "luxury-relaxation",
    image: "/discover-punta-mita/luxury-relaxation.jpg",
    heroImage: "/discover-punta-mita/heroes/luxury-relaxation-hero.jpg",
    description:
      "Private chefs, spa treatments, yoga, tastings, wellness experiences, and relaxed luxury moments.",
    activities: [],
  },

  {
    title: "Golf & Sports",
    slug: "golf-sports",
    image: "/discover-punta-mita/golf-sports.jpg",
    heroImage: "/discover-punta-mita/heroes/golf-sports-hero.jpg",
    description:
      "Golf, tennis, pickleball, fitness, hiking, horseback riding, and active experiences.",
    activities: [],
  },

  {
    title: "Beach Clubs & Day Clubs",
    slug: "beach-clubs-day-clubs",
    image: "/discover-punta-mita/beach-clubs-day-clubs.jpg",
    heroImage:
      "/discover-punta-mita/heroes/beach-clubs-day-clubs-hero.jpg",
    description:
      "Beach clubs, ocean clubs, day clubs, and stylish places to spend the day by the water.",
    activities: [],
  },

  {
    title: "Nightlife & Parties",
    slug: "nightlife-parties",
    image: "/discover-punta-mita/nightlife-parties.jpg",
    heroImage: "/discover-punta-mita/heroes/nightlife-parties-hero.jpg",
    description:
      "Cocktail bars, rooftop lounges, DJ nights, beach parties, and Puerto Vallarta nightlife.",
    activities: [],
  },

  {
    title: "Food & Dining Experiences",
    slug: "food-dining-experiences",
    image: "/discover-punta-mita/food-dining-experiences.jpg",
    heroImage:
      "/discover-punta-mita/heroes/food-dining-experiences-hero.jpg",
    description:
      "Fine dining, seafood, taco tours, private dining, cooking classes, and local restaurants.",
    activities: [],
  },

  {
    title: "Nearby Destinations & Day Trips",
    slug: "nearby-destinations-day-trips",
    image:
      "/discover-punta-mita/nearby-destinations-day-trips.jpg",
    heroImage:
      "/discover-punta-mita/heroes/nearby-destinations-day-trips-hero.jpg",
    description:
      "Sayulita, San Pancho, Yelapa, Puerto Vallarta, Marietas Islands, Bucerías, and more.",
    activities: [],
  },

  {
    title: "Family-Friendly Activities",
    slug: "family-friendly-activities",
    image: "/discover-punta-mita/family-friendly-activities.jpg",
    heroImage:
      "/discover-punta-mita/heroes/family-friendly-activities-hero.jpg",
    description:
      "Kid-friendly surf lessons, turtle releases, boat days, nature tours, ziplining, and family fun.",
    activities: [],
  },

  {
    title: "Seasonal Experiences",
    slug: "seasonal-experiences",
    image: "/discover-punta-mita/seasonal-experiences.jpg",
    heroImage:
      "/discover-punta-mita/heroes/seasonal-experiences-hero.jpg",
    description:
      "Whale watching, turtle season, fishing tournaments, holiday events, festivals, and seasonal highlights.",
    activities: [],
  },

  {
    title: "High-End / VIP Experiences",
    slug: "high-end-vip-experiences",
    image: "/discover-punta-mita/high-end-vip-experiences.jpg",
    heroImage:
      "/discover-punta-mita/heroes/high-end-vip-experiences-hero.jpg",
    description:
      "Helicopter tours, VIP tables, private photographers, yacht experiences, and luxury concierge moments.",
    activities: [],
  },
];

export function getDiscoverCategoryBySlug(slug: string) {
  return discoverCategories.find((category) => category.slug === slug);
}

export function getActivityBySlug(
  categorySlug: string,
  activitySlug: string
) {
  const category = getDiscoverCategoryBySlug(categorySlug);

  return category?.activities.find(
    (activity) => activity.slug === activitySlug
  );
}
