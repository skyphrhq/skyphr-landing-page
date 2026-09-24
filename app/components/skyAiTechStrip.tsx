import { SkyAiTechLogo, SkyAiTechStrip as SkyAiTechStripData } from "@/app/utils/interface/data.interface";
import SparkleIcon from "@/app/components/common/sparkleIcon";
import { twMerge } from "tailwind-merge";

function SkyAiTechStrip({ data, classNames }: { data: SkyAiTechStripData; classNames?: string }) {
  return (
    <section
      aria-label="Technologies we build with"
      className={twMerge("w-full bg-(--root-white-color) border-y border-(--border-color)/70", classNames)}>
      <div className="skyphr-container flex flex-col md:flex-row md:items-center gap-5 md:gap-0 py-6 md:py-8">
        <div className="shrink-0 flex items-center justify-center md:justify-start gap-4 md:pr-8 xl:pr-10 md:mr-8 xl:mr-10 md:border-r md:border-(--border-color)/70 md:py-3">
          <SparkleIcon className="w-6 h-6 shrink-0 text-(--cta-button-background)" />
          <p className="font-instrument-sans text-sm xl:text-base font-medium leading-snug text-(--cta-button-background)">
            {data.label.map((line) => (
              <span className="md:block" key={line}>
                {line}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Scrolls as a marquee until there is room to show every logo in one row */}
        <div className="marquee-custom-slider relative flex-1 min-w-0 overflow-hidden mask-x-from-90% mask-x-to-100% 2xl:mask-none">
          <div className="flex marquee-wrapper">
            <LogoGroup logos={data.logos} />
            <LogoGroup logos={data.logos} cloned />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoGroup({ logos, cloned }: { logos: SkyAiTechLogo[]; cloned?: boolean }) {
  return (
    <ul
      aria-hidden={cloned || undefined}
      className={twMerge(
        "marquee-group shrink-0 flex items-center gap-10 pr-10 2xl:animate-none! 2xl:flex-1 2xl:justify-between 2xl:gap-6 2xl:pr-0",
        cloned && "2xl:hidden",
      )}>
      {logos.map((logo) => (
        <li
          key={logo.name}
          className="shrink-0 flex items-center gap-1.5 font-instrument-sans text-sm sm:text-[0.95rem] font-medium whitespace-nowrap text-(--text-main-color) opacity-80 transition-opacity duration-300 hover:opacity-100">
          {logo.icon && (
            <span aria-hidden="true" className={twMerge("text-xl flex items-center", logo.iconClassName)}>
              {logo.icon}
            </span>
          )}
          <span className={logo.labelClassName}>{logo.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default SkyAiTechStrip;
