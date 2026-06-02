"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  function onLoad(spline: Application) {
    // No background — let the page show through instead of a grey block.
    spline.setBackgroundColor("transparent");

    // Spline auto-fits the scene to the canvas on load, so a taller .spline-stage
    // (see globals.css) gives the tall part vertical room to fit uncropped — but
    // auto-fit also makes it render small, so we zoom back IN to fill the frame.
    // 1.7 keeps the whole part in view with comfortable margins. Tune ~1.2–2.0.
    spline.setZoom(1.7);

    // Lock the model to a fixed size/position: drag-to-rotate only,
    // no scroll-zoom (size change) and no panning (position change).
    const controls = spline.controls;
    if (controls) {
      controls.enableRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;
    }
  }

  return (
    <div className="hero-media">
      <Spline scene={SCENE_URL} onLoad={onLoad} className="spline-stage" />
    </div>
  );
}
