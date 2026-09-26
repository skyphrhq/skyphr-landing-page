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
        className={twMerge(
          "w-full aspect-square absolute inset-0 pointer-events-none flex items-center justify-center blur-[200px] rounded-[200%] opacity-70 bg-(--skyai-lavender-soft)",
          className,
        )}
      />
    </>
  );
}

export default CommonBgAbstract;
