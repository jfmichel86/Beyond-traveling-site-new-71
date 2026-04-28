import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.beyondtravelingmx.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.beyondtravelingmx.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.beyondtravelingmx.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.beyondtravelingmx.com/contact",
      lastModified: new Date(),
    },
  ];
}
