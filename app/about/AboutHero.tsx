import styles from "./page.module.css";

/* founders photo lives in /public; prefix with basePath for GitHub Pages */
const BASE_PATH = process.env.PAGES_BASE_PATH || "";

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

const STATS = [
  { num: "170", lbl: "Specialists" },
  { num: "3", lbl: "Founders" },
  { num: "500", lbl: "Customers" },
  { num: "65", lbl: "Countries" },
];

function Ctas({ center = false }: { center?: boolean }) {
  return (
    <div className={`${styles.heroBtns}${center ? " " + styles.heroBtnsCenter : ""}`}>
      <a className={`btn ${styles.btnSolid}`} href="#start">
        Get started working with us
        <ArrowRight />
      </a>
      <a className="btn btn-outline-light" href="#book">
        <Phone />
        Book a call
      </a>
    </div>
  );
}

function Stats({ center = false }: { center?: boolean }) {
  return (
    <dl
      className={`${styles.statsGrid} ${styles.heroStats}${
        center ? " " + styles.heroStatsCenter : ""
      }`}
    >
      {STATS.map((s) => (
        <div className={styles.stat} key={s.lbl}>
          <dd className={styles.statNum}>{s.num}</dd>
          <dt className={styles.statLbl}>{s.lbl}</dt>
        </div>
      ))}
    </dl>
  );
}

/* ---- V1 — manifesto, left-aligned with a stats strip, over a dimmed photo ---- */
function V1() {
  return (
    <section className={`${styles.hero} ${styles.heroV1}`}>
      <div className={styles.heroV1Dim} aria-hidden="true" />
      <div className="wrap pad">
        <div className={styles.heroInner}>
          <div className={`eyebrow ${styles.heroEyebrow}`}>About Procision</div>
          <h1>Obsessed with making brilliant parts.</h1>
          <p className={`lead ${styles.heroLead}`}>
            We&apos;re 170 specialists who genuinely love manufacturing — a
            Western-run team on the ground in China, here to turn the hardest
            part of your supply chain into the easiest, and to delight you while
            we do it.
          </p>
          <Ctas />
          <Stats />
        </div>
      </div>
    </section>
  );
}

/* ---- V2 — split: copy left, founders photo right ---- */
function V2() {
  return (
    <section className={styles.hero}>
      <div className="wrap pad">
        <div className={styles.heroSplit}>
          <div>
            <div className={`eyebrow ${styles.heroEyebrow}`}>About Procision</div>
            <h1>Western-run. China-made. Genuinely effortless.</h1>
            <p className={`lead ${styles.heroLead}`}>
              170 experts who care about your parts as much as you do. We&apos;re
              passionate about making the manufacturing process — and working
              with China — feel simple, and about leaving every customer glad
              they called.
            </p>
            <Ctas />
          </div>
          <div className={styles.heroSplitMedia}>
            <img
              src={`${BASE_PATH}/founders.avif`}
              alt="The three founders of Procision together at the factory in China"
            />
            <span className={styles.heroSplitBadge}>
              <strong>170</strong> specialists · Western-run
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- V3 — giant number focus ---- */
function V3() {
  return (
    <section className={styles.hero}>
      <div className="wrap pad">
        <div className={styles.heroBig}>
          <div className={styles.heroBigNumWrap}>
            <span className={styles.heroBigNum}>170</span>
            <span className={styles.heroBigNumLbl}>
              specialists who are experts at what they do
            </span>
          </div>
          <div className={styles.heroBigCopy}>
            <div className={`eyebrow ${styles.heroEyebrow}`}>The team</div>
            <h1>People who love this work.</h1>
            <p className={`lead ${styles.heroLead}`}>
              Western-run and deeply passionate about manufacturing — relentless
              about making the process, and working with China, a breeze for
              every customer we build for.
            </p>
            <Ctas />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- V4 — centered manifesto ---- */
function V4() {
  return (
    <section className={styles.hero}>
      <div className="wrap pad">
        <div className={`${styles.heroInner} ${styles.heroCenter}`}>
          <div className={`eyebrow ${styles.heroEyebrow}`}>About Procision</div>
          <h1>We make manufacturing in China feel easy.</h1>
          <p className={`lead ${styles.heroLead}`}>
            A Western-run team of 170 specialists who love this work — turning
            complex supply chains into something simple, and delighting the
            customers who trust us with their parts.
          </p>
          <Ctas center />
          <Stats center />
        </div>
      </div>
    </section>
  );
}

/* ---- V5 — image-backed, cinematic ---- */
function V5() {
  return (
    <section className={styles.heroImg}>
      <div className={styles.heroImgOverlay} aria-hidden="true" />
      <div className="wrap pad">
        <div className={styles.heroImgInner}>
          <div className={`eyebrow ${styles.heroEyebrow}`}>About Procision</div>
          <h1>Passionate about precision. Obsessed with your parts.</h1>
          <p className={`lead ${styles.heroLead}`}>
            170 Western-run specialists making manufacturing in China
            effortless — and customers glad they called.
          </p>
          <Ctas />
        </div>
      </div>
    </section>
  );
}

export default function AboutHero({ variant = 1 }: { variant?: number }) {
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
