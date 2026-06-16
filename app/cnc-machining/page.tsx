import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";
import LogoStrip from "../LogoStrip";
import MeetTeam from "../MeetTeam";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CNC Machining & CNC Milling | Procision",
  description:
    "Precision CNC milling from prototype to production — 3, 4 & 5-axis, high-speed machining, 100+ materials, automated CMM inspection and full traceability. Western-owned, engineer-to-engineer. Book a call to scope your parts.",
};

/* ---- inline icons (monochrome, stroke-style to match the site) ---- */
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

/* value-prop glyphs */
const IcoTolerance = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 12h18M7 9v6M17 9v6M12 7v10" />
  </svg>
);
const IcoEngineer = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 3H4v5M15 3h5v5M9 21H4v-5M15 21h5v-5M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
  </svg>
);
const IcoQuality = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 5 6v6c0 4 3 6 7 9 4-3 7-5 7-9V6zM9 12l2 2 4-4" />
  </svg>
);
const IcoInspection = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM8 11l2 2 4-4M16 16l5 5" />
  </svg>
);
const IcoInhouse = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 21V8l6 4V8l6 4V6l6 4v11H3zM7 17h2m4 0h2" />
  </svg>
);
const IcoTrace = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 7h16M4 12h16M4 17h10M18 15l3 3-3 3" />
  </svg>
);

/* why-Procision value props */
const VALUE_PROPS = [
  {
    icon: <IcoTolerance />,
    title: "Precision that actually holds",
    body: "Tight tolerances aren't a one-off here — they're locked into the process with SPC and first-article inspection, so part 10,000 measures like part one.",
  },
  {
    icon: <IcoEngineer />,
    title: "Engineer to engineer",
    body: "You talk to the engineers and owners machining your parts — not a sales relay. DFM feedback comes back fast, in language that moves your design forward.",
  },
  {
    icon: <IcoQuality />,
    title: "One quality system, prototype to production",
    body: "The same documented process carries you from first prototype to full-rate runs. No re-qualifying, no swapping suppliers as volume grows.",
  },
  {
    icon: <IcoInhouse />,
    title: "Real in-house capability",
    body: "3, 4 and 5-axis milling, turning and mill-turn under one roof — not a brokered network. We own the machines, the people and the accountability.",
  },
  {
    icon: <IcoInspection />,
    title: "Automated CMM inspection",
    body: "Dimensional verification on a CMM, not a tape measure. Inspection reports ship with your parts so quality is proven, not promised.",
  },
  {
    icon: <IcoTrace />,
    title: "Western-owned, fully traceable",
    body: "A Western-owned company you can hold accountable, with full lot traceability and audit-ready documentation behind every batch.",
  },
];

/* the kinds of milling Procision offers */
const MILLING_TYPES = [
  {
    no: "01",
    title: "3-axis milling",
    is: "Cutting on three linear axes — the workhorse for prismatic parts, plates, brackets, housings and enclosures.",
    when: "When geometry is accessible from the top and sides. Cost-effective, fast to set up, and ideal for the bulk of production parts.",
  },
  {
    no: "02",
    title: "4-axis milling",
    is: "Adds a rotary axis so the part can be indexed or machined around its circumference without re-fixturing.",
    when: "For features on multiple faces, radial holes, slots around a cylinder, or anything that would otherwise need several setups.",
  },
  {
    no: "03",
    title: "5-axis simultaneous",
    is: "Moves the tool across five axes at once to reach complex, contoured and undercut geometry in a single setup.",
    when: "For impellers, manifolds, aerospace structures and organic surfaces where accuracy across faces and shorter tool reach matter.",
  },
  {
    no: "04",
    title: "High-speed machining (HSM)",
    is: "Light, fast tool passes at high spindle speeds for fine surface finish and tight detail with minimal cutting force.",
    when: "For hardened steels, thin walls, fine features and finishing passes where surface quality and dimensional stability are critical.",
  },
  {
    no: "05",
    title: "Turning & mill-turn",
    is: "Lathe turning for cylindrical parts, plus mill-turn that combines turning and live milling in one operation.",
    when: "For shafts, bushings, connectors and round parts — and complex turned parts that also need milled flats, holes or slots.",
  },
];

