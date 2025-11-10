import { MetadataRoute } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
