import SkyPhrLogo from "@/app/assets/skyphr-logo-transparent-black.png";
import CTAButton from "@/app/components/common/ctaButton";
import { NAVBAR_LINKS_DATA } from "@/app/data/navbar.data";
import Image from "next/image";
import Link from "next/link";

function NavBarComponent() {
  return (
    <nav className="w-full fixed z-50 bg-transparent border-b border-b-(--border-color) ">
      <div className="w-full skyphr-container flex items-center justify-between h-auto px-10! py-5! backdrop-blur-[1px]">
        <Image width={180} height={40} src={SkyPhrLogo} alt="SkyPhr Logo" className="w-45  h-10" priority />
        <div className="w-fit">
          <ul className="w-fit flex items-center justify-center gap-3">
            {NAVBAR_LINKS_DATA?.map((item) => {
              return (
                <li key={item?.id} className="group">
                  <Link
                    href={item?.href}
                    className="text-lg font-medium font-inter px-3 py-1 transition-all text-(--text-secondary-color) group-hover:text-(--text-main-color)">
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <CTAButton btnStyle="CTA_SECONDARY" className="reveal">
          Book a Call
        </CTAButton>
      </div>
    </nav>
  );
}

export default NavBarComponent;
