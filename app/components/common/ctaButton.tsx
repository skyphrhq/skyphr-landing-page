import { GET_BUTTON_STYLE } from "@/app/utils/constants/common.constant";
import { ButtonEleInterface } from "@/app/utils/interface/common.interface";
import { GoArrowUpRight } from "react-icons/go";
import { twMerge } from "tailwind-merge";

function CTAButton({ children, btnStyle, className, href, target, rel, theme = "DARK", ...props }: ButtonEleInterface) {
  const { parentWrapper, childrenWrapper } = GET_BUTTON_STYLE(btnStyle, theme);

  let wrapperElem: React.ElementType = "button";
  if (href) wrapperElem = "a";
  const Tag = wrapperElem as React.ElementType;

  return (
    <Tag {...props} href={href} target={target} rel={rel} className={twMerge(parentWrapper, className)}>
      {btnStyle === "CTA_PRIMARY" ? (
        <span className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-(--root-white-color) text-(--cta-button-background) flex items-center justify-center absolute top-1/2 -left-full -translate-y-1/2 group-hover/btn:left-1.5 transition-all duration-300">
          <GoArrowUpRight className="font-semibold" />
        </span>
      ) : (
        <span
          className={twMerge(
            "absolute top-1/2 right-6 -translate-y-1/2 w-2 h-2 min-w-2 min-h-2 block rounded-full group-hover/btn:min-w-full group-hover/btn:min-h-full  group-hover/btn:right-0 transition-all duration-300",
            theme === "DARK" ? "bg-(--root-white-color)" : "bg-(--root-black-color)",
          )}></span>
      )}
      <span className={childrenWrapper}>{children}</span>
      {btnStyle === "CTA_PRIMARY" ? (
        <span className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-(--root-white-color) text-(--cta-button-background) flex items-center justify-center absolute top-1/2 right-1.5 -translate-y-1/2 group-hover/btn:translate-x-[130%] transition-all duration-300">
          <GoArrowUpRight className="font-semibold" />
        </span>
      ) : (
        <span
          className={twMerge(
            "absolute top-1/2 right-6 -translate-y-1/2 min-w-0 min-h-0  block rounded-full group-hover/btn:min-h-2.5 group-hover/btn:min-w-2.5  transition-all duration-500 z-10",
            theme === "DARK" ? "bg-(--root-black-color)" : "bg-(--root-white-color)",
          )}></span>
      )}
    </Tag>
  );
}

export default CTAButton;
