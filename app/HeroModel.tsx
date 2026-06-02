"use client";

import { createElement, useEffect, useRef } from "react";

const VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.12.96/build/spline-viewer.js";
const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLElement>(null);

  // Load the spline-viewer custom-element definition once, client-side.
  useEffect(() => {
    if (!document.querySelector(`script[src="${VIEWER_SRC}"]`)) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = VIEWER_SRC;
      document.head.appendChild(s);
    }
  }, []);

  // Move the model as the hero scrolls past — parallax drift + subtle scale/tilt.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const wrap = wrapRef.current;
      const el = viewerRef.current;
      if (!wrap || !el) return;
      const rect = wrap.getBoundingClientRect();
      // p≈0 while hero is in view, →1 as it scrolls up out of frame.
      const p = Math.max(-1, Math.min(1, -rect.top / window.innerHeight));
      el.style.transform = `translateY(${p * 46}px) scale(${1 - Math.abs(p) * 0.05}) rotate(${p * 3}deg)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-media" ref={wrapRef}>
      <span className="hero-media-frame" aria-hidden="true"></span>
      <div className="media tall spline-stage">
        {createElement("spline-viewer", {
          ref: viewerRef,
          url: SCENE_URL,
          "aria-label": "Interactive 3D precision part",
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
            willChange: "transform",
          },
        })}
        <span
          className="media-corner media-corner-tl"
          aria-hidden="true"
        ></span>
        <span
          className="media-corner media-corner-br"
          aria-hidden="true"
        ></span>
        <div className="media-caption">Drag to explore — a part we machine</div>
      </div>
    </div>
  );
}
