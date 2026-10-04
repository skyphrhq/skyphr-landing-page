import { twMerge } from "tailwind-merge";
function HeroBgAbstract({ className = "" }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={twMerge(
          "skyphr-fluted-bg w-full h-full absolute inset-0 z-10 opacity-70 pointer-events-none",
          className,
        )}
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
