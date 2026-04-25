import { OurValueCardInterface } from "@/app/utils/interface/common.interface";

function OurValueCommonCard({ icon: Icon, title, description, bgColor }: OurValueCardInterface) {
  return (
    <div
      className="w-full h-full border border-(--text-secondary-color) rounded-2xl p-10 flex flex-col gap-8 justify-start overflow-hidden"
      style={{ backgroundColor: bgColor }}>
      <div
        className="flex items-center justify-center w-15 h-15 rounded-xl"
        style={{ backgroundColor: "white", color: "black" }}>
        <Icon className="text-2xl" />
      </div>

      <div className="w-full">
        <h3 className="font-instrument-sans text-[26px] font-bold mb-3 text-(--root-black-color)">{title}</h3>
        <p className="font-instrument-sans text-lg font-normal text-(--text-main-color) leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OurValueCommonCard;
