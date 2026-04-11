import DummyImage from "@/app/assets/dummy.webp";
import { TrustedPillInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function TrustedPill({ className }: TrustedPillInterface) {
  return (
    <div
      className={twMerge(
        `flex items-center gap-3 px-4 py-2 rounded-full 
      bg-white/5 backdrop-blur-md border border-white/10 
      shadow-[0_0_20px_rgba(56,70,218,0.5)] w-fit mb-10`,
        className,
      )}>
      {/* Avatars */}
      <div className="flex -space-x-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-(--text-main-color)">
          <Image src={DummyImage} alt="client" width={32} height={32} />
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-(--text-main-color)">
          <Image src={DummyImage} alt="client" width={32} height={32} />
        </div>

        <div
          className="w-8 h-8 rounded-full flex items-center justify-center 
          bg-black text-[10px] text-(--text-white-color) border border-(--text-main-color)">
          <FaPlus />
        </div>
      </div>

      {/* Text */}
      <p className="text-sm text-(--text-main-color) font-medium whitespace-nowrap">Trusted by Growing Startups</p>
    </div>
  );
}
