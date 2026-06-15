"use client";

import { useEffect, useRef, useState } from "react";

/* Real factory footage (CNC machine, Pexels — hotlinkable, no audio track used).
   Swap this src for the owner-led walkthrough when the real film is ready. */
const SRC =
  "https://videos.pexels.com/video-files/31751330/13528045_2560_1440_25fps.mp4";

export default function FactoryVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  /* once the visitor manually pauses, don't let scroll auto-resume it */
  const userPaused = useRef(false);
  const [paused, setPaused] = useState(true);

  /* autoplay (muted) once the section scrolls into view, pause when it leaves */
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  /* click toggles play / pause */
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <figure
      className={`gs-video${paused ? " is-paused" : ""}`}
      onClick={toggle}
      role="button"
      aria-label={paused ? "Play factory walkthrough" : "Pause factory walkthrough"}
    >
      <video
        ref={ref}
        src={SRC}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      <span className="gs-video-shade" aria-hidden="true" />
      <span className="gs-video-play" aria-hidden="true">
        <span>
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <figcaption className="gs-video-cap">
        Owner-led factory &amp; cleanroom walkthrough
      </figcaption>
    </figure>
  );
}
