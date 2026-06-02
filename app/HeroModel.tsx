"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  const wrapRef = useRef<HTMLDivElement>(null);

  function onLoad(spline: Application) {
    // No background — let the page show through instead of a grey block.
    spline.setBackgroundColor("transparent");

    // Spline auto-fits the scene to the canvas on load, so the big .spline-stage
    // (see globals.css) gives the tall part vertical room to fit uncropped — but
    // auto-fit also makes it render small, so we zoom back IN to fill the frame.
    spline.setZoom(3.36);

    // Lock the model to a fixed size/position: drag-to-rotate only,
    // no scroll-zoom (size change) and no panning. enableZoom=false is the
    // intended way to stop the wheel from resizing the part — the zoom level
    // stays fixed no matter how you scroll over the canvas.
    const controls = spline.controls;
    if (controls) {
      controls.enableRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;
    }
  }

  // Scroll-driven scale: full size while the hero is at the top of the page,
  // shrinking to zero as you scroll one viewport down (i.e. as it leaves view),
  // and back to full size when you scroll back up. This is a CSS transform on
  // the wrapper — it does NOT touch Spline's internal zoom, which stays locked.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / vh, 0), 1);
      const scale = 1 - progress;
      el.style.transform = `scale(${scale})`;
      el.style.opacity = `${scale}`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-media" ref={wrapRef}>
      <Spline scene={SCENE_URL} onLoad={onLoad} className="spline-stage" />
    </div>
  );
}
