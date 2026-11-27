import HeroVideo from "@/app/components/common/heroVideo";
import { SKY_VOICE_ORB_VIDEO } from "@/app/utils/constants/common.constant";
import { SkyVoiceOrbInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";

const ORB_MEDIA_CLASS = "skyai-voice-orb-video absolute inset-0 size-full object-cover";

// Sky's orb: a muted looping video played by HeroVideo (which handles Safari's muted-autoplay quirk).
// Reduced motion shows the poster frame instead, so the orb stays still
function SkyVoiceOrb({ reducedMotion }: SkyVoiceOrbInterface) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {reducedMotion && SKY_VOICE_ORB_VIDEO.poster ? (
        <Image src={SKY_VOICE_ORB_VIDEO.poster} alt="" sizes="310px" className={ORB_MEDIA_CLASS} />
      ) : (
        <HeroVideo data={SKY_VOICE_ORB_VIDEO} className={ORB_MEDIA_CLASS} />
      )}
    </div>
  );
}

export default SkyVoiceOrb;
