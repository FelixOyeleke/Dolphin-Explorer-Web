"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

// Plays while on screen and pauses when scrolled away. A viewer's own pause is
// respected, and reduced-motion preferences leave playback fully manual.
export default function InViewVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    let userPaused = false;
    let autoPausing = false;

    const onPause = () => { if (!autoPausing && visible) userPaused = true; autoPausing = false; };
    const onPlay = () => { userPaused = false; };
    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !userPaused) {
        video.play().catch(() => {});
      } else if (!visible && !video.paused) {
        autoPausing = true;
        video.pause();
      }
    }, { threshold: 0.35 });
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
    };
  }, []);

  return <video ref={videoRef} {...props} />;
}
