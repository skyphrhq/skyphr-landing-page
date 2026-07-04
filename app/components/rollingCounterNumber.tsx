"use client";
import { gsap } from "@/app/lib/gsap";
import { RollingCounterNumberInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function RollingCounterNumber({ count, className }: RollingCounterNumberInterface) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        y: -count * 40,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div className={twMerge("h-10 overflow-hidden", className)}>
      <div ref={containerRef}>
        {Array.from({ length: count + 1 }).map((_, i) => (
          <div key={i} className="h-10 flex items-center justify-center text-3xl font-bold text-black">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RollingCounterNumber;
