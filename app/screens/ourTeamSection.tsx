"use client";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import OurTeamIntroCard from "../components/ourTeamIntroCard";
import { OUR_TEAM_MEMBERS_DATA } from "../data/common.data";

function OurTeamSection() {
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
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
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
    <div className="w-full h-full bg-(--root-white-color) pb-30" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">
              The Person Behind <span className="font-playfair-display italic font-semibold">Skyphr</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
            Skyphr is built and led by a developer focused on creating scalable digital products and AI-driven systems
            with a strong emphasis on performance, usability, and real-world impact.
          </p>
        </div>
        <div className="max-w-[60%] mx-auto">
          {OUR_TEAM_MEMBERS_DATA?.map((member, index) => (
            <div key={index} className="contact-card">
              <OurTeamIntroCard data={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeamSection;
