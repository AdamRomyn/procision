import HeroModel from "./HeroModel";
import Nav from "./Nav";
import ServicesTabs from "./ServicesTabs";
import GetStarted from "./GetStarted";

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

const Phone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* dummy client wordmarks for the grayscale scroller (placeholder) */
const LOGOS = [
  "NORTHWIND",
  "AXIOM",
  "VERTEX",
  "MERIDIAN",
  "CALIBRE",
  "HELIOS",
  "FORGEWORKS",
  "APEX DYNAMICS",
];

/* one marquee group must be wider than any viewport for the -50% loop to be
   seamless (otherwise the track exposes white space before it wraps), so repeat
   the list enough to comfortably exceed ultra-wide screens */
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

/* simple geometric marks so each placeholder reads as a logo */
const LogoMark = ({ variant }: { variant: number }) => {
  const marks = [
    <path key="0" d="M12 2 2 22h20L12 2z" />,
    <circle key="1" cx="12" cy="12" r="9" />,
    <rect key="2" x="3" y="3" width="18" height="18" rx="2" />,
    <path key="3" d="M12 2v20M2 12h20" />,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none">
      {marks[variant % marks.length]}
    </svg>
  );
};

const DummyLogo = ({ name, variant }: { name: string; variant: number }) => (
  <span className="dummylogo">
    <LogoMark variant={variant} />
    {name}
  </span>
);

/* case studies — placeholder copy + stock imagery (Unsplash, swap for real shots before prod) */
const CASES = [
  {
    code: "PRT-0418",
    tag: "Medical Devices",
    title: "Medical device OEM",
    alt: "Operators in cleanroom suits on a sterile medical manufacturing floor",
    image:
      "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?auto=format&fit=crop&w=2000&q=80&fm=jpg",
    blurb:
      "A medical OEM needed to scale a sterile-packaged housing from pilot to full production without losing lot traceability. We stood up Class 8 cleanroom moulding under ISO 13485 with automated CMM inspection on every run — cutting scrap and holding documentation audit-ready throughout.",
    kpis: [
      { v: "0.4%", k: "Scrap rate" },
      { v: "12 days", k: "Lead time" },
      { v: "240", k: "Batches shipped" },
    ],
  },
  {
    code: "PRT-0732",
    tag: "Aerospace & Defence",
    title: "Aerospace supplier",
    alt: "Precision metal shaft being turned in a CNC lathe chuck",
    image:
      "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?auto=format&fit=crop&w=2000&q=80&fm=jpg",
    blurb:
      "An aerospace supplier needed flight-critical machined parts held to tight tolerances across a multi-year program. We locked first-article inspection and SPC into a repeatable 5-axis process, so every batch shipped to spec — on schedule and at a lower landed cost than the incumbent.",
    kpis: [
      { v: "±0.001\"", k: "Tolerance held" },
      { v: "99.6%", k: "On-time rate" },
      { v: "−18%", k: "Cost / part" },
    ],
  },
  {
    code: "PRT-1095",
    tag: "Supplier switch",
    title: "Switched from another supplier",
    alt: "Close-up of a CNC machine cutting metal with coolant flowing",
    image:
      "https://images.unsplash.com/photo-1645754884968-a00b7ed62c43?auto=format&fit=crop&w=2000&q=80&fm=jpg",
    blurb:
      "A customer was stuck with a slow incumbent and needed to move suppliers without re-qualifying from scratch. We reverse-engineered the existing tooling, matched the validated process, and ran a side-by-side PPAP — so they switched with zero line-down risk and immediate savings.",
    kpis: [
      { v: "22%", k: "Cost saved" },
      { v: "−50%", k: "Lead time" },
      { v: "6 wks", k: "Re-qual time" },
    ],
  },
];

export default function Home() {
  return <Landing variant={1} />;
}

/* Shared landing page. The "How to get started" section is swapped out per
   variant (1–5) so /1 … /5 can A/B different designs of that block. */
