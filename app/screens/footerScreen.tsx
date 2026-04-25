import Image from "next/image";
import Link from "next/link";
import SkyphrWhiteLogo from "../assets/skyphr-logo-transparent-white.png";
import { SOCIAL_LINKS } from "../data/socilaLinks.data";

function FooterScreen() {
  return (
    <div className="w-full bg-[#111111] py-8 relative overflow-hidden font-inter">
      {/* Huge Background Text */}
      <div className="absolute bottom-[-5%] sm:bottom-[-15%] left-0 right-0 flex justify-center w-full pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] leading-none font-bold text-white/2 font-instrument-sans whitespace-nowrap text-center">
          Skyphr
        </span>
      </div>

      <div className="skyphr-container relative z-10">
        {/* Middle Content */}
        <div className="flex flex-col lg:flex-row justify-between py-16 gap-12 lg:gap-8">
          <div>
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={SkyphrWhiteLogo}
                  alt="Skyphr Logo"
                  width={220}
                  height={57}
                  className="w-[220px] h-[57px] object-contain -ml-2.5"
                />
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Skyphr is a digital agency delivering innovative strategies, creative design, and measurable results for
                brands worldwide.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-10">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-all duration-300">
                  <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>
          {/* Links Columns */}
          <div className="flex flex-row justify-between lg:justify-end gap-16 sm:gap-24 lg:w-1/3 pt-4">
            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-white font-medium text-sm">Quick Links</span>
              </div>
              {["Works", "Blogs", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-neutral-400 hover:text-white transition-colors text-lg font-medium">
                  {link}
                </Link>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-white font-medium text-sm">Social Media</span>
              </div>
              {["Twitter", "Instagram", "Behance", "Dribbble"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-lg font-medium">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4 mt-8">
          <p className="text-(--placeholder-color) text-sm">© {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-(--placeholder-color) text-sm hover:text-(--root-white-color) transition-colors">
              Privacy Policy
            </Link>
            <span className="w-px h-5 bg-(--placeholder-color)"></span>
            <Link href="#" className="text-(--placeholder-color) text-sm hover:text-(--root-white-color) transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterScreen;
