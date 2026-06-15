/* "How to get started" — five swappable designs (variant 1–5).
   The site is strict monochrome (black / white / grey) with sharp corners,
   so every variant stays inside that system but gives the section more energy
   than the original two flat cards. */

import FactoryVideo from "./FactoryVideo";

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
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const NewIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const ExistingIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    <path d="M21 3v5h-5" />
  </svg>
);

/* the two ways to work with Procision — shared across variants */
const PATHS = [
  {
    eyebrow: "New product",
    title: "Prototype → production",
    body: "Got a design or an idea? We prototype it, prove it out together, and scale the same part to thousands — on one quality system, without re-sourcing.",
    points: [
      "Free DfM review before any tooling",
      "First article validated against your spec",
      "One supplier from 10 units to 10,000",
    ],
    cta: "Start a new project",
    Icon: NewIcon,
  },
  {
    eyebrow: "Existing product",
    title: "Work with parts you already make",
    body: "Already in production elsewhere? Send us the part you make today and we'll deliver it to a higher standard, at a better price, or faster.",
    points: [
      "Benchmark against your current supplier",
      "Engineer-led cost & quality review",
      "Switch over without re-qualifying from zero",
    ],
    cta: "Optimise an existing part",
    Icon: ExistingIcon,
  },
];

/* a guided "how it works" sequence — used by the timeline variants */
const STEPS = [
  {
    title: "Share your part or idea",
    body: "Send a drawing, a CAD file, or just a sample of what you make today.",
  },
  {
    title: "Free DfM review",
    body: "An engineer reviews manufacturability, cost, and risks — before any tooling.",
  },
  {
    title: "First article validated",
    body: "We prove the part against your spec with full inspection documentation.",
  },
  {
    title: "Scale to production",
    body: "Ramp the same validated part from tens to tens of thousands, one supplier.",
  },
];

const SectionHead = ({
  light = false,
  lead = "Two ways to work with us.",
}: {
  light?: boolean;
  lead?: string;
}) => (
  <div className={`sectionhead center${light ? " is-light" : ""}`}>
    <div className="eyebrow">Get started</div>
    <h2>How to get started.</h2>
    <p className="lead">{lead}</p>
  </div>
);

/* ---------------- Variant 1 — numbered split, primary path inverted ------- */
function V1() {
  return (
    <section className="pad gs gs1">
      <div className="wrap">
        <div className="sectionhead center">
          <div className="eyebrow">Get started</div>
          <h2>
            Two ways in.
            <br />
            One quality system.
          </h2>
          <p className="lead">Two ways to work with us.</p>
        </div>
        <div className="gs1-grid">
          {PATHS.map((p, i) => (
            <div className={`gs1-card${i === 0 ? " is-primary" : ""}`} key={p.title}>
              <span className="gs1-num">{`0${i + 1}`}</span>
              <div className="gs1-icon">
                <p.Icon />
              </div>
              <div className="eyebrow">{p.eyebrow}</div>
              <h3>{p.title}</h3>
              <p className="gs1-body">{p.body}</p>
              <ul className="gs-list">
                {p.points.map((pt) => (
                  <li key={pt}>
                    <Check />
                    {pt}
                  </li>
                ))}
              </ul>
              <a className={`btn ${i === 0 ? "btn-light" : "btn-primary"}`} href="#start">
                {p.cta}
                <ArrowRight />
              </a>
            </div>
          ))}
        </div>
        <FactoryVideo />
      </div>
    </section>
  );
}

/* ---------------- Variant 2 — guided process timeline + single CTA -------- */
function V2() {
  return (
    <section className="pad gs gs2">
      <div className="wrap">
        <SectionHead lead="From first conversation to full-rate production — four steps." />
        <ol className="gs2-track">
          {STEPS.map((s, i) => (
            <li className="gs2-step" key={s.title}>
              <span className="gs2-node">{i + 1}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="gs2-cta">
          <a className="btn btn-primary" href="#start">
            Start with a free DfM review
            <ArrowRight />
          </a>
          <a className="btn btn-ghost" href="#">
            Or talk to an engineer
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Variant 3 — editorial split (statement + path list) ----- */
function V3() {
  return (
    <section className="pad gs gs3">
      <div className="wrap">
        <div className="gs3-grid">
          <div className="gs3-lead">
            <div className="eyebrow">Get started</div>
            <h2>
              Two ways in.
              <br />
              One quality system.
            </h2>
            <p className="lead">
              Whether you&apos;re starting from a sketch or switching an existing
              part, you work with the same engineers from first quote to
              full-rate production.
            </p>
            <a className="btn btn-primary" href="#start">
              Talk to an engineer
              <ArrowRight />
            </a>
          </div>
          <div className="gs3-paths">
            {PATHS.map((p) => (
              <a className="gs3-path" href="#start" key={p.title}>
                <div className="gs3-path-icon">
                  <p.Icon />
                </div>
                <div className="gs3-path-copy">
                  <div className="eyebrow">{p.eyebrow}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <span className="link gs3-path-link">
                    {p.cta}
                    <ArrowRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Variant 4 — full-black high-contrast band --------------- */
function V4() {
  return (
    <section className="pad gs gs4">
      <div className="wrap">
        <SectionHead light />
        <div className="gs4-grid">
          {PATHS.map((p, i) => (
            <div className="gs4-card" key={p.title}>
              <span className="gs4-rule" />
              <div className="gs4-top">
                <div className="gs4-icon">
                  <p.Icon />
                </div>
                <span className="gs4-num">{`0${i + 1}`}</span>
              </div>
              <div className="eyebrow">{p.eyebrow}</div>
              <h3>{p.title}</h3>
              <p className="gs4-body">{p.body}</p>
              <ul className="gs-list">
                {p.points.map((pt) => (
                  <li key={pt}>
                    <Check />
                    {pt}
                  </li>
                ))}
              </ul>
              <a className="btn btn-light" href="#start">
                {p.cta}
                <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Variant 5 — concierge action card (single dark panel) --- */
function V5() {
  return (
    <section className="pad gs gs5">
      <div className="wrap">
        <div className="gs5-card">
          <div className="gs5-head">
            <div className="eyebrow">Get started</div>
            <h2>Tell us what you&apos;re making.</h2>
            <p>
              Pick where you are today — an engineer takes it from there with
              feasibility, risks, and how we&apos;d build it.
            </p>
          </div>
          <div className="gs5-paths">
            {PATHS.map((p, i) => (
              <div className="gs5-path" key={p.title}>
                <div className="gs5-path-head">
                  <div className="gs5-icon">
                    <p.Icon />
                  </div>
                  <span className="gs5-tag">{`0${i + 1} · ${p.eyebrow}`}</span>
                </div>
                <h3>{p.title}</h3>
                <ul className="gs-list">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a className="link gs5-link" href="#start">
                  {p.cta}
                  <ArrowRight />
                </a>
              </div>
            ))}
          </div>
          <div className="gs5-actions">
            <a className="btn btn-light" href="#start">
              Upload a part for review
              <ArrowRight />
            </a>
            <a className="btn btn-outline-light" href="#">
              Book a 15-min call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GetStarted({ variant = 1 }: { variant?: number }) {
  switch (variant) {
    case 2:
      return <V2 />;
    case 3:
      return <V3 />;
    case 4:
      return <V4 />;
    case 5:
      return <V5 />;
    default:
      return <V1 />;
  }
}
