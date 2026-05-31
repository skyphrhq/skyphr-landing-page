import { NAVBAR_LINKS_DATA } from "@/app/data/navbar.data";
import type { NavbarLinksInterface } from "@/app/utils/interface/data.interface";
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

const createSiteMapEntry = (page: NavbarLinksInterface): MetadataRoute.Sitemap[number] => {
  return {
    url: `${siteUrl}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href.startsWith("/hire") ? "weekly" : "monthly",
    priority: page.priority,
  };
};

const generateSiteMapEntries = (page: NavbarLinksInterface): MetadataRoute.Sitemap => {
  const entries: MetadataRoute.Sitemap = [];

  if (page.isLink) {
    entries.push(createSiteMapEntry(page));
  }

  return [...entries, ...page.dropDown.flatMap((subPage) => generateSiteMapEntries(subPage))];
};

export default function sitemap(): MetadataRoute.Sitemap {
  return NAVBAR_LINKS_DATA.flatMap((page) => generateSiteMapEntries(page));
}
