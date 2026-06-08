"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const autoRotateRaf = useRef(0);

  // Stop the idle-tumble loop when the component unmounts.
  useEffect(() => {
    return () => {
      if (autoRotateRaf.current) cancelAnimationFrame(autoRotateRaf.current);
    };
  }, []);

  function onLoad(spline: Application) {
    // No background — let the page show through instead of a grey block.
    spline.setBackgroundColor("transparent");

    // Spline auto-fits the scene to the canvas on load, so the big .spline-stage
    // (see globals.css) gives the tall part vertical room to fit uncropped — but
    // auto-fit also makes it render small, so we zoom back IN to fill the frame.
    spline.setZoom(4.6);

    // Lock the model to a fixed size/position: drag-to-rotate only,
    // no scroll-zoom (size change) and no panning. enableZoom=false is the
    // intended way to stop the wheel from resizing the part — the zoom level
    // stays fixed no matter how you scroll over the canvas.
    //
    // Spline's controls are Three.js OrbitControls: "rotate" orbits the CAMERA
    // around the scene's target, which is why the model reads as staying
    // centered no matter the angle. We lean on that for the idle auto-rotate
    // below — orbiting the camera can't scatter or deform the model the way
    // spinning individual mesh objects would.
    //
    // NOTE: spline.controls is Spline's WRAPPER, not the raw OrbitControls. The
    // wrapper's `autoRotate` flag does nothing in renderMode 'auto' (verified at
    // runtime, iter041) because Spline never ticks it. The actual OrbitControls
    // lives at controls.orbitControls and is what we drive by hand below.
    const controls = spline.controls;
    if (controls) {
      controls.enableRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;
    }

    startAutoRotate(spline);
  }

  // Idle spin — driven entirely by hand. Spline's renderMode is 'auto', so it
  // will NOT tick OrbitControls.autoRotate on its own (the camera just sits
  // still — that was the "no rotation" bug). We run our own rAF loop instead.
  //
  // CLOSED-LOOP, TIME-BASED control: Spline's OrbitControls is customised
  // (damping + a rotationRangeFactor that scales rotateLeft by an unknown gain),
  // so feeding a fixed per-frame delta gives an unpredictable, fps-dependent
  // speed. Instead we compute the *target* azimuth from elapsed wall-clock time
  // (RATE rad/s) and nudge the camera toward it each frame with a proportional
  // gain. Result: the same real-world speed regardless of frame rate or Spline's
  // internal gain. We talk to controls.orbitControls (the real OrbitControls) —
  // only the inner object exposes rotateLeft / update / the live spherical.
  function startAutoRotate(spline: Application) {
    const oc = spline.controls?.orbitControls;
    if (
      !oc ||
      typeof oc.rotateLeft !== "function" ||
      typeof oc.update !== "function" ||
      !oc.spherical
    )
      return;

    oc.autoRotate = false; // we drive it ourselves; don't let update() compound

    const RATE = 0.26; // rad/s → one full revolution every ~24s (gentle)
    const GAIN = 0.18; // P-correction per frame; low enough to stay stable
    // Keep error in [-π, π] so wrapping past ±π doesn't cause a huge jump.
    const wrap = (d: number) => Math.atan2(Math.sin(d), Math.cos(d));

    let startTheta = 0;
    let startTime = 0;
    const tick = (now: number) => {
      if (!startTime) {
        startTime = now;
        startTheta = oc.spherical.theta;
      }
      const elapsed = (now - startTime) / 1000;
      const targetTheta = startTheta - RATE * elapsed; // clockwise drift
      const err = wrap(targetTheta - oc.spherical.theta);
      // rotateLeft(a) DECREASES spherical.theta, so move toward the target by
      // feeding the negated error (verified at runtime, iter041).
      oc.rotateLeft(-err * GAIN); // nudge azimuth toward the target
      oc.update(); // apply to the camera
      spline.requestRender?.(); // draw it
      autoRotateRaf.current = requestAnimationFrame(tick);
    };
    autoRotateRaf.current = requestAnimationFrame(tick);
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
