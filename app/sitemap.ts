import { NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { GET_SORTED_BLOG_POSTS } from "@/app/content/pageContent/pageData/blog";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import type { NavbarLinksInterface } from "@/app/utils/interface/data.interface";
import type { MetadataRoute } from "next";

const siteUrl = SITE_BASE_URL;

// Indexable pages that aren't in the header navigation, so NAVBAR_LINKS_DATA doesn't cover them
const EXTRA_SITEMAP_PAGES: MetadataRoute.Sitemap = [
  {
    url: `${siteUrl}/sky-ai`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${siteUrl}/ai-voice-agent`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

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
    ...EXTRA_SITEMAP_PAGES,
    ...BLOG_POST_SITEMAP_PAGES,
  ];
}
