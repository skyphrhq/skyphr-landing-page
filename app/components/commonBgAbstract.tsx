import BgAbstractImage from "@/app/assets/webp/skyphr-hero-background.webp";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
function CommonBgAbstract({ className = "" }: { className?: string }) {
  return (
    <>
      <Image
        width={1500}
        height={1000}
        src={BgAbstractImage}
        alt="Abstract gradient background design"
        title="Abstract gradient background design"
        className={twMerge("w-full h-full absolute inset-0 z-10 opacity-50 pointer-events-none", className)}
        loading="eager"
        fetchPriority="high"
        priority={true}
      />
      <div
        className={twMerge("w-full h-full absolute inset-0 pointer-events-none", className)}
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 35%, rgba(238,240,253,0.9) 0%, rgba(238,240,253,0.5) 40%, rgba(238,240,253,0.15) 65%, transparent 80%)",
        }}
      />
    </>
  );
}

export default CommonBgAbstract;
