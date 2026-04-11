export interface NavbarLinksInterface {
  id: string;
  label: string;
  href: string;
  type: "button" | "link";
  dropDown: NavbarLinksInterface[];
  target?: "_blank" | "_self";
}
