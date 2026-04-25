import HeroSectionElement from "@/app/screens/heroSectionEle";
import OurProcessSection from "@/app/screens/ourProcessSection";
import { HOME_PAGE_DATA } from "../data/pageData/home.data";
import AboutSection from "../screens/aboutSection";
import ClientTestimonial from "../screens/clientTestimonial";
import ContactUsSection from "../screens/contactUsSection";
import FeaturedWorks from "../screens/featuredWorks";
import FrequentlyAskedQuestions from "../screens/frequentlyAskedQuestions";
import OurInsightsSection from "../screens/ourInsightsSection";
import OurServiceSection from "../screens/ourServiceSection";
import ReadyToScaleSection from "../screens/readyToScaleSection";

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
