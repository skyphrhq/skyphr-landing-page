import JsonLd from "@/app/components/JsonLd";
import { getServicePageData, SERVICE_PAGE_DATA_BY_SLUG } from "@/app/content/pageContent/pageData/service";
import DevelopmentProcessSection from "@/app/screens/common/developmentProcessSection";
import FeaturesIncludeSection from "@/app/screens/common/featuresIncludeSection";
import FrequentlyAskedQuestions from "@/app/screens/common/frequentlyAskedQuestions";
import OurApproachSection from "@/app/screens/common/ourApproachSec";
import OurValuesSection from "@/app/screens/common/ourValuesSection";
import TechnologyStackSection from "@/app/screens/common/technologyStackSection";
import UseCaseSection from "@/app/screens/common/useCaseSection";
import WhatWeBuildSection from "@/app/screens/common/whatWeBuildSection";
import WhyChooseSection from "@/app/screens/common/whyChooseSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";
import ServicesSectionHero from "@/app/screens/servicesSectionHero";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { compactSchemas, generateBreadcrumbSchema, generateFaqSchema, generateServiceSchema } from "@/app/utils/seo/schema";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type HireFromSkyphrProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGE_DATA_BY_SLUG).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: HireFromSkyphrProps): Promise<Metadata> {
  const { slug } = await params;
  const hirePageData = getServicePageData(slug);

  if (!hirePageData) {
    notFound();
  }

  return hirePageData.metadata ? normalizePageMetadata(hirePageData.metadata, `/services/${slug}`) : {};
}

async function ServicesPage({ params }: HireFromSkyphrProps) {
  const { slug } = await params;
  const servicePageData = getServicePageData(slug);

  if (!servicePageData) {
    notFound();
  }

  const metadataTitle = typeof servicePageData.metadata?.title === "string" ? servicePageData.metadata.title : "Skyphr Service";
  const metadataDescription = servicePageData.metadata?.description ?? "";
  const schemas = compactSchemas([
    generateServiceSchema({
      name: metadataTitle,
      description: metadataDescription,
      path: `/services/${slug}`,
    }),
    servicePageData.faq ? generateFaqSchema(servicePageData.faq.faqsItems) : null,
    generateBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: metadataTitle.replace(/\s\|\sSkyphr$/, ""), path: `/services/${slug}` },
    ]),
  ]);

  return (
    <>
      {schemas.length > 0 && <JsonLd data={schemas} />}
      {servicePageData.hero && (
        <section className="w-full h-auto">
          <ServicesSectionHero data={servicePageData.hero} />
        </section>
      )}
      {servicePageData.whatWeBuild && <WhatWeBuildSection data={servicePageData.whatWeBuild} />}
      {servicePageData.featuresInclude && (
        <FeaturesIncludeSection data={servicePageData.featuresInclude} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}
      {servicePageData.useCase && (
        <UseCaseSection data={servicePageData.useCase} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}
      {servicePageData.technologyStack && (
        <TechnologyStackSection data={servicePageData.technologyStack} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}

      {servicePageData.developmentProcess && (
        <DevelopmentProcessSection classNames="pb-0! md:pb-0! xl:pb-0!" data={servicePageData.developmentProcess} />
      )}

      {servicePageData.ourApproach && (
        <section className="w-full h-auto">
          <OurApproachSection classNames="pb-0! md:pb-0! xl:pb-0!" data={servicePageData.ourApproach} />
        </section>
      )}
      {servicePageData.ourValues && (
        <section className="w-full h-auto">
          <OurValuesSection data={servicePageData.ourValues} classNames="pb-0! md:pb-0! xl:pb-0!" />
        </section>
      )}
      {servicePageData.whyChoose && (
        <WhyChooseSection data={servicePageData.whyChoose} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}
      {servicePageData?.faq && (
        <section className="w-full h-auto overflow-hidden">
          <FrequentlyAskedQuestions data={servicePageData.faq} classNames="pb-0! md:pb-0! xl:pb-0!" />
        </section>
      )}
      {servicePageData.readyToScale && (
        <section>
          <ReadyToScaleSection data={servicePageData.readyToScale} />
        </section>
      )}
      {servicePageData.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={servicePageData.contactUs} />
        </section>
      )}
    </>
  );
}

export default ServicesPage;
