export const activities = [
  {
    title: "Surfing",
    slug: "surfing",
    image: "/discover-punta-mita/surfing.jpg",
    description:
      "Surf lessons and guided sessions for guests who want to enjoy Punta Mita from the water.",
    content:
      "Punta Mita has excellent surf options for different levels, from beginner-friendly lessons to more advanced breaks depending on the season and conditions.",
    gallery: [
      "/discover-punta-mita/surfing.jpg",
      "/discover-punta-mita/surfing-2.jpg",
      "/discover-punta-mita/surfing-3.jpg",
    ],
  },
  {
    title: "Golf",
    slug: "golf",
    image: "/discover-punta-mita/golf.jpg",
    description:
      "World-class golf, ocean views, and some of the most beautiful courses in the region.",
    content:
      "Golf is one of Punta Mita’s signature experiences, with exceptional courses, oceanfront holes, and a relaxed luxury setting.",
    gallery: [
      "/discover-punta-mita/golf.jpg",
      "/discover-punta-mita/golf-2.jpg",
      "/discover-punta-mita/golf-3.jpg",
    ],
  },
  {
    title: "Private Boat Trips",
    slug: "private-boat-trips",
    image: "/discover-punta-mita/private-boat-trips.jpg",
    description:
      "Explore the coast, hidden beaches, and nearby ocean experiences by private boat.",
    content:
      "Private boat trips are one of the best ways to experience the coastline around Punta Mita, with options for relaxed cruising, snorkeling, beach stops, and seasonal marine life.",
    gallery: [
      "/discover-punta-mita/private-boat-trips.jpg",
      "/discover-punta-mita/private-boat-trips-2.jpg",
      "/discover-punta-mita/private-boat-trips-3.jpg",
    ],
  },
];

export function getActivityBySlug(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}
