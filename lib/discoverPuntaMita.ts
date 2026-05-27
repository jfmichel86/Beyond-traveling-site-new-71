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
        whatToWear: "Swimwear, hat, sunglasses, sandals, and light cover-up",
        goodFor: "Families, couples, groups, celebrations",
        seasonality: "Year-round",
        overview:
          "Private yacht charters are one of the most memorable ways to experience Punta Mita. Guests can enjoy the coastline, hidden beaches, snorkeling areas, seasonal wildlife, and a relaxed day on the water.",
        whatToExpect:
          "Most yacht experiences include cruising, swimming stops, optional snorkeling, drinks, snacks, and time to relax on board. The route depends on weather, sea conditions, and the length of the charter.",
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
];

export function getDiscoverCategoryBySlug(slug: string) {
  return discoverCategories.find((category) => category.slug === slug);
}

export function getActivityBySlug(categorySlug: string, activitySlug: string) {
  const category = getDiscoverCategoryBySlug(categorySlug);
  return category?.activities.find((activity) => activity.slug === activitySlug);
}
