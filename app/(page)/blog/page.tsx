import JsonLd from "@/app/components/JsonLd";
import { GET_SORTED_BLOG_POSTS } from "@/app/content/pageContent/pageData/blog";
import { BLOG_PAGE_DATA } from "@/app/content/pageContent/pageData/blog.data";
import BlogListingSection from "@/app/screens/blogListingSection";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title =
  typeof BLOG_PAGE_DATA.metadata.title === "string" ? BLOG_PAGE_DATA.metadata.title : "Blog | Skyphr";
const description = BLOG_PAGE_DATA.metadata.description ?? "Insights from the Skyphr team.";
const path = "/blog";

export const metadata: Metadata = normalizePageMetadata(BLOG_PAGE_DATA.metadata, path);

function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path },
          ]),
        ]}
      />
      <section className="w-full h-auto">
        <BlogListingSection data={BLOG_PAGE_DATA.listing} posts={GET_SORTED_BLOG_POSTS()} />
      </section>
    </>
  );
}

export default BlogPage;
