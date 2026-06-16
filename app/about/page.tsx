import Nav from "../Nav";
import Footer from "../Footer";
import AboutHero from "./AboutHero";
import styles from "./page.module.css";

/* Plain <img>/public assets aren't auto-prefixed with Next's basePath the way
   /_next assets are, so on GitHub Pages (served under /procision) a root path
   like "/founders.avif" 404s. Prepend the build-time base path ourselves. */
const BASE_PATH = process.env.PAGES_BASE_PATH || "";

export const metadata = {
  title: "About Procision — Western-owned precision manufacturing in China",
  description:
    "Procision is a Western-owned precision manufacturer operating inside China. Three founders from the UK, Denmark and South Africa, ~170 staff, one quality system from prototype to full-rate production — engineer to engineer.",
};

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

/* ---- differentiator card icons (outline, one per card) ---- */
const IconEngineer = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 3h6m-3 0v4m-6 4a6 6 0 0 0 12 0M6 11l-2 8h16l-2-8M9 19v2m6-2v2" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6zM9 12l2 2 4-4" />
  </svg>
);
const IconSystem = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 7h18M3 12h18M3 17h18M7 3v18" />
  </svg>
);
const IconCert = () => (
  <svg viewBox="0 0 24 24">
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.5 6.8 19l1-5.8-4.3-4.1 5.9-.9z" />
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3M12 15v2" />
  </svg>
);
const IconTeam = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const WHY = [
  {
    icon: <IconEngineer />,
    title: "Engineer-led, not sales-led",
    body: "You talk to the engineers who make your parts — and to the owners themselves. No commission reps, no relay game between you and the people accountable for the work.",
  },
  {
    icon: <IconShield />,
    title: "Accountable Western ownership",
    body: "A Western-owned company you can hold to terms you understand. Three founders from the UK, Denmark and South Africa live in China and are on the factory floor.",
  },
  {
    icon: <IconSystem />,
    title: "One quality system, end to end",
    body: "From first prototype to full-rate production, your part runs on a single quality system — so batch four matches the first article and nothing changes underneath you as you scale.",
  },
  {
    icon: <IconCert />,
    title: "Audit-ready certifications",
    body: "ISO 9001 and ISO 13485, Class 8 cleanroom moulding and AEO certification — with full traceability and validation documentation ready before you commit.",
  },
  {
    icon: <IconLock />,
    title: "IP handled transparently",
    body: "NDAs up front and controlled access. Your design doesn't disappear into an anonymous supply chain — it sits with a company you can hold accountable.",
  },
  {
    icon: <IconTeam />,
    title: "A 170-strong, multidisciplinary team",
    body: "Around 170 staff across every discipline — design, machining, moulding, metrology and quality — so the capability you need is in-house, under one roof, under one standard.",
  },
];

const CERTS = [
  {
    no: "01",
    title: "ISO 9001",
    body: "Certified quality management — the backbone of how every job is planned, run and documented.",
  },
  {
    no: "02",
    title: "ISO 13485",
    body: "Medical-device quality management, with the traceability and validation regulated work demands.",
  },
  {
    no: "03",
    title: "Class 8 cleanroom",
    body: "Controlled-environment injection moulding for sterile-packaged and contamination-sensitive parts.",
  },
  {
    no: "04",
    title: "AEO certified",
    body: "Authorised Economic Operator status — smoother, more reliable export and customs handling.",
  },
];

export default function AboutPage() {
  return <About heroVariant={1} />;
}

/* The whole About page, with a swappable top section. /about uses variant 1;
   /about/1 … /about/5 render the five hero designs so they can be compared. */
