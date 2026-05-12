import { ABOUT_US_PAGE_DATA } from "@/app/data/pageData/aboutUs.data";
import AboutSection from "@/app/screens/aboutSection";
import AboutUsSectionHeroElem from "@/app/screens/aboutUsSectionHero";
import OurTeamSection from "@/app/screens/common/ourTeamSection";
import OurValuesSection from "@/app/screens/common/ourValuesSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import dynamic from "next/dynamic";

const ClientTestimonial = dynamic(() => import("@/app/screens/common/clientTestimonial"));
const FeaturedWorks = dynamic(() => import("@/app/screens/common/featuredWorks"));

function AboutUsPage() {
  return (
    <div className="w-full h-auto">
      {ABOUT_US_PAGE_DATA?.hero && <AboutUsSectionHeroElem data={ABOUT_US_PAGE_DATA.hero} />}
      {ABOUT_US_PAGE_DATA?.about && (
        <div className="w-full">
          <AboutSection classNames="py-15" data={ABOUT_US_PAGE_DATA.about} />
        </div>
      )}
      {ABOUT_US_PAGE_DATA?.ourValues && <OurValuesSection data={ABOUT_US_PAGE_DATA.ourValues} />}
      {ABOUT_US_PAGE_DATA?.featuredWorks && <FeaturedWorks data={ABOUT_US_PAGE_DATA.featuredWorks} />}
      {ABOUT_US_PAGE_DATA?.testimonials && <ClientTestimonial data={ABOUT_US_PAGE_DATA.testimonials} />}
      <div className="w-full">
        <OurTeamSection />
      </div>
      {ABOUT_US_PAGE_DATA?.contactUs && (
        <div className="w-full overflow-hidden">
          <ContactUsSection data={ABOUT_US_PAGE_DATA.contactUs} />
        </div>
      )}
    </div>
  );
}

export default AboutUsPage;
