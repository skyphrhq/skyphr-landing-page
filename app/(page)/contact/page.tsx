"use client";
import { CONTACT_PAGE_DATA } from "@/app/data/pageData/contact.data";
import { gsap } from "@/app/lib/gsap";
import ContactHeroSection from "@/app/screens/contactHeroSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";
import dynamic from "next/dynamic";

const ClientTestimonial = dynamic(() => import("@/app/screens/common/clientTestimonial"));

function ContactUsPage() {
  const handleStartAProject = () => {
    gsap.to(window, { duration: 1, scrollTo: "#contact-us-section", ease: "power2.inOut" });
  };
  return (
    <div className="w-full h-auto">
      {CONTACT_PAGE_DATA?.hero && (
        <ContactHeroSection data={CONTACT_PAGE_DATA?.hero} onStartProjectClick={handleStartAProject} />
      )}

      <div id="contact-us-section" className="w-full overflow-hidden">
        <ContactUsSection classNames="py-20!" />
      </div>
      {CONTACT_PAGE_DATA?.testimonials && (
        <div className="w-full">
          <ClientTestimonial data={CONTACT_PAGE_DATA.testimonials} />
        </div>
      )}
      {CONTACT_PAGE_DATA.readyToScale && (
        <div className="w-full">
          <ReadyToScaleSection data={CONTACT_PAGE_DATA.readyToScale} classNames="pt-0! pb-30" />
        </div>
      )}
    </div>
  );
}

export default ContactUsPage;
