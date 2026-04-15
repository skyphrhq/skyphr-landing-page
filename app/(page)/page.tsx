import HeroSectionElement from "@/app/screens/heroSectionEle";
import OurProcessSection from "@/app/screens/ourProcessSection";
import AboutSection from "../screens/aboutSection";
import FeaturedWorks from "../screens/featuredWorks";
import OurServiceSection from "../screens/ourServiceSection";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroSectionElement />
      <div className="w-full">
        <FeaturedWorks />
      </div>

      <div className="w-full">
        <AboutSection />
      </div>
      <div className="w-full">
        <OurServiceSection />
      </div>
      <div className="w-full">
        <OurProcessSection />
      </div>
    </div>
  );
}
