"use client";
import { CONTACT_PAGE_DATA } from "@/app/content/pageContent/pageData/contact.data";
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
    <>
      {CONTACT_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <ContactHeroSection data={CONTACT_PAGE_DATA?.hero} onStartProjectClick={handleStartAProject} />
        </section>
      )}

      {CONTACT_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden" id="contact-us-section">
          <ContactUsSection data={CONTACT_PAGE_DATA.contactUs} />
        </section>
      )}
      {CONTACT_PAGE_DATA?.testimonials && (
        <section className="w-full h-auto">
          <ClientTestimonial data={CONTACT_PAGE_DATA.testimonials} />
        </section>
      )}
      {CONTACT_PAGE_DATA.readyToScale && (
        <section className="w-full h-auto overflow-hidden">
          <ReadyToScaleSection data={CONTACT_PAGE_DATA.readyToScale} classNames="pt-0! pb-30" />
        </section>
      )}
    </>
  );
}

export default ContactUsPage;
