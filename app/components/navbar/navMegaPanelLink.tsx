import { IsNavItemActive } from "@/app/utils/helpers/helper";
import { NavMegaPanelLinkInterface } from "@/app/utils/interface/common.interface";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function NavMegaPanelLink({ item, pathname, onNavigate, className }: NavMegaPanelLinkInterface) {
  const isActive = IsNavItemActive(item, pathname);
  const shouldRenderLink = item?.isLink ?? true;
  const hasDescription = Boolean(item?.description);
  // The negative margin lines the label up with the column heading while the hover background still has padding
  const linkClassName = twMerge(
    "block -mx-3 rounded-lg px-3 py-2 font-instrument-sans text-base font-medium transition-colors duration-200",
    // With a description under it, the label takes the main color so the two lines read as title + muted note
    isActive
      ? "bg-(--skyai-lavender-soft) text-(--cta-button-background)"
      : hasDescription
        ? "text-(--text-main-color)"
        : "text-(--text-secondary-color)",
    shouldRenderLink &&
      "hover:bg-(--skyai-lavender-bg) hover:text-(--cta-button-background) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--cta-button-background)",
    className,
  );
  const linkContent = (
    <>
      {item?.label}
      {hasDescription ? (
        <span className="block pt-0.5 text-sm font-normal text-(--text-secondary-color)">{item?.description}</span>
      ) : null}
    </>
  );

  if (!shouldRenderLink) {
    return <span className={linkClassName}>{linkContent}</span>;
  }

  return (
    <Link
      href={item?.href}
      target={item?.target}
      rel={item?.target === "_blank" ? "noopener noreferrer" : undefined}
      title={item?.label}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={linkClassName}>
      {linkContent}
    </Link>
  );
}

export default NavMegaPanelLink;
