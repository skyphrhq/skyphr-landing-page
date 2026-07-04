import JsonLd from "@/app/components/JsonLd";
import { ABOUT_US_PAGE_DATA } from "@/app/content/pageContent/pageData/aboutUs.data";
import AboutSection from "@/app/screens/aboutSection";
import AboutUsSectionHeroElem from "@/app/screens/aboutUsSectionHero";
import OurTeamSection from "@/app/screens/common/ourTeamSection";
import OurValuesSection from "@/app/screens/common/ourValuesSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// const ClientTestimonial = dynamic(() => import("@/app/screens/common/clientTestimonial"));
const FeaturedWorks = dynamic(() => import("@/app/screens/common/featuredWorks"));

const title =
  typeof ABOUT_US_PAGE_DATA.metadata?.title === "string"
    ? ABOUT_US_PAGE_DATA.metadata.title
    : "About Skyphr | AI, SaaS & Digital Product Development Company";
const description =
  ABOUT_US_PAGE_DATA.metadata?.description ??
  "Learn about Skyphr, a global design and development company helping startups and businesses build AI solutions, SaaS platforms, custom software, and digital experiences.";
const path = "/about-us";

export const metadata: Metadata = ABOUT_US_PAGE_DATA.metadata
  ? normalizePageMetadata(ABOUT_US_PAGE_DATA.metadata, path)
  : { title, description };

function AboutUsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path },
          ]),
        ]}
      />
      {ABOUT_US_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <AboutUsSectionHeroElem data={ABOUT_US_PAGE_DATA.hero} />
        </section>
      )}
      {ABOUT_US_PAGE_DATA?.about && (
        <section className="w-full h-auto overflow-hidden">
          <AboutSection classNames="pb-0! md:pb-0! xl:pb-0!" data={ABOUT_US_PAGE_DATA.about} />
        </section>
      )}
      {ABOUT_US_PAGE_DATA?.ourValues && (
        <section className="w-full h-auto overflow-hidden">
          <OurValuesSection data={ABOUT_US_PAGE_DATA.ourValues} />
        </section>
      )}
      {ABOUT_US_PAGE_DATA?.featuredWorks && (
        <section className="w-full h-auto">
          <FeaturedWorks data={ABOUT_US_PAGE_DATA.featuredWorks} />
        </section>
      )}
      {/* {ABOUT_US_PAGE_DATA?.testimonials && (
        <section className="w-full h-auto">
          <ClientTestimonial data={ABOUT_US_PAGE_DATA.testimonials} />
        </section>
      )} */}
      {ABOUT_US_PAGE_DATA?.ourTeam && (
        <section className="w-full h-auto overflow-hidden">
          <OurTeamSection data={ABOUT_US_PAGE_DATA.ourTeam} />
        </section>
      )}
      {ABOUT_US_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={ABOUT_US_PAGE_DATA.contactUs} />
        </section>
      )}
    </>
  );
}

export default AboutUsPage;
