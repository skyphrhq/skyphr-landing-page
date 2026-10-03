import { NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { PHONE_NUMBER_FORMATE } from "@/app/utils/constants/numberFormate.constants";
import { NavbarLinksInterface } from "@/app/utils/interface/data.interface";

export const CreateScrollTrigger = ({
  trigger,
  start = "top 80%",
  end = "bottom top",
  markers = false,
}: {
  trigger: Element | string;
  start?: string;
  end?: string;
  markers?: boolean;
}) => ({
  trigger,
  start,
  end,
  markers,
  toggleActions: "play none none none",
});

export const IsOdd = (index: number): boolean => index % 2 !== 0;

// 75 -> "01:15"
export const FormatCallTime = (totalSeconds: number) =>
  `${String(Math.floor(totalSeconds / 60)).padStart(2, "0")}:${String(totalSeconds % 60).padStart(2, "0")}`;

// Client-only: call from effects or event handlers, never during render (the server has no window)
export const PrefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// "2026-09-21T09:00:00+05:30" -> "Sep 21, 2026". Uses the date part only, so the day never shifts with the timezone
export const FormatBlogDate = (isoDate: string) => {
  const datePart = isoDate.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(datePart)) return "";

  return new Date(`${datePart}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

export const NormalizePath = (path: string) => {
  if (path === "/") {
    return path;
  }

  return path.replace(/\/$/, "");
};

export const IsNavItemActive = (item: NavbarLinksInterface, pathname: string) => {
  const currentPath = NormalizePath(pathname);
  const itemPath = NormalizePath(item?.href);
  const isCurrentItemActive =
    itemPath === "/" ? currentPath === itemPath : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
  const isChildActive = item?.dropDown?.some((dropdownItem) => IsNavItemActive(dropdownItem, pathname));

  return isCurrentItemActive || isChildActive;
};

export const formateAndVerifyPhoneNumber = (number: string, countryCode: string) => {
  if (!countryCode) return number;

  const upperCountryCode = countryCode.toUpperCase();
  const format = PHONE_NUMBER_FORMATE[upperCountryCode];

  if (!format) return number;

  const digits = number.replace(/\D/g, "");
  let digitIndex = 0;
  let formattedNumber = "";

  for (const character of format) {
    if (character === "0") {
      if (digitIndex >= digits.length) break;

      formattedNumber += digits[digitIndex];
      digitIndex += 1;
    } else if (digitIndex < digits.length) {
      formattedNumber += character;
    }
  }

  return formattedNumber.replace(/\D+$/, "");
};

export const verifyPhoneNumberLength = (phoneNumber: string, countryCode: string): boolean => {
  if (!countryCode) return false;

  const upperCountryCode = countryCode.toUpperCase();
  const format = PHONE_NUMBER_FORMATE[upperCountryCode];

  if (!format) return true;

  const expectedLength = format.replace(/\D/g, "").length;
  const rowPhoneNumber = phoneNumber.replace(/\D/g, "");

  return rowPhoneNumber.length === expectedLength;
};

// "ai-ml-services" -> the service links listed under that group in the navbar's Services dropdown
export const GetServiceNavLinks = (groupId: string) =>
  NAVBAR_LINKS_DATA.find((link) => link.id === "services")
    ?.dropDown.find((group) => group.id === groupId)
    ?.dropDown.filter((link) => link.isLink) ?? [];
