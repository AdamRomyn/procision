"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // blur kicks in once we've scrolled past ~half the above-fold (hero) section
    const hero = document.querySelector<HTMLElement>(".hero");

    const threshold = () =>
      hero ? hero.offsetHeight * 0.5 : window.innerHeight * 0.5;

    const onScroll = () => setScrolled(window.scrollY > threshold());

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // backdrop-filter is set inline (not in CSS) because the build's Lightning CSS
  // strips one of the -webkit-/standard prefix pair; inline keeps both.
  const blurStyle = scrolled
    ? {
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
      }
    : {};

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} style={blurStyle}>
      <div className="wrap navbar">
        <div className="logo">
          PRO<b>C</b>ISION
        </div>
        <nav className="navlinks">
          <div className="navitem">
            <span>
              Services
              <svg viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <div className="mega">
              <div className="cols">
                <div>
                  <h4>Capabilities</h4>
                  <a href="#">CNC machining</a>
                  <a href="#">Multi-axis &amp; 5-axis</a>
                  <a href="#">EDM</a>
                  <a href="#">Injection moulding</a>
                  <a href="#">Cleanroom moulding</a>
                  <a href="#">Inspection &amp; validation</a>
                  <a href="#">Finishing</a>
                </div>
                <div>
                  <h4>By stage</h4>
                  <a href="#">Prototyping</a>
                  <a href="#">First article</a>
                  <a href="#">Low / mid volume</a>
                  <a href="#">Full-rate production</a>
                  <a href="#">Optimise existing parts</a>
                </div>
                <div>
                  <h4>Industries</h4>
                  <a href="#">Medical Devices</a>
                  <a href="#">Aerospace &amp; Defence</a>
                  <a href="#">Industrial Automation</a>
                  <a href="#">Semiconductor</a>
                  <a href="#">EV &amp; Clean Energy</a>
                </div>
              </div>
              <div className="promo">
                <span>
                  Not sure where you fit? Get an engineer&apos;s read on your
                  part.
                </span>
                <a
                  className="btn btn-primary"
                  href="#start"
                  style={{ padding: "9px 16px", fontSize: "13.5px" }}
                >
                  Request a DfM audit
                </a>
              </div>
            </div>
          </div>
          <div className="navitem">
            <span>Case Studies</span>
          </div>
          <div className="navitem">
            <span>Compliance</span>
          </div>
          <div className="navitem">
            <span>About Us</span>
          </div>
        </nav>
        <a className="btn btn-primary" href="#start">
          Request a DfM audit
        </a>
      </div>
    </header>
  );
}
