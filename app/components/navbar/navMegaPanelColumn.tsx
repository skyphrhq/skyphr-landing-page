import NavMegaPanelLink from "@/app/components/navbar/navMegaPanelLink";
import { NavMegaPanelColumnInterface } from "@/app/utils/interface/common.interface";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const HEADING_CLASS_NAME =
  "block pb-3 border-b border-(--border-color) font-instrument-sans text-sm font-semibold text-(--text-main-color)";

function NavMegaPanelColumn({ item, headingId, pathname, onNavigate, className }: NavMegaPanelColumnInterface) {
  // A category is only a link when the data says so; otherwise it's a plain heading
  const shouldRenderLink = item?.isLink ?? true;

  return (
    <li className={twMerge("min-w-0", className)}>
      {shouldRenderLink ? (
        <Link
          id={headingId}
          href={item?.href}
          target={item?.target}
          onClick={onNavigate}
          className={twMerge(
            HEADING_CLASS_NAME,
            "transition-colors duration-200 hover:text-(--cta-button-background) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--cta-button-background)",
          )}>
          {item?.label}
        </Link>
      ) : (
        <p id={headingId} className={HEADING_CLASS_NAME}>
          {item?.label}
        </p>
      )}
      <ul aria-labelledby={headingId} className="flex flex-col gap-0.5 pt-2">
        {item?.dropDown?.map((link) => (
          <li key={link?.id}>
            <NavMegaPanelLink item={link} pathname={pathname} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </li>
  );
}

export default NavMegaPanelColumn;
