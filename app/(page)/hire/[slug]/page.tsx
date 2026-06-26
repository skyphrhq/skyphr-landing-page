import { HIRE_PAGE_DATA_BY_SLUG, getHirePageData } from "@/app/content/pageContent/pageData/hire";
import CommonHirePageHeroSection from "@/app/screens/common/commonHirePageHeroSection";
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
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const ClientTestimonial = dynamic(() => import("@/app/screens/common/clientTestimonial"));

type HireFromSkyphrProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(HIRE_PAGE_DATA_BY_SLUG).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: HireFromSkyphrProps): Promise<Metadata> {
  const { slug } = await params;
  const hirePageData = getHirePageData(slug);

  if (!hirePageData) {
    notFound();
  }

  return hirePageData.metadata || {};
}

async function HireFromSkyphr({ params }: HireFromSkyphrProps) {
  const { slug } = await params;
  const hirePageData = getHirePageData(slug);

  if (!hirePageData) {
    notFound();
  }

  return (
    <>
      {hirePageData.hero && (
        <section className="w-full h-auto">
          <CommonHirePageHeroSection data={hirePageData.hero} />
        </section>
      )}
      {hirePageData.whatWeBuild && <WhatWeBuildSection data={hirePageData.whatWeBuild} />}
      {hirePageData.featuresInclude && (
        <FeaturesIncludeSection data={hirePageData.featuresInclude} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}
      {hirePageData.useCase && <UseCaseSection data={hirePageData.useCase} classNames="pb-0! md:pb-0! xl:pb-0!" />}
      {hirePageData.technologyStack && (
        <TechnologyStackSection data={hirePageData.technologyStack} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}

      {hirePageData.developmentProcess && (
        <DevelopmentProcessSection classNames="pb-0! md:pb-0! xl:pb-0!" data={hirePageData.developmentProcess} />
      )}

      {hirePageData.ourApproach && (
        <section className="w-full h-auto">
          <OurApproachSection classNames="pb-0! md:pb-0! xl:pb-0!" data={hirePageData.ourApproach} />
        </section>
      )}
      {hirePageData.ourValues && (
        <section className="w-full h-auto">
          <OurValuesSection data={hirePageData.ourValues} classNames="pb-0! md:pb-0! xl:pb-0!" />
        </section>
      )}
      {hirePageData.whyChoose && (
        <WhyChooseSection data={hirePageData.whyChoose} classNames="pb-0! md:pb-0! xl:pb-0!" />
      )}

      {hirePageData.testimonials && (
        <section className="w-full h-auto overflow-hidden">
          <ClientTestimonial classNames="pb-0! mb:pb-0! xl:pb-0!" data={hirePageData.testimonials} />
        </section>
      )}
      {hirePageData.faq && (
        <section className="w-full h-auto overflow-hidden">
          <FrequentlyAskedQuestions data={hirePageData.faq} />
        </section>
      )}

      {hirePageData.readyToScale && (
        <section className="w-full h-auto overflow-hidden">
          <ReadyToScaleSection classNames="pt-0! mb:pt-0! xl:pt-0!" data={hirePageData.readyToScale} />
        </section>
      )}
      {hirePageData.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={hirePageData.contactUs} />
        </section>
      )}
    </>
  );
}

export default HireFromSkyphr;
