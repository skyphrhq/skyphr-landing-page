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

export const NormalizePath = (path: string) => {
  if (path === "/") {
    return path;
  }

  return path.replace(/\/$/, "");
};

export const IsNavItemActive =(item: NavbarLinksInterface, pathname: string)=> {
  const shouldRenderLink = item?.isLink ?? true;
  const currentPath = NormalizePath(pathname);
  const itemPath = NormalizePath(item?.href);
  const isCurrentItemActive =
    shouldRenderLink &&
    (itemPath === "/" ? currentPath === itemPath : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`));
  const isChildActive = item?.dropDown?.some((dropdownItem) => IsNavItemActive(dropdownItem, pathname));

  return isCurrentItemActive || isChildActive;
}
