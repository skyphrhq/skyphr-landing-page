"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import CtaServiceButton from "@/app/components/common/ctaServiceBtn";
import InputField from "@/app/components/common/inputField";
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
    <div className={twMerge("w-full h-full bg-(--about-us-card-bg) py-15! md:py-20! lg:py-30! font-inter", classNames)}>
      <div className="skyphr-container" ref={containerRef}>
        <CommonSectionHeader header={data?.header} />
        <div className="w-full lg:max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-stretch">
            <div className="flex flex-col items-start justify-between gap-8">
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
                <h3 className="font-bold text-(--text-main-color) text-xl md:text-2xl font-instrument-sans">Our Offices</h3>
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
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField className="text-black-color" placeholder="First Name" />
                  <InputField className="text-black-color" placeholder="Last Name" />
                </div>

                <InputField type="email" className="text-black-color" placeholder="Email Address" />

                <InputField
                  className="text-black-color"
                  type="select"
                  placeholder="India"
                  options={[
                    { label: "India", value: "in" },
                    { label: "United States", value: "us" },
                    { label: "Canada", value: "ca" },
                  ]}
                />

                <InputField className="text-black-color" isTelWithCode={true} placeholder="Contact Number" />

                <InputField className="text-black-color" type="textarea" placeholder="Type your message here..." />

                <div className="mt-2 relative">
                  <label
                    htmlFor="uploadFile"
                    className="w-full rounded-xl bg-gray-50 border border-gray-100 p-6 flex flex-col items-start justify-start text-center cursor-pointer hover:bg-gray-100 transition-colors border-dashed">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        className="w-5 h-5 text-gray-400 rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                      </svg>
                      <span className="text-gray-600 font-medium font-inter">Attach a file</span>
                    </div>
                    <span className="text-xs text-gray-400 italic">
                      Supported files: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
                    </span>
                  </label>
                  <input
                    id="uploadFile"
                    className="hidden"
                    type="file"
                    accept=".pdf,.doc,.docx,.odt,.ods,.ppt,.pptx,.xls,.xlsx,.rtf,.txt"
                  />
                </div>

                <CtaServiceButton
                  label="Start a Conversation"
                  href=""
                  showArrow={false}
                  theme="black"
                  className="w-full text-center"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
