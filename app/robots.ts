import { MetadataRoute } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://nisarg-portfolio.info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
