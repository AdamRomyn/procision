import Link from "next/link";

const BASE_PATH = process.env.PAGES_BASE_PATH || "";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

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

export default function MeetTeam() {
  return (
    <section className="pad team">
      <div className="wrap">
        <div className="team-grid">
          <div className="team-copy">
            <div className="eyebrow">Meet the team</div>
            <h2>We are a world-class manufacturing team.</h2>
            <p className="lead">
              Three Western founders living in China, and 170 staff across
              every discipline — all passionate about making the best parts for
              the best products in the world.
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
              <Link className="btn btn-primary" href="/about">
                Learn more
                <ArrowRight />
              </Link>
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
  );
}
