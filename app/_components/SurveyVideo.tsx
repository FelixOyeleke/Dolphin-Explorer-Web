import InViewVideo from "./InViewVideo";
import type { SurveyVideoSource } from "./survey-data";

export default function SurveyVideo({ video, className = "data-video" }: { video: SurveyVideoSource; className?: string }) {
  return (
    <figure className={className}>
      <InViewVideo
        src={video.src}
        width={video.width}
        height={video.height}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={video.label}
      />
      <figcaption>
        <p className="console-caption-title"><span className="console-caption-label">{video.badge}</span>{video.caption}</p>
      </figcaption>
    </figure>
  );
}
