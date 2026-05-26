import BlogArticleScreen from "@/app/screens/blogs/blogArticleScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Next.js is the Right Choice for Modern Businesses in 2025 | Skyphr",
  description: "A Skyphr blog article about why Next.js is a strong choice for modern business web apps.",
};

function BlogPage() {
  return <BlogArticleScreen />;
}

export default BlogPage;
