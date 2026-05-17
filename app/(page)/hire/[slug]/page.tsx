"use client";
import { getHirePageData } from "@/app/data/pageData/hire";
import AboutSection from "@/app/screens/aboutSection";
import CommonHirePageHeroSection from "@/app/screens/common/commonHirePageHeroSection";
import FrequentlyAskedQuestions from "@/app/screens/common/frequentlyAskedQuestions";
import OurValuesSection from "@/app/screens/common/ourValuesSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";
import dynamic from "next/dynamic";
import { notFound, useParams } from "next/navigation";
const ClientTestimonial = dynamic(() => import("@/app/screens/common/clientTestimonial"));

function HireFromSkyphr() {
  const params = useParams<{ slug: string }>();
  const hirePageData = getHirePageData(params.slug);

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
      {hirePageData.ourValues && (
        <section className="w-full h-auto relative">
          <OurValuesSection data={hirePageData.ourValues} />
        </section>
      )}
      {hirePageData.about && (
        <section className="w-full h-auto">
          <AboutSection classNames="py-0! md:py-0! xl:py-0!" data={hirePageData.about} />
        </section>
      )}
      {hirePageData.readyToScale && (
        <section className="w-full h-auto overflow-hidden">
          <ReadyToScaleSection classNames="pb-0! mb:pb-0! xl:pb-0!" data={hirePageData.readyToScale} />
        </section>
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
      {hirePageData.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={hirePageData.contactUs} />
        </section>
      )}
    </>
  );
}

export default HireFromSkyphr;
