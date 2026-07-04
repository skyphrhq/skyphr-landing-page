import JsonLd from "@/app/components/JsonLd";
import { NEXTJS_MODERN_BUSINESSES_BLOG_DATA } from "@/app/content/pageContent/pageData/blog/nextjs-modern-businesses.data";
import BlogArticleScreen from "@/app/screens/blogs/blogArticleScreen";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const blog = NEXTJS_MODERN_BUSINESSES_BLOG_DATA;
const title = `${blog.hero.title} | Skyphr`;
const description = blog.hero.excerpt;
const path = "/blog";
const image = "/og-image/hire-nextjs-developers.png";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  image,
  type: "article",
});

function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          generateArticleSchema({
            title,
            description,
            path,
            authorName: blog.hero.authorName,
            publishedAt: "2025-06-18",
            image,
          }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path },
          ]),
        ]}
      />
      <BlogArticleScreen />
    </>
  );
}

export default BlogPage;