export function About({ heroVariant = 1 }: { heroVariant?: number }) {
  return (
    <>
      <Nav />

      {/* ============ DARK HERO (swappable design per variant) ============ */}
      <AboutHero variant={heroVariant} />

      {/* ============ ORIGIN / WHY WE EXIST ============ */}
      <section className={`pad ${styles.origin}`}>
        <div className="wrap">
          <div className={styles.originGrid}>
            <div>
              <div className="eyebrow">Why we exist</div>
              <h2 style={{ margin: "14px 0 18px" }}>
                Built to bridge two worlds.
              </h2>
              <p className="lead">
                Procision was founded by four engineers from the UK, Denmark and
                South Africa who moved to China and stayed. They saw the same gap
                from both sides: Western companies wanted China&apos;s supply
                chain and scale, but not the distance, the relay of sales reps,
                or the quality surprises that came with it.
              </p>
              <p className="muted">
                So we built the company we wished existed — a Western-owned
                manufacturer on the ground in China, run by engineers who answer
                directly to customers. The owners are on the factory floor every
                day. When you raise an issue, it reaches the people accountable
                for fixing it, not a call centre.
              </p>
              <p className="muted">
                The result is a genuine bridge: the engineering rigour,
                documentation and accountability customers expect at home, paired
                with the cost, speed and capacity that China&apos;s manufacturing
                base makes possible. One supplier, one standard, from the first
                part to the five-hundred-millionth.
              </p>
            </div>

            <div className={styles.bridge}>
              <div className={styles.bridgeRow}>
                <div className={styles.bridgeCol}>
                  <span className="label">What the West expects</span>
                  <h3>Engineering rigour</h3>
                  <p>
                    Tight tolerances, full traceability, validation and a
                    company you can hold accountable under terms you understand.
                  </p>
                </div>
                <div className={styles.bridgeArrow} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <div className={styles.bridgeCol}>
                  <span className="label">What China makes possible</span>
                  <h3>Scale &amp; speed</h3>
                  <p>
                    A deep supply chain, capacity to grow from prototype to
                    full-rate production, and competitive landed cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY WORK WITH US ============ */}
      <section className={`pad ${styles.why}`}>
        <div className="wrap">
          <div className="sectionhead center">
            <div className="eyebrow">Why work with us</div>
            <h2>Reasons teams choose Procision</h2>
            <p className="lead">
              Everything below is built into how we run — not a sales pitch, but
              the way the company is structured.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {WHY.map((w) => (
              <article className={styles.whyCard} key={w.title}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE PEOPLE / FOUNDERS ============ */}
      <section className="pad team">
        <div className="wrap">
          <div className="team-grid">
            <div className="team-copy">
              <div className="eyebrow">The people</div>
              <h2>Three founders. One factory. 170 specialists.</h2>
              <p className="lead">
                The founders come from the UK, Denmark and South Africa and live
                in China — close to the work, close to the customers, and
                personally accountable for both. Around them is a team of roughly
                170 across every discipline.
              </p>

              <ul className="team-trust">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Owners on the factory floor, every day
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Engineer-to-engineer from first conversation
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Western standards, China-based delivery
                </li>
              </ul>

              <div className="btns">
                <a className="btn btn-primary" href="#start">
                  Get started working with us
                  <ArrowRight />
                </a>
              </div>
            </div>

            <div className="team-photo-wrap">
              <figure className="team-photo">
                <span className="media-code">THE FOUNDERS</span>
                <img
                  src={`${BASE_PATH}/founders.avif`}
                  alt="The three founders of Procision together at the factory in China"
                  loading="lazy"
                />
                <div className="team-photo-cap">
                  <span className="team-flag">UK · Denmark · South Africa</span>
                </div>
              </figure>
              <div className="team-badge">
                <div>
                  <strong>3</strong>
                  <span>Founders</span>
                </div>
                <div className="team-badge-div" />
                <div>
                  <strong>170</strong>
                  <span>Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS & TRUST ============ */}
      <section className={`pad ${styles.certs}`}>
        <div className="wrap">
          <div className="sectionhead center">
            <div className="eyebrow">Certifications &amp; trust</div>
            <h2>Proof, not promises</h2>
            <p className="lead">
              The certifications and controls that let regulated and
              quality-critical customers ship with confidence.
            </p>
          </div>
          <div className={styles.certGrid}>
            {CERTS.map((c) => (
              <article className={styles.certCard} key={c.title}>
                <span className={styles.num}>{c.no}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="pad cta-band">
        <div className="wrap">
          <h2>Get started working with us.</h2>
          <p>
            Tell us what you&apos;re making and an engineer — often an owner —
            will take it from there. Western accountability, China&apos;s scale,
            one quality system from prototype to full-rate production.
          </p>
          <div className={styles.ctaBtns}>
            <a className="btn btn-primary" href="#start">
              Get started working with us
              <ArrowRight />
            </a>
            <a className="btn btn-outline-light" href="#book">
              <Phone />
              Book a call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
