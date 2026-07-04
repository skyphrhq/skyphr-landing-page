import JsonLd from "@/app/components/JsonLd";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import AboutSection from "@/app/screens/aboutSection";
import FrequentlyAskedQuestions from "@/app/screens/common/frequentlyAskedQuestions";
import OurProcessSection from "@/app/screens/common/ourProcessSection";
import OurServiceSection from "@/app/screens/common/ourServiceSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import HeroSectionElement from "@/app/screens/heroSectionEle";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import {
  compactSchemas,
  generateBreadcrumbSchema,
  generateFaqSchema,
  generateWebPageSchema,
} from "@/app/utils/seo/schema";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// const ClientTestimonial = dynamic(() => import("@/app/screens/common/clientTestimonial"));
const FeaturedWorks = dynamic(() => import("@/app/screens/common/featuredWorks"));

const title =
  typeof HOME_PAGE_DATA.metadata?.title === "string"
    ? HOME_PAGE_DATA.metadata.title
    : "Skyphr | AI, SaaS, and Custom Software Development Company";
const description =
  HOME_PAGE_DATA.metadata?.description ??
  "Skyphr designs and builds scalable digital products, SaaS platforms, AI systems, and modern web applications.";
const path = "/";

export const metadata: Metadata = HOME_PAGE_DATA.metadata
  ? normalizePageMetadata(HOME_PAGE_DATA.metadata, path)
  : { title, description };

export default function Home() {
  const schemas = compactSchemas([
    generateWebPageSchema({ title, description, path }),
    HOME_PAGE_DATA.faq ? generateFaqSchema(HOME_PAGE_DATA.faq.faqsItems) : null,
    generateBreadcrumbSchema([{ name: "Home", path }]),
  ]);

  return (
    <>
      <JsonLd data={schemas} />
      {HOME_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <HeroSectionElement data={HOME_PAGE_DATA.hero} />
        </section>
      )}
      {HOME_PAGE_DATA?.featuredWorks && (
        <section className="w-full h-auto">
          <FeaturedWorks data={HOME_PAGE_DATA.featuredWorks} />
        </section>
      )}

      {HOME_PAGE_DATA?.about && (
        <section className="w-full h-auto">
          <AboutSection data={HOME_PAGE_DATA.about} />
        </section>
      )}
      {HOME_PAGE_DATA?.services && (
        <section className="w-full h-auto">
          <OurServiceSection data={HOME_PAGE_DATA.services} />
        </section>
      )}
      {HOME_PAGE_DATA?.process && (
        <section className="w-full h-auto">
          <OurProcessSection data={HOME_PAGE_DATA.process} />
        </section>
      )}
      {/* {HOME_PAGE_DATA?.testimonials && (
        <section className="w-full h-auto">
          <ClientTestimonial classNames="py-0! md:py-0! xl:py-0!" data={HOME_PAGE_DATA.testimonials} />
        </section>
      )} */}
      {HOME_PAGE_DATA?.faq && (
        <section className="w-full h-auto overflow-hidden">
          <FrequentlyAskedQuestions classNames="py-0! md:py-0! xl:py-0!" data={HOME_PAGE_DATA.faq} />
        </section>
      )}
      {/* {HOME_PAGE_DATA?.ourInsights && (
        <section className="w-full h-auto overflow-hidden">
          <OurInsightsSection data={HOME_PAGE_DATA.ourInsights} />
        </section>
      )} */}
      {HOME_PAGE_DATA?.readyToScale && (
        <section className="w-full h-auto overflow-hidden">
          <ReadyToScaleSection data={HOME_PAGE_DATA.readyToScale} />
        </section>
      )}
      {HOME_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={HOME_PAGE_DATA.contactUs} />
        </section>
      )}
    </>
  );
}
