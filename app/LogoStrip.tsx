/* Dummy client wordmarks for the grayscale scroller (placeholder). */
const LOGOS = [
  "NORTHWIND",
  "AXIOM",
  "VERTEX",
  "MERIDIAN",
  "CALIBRE",
  "HELIOS",
  "FORGEWORKS",
  "APEX DYNAMICS",
  "UNIVERSITY OF LEICESTER RACING",
  "UNIVERSITY OF TORONTO RACING",
];

/* One marquee group must be wider than any viewport for the -50% loop to be
   seamless, so repeat the list enough to comfortably exceed ultra-wide screens. */
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

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

export default function LogoStrip() {
  return (
    <section className="logos">
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
  );
}
