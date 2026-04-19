"use client";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import CtaServiceButton from "../components/common/ctaServiceBtn";
import InputField from "../components/common/inputField";

function ContactUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const titleSec = gsap.utils.toArray(".reveal-text");
      gsap.to(titleSec, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom top",
          markers: false,
        },
      });

      const cards = gsap.utils.toArray(".contact-card");
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom top",
            markers: false,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full h-full bg-(--about-us-card-bg) py-20 lg:py-30 font-inter" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Let’s</span>
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Talk</span>
          </h2>

          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">
              About Your <span className="font-playfair-display italic font-semibold">Project</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
            Have a question or idea? Share your requirements and we’ll get back to you within 24 hours.
          </p>
        </div>
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-stretch">
            <div className="flex flex-col items-start justify-between gap-8">
              <div className="contact-card bg-(--cta-button-background) w-full rounded-2xl p-10 px-14 h-full">
                <div className="w-full h-full flex flex-col items-start justify-center">
                  <div className="mb-10">
                    <p className="text-(--text-white-color) font-inter text-sm mb-2 font-medium">Email Us</p>
                    <a
                      href="mailto:sales@skyphr.com"
                      className="text-2xl md:text-3xl font-semibold hover:underline font-instrument-sans text-(--text-white-color)">
                      sales@skyphr.com
                    </a>
                  </div>

                  <div>
                    <p className="text-(--text-white-color) font-inter text-sm mb-4 font-medium">Call Us</p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:+919512293490"
                        className="text-xl md:text-2xl font-semibold hover:underline font-instrument-sans text-(--text-white-color)">
                        India: +91-927-482-9076
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card bg-(--root-white-color) w-full rounded-2xl p-10 px-14 border border-(--border-color) flex flex-col gap-8">
                <h3 className="font-bold text-(--text-main-color) text-2xl font-instrument-sans">Our Offices</h3>
                <div className="flex flex-col items-start justify-start gap-6">
                  <div className="max-w-[65%]">
                    <p className="font-semibold text-lg text-(--text-main-color)">India</p>
                    <p className="text-sm text-(--text-secondary-color)">Ahmedabad, Gujarat</p>
                    <p className="text-sm text-(--text-secondary-color)">
                      A 568, Money Plant High Street, Gota, Ahmedabad, Gujarat 382470
                    </p>
                  </div>

                  <div className="max-w-[65%]">
                    <p className="font-semibold text-lg text-(--text-main-color)">Canada</p>
                    <p className="text-sm text-(--text-secondary-color)">Hamilton, Ontario</p>
                    <p className="text-sm text-(--text-secondary-color)">100 King St W, Hamilton, ON L8P 1A2, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card bg-(--root-white-color) rounded-2xl border border-(--border-color) p-8 h-full relative">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField placeholder="First Name" />
                  <InputField placeholder="Last Name" />
                </div>

                <InputField type="email" placeholder="Email Address" />

                <InputField
                  type="select"
                  placeholder="India"
                  options={[
                    { label: "India", value: "in" },
                    { label: "United States", value: "us" },
                    { label: "Canada", value: "ca" },
                  ]}
                />

                <InputField isTelWithCode={true} placeholder="Contact Number" />

                <InputField type="textarea" placeholder="Type your message here..." />

                <div className="mt-2 relative">
                  <div className="w-full rounded-xl bg-gray-50 border border-gray-100 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition-colors border-dashed">
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
                  </div>
                </div>

                <CtaServiceButton label="Start a Conversation" href="" showArrow={false} theme="black" className="w-full text-center" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
