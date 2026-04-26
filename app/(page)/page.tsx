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
      <HeroSectionElement />
      <div className="w-full">
        <FeaturedWorks />
      </div>

      <div className="w-full">
        <AboutSection data={HOME_PAGE_DATA.aboutUsData} />
      </div>
      <div className="w-full">
        <OurServiceSection />
      </div>
      <div className="w-full">
        <OurProcessSection />
      </div>
      <div className="w-full">
        <ClientTestimonial />
      </div>

      <div className="w-full overflow-hidden">
        <FrequentlyAskedQuestions />
      </div>
      <div className="w-full overflow-hidden">
        <OurInsightsSection />
      </div>
      <div className="w-full overflow-hidden">
        <ReadyToScaleSection />
      </div>
      <div className="w-full overflow-hidden">
        <ContactUsSection />
      </div>
    </div>
  );
}
