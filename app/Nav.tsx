"use client";

import { useEffect, useState } from "react";

/* small outline glyphs for the mega-menu item boxes — one per group */
const IconTool = () => (
  <svg viewBox="0 0 24 24">
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" />
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 18l9 5 9-5" />
  </svg>
);
const IconIndustry = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 21V9l6 3V9l6 3V6l6 3v12H3zM7 17h2M13 17h2M17 17h0" />
  </svg>
);

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
              <div className="mega-inner">
                {/* left feature panel — intro + CTA (Procision dark theme) */}
                <aside className="mega-feature">
                  <span className="mega-feature-mark" aria-hidden="true">
                    PRO<b>C</b>
                  </span>
                  <div>
                    <h3>Our services</h3>
                    <p>
                      From first prototype to full-rate production — one
                      supplier, one quality system.
                    </p>
                  </div>
                  <a
                    className="btn btn-primary"
                    href="#start"
                    style={{ padding: "9px 16px", fontSize: "13.5px" }}
                  >
                    Request a DfM audit
                  </a>
                </aside>

                {/* right — grouped item boxes, reference-style icon + label */}
                <div className="mega-groups">
                  <div className="mega-group">
                    <h4>Capabilities</h4>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      CNC machining
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      Multi-axis &amp; 5-axis
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      EDM
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      Injection moulding
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      Cleanroom moulding
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      Inspection &amp; validation
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconTool />
                      </span>
                      Finishing
                    </a>
                  </div>
                  <div className="mega-group">
                    <h4>By stage</h4>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconLayers />
                      </span>
                      Prototyping
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconLayers />
                      </span>
                      First article
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconLayers />
                      </span>
                      Low / mid volume
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconLayers />
                      </span>
                      Full-rate production
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconLayers />
                      </span>
                      Optimise existing parts
                    </a>
                  </div>
                  <div className="mega-group">
                    <h4>Industries</h4>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconIndustry />
                      </span>
                      Medical Devices
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconIndustry />
                      </span>
                      Aerospace &amp; Defence
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconIndustry />
                      </span>
                      Industrial Automation
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconIndustry />
                      </span>
                      Semiconductor
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconIndustry />
                      </span>
                      EV &amp; Clean Energy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navitem">
            <span>Case Studies</span>
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
