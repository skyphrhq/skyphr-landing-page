import { UIComponent as ArticleIntro } from "@/app/components/blog/articleIntro";
import { UIComponent as AuthorCard } from "@/app/components/blog/authorCard";
import { UIComponent as BlogHero } from "@/app/components/blog/blogHero";
import { UIComponent as BlogsSideBar } from "@/app/components/blog/blogsSideBar";
import { UIComponent as FeaturedVisual } from "@/app/components/blog/featuredVisual";
import { UIComponent as QuoteBlock } from "@/app/components/blog/quoteBlock";
import { UIComponent as TextSection } from "@/app/components/blog/textSection";
import { BlogArticleScreenInterface } from "@/app/utils/interface/section.interface";
import type { ComponentType } from "react";
import { twMerge } from "tailwind-merge";

type BlogSectionComponent = ComponentType<Record<string, unknown>>;

// Keys are the section `name`s in skyphr-cms-config/blog.config.json, which the CMS saves as each section's `type`.
// Register every new blog block here too, or its sections are skipped on the site.
const BLOG_SECTION_COMPONENTS: Record<string, BlogSectionComponent> = {
  "Blog Hero": BlogHero as unknown as BlogSectionComponent,
  "Featured Visual": FeaturedVisual as unknown as BlogSectionComponent,
  "Article Intro": ArticleIntro as unknown as BlogSectionComponent,
  "Text Section": TextSection as unknown as BlogSectionComponent,
  "Quote Block": QuoteBlock as unknown as BlogSectionComponent,
  "Author Card": AuthorCard as unknown as BlogSectionComponent,
  "Blogs Sidebar": BlogsSideBar as unknown as BlogSectionComponent,
};

// These render full width above the article body when they lead the post
const FULL_WIDTH_SECTION_TYPES = new Set(["Blog Hero", "Featured Visual"]);
const SIDEBAR_SECTION_TYPES = new Set(["Blogs Sidebar"]);

function BlogArticleScreen({ data, classNames }: BlogArticleScreenInterface) {
  const sections = data.sections.filter((section) => BLOG_SECTION_COMPONENTS[section.type]);
  const heroSections = sections.filter((section) => section.type === "Blog Hero");

  const remainingSection = sections.filter((section) => section.type !== "Blog Hero");

  // Index into remainingSection itself: an index from `sections` is off by one once the hero is removed,
  // which sliced away the section right after it (e.g. the Blogs Sidebar)
  const firstBodyIndex = remainingSection.findIndex((section) => !FULL_WIDTH_SECTION_TYPES.has(section.type));
  // Leading full-width sections other than the hero (e.g. Featured Visual) render above the body
  const topSections = firstBodyIndex === -1 ? remainingSection : remainingSection.slice(0, firstBodyIndex);
  const restSections = firstBodyIndex === -1 ? [] : remainingSection.slice(firstBodyIndex);
  const sidebarSections = restSections.filter((section) => section.type === "Blogs Sidebar");
  const bodySections = restSections.filter((section) => !SIDEBAR_SECTION_TYPES.has(section.type));
  // Every post needs an <h1>: without a Blog Hero section, build one from the listing data

  const renderSection = (section: (typeof sections)[number], index: number) => {
    const Section = BLOG_SECTION_COMPONENTS[section.type];
    return <Section key={`${section.type}-${index}`} {...section.data} />;
  };

  return (
    <main
      className={twMerge(
        "skyphr-container bg-(--root-white-color) font-instrument-sans text-(--text-main-color) pb-15 md:pb-20",
        classNames,
      )}>
      {heroSections.map(renderSection)}
      {topSections.map(renderSection)}

      <div>
        {restSections.length > 0 && (
          <div className="flex flex-col-reverse lg:flex-row gap-12 py-12 lg:gap-15 mx-auto w-full xl:max-w-[95%]">
            {sidebarSections.length > 0 && <div className="lg:w-120 xl:w-160">{sidebarSections.map(renderSection)}</div>}
            <div className="w-full space-y-10">{bodySections.map(renderSection)}</div>
          </div>
        )}
      </div>
    </main>
  );
}

export default BlogArticleScreen;
