"use client";

import OurApproachSection from "@/app/screens/common/ourApproachSec";
import ServicesSectionHero from "@/app/screens/servicesSectionHero";

function ServicesPage() {
  return (
    <div className="w-full h-auto">
      <ServicesSectionHero />
      <OurApproachSection />
    </div>
  );
}

export default ServicesPage;
