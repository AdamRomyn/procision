import HeroModel from "./HeroModel";
import ServicesTabs from "./ServicesTabs";

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
      "Challenge → what we did → result. ISO 13485, Class 8 cleanroom moulding, full traceability.",
    kpis: ["Scrap rate", "Lead time", "Batches shipped"],
  },
  {
    code: "PRT-0732",
    tag: "Aerospace & Defence",
    title: "Aerospace supplier",
    alt: "Precision metal shaft being turned in a CNC lathe chuck",
    image:
      "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?auto=format&fit=crop&w=2000&q=80&fm=jpg",
    blurb:
      "Challenge → what we did → result. Tight tolerances held across a multi-year program.",
    kpis: ["Tolerance held", "On-time rate", "Cost / part"],
  },
  {
    code: "PRT-1095",
    tag: "Supplier switch",
    title: "Switched from another supplier",
    alt: "Close-up of a CNC machine cutting metal with coolant flowing",
    image:
      "https://images.unsplash.com/photo-1645754884968-a00b7ed62c43?auto=format&fit=crop&w=2000&q=80&fm=jpg",
    blurb:
      "Challenge → what we did → result. Re-qualified without starting from zero.",
    kpis: ["Cost saved", "Lead time", "Re-qual time"],
  },
];

export default function Home() {
  return (
    <>
      {/* ============ NAV ============ */}
      <header className="nav">
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

      {/* ============ MANUFACTURING SERVICES ============ */}
      <section className="pad">
        <div className="wrap">
          <div className="sectionhead center">
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
          <div className="sectionhead center">
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
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <span className="csbig-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                  <div className="kpis kpis-glass">
                    {c.kpis.map((k) => (
                      <span className="kpi" key={k}>
                        <em>{k}</em>
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

      {/* ============ HOW TO GET STARTED ============ */}
      <section
        className="pad"
        style={{
          background: "var(--tint)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <div className="sectionhead center">
            <div className="eyebrow">Get started</div>
            <h2>How to get started.</h2>
            <p className="lead">Two ways to work with us.</p>
          </div>
          <div className="grid g2">
            <div className="pathcard">
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="eyebrow">New product</div>
              <h3 style={{ margin: "10px 0" }}>Prototype → production</h3>
              <p className="muted">
                Got a design or an idea? We prototype it, prove it out together,
                and scale the same part to thousands — on one quality system,
                without re-sourcing.
              </p>
              <ul>
                <li>
                  <Check />
                  Free DfM review before any tooling
                </li>
                <li>
                  <Check />
                  First article validated against your spec
                </li>
                <li>
                  <Check />
                  One supplier from 10 units to 10,000
                </li>
              </ul>
              <a className="btn btn-primary" href="#">
                Start a new project
              </a>
            </div>
            <div className="pathcard">
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                  <path d="M21 3v5h-5" />
                </svg>
              </div>
              <div className="eyebrow">Existing product</div>
              <h3 style={{ margin: "10px 0" }}>
                Work with parts you already make
              </h3>
              <p className="muted">
                Already in production elsewhere? Send us the part you make today
                and we&apos;ll deliver it to a higher standard, at a better
                price, or faster.
              </p>
              <ul>
                <li>
                  <Check />
                  Benchmark against your current supplier
                </li>
                <li>
                  <Check />
                  Engineer-led cost &amp; quality review
                </li>
                <li>
                  <Check />
                  Switch over without re-qualifying from zero
                </li>
              </ul>
              <a className="btn btn-primary" href="#">
                Optimise an existing part
              </a>
            </div>
          </div>
          <div className="video" style={{ marginTop: 30 }}>
            <div className="playbtn">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div style={{ position: "absolute", bottom: 18, left: 0, right: 0 }}>
              VIDEO: owner-led factory &amp; cleanroom walkthrough — the
              highest-trust asset
            </div>
          </div>
        </div>
      </section>

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

      {/* trust strip */}
      <div className="trust">
        <div className="wrap">
          <span>Building for OEMs in</span>
          <strong>Medical Devices</strong>
          <span>·</span>
          <strong>Aerospace &amp; Defence</strong>
          <span>·</span>
          <strong>Industrial Automation</strong>
          <span>·</span>
          <strong>Semiconductor</strong>
          <span>·</span>
          <strong>EV &amp; Clean Energy</strong>
          <span style={{ opacity: 0.6, fontStyle: "italic" }}>
            (client logos when available)
          </span>
        </div>
      </div>

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
          <div
            className="grid"
            style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}
          >
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
