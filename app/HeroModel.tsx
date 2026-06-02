"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  function onLoad(spline: Application) {
    // No background — let the page show through instead of a grey block.
    spline.setBackgroundColor("transparent");

    // Spline auto-fits the scene to the canvas on load, so the big .spline-stage
    // (see globals.css) gives the tall part vertical room to fit uncropped — but
    // auto-fit also makes it render small, so we zoom back IN to fill the frame.
    // 3.36 = previous 2.4 ×1.4 — Adam asked for the part 1.4× bigger. Zoom
    // scales the object's apparent size linearly. The stage + model column are
    // also enlarged (globals.css) so the bigger part has room and doesn't clip.
    spline.setZoom(3.36);

    // Lock the model to a fixed size/position: drag-to-rotate only,
    // no scroll-zoom (size change) and no panning (position change).
    // This is Spline's native OrbitControls — enableZoom=false is the
    // intended way to stop the wheel from resizing the part.
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
