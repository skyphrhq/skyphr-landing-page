// Server-only (reads the file system). Pages, sitemap and metadata call these; client components get posts as props.
import { BlogCmsPost, BlogPostData } from "@/app/utils/interface/data.interface";
import { existsSync, readdirSync, readFileSync } from "fs";
import path from "path";

// Must match `outDir` in skyphr-cms-config/blog.config.json: the JSON files the CMS saves there are the single source
// of truth. Kept as a literal path so Next only traces data/blogs, not the whole project.
const BLOG_CONTENT_DIR = path.join(process.cwd(), "data", "blogs");
const PUBLIC_DIR_PREFIX = "./public";

// The CMS stores image urls as file paths ("./public/blog/images/x.webp"); the site serves them from "/blog/images/x.webp"
const CmsAssetUrlReviver = (key: string, value: unknown) =>
  key === "url" && typeof value === "string" && value.startsWith(`${PUBLIC_DIR_PREFIX}/`)
    ? value.slice(PUBLIC_DIR_PREFIX.length)
    : value;

// Falls back to the BlogPosting datePublished inside the CMS-written JSON-LD when listing.date is empty
const GetSchemaPublishedAt = (post: BlogCmsPost): string => {
  const graph = post.seo.schema?.data?.["@graph"];
  if (!Array.isArray(graph)) return "";

  const blogPosting = graph.find((item) => item?.["@type"] === "BlogPosting");
  return typeof blogPosting?.datePublished === "string" ? blogPosting.datePublished : "";
};

const READ_BLOG_POSTS = (): BlogPostData[] => {
  if (!existsSync(BLOG_CONTENT_DIR)) return [];

  return readdirSync(BLOG_CONTENT_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const post: BlogCmsPost = JSON.parse(readFileSync(path.join(BLOG_CONTENT_DIR, file), "utf-8"), CmsAssetUrlReviver);

      return {
        ...post,
        sections: post.sections ?? [],
        slug: file.replace(/\.json$/, ""),
        publishedAt: post.listing.date || GetSchemaPublishedAt(post),
      };
    });
};

// Newest first; posts without a date go last
export const GET_SORTED_BLOG_POSTS = (): BlogPostData[] =>
  READ_BLOG_POSTS().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const GET_BLOG_SLUGS = (): string[] => READ_BLOG_POSTS().map((post) => post.slug);

export const getBlogPageData = (slug: string): BlogPostData | undefined =>
  READ_BLOG_POSTS().find((post) => post.slug === slug);
