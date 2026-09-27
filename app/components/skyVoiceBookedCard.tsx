import { SkyVoiceBookedCardInterface } from "@/app/utils/interface/common.interface";
import { LuCalendarCheck } from "react-icons/lu";

function SkyVoiceBookedCard({ data }: SkyVoiceBookedCardInterface) {
  return (
    <div className="skyai-voice-booked skyai-voice-enter-pop grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-2xl p-3.5">
      <span
        aria-hidden="true"
        className="row-span-2 grid size-9.5 place-items-center rounded-[11px] bg-(--skyai-voice-green) text-(--root-white-color)">
        <LuCalendarCheck className="size-4.5" />
      </span>
      <div className="font-instrument-sans">
        <strong className="block text-sm font-semibold text-(--text-main-color)">{data.title}</strong>
        <span className="text-[13px] text-(--skyai-voice-success-text)">{data.detail}</span>
      </div>
      <ul className="col-start-2 mt-1.5 flex flex-wrap gap-1.5">
        {data.items.map((item) => (
          <li
            key={item.label}
            className="inline-flex items-center gap-1.25 rounded-full bg-(--root-white-color) px-2.5 py-1 font-instrument-sans text-xs font-medium text-(--text-main-color)">
            <span aria-hidden="true" className="text-[13px]">
              {item.icon}
            </span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkyVoiceBookedCard;
