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
    const controls = spline.controls;
    if (controls) {
      controls.enableRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;

      // Steady, slow azimuth spin. autoRotate only fires while idle
      // (state === -1), so it politely pauses whenever you grab the model.
      // Speed is in OrbitControls units: angle/frame = 2π/3600 * speed,
      // so ~1.2 ≈ one full turn every ~50s — a gentle drift, not a whirl.
      controls.autoRotate = true;
      controls.autoRotateClockwise = true;
      controls.autoRotateSpeed = 1.2;
    }

    startAutoRotate(spline);
  }

  // Idle tumble: the steady Y spin comes from controls.autoRotate (above);
  // here we add a slow polar (up/down) wobble so the model appears to rotate
  // along more than one axis instead of spinning flat like a turntable. The
  // wobble is a sine wave, so phi returns to where it started each cycle and
  // never drifts toward the poles. We also requestRender() every frame: if the
  // scene is otherwise static, that's what keeps the runtime's loop alive so
  // autoRotate actually advances.
  function startAutoRotate(spline: Application) {
    const controls = spline.controls;
    if (!controls?.rotateUp) return;

    const PHI_AMP = 0.22; // ~13° of tilt sway — subtle
    const PHI_FREQ = 0.0085; // radians of wave phase per frame (slow)
    let frame = 0;
    let prevTarget = 0;

    const tick = () => {
      frame += 1;
      const target = PHI_AMP * Math.sin(frame * PHI_FREQ);
      // rotateUp(e) does sphericalDelta.phi -= e, so negate to follow `target`.
      controls.rotateUp(-(target - prevTarget));
      prevTarget = target;
      spline.requestRender?.();
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