/* CNC-relevant case studies (visual style reused from the home page) */
const CASES = [
  {
    code: "PRT-0732",
    tag: "Aerospace & Defence",
    title: "Aerospace supplier",
    alt: "Precision metal shaft being turned in a CNC lathe chuck",
    image:
      "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?auto=format&fit=crop&w=2000&q=80&fm=jpg",
    blurb:
      "An aerospace supplier needed flight-critical machined parts held to tight tolerances across a multi-year program. We locked first-article inspection and SPC into a repeatable process, so every batch shipped to spec — on schedule and at a lower cost per part than the incumbent.",
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

/* material families for the specs grid */
const MATERIALS = [
  {
    h: "Metals",
    items: [
      "Aluminium 6061",
      "7075",
      "2024",
      "5052",
      "Stainless 303",
      "304",
      "316 / 316L",
      "17-4 PH",
      "Steel 1018",
      "4140",
      "A2 / D2 tool steel",
      "Titanium Gr 2",
      "Gr 5 Ti-6Al-4V",
      "Brass",
      "Copper",
      "Inconel",
    ],
  },
  {
    h: "Plastics",
    items: [
      "ABS",
      "Delrin / POM",
      "Nylon",
      "PEEK",
      "PTFE",
      "Polycarbonate",
      "PMMA",
    ],
  },
];

export default function CncMachiningPage() {
  return <CncMachiningPageContent />;
}

export function CncMachiningPageContent({
  showMeetTeam = false,
}: {
  showMeetTeam?: boolean;
}) {
  return (
    <>
      <Nav />

      {/* ============ 1 · DARK HERO (above the fold) ============ */}
      <section className="hero">
        <div className="wrap pad">
          <div className={styles.heroInner}>
            <div className="eyebrow" style={{ color: "#fff", opacity: 0.7 }}>
              CNC Machining · CNC Milling
            </div>
            <h1 style={{ marginTop: 16 }}>
              <span className="accentword">
                The CNC milling partner that holds the line — part one to part
                one-hundred-thousand.
              </span>
            </h1>
            <p className="lead" style={{ marginTop: 20 }}>
              Western-owned, engineer-to-engineer precision machining. Tight
              tolerances locked into a repeatable process, inspected on an
              automated CMM, with full traceability behind every batch. Bring us
              the hard parts.
            </p>
            <div className={styles.heroBtns}>
              <a className="btn btn-primary" href="#book">
                <Phone />
                Book a call
              </a>
              <a className="btn btn-outline-light" href="#start">
                Get started working with us
                <ArrowRight />
              </a>
            </div>
            <div className={styles.heroMeta}>
              <span>3, 4 &amp; 5-axis milling</span>
              <span>±0.0025 mm on critical features</span>
              <span>100+ materials</span>
              <span>Automated CMM &amp; traceability</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LOGO SCROLLER (same strip as home page) ============ */}
      <LogoStrip />

      {showMeetTeam ? <MeetTeam /> : null}

      {/* ============ 2 · WHY PROCISION (worth their time) ============ */}
      <section className="pad">
        <div className="wrap">
          <div className="sectionhead left">
            <div className="eyebrow">Why Procision</div>
            <h2>Before you brief anyone, here&apos;s why us.</h2>
            <p className="lead">
              You already know what CNC milling is. What you actually need is a
              shop that holds tolerance batch after batch, talks to you like an
              engineer, and stands behind the parts. That&apos;s the whole job
              here.
            </p>
          </div>

          <div className={styles.vpGrid}>
            {VALUE_PROPS.map((v) => (
              <div className={styles.vp} key={v.title}>
                <div className={styles.vpIco}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.inlineCta}>
            <p>
              The fastest way to know if we&apos;re the right fit is a
              conversation — bring a part and we&apos;ll talk specifics.
            </p>
            <div className={styles.ctaBtns}>
              <a className="btn btn-primary" href="#book">
                <Phone />
                Book a call
              </a>
              <a className="btn btn-ghost" href="#start">
                Start a project
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3 · THE KINDS OF MILLING WE OFFER ============ */}
      <section
        className="pad"
        style={{
          background: "var(--tint)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <div className="sectionhead left">
            <div className="eyebrow">Milling capabilities</div>
            <h2>The kinds of milling we run.</h2>
            <p className="lead">
              From simple prismatic parts to contoured five-axis geometry — and
              turned work to match. If you&apos;re not sure which fits your part,
              that&apos;s exactly what the first call sorts out.
            </p>
          </div>

          <div className={styles.types}>
            {MILLING_TYPES.map((t) => (
              <article className={styles.type} key={t.no}>
                <div className={styles.typeNo}>{t.no}</div>
                <div className={styles.typeBody}>
                  <h3>{t.title}</h3>
                  <dl className={styles.typeRow}>
                    <div>
                      <dt>What it is</dt>
                      <dd>{t.is}</dd>
                    </div>
                    <div>
                      <dt>When to use it</dt>
                      <dd>{t.when}</dd>
                    </div>
                  </dl>
                </div>
                <a className={`link ${styles.typeLink}`} href="#start">
                  Spec a part
                  <ArrowRight />
                </a>
              </article>
            ))}
          </div>

          <div className={styles.inlineCta} style={{ background: "#fff" }}>
            <p>
              Not sure if it&apos;s a 3-axis job or a 5-axis one? Send the CAD
              and we&apos;ll tell you straight — and what it means for cost and
              schedule.
            </p>
            <div className={styles.ctaBtns}>
              <a className="btn btn-primary" href="#book">
                <Phone />
                Book a call
              </a>
              <a className="btn btn-ghost" href="#start">
                Get started
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 · REAL CAPABILITY SPECS ============ */}
      <section className="pad" style={{ background: "var(--ink)" }}>
        <div className="wrap">
          <div className="sectionhead left">
            <div className="eyebrow" style={{ color: "#fff", opacity: 0.7 }}>
              Capabilities, in numbers
            </div>
            <h2 style={{ color: "#fff" }}>What we can actually hold.</h2>
            <p className="lead" style={{ color: "#b5b5b5" }}>
              Concrete figures, not marketing. Final tolerances, finish and
              schedule for your specific part get confirmed together on the
              call — but here&apos;s the envelope we work in.
            </p>
          </div>

          <div className={styles.specsGrid}>
            {/* tolerance / accuracy */}
            <div className={styles.spec}>
              <div className={styles.specHead}>
                <h3>Accuracy &amp; tolerance</h3>
                <span className={styles.specNo}>01</span>
              </div>
              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <th>Standard tolerance</th>
                    <td>±0.005 mm (±0.0002 in)</td>
                  </tr>
                  <tr>
                    <th>Critical features</th>
                    <td>down to ±0.0025 mm (±0.0001 in)</td>
                  </tr>
                  <tr>
                    <th>General tolerances</th>
                    <td>ISO 2768-f</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.specNote}>
                Achievable tolerance depends on material, geometry and feature
                size — we confirm what&apos;s realistic for your part up front.
              </p>
            </div>

            {/* surface finish */}
            <div className={styles.spec}>
              <div className={styles.specHead}>
                <h3>Surface finish</h3>
                <span className={styles.specNo}>02</span>
              </div>
              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <th>As-machined (standard)</th>
                    <td>Ra 3.2 µm (125 µin)</td>
                  </tr>
                  <tr>
                    <th>With finishing</th>
                    <td>down to Ra 0.4 µm (16 µin)</td>
                  </tr>
                  <tr>
                    <th>Finishing options</th>
                    <td>bead-blast · anodize · polish</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.specNote}>
                Cosmetic and functional finishes specified per face where it
                matters.
              </p>
            </div>

            {/* volume & consistency */}
            <div className={styles.spec}>
              <div className={styles.specHead}>
                <h3>Volume &amp; consistency</h3>
                <span className={styles.specNo}>03</span>
              </div>
              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <th>Range</th>
                    <td>one-off prototypes → 100,000+ parts</td>
                  </tr>
                  <tr>
                    <th>Process control</th>
                    <td>SPC · automated CMM</td>
                  </tr>
                  <tr>
                    <th>Traceability</th>
                    <td>full lot traceability</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.specNote}>
                Batch-to-batch consistency held by the same documented process,
                whatever the volume.
              </p>
            </div>

            {/* speed / lead time */}
            <div className={styles.spec}>
              <div className={styles.specHead}>
                <h3>Speed &amp; lead time</h3>
                <span className={styles.specNo}>04</span>
              </div>
              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <th>Prototypes</th>
                    <td>as fast as a few days</td>
                  </tr>
                  <tr>
                    <th>Production schedule</th>
                    <td>scoped on the call</td>
                  </tr>
                  <tr>
                    <th>Shipping &amp; landed cost</th>
                    <td>scoped together</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.specNote}>
                Exact lead time and shipping are set in the first conversation —
                so the date you get is a date we&apos;ll hold, not a guess.
              </p>
            </div>

            {/* materials — spans full width */}
            <div className={`${styles.spec} ${styles.specWide}`}>
              <div className={styles.specHead}>
                <h3>Material versatility — 100+ materials</h3>
                <span className={styles.specNo}>05</span>
              </div>
              {MATERIALS.map((m) => (
                <div className={styles.matGroup} key={m.h}>
                  <h4>{m.h}</h4>
                  <div className={styles.tags}>
                    {m.items.map((it) => (
                      <span className={styles.tag} key={it}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className={styles.specNote}>
                A representative slice of 100+ machinable materials — see the
                full list, or just name yours on the call.
              </p>
            </div>
          </div>

          <p className={styles.specsCaption}>
            <em>
              Figures are Procision&apos;s standard machining capabilities,
              shown as industry-standard placeholders to be confirmed against
              your part.
            </em>
          </p>

          <div className={`${styles.inlineCta} ${styles.inlineCtaDark}`}>
            <p>
              Have a tolerance or finish you&apos;re worried about? Put it in
              front of an engineer and get a straight answer.
            </p>
            <div className={styles.ctaBtns}>
              <a className="btn btn-light" href="#book">
                <Phone />
                Book a call
              </a>
              <a className="btn btn-outline-light" href="#start">
                Start a project
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5 · CASE STUDIES ============ */}
      <section className="pad">
        <div className="wrap">
          <div className="sectionhead left">
            <div className="eyebrow">Case studies</div>
            <h2>Machined parts. Real outcomes.</h2>
            <p className="lead">
              Challenge → what we did → result. Two programs where holding the
              process was the whole point.
            </p>
          </div>
          <div className="csbig-stack">
            {CASES.map((c) => (
              <article className="csbig" key={c.code}>
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
                  <a className="link readmore" href="#start">
                    Talk through your program
                    <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6 · FAQ ============ */}
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
            <div className="eyebrow">FAQ</div>
            <h2>CNC milling questions, answered.</h2>
          </div>
          <div className="faqgrid">
            <details className="acc">
              <summary>
                What tolerances can you hold?<span className="pm">+</span>
              </summary>
              <p className="ans">
                Standard ±0.005 mm (±0.0002 in), down to ±0.0025 mm (±0.0001 in)
                on critical features, with general tolerances to ISO 2768-f.
                What&apos;s achievable depends on material, geometry and feature
                size — we confirm the realistic envelope for your part on the
                call.
              </p>
            </details>
            <details className="acc">
              <summary>
                Which materials do you machine?<span className="pm">+</span>
              </summary>
              <p className="ans">
                100+ materials — aluminium (6061, 7075, 2024, 5052), stainless
                (303, 304, 316/316L, 17-4 PH), steels (1018, 4140, A2/D2),
                titanium (Gr 2, Gr 5 Ti-6Al-4V), brass, copper, Inconel, plus
                plastics like Delrin/POM, PEEK, PTFE, nylon, polycarbonate and
                PMMA. If yours isn&apos;t listed, just ask.
              </p>
            </details>
            <details className="acc">
              <summary>
                What&apos;s the maximum part size?<span className="pm">+</span>
              </summary>
              <p className="ans">
                It depends on the part and the right machine for it — envelope,
                fixturing and access all factor in. Send the geometry and
                we&apos;ll confirm fit and the best setup before quoting.
              </p>
            </details>
            <details className="acc">
              <summary>
                Do you do prototypes as well as production?
                <span className="pm">+</span>
              </summary>
              <p className="ans">
                Both — on one quality system. Start with a single prototype as
                fast as a few days, then scale to full production without
                re-qualifying or switching suppliers. The process carries
                through.
              </p>
            </details>
            <details className="acc">
              <summary>
                What are your lead times and shipping costs?
                <span className="pm">+</span>
              </summary>
              <p className="ans">
                Prototypes can move in as fast as a few days. Exact production
                lead time, shipping and landed cost are scoped together on the
                first call — because they depend on material, volume, finishing
                and destination. You get a firm date we&apos;ll hold, not a
                placeholder.
              </p>
            </details>
            <details className="acc">
              <summary>
                What quality documentation and traceability do you provide?
                <span className="pm">+</span>
              </summary>
              <p className="ans">
                Automated CMM inspection reports, SPC, first-article inspection
                and full lot traceability — audit-ready documentation behind
                every batch. PPAP and first-article packages are available where
                your program needs them.
              </p>
            </details>
            <details className="acc">
              <summary>
                How do you protect my IP?<span className="pm">+</span>
              </summary>
              <p className="ans">
                NDAs up front, controlled access to your files, and a
                Western-owned company you can hold accountable under terms you
                understand. Your design doesn&apos;t disappear into an anonymous
                supply chain.
              </p>
            </details>
            <details className="acc">
              <summary>
                Can you take over parts from another supplier?
                <span className="pm">+</span>
              </summary>
              <p className="ans">
                Yes. Send the part you make today and we&apos;ll benchmark it,
                reverse-engineer the tooling if needed, and match the validated
                process — often with a side-by-side PPAP so you switch with zero
                line-down risk.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ============ 7 · CLOSING CTA ============ */}
      <section className="pad cta-band">
        <div className="wrap">
          <h2>Let&apos;s scope it on a call.</h2>
          <p>
            Exact tolerances, lead times and shipping all come together in one
            conversation. Bring the part — an engineer will take it from there.
          </p>
          <div
            className="btns"
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a className="btn btn-primary" href="#book">
              <Phone />
              Book a call
            </a>
            <a className="btn btn-outline-light" href="#start">
              Get started working with us
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
