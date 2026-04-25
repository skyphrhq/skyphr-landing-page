"use client";
import SkyPhrLogo from "@/app/assets/skyphr-logo-transparent-black.png";
import CTAButton from "@/app/components/common/ctaButton";
import { NAVBAR_LINKS_DATA } from "@/app/data/navbar.data";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function NavBarComponent() {
  const navBarContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const navbarInnerWrapper = navBarContainer.current?.querySelector(".navbar-inner-wrapper");
    if (navbarInnerWrapper) {
      gsap.to(navBarContainer.current, {
        maxWidth: "90%",
        top: "10px",
        borderRadius: "10px",
        duration: 0.6,
        borderBottom: "0px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(navbarInnerWrapper, {
        padding: "20px 0px",
        duration: 0.6,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
    }
    const animationElement = navBarContainer.current?.querySelector(".bg-animation-elemnt");
    if (animationElement) {
      gsap.to(animationElement, {
        opacity: 1,
        duration: 0.5,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return (
    <nav
      ref={navBarContainer}
      className="w-full max-w-full top-0 left-1/2 -translate-x-1/2 fixed z-9999 bg-transparent border-b border-b-(--border-color) overflow-hidden">
      <div className="w-full skyphr-container flex items-center justify-between h-auto px-10 py-5 backdrop-blur-[1px] relative z-2 navbar-inner-wrapper">
        <Link href="/" className="cursor-pointer">
          <Image width={180} height={40} src={SkyPhrLogo} alt="SkyPhr Logo" className="w-45  h-10" priority />
        </Link>
        <div className="w-fit">
          <ul className="w-fit flex items-center justify-center gap-3">
            {NAVBAR_LINKS_DATA?.map((item) => {
              return (
                <li key={item?.id} className="group">
                  <Link
                    href={item?.href}
                    className="text-lg font-medium font-instrument-sans px-3 py-1 transition-all text-(--text-secondary-color) group-hover:text-(--text-main-color)">
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <CTAButton btnStyle="CTA_SECONDARY" className="reveal" href="/">
          Book a Call
        </CTAButton>
      </div>
      <span className="w-full h-full absolute blur-2xl inset-0 opacity-20 bg-(--root-white-color) z-1 origin-center bg-animation-elemnt"></span>
    </nav>
  );
}

export default NavBarComponent;
