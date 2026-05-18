"use client";

import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import { SmoothScrollProviderInterface } from "@/app/utils/interface/common.interface";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function SmoothScrollProvider({ children }: SmoothScrollProviderInterface) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    const update = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", onScroll);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.off?.("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const frame = requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return <main className="w-full h-auto skyphr-main-wrapper">{children}</main>;
}

export default SmoothScrollProvider;