export function Landing({ variant = 1 }: { variant?: number }) {
  return (
    <>
      {/* ============ NAV ============ */}
      <Nav />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap pad">
          <div className="hero-grid">
            <div>
              <h1 style={{ fontSize: "clamp(32px, 4.4vw, 52px)" }}>
                <span className="accentword">
                  Precision CNC &amp; Injection Molding.
                </span>
              </h1>
              <p className="lead">
                A Western-owned precision manufacturer in China — engineer to
                engineer, from first prototype to full production.
              </p>
              <div className="btns">
                <a className="btn btn-primary" href="#start">
                  Upload CAD
                  <ArrowRight />
                </a>
                <a className="btn btn-light" href="#start">
                  <Phone />
                  Book a call
                </a>
              </div>
              <hr className="hero-rule" />
              <div className="pills">
                <span className="pill pill-bare">
                  <span className="pill-dot"></span>ISO 9001
                </span>
                <span className="pill pill-bare">
                  <span className="pill-dot"></span>ISO 13485
                </span>
                <span className="pill pill-bare">
                  <span className="pill-dot"></span>Class 8 Cleanroom Molding
                </span>
                <span className="pill pill-bare">
                  <span className="pill-dot"></span>AEO Certified
                </span>
              </div>
              <div className="founders">
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
                Founders from the UK, Denmark &amp; South Africa — living in
                China.
              </div>
              <dl className="herostats">
                <div className="herostat">
                  <dd className="herostat-num">500</dd>
                  <dt className="herostat-lbl">Customers</dt>
                </div>
                <div className="herostat">
                  <dd className="herostat-num">65</dd>
                  <dt className="herostat-lbl">Countries</dt>
                </div>
                <div className="herostat">
                  <dd className="herostat-num">500M</dd>
                  <dt className="herostat-lbl">Parts produced</dt>
                </div>
              </dl>
            </div>
            <HeroModel />
          </div>
        </div>
      </section>

      {/* ============ LOGO SCROLLER (just below fold) ============ */}
      <section className="logos">
        {/* seamless infinite marquee: two identical groups, track scrolls -50% */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <div className="marquee-group">
              {MARQUEE_LOGOS.map((name, i) => (
                <DummyLogo key={`a-${i}`} name={name} variant={i % LOGOS.length} />
              ))}
            </div>
            <div className="marquee-group">
              {MARQUEE_LOGOS.map((name, i) => (
                <DummyLogo key={`b-${i}`} name={name} variant={i % LOGOS.length} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MEET THE TEAM (just below fold) ============ */}
      <section className="pad team">
        <div className="wrap">
          <div className="team-grid">
            <div className="team-copy">
              <div className="eyebrow">Meet the team</div>
              <h2>We are a world-class manufacturing team.</h2>
              <p className="lead">
                Four Western founders living in China, and 120 staff across every
                discipline — all passionate about making the best parts for the
                best products in the world.
              </p>

              <ul className="team-trust">
                <li>
                  <Check />
                  Western Engineering Standards
                </li>
                <li>
                  <Check />
                  Engineer-to-engineer, owners on the floor
                </li>
                <li>
                  <Check />
                  ISO 9001 &amp; ISO 13485 certified
                </li>
              </ul>

              <div className="btns">
                <a className="btn btn-primary" href="#">
                  Learn more
                  <ArrowRight />
                </a>
              </div>
            </div>

            {/* founders photo, framed + captioned so the section doesn't read plain */}
            <div className="team-photo-wrap">
              <figure className="team-photo">
                <span className="media-code">THE FOUNDERS</span>
                <img
                  src="/founders.avif"
                  alt="The four founders of Procision together at the factory in China"
                  loading="lazy"
                />
                <div className="team-photo-cap">
                  <span className="team-flag">UK · Denmark · South Africa</span>
                </div>
              </figure>
              {/* floating stat badge — visual interest + reinforces the numbers */}
              <div className="team-badge">
                <div>
                  <strong>4</strong>
                  <span>Founders</span>
                </div>
                <div className="team-badge-div" />
                <div>
                  <strong>120</strong>
                  <span>Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANUFACTURING SERVICES ============ */}
      <section className="pad">
        <div className="wrap">
          <div className="sectionhead left">
            <div className="eyebrow">Capabilities</div>
            <h2>Our manufacturing services</h2>
            <p className="lead">
              One supplier, one quality system — from first prototype to
              full-rate production.
            </p>
          </div>

          <ServicesTabs />
        </div>
      </section>

      {/* ============ CASE STUDIES (massive images) ============ */}
      <section className="pad csfeature">
        <div className="wrap">
          <div className="sectionhead left">
            <div className="eyebrow">Case studies</div>
            <h2>Real parts. Real outcomes.</h2>
            <p className="lead">
              Challenge → what we did → result. Real numbers, real programs.
            </p>
          </div>
          <div className="csbig-stack">
            {CASES.map((c, i) => (
              <article className="csbig" key={i}>
                <span className="media-code">{c.code}</span>
                <img
                  className="csbig-img"
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                />
                <div className="csbig-shade" />
                <div
                  className="csbig-panel"
                  style={{
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  <span className="csbig-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                  <div className="kpis kpis-glass">
                    {c.kpis.map((kpi) => (
                      <span className="kpi" key={kpi.k}>
                        <strong>{kpi.v}</strong>
                        <em>{kpi.k}</em>
                      </span>
                    ))}
                  </div>
                  <a className="link readmore" href="#">
                    Read more
                    <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 48 }}>
            <a className="btn btn-ghost" href="#">
              View all case studies
            </a>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET STARTED (swappable design per variant) ============ */}
      <GetStarted variant={variant} />

      {/* ============ FAQ ============ */}
      <section className="pad">
        <div className="wrap">
          <div className="sectionhead center">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faqgrid">
          <details className="acc">
            <summary>
              Are you audit-ready?<span className="pm">+</span>
            </summary>
            <p className="ans">
              ISO 9001 &amp; ISO 13485, full traceability and IQ/OQ/PQ process
              validation. Download our compliance pack and review the
              documentation before you commit.
            </p>
          </details>
          <details className="acc">
            <summary>
              What about my IP?<span className="pm">+</span>
            </summary>
            <p className="ans">
              NDAs up front, controlled access, and a Western-owned company you
              can hold accountable under terms you understand. Your design
              isn&apos;t disappearing into an anonymous supply chain.
            </p>
          </details>
          <details className="acc">
            <summary>
              What are your minimum order quantities?
              <span className="pm">+</span>
            </summary>
            <p className="ans">
              We&apos;re built for prototype-to-production and ongoing
              production — start with a single first article and scale on the
              same quality system. No artificial minimum to begin.
            </p>
          </details>
          <details className="acc">
            <summary>
              What are your lead times?<span className="pm">+</span>
            </summary>
            <p className="ans">
              <em>[Adam to confirm exact windows.]</em> We can compress lead
              times when you need speed (at a premium), or hit standard windows
              at market-related cost. You&apos;ll get a firm date with your DfM
              review.
            </p>
          </details>
          <details className="acc">
            <summary>
              How do you keep quality consistent batch to batch?
              <span className="pm">+</span>
            </summary>
            <p className="ans">
              One quality system from first article to mass production,
              inspected on the floor with CMM and full traceability — so batch
              four matches the first article, and issues are caught in China,
              not your warehouse.
            </p>
          </details>
          <details className="acc">
            <summary>
              Can you work from my existing supplier&apos;s drawings or parts?
              <span className="pm">+</span>
            </summary>
            <p className="ans">
              Yes. Send us the part you make today and we&apos;ll benchmark it,
              run an engineer-led cost &amp; quality review, and switch you over
              without re-qualifying from zero.
            </p>
          </details>
          <details className="acc">
            <summary>
              What processes and materials do you cover?
              <span className="pm">+</span>
            </summary>
            <p className="ans">
              Multi-axis CNC milling &amp; turning, EDM, injection moulding
              (including medical-grade cleanroom moulding), inspection/validation
              and finishing — across metals and engineering plastics.
            </p>
          </details>
          <details className="acc">
            <summary>
              How do shipping and customs work?<span className="pm">+</span>
            </summary>
            <p className="ans">
              <em>[Confirm AEO status / incoterms.]</em> We manage export and
              logistics so qualified parts arrive where you need them, with the
              paperwork handled.
            </p>
          </details>
          <details className="acc">
            <summary>
              Who do I actually deal with?<span className="pm">+</span>
            </summary>
            <p className="ans">
              The owners and their engineers — the people accountable for your
              parts. No commission reps, no relay game.
            </p>
          </details>
          <details className="acc">
            <summary>
              What does a DfM audit cost?<span className="pm">+</span>
            </summary>
            <p className="ans">
              Nothing. Send your part and an engineer reviews it — feasibility,
              risks and how we&apos;d make it — with no obligation.
            </p>
          </details>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA BAND ============ */}
      <section className="pad cta-band">
        <div className="wrap">
          <h2>Ready when you are.</h2>
          <p>
            Tell us what you&apos;re making and an engineer will take it from
            there — feasibility, risks, and how we&apos;d build it.
          </p>
          <a className="btn btn-primary" href="#start">
            See how to get started
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="pad" style={{ padding: "72px 0 36px" }}>
        <div className="wrap">
          <div className="grid footgrid">
            <div>
              <div className="logo" style={{ color: "#fff" }}>
                PRO<b style={{ color: "#fff" }}>C</b>ISION
              </div>
              <p style={{ marginTop: 14, maxWidth: 260 }}>
                Western-owned precision manufacturing in China. Prototype to
                production, one quality system.
              </p>
              <p style={{ fontStyle: "italic" }}>[Location / city — to confirm]</p>
            </div>
            <div>
              <h4>Services</h4>
              <a href="#">CNC machining</a>
              <a href="#">EDM</a>
              <a href="#">Injection moulding</a>
              <a href="#">Cleanroom moulding</a>
              <a href="#">Inspection &amp; validation</a>
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
            <div>
              <h4>Company</h4>
              <a href="#">Case studies</a>
              <a href="#">Compliance</a>
              <a href="#">About us</a>
              <a href="#">Virtual tour</a>
              <a href="#">Request a DfM audit</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div
            className="footbar wrap"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            © Procision — design draft (iter 007). Copy final, imagery
            placeholder. Not for production.
          </div>
        </div>
      </footer>
    </>
  );
}
