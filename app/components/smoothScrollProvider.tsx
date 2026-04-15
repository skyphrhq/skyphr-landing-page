"use client";

import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import Lenis from "lenis";
import { useEffect } from "react";
import { SmoothScrollProviderInterface } from "../utils/interface/common.interface";

function SmoothScrollProvider({ children }: SmoothScrollProviderInterface) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis({ duration: 2 });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}

export default SmoothScrollProvider;
