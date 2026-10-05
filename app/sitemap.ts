import { EXTRA_PAGE_LINKS_DATA, NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { GET_SORTED_BLOG_POSTS } from "@/app/content/pageContent/pageData/blog";
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

  // External links (e.g. SkyLens on its own subdomain) don't belong in this site's sitemap
  if (page.isLink && page.href.startsWith("/")) {
    entries.push(createSiteMapEntry(page));
  }

  return [...entries, ...page.dropDown.flatMap((subPage) => generateSiteMapEntries(subPage))];
};

// One entry per post saved by the CMS in data/blogs/, dated by its publish date
const BLOG_POST_SITEMAP_PAGES: MetadataRoute.Sitemap = GET_SORTED_BLOG_POSTS().map((post) => ({
  url: `${siteUrl}/blog/${post.slug}`,
  lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  changeFrequency: "monthly",
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...NAVBAR_LINKS_DATA.flatMap((page) => generateSiteMapEntries(page)),
    ...EXTRA_PAGE_LINKS_DATA.flatMap((page) => generateSiteMapEntries(page)),
    ...BLOG_POST_SITEMAP_PAGES,
  ];
}
