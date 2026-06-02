"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  function onLoad(spline: Application) {
    // No background — let the page show through instead of a grey block.
    spline.setBackgroundColor("transparent");

    // Zoom out from the scene's default framing so the whole model fits
    // in the stage instead of being cropped at the edges. Tune 0.6–0.9 to taste.
    spline.setZoom(0.7);

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
