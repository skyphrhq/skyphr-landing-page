import { twMerge } from "tailwind-merge";
function CommonBgAbstract({ className = "" }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={twMerge("skyphr-fluted-bg w-full h-full absolute inset-0 z-10 opacity-50 pointer-events-none", className)}
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
