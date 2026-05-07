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
        alt="Background Abstract Image"
        className={twMerge("w-full h-full absolute inset-0 z-10 opacity-70", className)}
        loading="eager"
      />
      <div
        className={twMerge(
          "w-full aspect-square absolute inset-0 pointer-events-none flex items-center justify-center blur-[200px] rounded-[200%] opacity-70",
          className,
        )}
        style={{
          background: `
radial-gradient(circle at center, rgba(105,116,226,0.6) 0%, rgba(105,116,226,0.3) 30%, transparent 60%),
linear-gradient(to top, #6974e2 0%, white 100%)
`,
        }}
      />
    </>
  );
}

export default HeroBgAbstract;
