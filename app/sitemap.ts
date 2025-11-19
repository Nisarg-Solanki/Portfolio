import { MetadataRoute } from "next";

const domain =
  process.env.NEXT_PUBLIC_DOMAIN || "https://nisarg-portfolio.info";

export const revalidate = 60;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
    },
  ];
}
