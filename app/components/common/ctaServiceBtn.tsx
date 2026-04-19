import { ImArrowUpRight2 } from "react-icons/im";
import { twMerge } from "tailwind-merge";

function CtaServiceButton({ label, href, className, showArrow = true, theme = "white" }: { label: string; href: string; className?: string; showArrow?: boolean, theme?: "white" | "black" }) {
  const isBlackTheme = theme === "black";

  return (
    <a
      href={href}
      className={twMerge(
        "w-fit h-fit min-w-[230px] min-h-[45px] max-h-[45px] rounded-full font-bold font-instrument-sans overflow-hidden flex items-start justify-start text-sm hover:scale-x-105 group transition-all duration-300 ring-1 relative",
        isBlackTheme
          ? "bg-(--root-black-color) text-(--root-white-color) ring-(--root-black-color) hover:text-(--root-black-color)"
          : "bg-(--root-white-color) text-(--root-black-color) ring-(--root-white-color) hover:text-(--root-white-color)",
        className,
      )}>
      <span className="flex flex-col gap-2 items-start justify-start group-hover:-translate-y-[53px] transition-all duration-300 relative z-2 w-full">
        <span className={`text-nowrap min-h-[45px] flex px-8 py-3 items-center ${showArrow ? "justify-between" : "justify-center"} gap-5 w-full text-center`}>
          <span>{label}</span>
          {showArrow && <ImArrowUpRight2 />}
        </span>
        <span className={`text-nowrap min-h-[45px] flex px-8 py-3 items-center ${showArrow ? "justify-between" : "justify-center"} gap-5 w-full text-center`}>
          <span>{label}</span>
          {showArrow && <ImArrowUpRight2 />}
        </span>
      </span>
      <span
        className={twMerge(
          "absolute top-1/2 right-0 -translate-y-1/2 w-0 h-full min-w-0 min-h-0 block rounded-full group-hover:min-w-full group-hover:min-h-full group-hover:right-0 transition-all duration-300 z-0",
          isBlackTheme ? "bg-(--root-white-color)" : "bg-(--root-black-color)"
        )}></span>
    </a>
  );
}

export default CtaServiceButton;
