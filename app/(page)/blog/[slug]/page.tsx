import JsonLd from "@/app/components/JsonLd";
import { GET_BLOG_SLUGS, getBlogPageData } from "@/app/content/pageContent/pageData/blog";
import BlogArticleScreen from "@/app/screens/blogs/blogArticleScreen";
import { createBlogPostMetadata } from "@/app/utils/seo/metadata";
import { generateBlogPostSchemas } from "@/app/utils/seo/schema";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Only posts saved by the CMS in data/blogs/ exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return GET_BLOG_SLUGS().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogPageData = getBlogPageData(slug);

  if (!blogPageData) {
    notFound();
  }

  return createBlogPostMetadata(blogPageData);
}

async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blogPageData = getBlogPageData(slug);

  if (!blogPageData) {
    notFound();
  }

  return (
    <>
      <JsonLd data={generateBlogPostSchemas(blogPageData)} />
      <BlogArticleScreen data={blogPageData} />
    </>
  );
}

export default BlogDetailPage;
