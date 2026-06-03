"use client";

import { useState } from "react";

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* line-icon per service, drawn in the site's monochrome stroke style */
const ICONS: Record<string, React.ReactNode> = {
  molding: (
    <>
      <path d="M4 7h16M4 7v10l8 4 8-4V7M12 11v10" />
      <path d="M4 7l8-4 8 4-8 4-8-4z" />
    </>
  ),
  cnc: (
    <>
      <path d="M3 4h18M12 4v6" />
      <rect x="9" y="10" width="6" height="4" rx="1" />
      <path d="M12 14v3M6 20h12M9 20v-3M15 20v-3" />
    </>
  ),
  sheet: (
    <>
      <path d="M3 8l9-4 9 4-9 4-9-4z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <circle cx="8.5" cy="8" r="0.6" />
      <circle cx="15.5" cy="8" r="0.6" />
    </>
  ),
};

/* Copy referenced from the supplied screenshots, reworded for Procision
   (no competitor names, no 3D printing). Imagery is placeholder. */
const SERVICES = [
  {
    key: "molding",
    tab: "Injection Molding",
    title: "Injection Molding",
    blurb:
      "Affordable, high-quality molded parts and bridge tooling within days. A free moldability review accelerates the design and molding process to save you time and money.",
    points: [
      "Low-volume molding up to 100,000+ parts with volume pricing — no MOQ required",
      "100+ plastic, elastomeric, and silicone rubber materials",
      "Automated CMM for fast, in-house quality documentation",
    ],
    caption: "Injection-molded part · placeholder",
  },
  {
    key: "cnc",
    tab: "CNC Machining",
    title: "CNC Machining",
    blurb:
      "The speed, precision, and reliability you expect — with advanced capabilities like tighter tolerances and volume pricing through our manufacturing network.",
    points: [
      "Machined parts in as fast as 1 day, with optional plating and anodizing in as fast as 4 days",
      "Cost-efficient machined parts at higher volumes",
      "Tolerances down to ±0.001 in. (0.020 mm) through our digital network",
    ],
    caption: "5-axis machined part · placeholder",
  },
  {
    key: "sheet",
    tab: "Sheet Metal Fabrication",
    title: "Sheet Metal Fabrication",
    blurb:
      "From easy quoting to quick-turn production and finishing options — get up to 500 quality sheet metal parts in your hands in days, from a single supplier.",
    points: [
      "Instant quotes with interactive manufacturability feedback",
      "Six sheet metal materials including aluminum, stainless steel, steel, brass, and copper",
      "Finishing options from welding and hardware insertion to powder coating and silk screening",
    ],
    caption: "Fabricated bracket · placeholder",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];

  return (
    <div className="svc">
      {/* tab bar */}
      <div className="svc-tabs" role="tablist" aria-label="Manufacturing services">
        {SERVICES.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === active}
            className={`svc-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.tab}
          </button>
        ))}
      </div>

      {/* active panel */}
      <div className="svc-panel" role="tabpanel">
        <div className="svc-intro">
          <h3>{svc.title}</h3>
          <p>{svc.blurb}</p>
          <a className="btn btn-ghost" href="#start">
            Learn more
            <ArrowRight />
          </a>
        </div>

        <ul className="svc-points">
          {svc.points.map((p) => (
            <li key={p}>
              <span className="svc-check">
                <Check />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div className="svc-media">
          <div className="svc-grid-overlay" aria-hidden="true" />
          <div className="iconwrap svc-media-icon">
            <svg viewBox="0 0 24 24">{ICONS[svc.key]}</svg>
          </div>
          <span className="media-corner media-corner-tl" />
          <span className="media-corner media-corner-br" />
          <span className="svc-caption">{svc.caption}</span>
        </div>
      </div>
    </div>
  );
}
