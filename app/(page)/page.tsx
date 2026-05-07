import { HOME_PAGE_DATA } from "@/app/data/pageData/home.data";
import AboutSection from "@/app/screens/aboutSection";
import ClientTestimonial from "@/app/screens/common/clientTestimonial";
import FeaturedWorks from "@/app/screens/common/featuredWorks";
import FrequentlyAskedQuestions from "@/app/screens/common/frequentlyAskedQuestions";
import OurInsightsSection from "@/app/screens/common/ourInsightsSection";
import OurProcessSection from "@/app/screens/common/ourProcessSection";
import OurServiceSection from "@/app/screens/common/ourServiceSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import HeroSectionElement from "@/app/screens/heroSectionEle";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";

export default function Home() {
  return (
    <div className="w-full h-auto">
      {HOME_PAGE_DATA?.hero && <HeroSectionElement data={HOME_PAGE_DATA.hero} />}
      {HOME_PAGE_DATA?.featuredWorks && (
        <div className="w-full">
          <FeaturedWorks data={HOME_PAGE_DATA.featuredWorks} />
        </div>
      )}₹
      {HOME_PAGE_DATA?.about && (
        <div className="w-full">
          <AboutSection data={HOME_PAGE_DATA.about} />
        </div>
      )}
      {HOME_PAGE_DATA?.services && (
        <div className="w-full">
          <OurServiceSection data={HOME_PAGE_DATA.services} />
        </div>
      )}
      {HOME_PAGE_DATA?.process && (
        <div className="w-full">
          <OurProcessSection data={HOME_PAGE_DATA.process} />
        </div>
      )}
      {HOME_PAGE_DATA?.testimonials && (
        <div className="w-full">
          <ClientTestimonial classNames="!py-0" data={HOME_PAGE_DATA.testimonials} />
        </div>
      )}
      {HOME_PAGE_DATA?.faq && (
        <div className="w-full overflow-hidden">
          <FrequentlyAskedQuestions data={HOME_PAGE_DATA.faq} />
        </div>
      )}
      {HOME_PAGE_DATA?.ourInsights && (
        <div className="w-full overflow-hidden">
          <OurInsightsSection data={HOME_PAGE_DATA.ourInsights} />
        </div>
      )}
      {HOME_PAGE_DATA?.readyToScale && (
        <div className="w-full overflow-hidden">
          <ReadyToScaleSection data={HOME_PAGE_DATA.readyToScale} />
        </div>
      )}
      <div className="w-full overflow-hidden">
        <ContactUsSection />
      </div>
    </div>
  );
}
