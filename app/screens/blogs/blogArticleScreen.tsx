import { UIComponent as BlogHero } from "@/app/components/blog/blogHero";
import { UIComponent as BlogsSideBar } from "@/app/components/blog/blogsSideBar";
import { UIComponent as ComparisonTable } from "@/app/components/blog/comparisonTable";
import { UIComponent as FaqSection } from "@/app/components/blog/faqSection";
import { UIComponent as TextSection } from "@/app/components/blog/textSection";
import { BlogArticleScreenInterface } from "@/app/utils/interface/section.interface";
import type { ComponentType } from "react";
import { twMerge } from "tailwind-merge";

type BlogSectionComponent = ComponentType<Record<string, unknown>>;

// Keys are the section `name`s in skyphr-cms-config/blog.config.json, which the CMS saves as each section's `type`.
// Register every new blog block here too, or its sections are skipped on the site.
const BLOG_SECTION_COMPONENTS: Record<string, BlogSectionComponent> = {
  "Blog Hero": BlogHero as unknown as BlogSectionComponent,
  "Text Section": TextSection as unknown as BlogSectionComponent,
  "Comparison Table": ComparisonTable as unknown as BlogSectionComponent,
  "FAQ Section": FaqSection as unknown as BlogSectionComponent,
  "Blogs Sidebar": BlogsSideBar as unknown as BlogSectionComponent,
};

const SIDEBAR_SECTION_TYPES = new Set(["Blogs Sidebar"]);

function BlogArticleScreen({ data, classNames }: BlogArticleScreenInterface) {
  const sections = data.sections.filter((section) => BLOG_SECTION_COMPONENTS[section.type]);
  // The hero always renders full width above the article body, wherever it sits in the CMS order
  const heroSections = sections.filter((section) => section.type === "Blog Hero");

  const restSections = sections.filter((section) => section.type !== "Blog Hero");
  const sidebarSections = restSections.filter((section) => SIDEBAR_SECTION_TYPES.has(section.type));
  const bodySections = restSections.filter((section) => !SIDEBAR_SECTION_TYPES.has(section.type));

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
