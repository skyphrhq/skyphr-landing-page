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
    <>
      {SERVICES_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <ServicesSectionHero data={SERVICES_PAGE_DATA.hero} />
        </section>
      )}
      {SERVICES_PAGE_DATA?.services && (
        <section className="w-full h-auto">
          <OurServicesListingSection data={SERVICES_PAGE_DATA.services} />
        </section>
      )}
      {SERVICES_PAGE_DATA?.ourApproach && (
        <section className="w-full h-auto">
          <OurApproachSection classNames="pb-0! md:pb-0! xl:pb-0!" data={SERVICES_PAGE_DATA.ourApproach} />
        </section>
      )}
      {SERVICES_PAGE_DATA?.ourValues && (
        <section className="w-full h-auto">
          <OurValuesSection data={SERVICES_PAGE_DATA.ourValues} />
        </section>
      )}
      {SERVICES_PAGE_DATA?.readyToScale && (
        <section>
          <ReadyToScaleSection data={SERVICES_PAGE_DATA.readyToScale} />
        </section>
      )}
      {SERVICES_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={SERVICES_PAGE_DATA.contactUs} />
        </section>
      )}
    </>
  );
}

export default ServicesPage;
