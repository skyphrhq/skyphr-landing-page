import { HIRE_PAGE_DATA_BY_SLUG } from "@/app/data/pageData/hire";
import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://skyphr.com";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${siteUrl}/about-us`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${siteUrl}/services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${siteUrl}/hire`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const hireRoutes: MetadataRoute.Sitemap = Object.keys(HIRE_PAGE_DATA_BY_SLUG).map((slug) => ({
    url: `${siteUrl}/hire/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...hireRoutes];
}
