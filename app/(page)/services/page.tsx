"use client";

import { SERVICES_PAGE_DATA } from "@/app/data/pageData/service.data";
import OurApproachSection from "@/app/screens/common/ourApproachSec";
import OurValuesSection from "@/app/screens/common/ourValuesSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import OurServicesListingSection from "@/app/screens/ourServicesListingSection";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";
import ServicesSectionHero from "@/app/screens/servicesSectionHero";

function ServicesPage() {
  return (
    <div className="w-full h-auto">
      {SERVICES_PAGE_DATA?.hero && <ServicesSectionHero data={SERVICES_PAGE_DATA.hero} />}
      {SERVICES_PAGE_DATA?.services && <OurServicesListingSection data={SERVICES_PAGE_DATA.services} />}
      {SERVICES_PAGE_DATA?.ourApproach && <OurApproachSection data={SERVICES_PAGE_DATA.ourApproach} />}
      {SERVICES_PAGE_DATA?.ourValues && (
        <div className="w-full">
          <OurValuesSection data={SERVICES_PAGE_DATA.ourValues} />
        </div>
      )}
      {SERVICES_PAGE_DATA?.readyToScale && <ReadyToScaleSection data={SERVICES_PAGE_DATA.readyToScale} />}
      <div className="w-full overflow-hidden">
        <ContactUsSection />
      </div>
    </div>
  );
}

export default ServicesPage;
