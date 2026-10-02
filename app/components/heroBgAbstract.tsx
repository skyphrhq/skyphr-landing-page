import BgAbstractImage from "@/app/assets/webp/skyphr-hero-background.webp";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
function HeroBgAbstract({ className = "" }: { className?: string }) {
  return (
    <>
      <Image
        width={1500}
        height={1000}
        src={BgAbstractImage}
        alt="Abstract gradient background design"
        title="Abstract gradient background design"
        className={twMerge("w-full h-full absolute inset-0 z-10 opacity-70 pointer-events-none", className)}
        loading="eager"
        fetchPriority="high"
        priority={true}
        sizes="100vw"
      />
      <div
        className={twMerge("w-full h-full absolute inset-0 pointer-events-none", className)}
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 35%, rgba(105,116,226,0.35) 0%, rgba(105,116,226,0.14) 40%, rgba(105,116,226,0.04) 65%, transparent 80%)",
        }}
      />
    </>
  );
}

export default HeroBgAbstract;
