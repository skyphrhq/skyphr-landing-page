"use client";
import { gsap } from "@/app/lib/gsap";
import ClientTestimonial from "@/app/screens/common/clientTestimonial";
import ContactHeroSection from "@/app/screens/contactHeroSection";
import ContactUsSection from "@/app/screens/contactUsSection";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";

function ContactUsPage() {
  const handleStartAProject = () => {
    gsap.to(window, { duration: 1, scrollTo: "#contact-us-section", ease: "power2.inOut" });
  };
  return (
    <div className="w-full h-auto">
      <ContactHeroSection onStartProjectClick={handleStartAProject} />

      <div id="contact-us-section" className="w-full overflow-hidden">
        <ContactUsSection classNames="py-20!" />
      </div>
      <div className="w-full">
        <ClientTestimonial />
      </div>

      <div className="w-full">
        <ReadyToScaleSection classNames="pt-0! pb-30" />
      </div>
    </div>
  );
}

export default ContactUsPage;
