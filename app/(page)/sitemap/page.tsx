import CTAButton from "@/app/components/common/ctaButton";
import { NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import ContactUsSection from "@/app/screens/contactUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Skyphr",
  description: "Explore Skyphr pages, services, hiring pages, and contact links in one place.",
};

type SitemapLink = {
  label: string;
  href: string;
};

type SitemapGroup = {
  title: string;
  links: SitemapLink[];
};

const sitemapGroups: SitemapGroup[] = [
  {
    title: "Company Pages",
    links: NAVBAR_LINKS_DATA.filter((page) => page.dropDown.length == 0).filter((page) => page.id !== "sitemap"),
  },
  {
    title: "Services Pages",
    links: NAVBAR_LINKS_DATA.map((page) => (page.id === "services" ? page.dropDown : [])).flat(),
  },
  {
    title: "Hire Pages",
    links: NAVBAR_LINKS_DATA.map((page) =>
      page.id === "hire" ? page.dropDown.flatMap((category) => category.dropDown) : [],
    ).flat(),
  },
];

export default function SitemapPage() {
  return (
    <main className="w-full bg-(--root-white-color)">
      <section className="w-full px-4 pt-30 pb-12 md:pt-42 md:pb-16 xl:pt-55 xl:pb-20">
        <div className="skyphr-container px-0!">
          <div className="max-w-4xl">
            <h1 className="pt-4 font-instrument-sans text-4xl font-bold tracking-tight text-(--text-main-color) md:text-5xl xl:text-6xl">
              Explore every <span className="font-playfair-display italic font-semibold">Skyphr</span> page
            </h1>
            <p className="max-w-2xl pt-5 font-instrument-sans text-base font-medium leading-7 text-(--text-secondary-color) md:text-lg">
              Browse the complete website structure, including company pages, service pages, and all hire pages.
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

                <ul className="flex flex-wrap gap-3 pt-7 md:gap-4">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}-${link.label}`}>
                      <CTAButton btnStyle="CTA_SECONDARY" className="pr-15!" theme="LIGHT" href={link.href}>
                        {link.label}
                      </CTAButton>
                    </li>
                  ))}
                </ul>
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
