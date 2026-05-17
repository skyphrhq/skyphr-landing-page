"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import CommonContactUsForm from "@/app/components/commonContatcUsForm";

import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { ContactUsSectionDataInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function ContactUsSection({ data, classNames }: ContactUsSectionDataInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const titleSec = gsap.utils.toArray(".reveal-text-animation");
        const { FROM, TO } = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: containerRef.current });
        gsap.fromTo(titleSec, FROM, TO);

        const cards = gsap.utils.toArray(".contact-card");
        gsap.fromTo(cards, FROM, TO);
      }
    },
    { scope: containerRef },
  );

  return (
    <div className={twMerge("w-full h-full bg-(--about-us-card-bg) py-15! md:py-20! xl:py-30! font-inter", classNames)}>
      <div className="skyphr-container" ref={containerRef}>
        <CommonSectionHeader header={data?.header} />
        <div className="w-full xl:max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-stretch">
            <div className="flex flex-col md:flex-row lg:flex-col items-start justify-between gap-8">
              <div className="contact-card bg-(--cta-button-background) w-full rounded-lg md:rounded-xl lg:rounded-2xl p-6 xl:p-10 xl:px-14 h-full">
                <div className="w-full h-full flex flex-col items-start justify-center">
                  <div className="mb-5 md:mb-10">
                    <p className="text-(--text-white-color) font-inter text-sm mb-2 font-medium">Email Us</p>
                    <a
                      href="mailto:sales@skyphr.com"
                      className="text-xl md:text-2xl lg:text-3xl font-semibold hover:underline font-instrument-sans text-(--text-white-color)">
                      sales@skyphr.com
                    </a>
                  </div>

                  <div>
                    <p className="text-(--text-white-color) font-inter text-sm mb-4 font-medium">Call Us</p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:+919512293490"
                        className="text-lg md:text-xl lg:text-2xl font-semibold hover:underline font-instrument-sans text-(--text-white-color)">
                        India: +91-927-482-9076
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card bg-(--root-white-color) w-full rounded-lg md:rounded-xl lg:rounded-2xl p-6 xl:p-10 xl:px-14 border border-(--border-color) flex flex-col gap-8">
                <h3 className="font-bold text-(--text-main-color) text-xl md:text-2xl font-instrument-sans">
                  Our Offices
                </h3>
                <div className="flex flex-col items-start justify-start gap-6">
                  <div className="w-full sm:max-w-[65%]">
                    <p className="font-semibold text-base md:text-lg text-(--text-main-color)">India</p>
                    <p className="text-sm text-(--text-secondary-color)">Ahmedabad, Gujarat</p>
                    <p className="text-sm text-(--text-secondary-color)">
                      A 568, Money Plant High Street, Gota, Ahmedabad, Gujarat 382470
                    </p>
                  </div>

                  <div className="w-full sm:max-w-[65%]">
                    <p className="font-semibold text-base md:text-lg text-(--text-main-color)">Canada</p>
                    <p className="text-sm text-(--text-secondary-color)">Hamilton, Ontario</p>
                    <p className="text-sm text-(--text-secondary-color)">100 King St W, Hamilton, ON L8P 1A2, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card bg-(--root-white-color) rounded-lg md:rounded-xl lg:rounded-2xl border border-(--border-color) p-4 md:p-8 h-full relative">
              <CommonContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
