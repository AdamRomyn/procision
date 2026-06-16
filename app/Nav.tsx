"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* small outline glyphs for the mega-menu item boxes — one unique per item */

// Capabilities
const IconCnc = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3v8m-3 0h6l-1.5 4h-3L9 11zM4 20h16" />
  </svg>
);
const IconMultiAxis = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19.5 8.5A8 8 0 1 0 20 13M20 3v6h-6" />
  </svg>
);
const IconEdm = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13 3 5 13h5l-1 8 8-11h-5z" />
  </svg>
);
const IconInjection = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 4v16M20 4v16M4 8h4v8H4M20 8h-4v8h4M8 12h8" />
  </svg>
);
const IconCleanroom = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 5 6v6c0 4 3 6 7 9 4-3 7-5 7-9V6zM9 12l2 2 4-4" />
  </svg>
);
const IconInspection = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM8 11l2 2 4-4M16 16l5 5" />
  </svg>
);
const IconFinishing = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2v5m0 10v5M2 12h5m10 0h5M5 5l3 3m8 8 3 3M5 19l3-3m8-8 3-3" />
  </svg>
);

// By stage
const IconPrototyping = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4" />
  </svg>
);
const IconFirstArticle = () => (
  <svg viewBox="0 0 24 24">
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.5 6.8 19l1-5.8-4.3-4.1 5.9-.9z" />
  </svg>
);
const IconLowVolume = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 8h7v7H4zM13 11h7v7h-7z" />
  </svg>
);
const IconFullRate = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 21V10l6 4V10l6 4V6l6 4v11H3zM7 17h2m4 0h2" />
  </svg>
);
const IconOptimise = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 17l5-5 3 3 7-7m0 0h-4m4 0v4" />
  </svg>
);

// Industries
const IconMedical = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 12h4l2-5 3 11 2-6 1.5 0M16 12h6" />
  </svg>
);
const IconConsumer = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 8h12l-1 11H7L6 8zM9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);
const IconElectronic = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 7h10v10H7zM9 9h6v6H9M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2" />
  </svg>
);
const IconAutomotive = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 13l2-6h14l2 6v5h-3v-2H6v2H3v-5zM6 16h.01M18 16h.01" />
  </svg>
);

/* primary links + a compact capabilities list for the mobile menu.
   href "#" = placeholder page not built yet */
const MOBILE_PRIMARY = [
  { label: "Services", href: "/cnc-machining" },
  { label: "Case Studies", href: "#" },
  { label: "About Us", href: "/about" },
];
const MOBILE_CAPABILITIES = [
  { label: "CNC machining", href: "/cnc-machining" },
  { label: "Injection moulding", href: "#" },
  { label: "Cleanroom moulding", href: "#" },
  { label: "Inspection & validation", href: "#" },
  { label: "Optimise existing parts", href: "#" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  // close the menu when the viewport grows back to desktop, or on Escape
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

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
                    <Link className="mega-item" href="/cnc-machining">
                      <span className="mega-ico">
                        <IconCnc />
                      </span>
                      CNC machining
                    </Link>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconMultiAxis />
                      </span>
                      Multi-axis &amp; 5-axis
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconEdm />
                      </span>
                      EDM
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconInjection />
                      </span>
                      Injection moulding
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconCleanroom />
                      </span>
                      Cleanroom moulding
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconInspection />
                      </span>
                      Inspection &amp; validation
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconFinishing />
                      </span>
                      Finishing
                    </a>
                  </div>
                  <div className="mega-group">
                    <h4>By stage</h4>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconPrototyping />
                      </span>
                      Prototyping
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconFirstArticle />
                      </span>
                      First article
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconLowVolume />
                      </span>
                      Low / mid volume
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconFullRate />
                      </span>
                      Full-rate production
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconOptimise />
                      </span>
                      Optimise existing parts
                    </a>
                  </div>
                  <div className="mega-group">
                    <h4>Industries</h4>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconMedical />
                      </span>
                      Medical Industry
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconConsumer />
                      </span>
                      Consumer Products
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconElectronic />
                      </span>
                      Electronic Industry
                    </a>
                    <a className="mega-item" href="#">
                      <span className="mega-ico">
                        <IconAutomotive />
                      </span>
                      Automotive Industry
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
            <Link href="/about">About Us</Link>
          </div>
        </nav>
        <a className="btn btn-primary nav-cta" href="#start">
          Request a DfM audit
        </a>
        <button
          type="button"
          className={`nav-burger${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-burger-box" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* mobile slide-down menu (≤860px) */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu-primary">
          {MOBILE_PRIMARY.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-group">
          <h4>Capabilities</h4>
          {MOBILE_CAPABILITIES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          className="btn btn-primary mobile-menu-cta"
          href="#start"
          onClick={() => setMenuOpen(false)}
        >
          Request a DfM audit
        </a>
      </div>
    </header>
  );
}
