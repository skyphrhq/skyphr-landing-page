import { OurValueCardInterface } from "@/app/utils/interface/common.interface";

function OurValueCommonCard({ icon, title, description, bgColor }: OurValueCardInterface) {
  return (
    <div
      className="w-full h-full border border-(--text-secondary-color) rounded-lg md:rounded-xl lg:rounded-2xl p-5 md:p-10 flex flex-col gap-8 justify-start overflow-hidden"
      style={{ backgroundColor: bgColor }}>
      <div
        className="flex items-center justify-center w-15 h-15 rounded-xl"
        style={{ backgroundColor: "white", color: "black" }}>
        {icon}
      </div>

      <div className="w-full">
        <h3 className="font-instrument-sans text-[20px] md:text-[26px] lg:text-[28px] font-bold mb-3 text-(--root-black-color)">{title}</h3>
        <p className="font-instrument-sans text-sm sm:text-base md:text-lg font-normal text-(--text-main-color) leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OurValueCommonCard;
