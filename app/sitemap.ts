import { NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import type { NavbarLinksInterface } from "@/app/utils/interface/data.interface";
import type { MetadataRoute } from "next";

const siteUrl = SITE_BASE_URL;

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
