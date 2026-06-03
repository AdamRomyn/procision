import HeroModel from "./HeroModel";

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
            </div>
            <HeroModel />
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES & CASE STUDIES ============ */}
      <section className="pad">
        <div className="wrap">
          <div className="sectionhead center">
            <div className="eyebrow">Industries &amp; case studies</div>
            <h2>You don&apos;t buy CNC machining. You buy a qualified part.</h2>
            <p className="lead">
              One that ships to spec and scales without switching suppliers.
            </p>
          </div>

          <div className="grid g3">
            <a className="card icard" href="#">
              <span className="card-no">01</span>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <path d="M12 6v12M6 12h12" />
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                </svg>
              </div>
              <h3>Medical Devices</h3>
              <p>
                ISO 13485 + Class 8 cleanroom. Implants, surgical instruments
                and diagnostics — with the documentation QA needs to sign off.
              </p>
              <span className="card-go">
                Explore
                <ArrowRight />
              </span>
            </a>
            <a className="card icard" href="#">
              <span className="card-no">02</span>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                </svg>
              </div>
              <h3>Aerospace &amp; Defence</h3>
              <p>
                Certified precision for Tier 2/3 suppliers. Tight tolerances,
                full traceability and multi-year program reliability.
              </p>
              <span className="card-go">
                Explore
                <ArrowRight />
              </span>
            </a>
            <a className="card icard" href="#">
              <span className="card-no">03</span>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <circle cx="9" cy="8" r="2" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                  <circle cx="15" cy="16" r="2" />
                </svg>
              </div>
              <h3>Industrial Automation</h3>
              <p>
                Robotics and automation components that repeat cleanly as your
                product lines scale.
              </p>
              <span className="card-go">
                Explore
                <ArrowRight />
              </span>
            </a>
            <a className="card icard" href="#">
              <span className="card-no">04</span>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <rect x="7" y="7" width="10" height="10" rx="1" />
                  <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                </svg>
              </div>
              <h3>Semiconductor Equipment</h3>
              <p>
                Ultra-tight tolerances and surface finishes for high-value
                precision components.
              </p>
              <span className="card-go">
                Explore
                <ArrowRight />
              </span>
            </a>
            <a className="card icard" href="#">
              <span className="card-no">05</span>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </div>
              <h3>EV &amp; Clean Energy</h3>
              <p>
                Battery housings, motor components and thermal management —
                built for volume ramp.
              </p>
              <span className="card-go">
                Explore
                <ArrowRight />
              </span>
            </a>
            <div className="card card-invite">
              <span className="card-plus">+</span>
              <h3>Don&apos;t see yours?</h3>
              <p style={{ marginBottom: 16 }}>
                If your parts demand precision and tight tolerances, we should
                talk.
              </p>
              <a className="link" href="#start">
                Start a conversation
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="divider">
            <span>Case studies — real parts, real outcomes</span>
          </div>
          <div className="grid g3">
            <div className="card cscard">
              <div className="media card-media">
                <span className="media-tag">Medical Devices</span>
                <span className="media-code">PRT-0418</span>
                <div className="ph">IMAGE: the finished part</div>
              </div>
              <h3>Medical device OEM</h3>
              <p style={{ fontStyle: "italic" }}>
                Challenge → what we did → result. Real numbers needed.
              </p>
              <div className="kpis">
                <span className="kpi">
                  <em>Scrap rate</em>
                </span>
                <span className="kpi">
                  <em>Lead time</em>
                </span>
                <span className="kpi">
                  <em>Batches shipped</em>
                </span>
              </div>
              <a className="link" href="#" style={{ marginTop: 16 }}>
                Read case study
                <ArrowRight />
              </a>
            </div>
            <div className="card cscard">
              <div className="media card-media">
                <span className="media-tag">Aerospace &amp; Defence</span>
                <span className="media-code">PRT-0732</span>
                <div className="ph">IMAGE: the finished part</div>
              </div>
              <h3>Aerospace supplier</h3>
              <p style={{ fontStyle: "italic" }}>
                Challenge → what we did → result. Real numbers needed.
              </p>
              <div className="kpis">
                <span className="kpi">
                  <em>Tolerance held</em>
                </span>
                <span className="kpi">
                  <em>On-time rate</em>
                </span>
                <span className="kpi">
                  <em>Cost / part</em>
                </span>
              </div>
              <a className="link" href="#" style={{ marginTop: 16 }}>
                Read case study
                <ArrowRight />
              </a>
            </div>
            <div className="card cscard">
              <div className="media card-media">
                <span className="media-tag">Supplier switch</span>
                <span className="media-code">PRT-1095</span>
                <div className="ph">IMAGE: the finished part</div>
              </div>
              <h3>Switched from another supplier</h3>
              <p style={{ fontStyle: "italic" }}>
                Challenge → what we did → result. Real numbers needed.
              </p>
              <div className="kpis">
                <span className="kpi">
                  <em>Cost saved</em>
                </span>
                <span className="kpi">
                  <em>Lead time</em>
                </span>
                <span className="kpi">
                  <em>Re-qual time</em>
                </span>
              </div>
              <a className="link" href="#" style={{ marginTop: 16 }}>
                Read case study
                <ArrowRight />
              </a>
            </div>
          </div>
          <div className="center" style={{ marginTop: 40 }}>
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
        <div className="wrap narrow">
          <div className="sectionhead center">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently asked questions</h2>
          </div>
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
