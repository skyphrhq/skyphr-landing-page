import { ABOUT_US_PAGE_DATA } from "@/app/data/pageData/aboutUs.data";
import AboutSection from "@/app/screens/aboutSection";
import AboutUsSectionHeroElem from "@/app/screens/aboutUsSectionHero";
import ClientTestimonial from "@/app/screens/common/clientTestimonial";
import ContactUsSection from "@/app/screens/contactUsSection";
import FeaturedWorks from "@/app/screens/common/featuredWorks";
import OurTeamSection from "@/app/screens/common/ourTeamSection";
import OurValuesSection from "@/app/screens/common/ourValuesSection";

function AboutUsPage() {
  return (
    <div className="w-full h-auto">
      <AboutUsSectionHeroElem />
      <div className="w-full">
        <AboutSection className="py-15" data={ABOUT_US_PAGE_DATA.aboutUsData} />
      </div>
      <div className="w-full">
        <OurValuesSection />
      </div>
      <div className="w-full">
        <FeaturedWorks showHeader={true} />
      </div>
      <div className="w-full">
        <ClientTestimonial />
      </div>
      <div className="w-full">
        <OurTeamSection />
      </div>
      <div className="w-full overflow-hidden">
        <ContactUsSection />
      </div>
    </div>
  );
}

export default AboutUsPage;
