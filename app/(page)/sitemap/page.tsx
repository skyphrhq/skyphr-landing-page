import JsonLd from "@/app/components/JsonLd";
import CTAButton from "@/app/components/common/ctaButton";
import { EXTRA_PAGE_LINKS_DATA, NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { GET_SORTED_BLOG_POSTS } from "@/app/content/pageContent/pageData/blog";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import ContactUsSection from "@/app/screens/contactUsSection";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title = "Sitemap | Skyphr Website Pages & Resources";
const description =
  "Browse the Skyphr sitemap to quickly access our services, solutions, company information, resources, and important website pages in one convenient location.";
const path = "/sitemap";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  image: "/og-image/sitemap.png",
});

type SitemapLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

type SitemapSubGroup = {
  title: string;
  links: SitemapLink[];
};

type SitemapGroup = {
  title: string;
  links: SitemapLink[];
  subGroups?: SitemapSubGroup[];
};

// Main listing page first, then every dropdown column as its own sub group
// Entries with isLink: false are dropdown triggers/column titles, not pages, so they are skipped
const getDropDownGroup = (id: string, title: string): SitemapGroup => {
  const page = NAVBAR_LINKS_DATA.find((item) => item.id === id);
  return {
    title,
    links: page?.isLink ? [{ label: page.label, href: page.href, target: page.target }] : [],
    subGroups:
      page?.dropDown.map((category) => ({
        title: category.label,
        links: category.dropDown.filter((link) => link.isLink),
      })) ?? [],
  };
};

const sitemapGroups: SitemapGroup[] = [
  {
    title: "Company Pages",
    links: [
      ...NAVBAR_LINKS_DATA.filter((page) => page.dropDown.length == 0).filter((page) => page.id !== "sitemap"),
      ...EXTRA_PAGE_LINKS_DATA,
    ].filter((page) => page.isLink),
  },
  {
    title: "Product Pages",
    links: NAVBAR_LINKS_DATA.map((page) => (page.id === "our-products" ? page.dropDown : []))
      .flat()
      .filter((page) => page.isLink),
  },
  getDropDownGroup("services", "Services Pages"),
  getDropDownGroup("hire", "Hire Pages"),
  {
    title: "Blog Posts",
    links: GET_SORTED_BLOG_POSTS().map((post) => ({ label: post.listing.title, href: `/blog/${post.slug}` })),
  },
];

export default function SitemapPage() {
  return (
    <main className="w-full bg-(--root-white-color)">
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Sitemap", path },
          ]),
        ]}
      />
      <section className="w-full px-4 pt-30 pb-12 md:pt-42 md:pb-16 xl:pt-55 xl:pb-20">
        <div className="skyphr-container px-0!">
          <div className="max-w-4xl">
            <h1 className="pt-4 font-instrument-sans text-4xl font-bold tracking-tight text-(--text-main-color) md:text-5xl xl:text-6xl">
              Explore every <span className="font-playfair-display italic font-semibold">Skyphr</span> page
            </h1>
            <p className="max-w-2xl pt-5 font-instrument-sans text-base font-medium leading-7 text-(--text-secondary-color) md:text-lg">
              Browse the complete website structure, including company pages, products, service pages, hire pages, and blog posts.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-20 md:pb-28">
        <div className="skyphr-container px-0!">
          <div className="flex flex-col gap-16 md:gap-20">
            {sitemapGroups.map((group) => (
              <section key={group.title}>
                <h2 className="font-instrument-sans text-3xl font-bold text-(--text-main-color) md:text-4xl">
                  {group.title}
                </h2>

                {group.links.length > 0 && (
                  <ul className="flex flex-wrap gap-3 pt-7 md:gap-4">
                    {group.links.map((link) => (
                      <li key={`${group.title}-${link.href}-${link.label}`}>
                        <CTAButton btnStyle="CTA_SECONDARY" className="pr-15!" theme="LIGHT" href={link.href} target={link.target}>
                          {link.label}
                        </CTAButton>
                      </li>
                    ))}
                  </ul>
                )}

                {group.subGroups?.filter((subGroup) => subGroup.links.length > 0).map((subGroup) => (
                  <div key={`${group.title}-${subGroup.title}`} className="pt-10">
                    <h3 className="font-instrument-sans text-xl font-semibold text-(--text-main-color) md:text-2xl">
                      {subGroup.title}
                    </h3>
                    <ul className="flex flex-wrap gap-3 pt-5 md:gap-4">
                      {subGroup.links.map((link) => (
                        <li key={`${subGroup.title}-${link.href}-${link.label}`}>
                          <CTAButton btnStyle="CTA_SECONDARY" className="pr-15!" theme="LIGHT" href={link.href} target={link.target}>
                            {link.label}
                          </CTAButton>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full h-auto overflow-hidden">
        <ContactUsSection data={COMMON_CONTACT_US_SECTION_DATA} />
      </section>
    </main>
  );
}
