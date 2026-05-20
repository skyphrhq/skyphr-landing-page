import { SEO_PAGE_LINKS } from "@/app/data/seoPages.data";
import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://skyphr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return SEO_PAGE_LINKS.map((page) => ({
    url: `${siteUrl}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
    changeFrequency: page.contentType === "Hire Page" ? "weekly" : "monthly",
    priority: page.href === "/" ? 1 : page.contentType === "Hire Page" || page.href === "/hire" ? 0.8 : 0.7,
  }));
}
