import { ImArrowUpRight2 } from "react-icons/im";
import { twMerge } from "tailwind-merge";

function CtaServiceButton({ label, href, className }: { label: string; href: string; className?: string }) {
  return (
    <a
      href={href}
      className={twMerge(
        "w-fit h-fit min-w-[230px] min-h-[45px] max-h-[45px] rounded-full bg-(--root-white-color) text-(--root-black-color) font-bold font-instrument-sans overflow-hidden flex items-start justify-start text-sm hover:scale-x-105 group transition-all duration-300 ring-1 ring-(--root-white-color) hover:text-(--root-white-color) relative",
        className,
      )}>
      <span className="flex flex-col gap-2 items-start justify-start group-hover:-translate-y-[53px] transition-all duration-300 relative z-2">
        <span className="text-nowrap min-h-[45px] flex px-8 py-3 items-center justify-between gap-5">
          <span>{label}</span>
          <ImArrowUpRight2 />
        </span>
        <span className="text-nowrap min-h-[45px] flex px-8 py-3 items-center justify-between gap-5">
          <span>{label}</span>
          <ImArrowUpRight2 />
        </span>
      </span>
      <span className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-full min-w-0 min-h-0 bg-(--root-black-color) block rounded-full group-hover:min-w-full group-hover:min-h-full  group-hover:right-0 transition-all duration-300 z-0"></span>
    </a>
  );
}

export default CtaServiceButton;
