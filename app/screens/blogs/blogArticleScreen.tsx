import { UIComponent as ArticleIntro } from "@/app/components/blog/articleIntro";
import { UIComponent as AuthorCard } from "@/app/components/blog/authorCard";
import { UIComponent as BlogHero } from "@/app/components/blog/blogHero";
import { UIComponent as BlogsSideBar } from "@/app/components/blog/blogsSideBar";
import { UIComponent as FeaturedVisual } from "@/app/components/blog/featuredVisual";
import { UIComponent as QuoteBlock } from "@/app/components/blog/quoteBlock";
import { UIComponent as TextSection } from "@/app/components/blog/textSection";
import { NEXTJS_MODERN_BUSINESSES_BLOG_DATA } from "@/app/content/pageContent/pageData/blog/nextjs-modern-businesses.data";

function BlogArticleScreen() {
  const blog = NEXTJS_MODERN_BUSINESSES_BLOG_DATA;

  return (
    <main className="skyphr-container bg-(--root-white-color) font-instrument-sans text-(--text-main-color)">
      <BlogHero {...blog.hero} />
      <FeaturedVisual {...blog.featuredVisual} />
      <div className="flex flex-col-reverse lg:flex-row gap-12 py-12 lg:gap-20 mx-auto w-full xl:max-w-[95%]">
        <div className="lg:min-w-80">
          <BlogsSideBar
            tags={blog.intro.tags}
            newsletterTitle={blog.intro.newsletterTitle}
            newsletterDescription={blog.intro.newsletterDescription}
          />
        </div>
        <div className="w-full space-y-10">
          <ArticleIntro {...blog.intro} />

          {blog.sections.map((section) => (
            <TextSection key={section.heading} {...section} />
          ))}
          <QuoteBlock {...blog.quote} />
          <AuthorCard {...blog.author} />
        </div>
      </div>
    </main>
  );
}

export default BlogArticleScreen;
