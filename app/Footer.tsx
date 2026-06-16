import Link from "next/link";

/* Shared site footer — used by the home page and the standalone pages
   (about, services) so they stay consistent. */
export default function Footer() {
  return (
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
            <Link href="/cnc-machining">CNC machining</Link>
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
            <Link href="/about">About us</Link>
            <a href="#">Virtual tour</a>
            <a href="#">Request a DFM audit</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="footbar wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          © Procision — design draft (iter 007). Copy final, imagery
          placeholder. Not for production.
        </div>
      </div>
    </footer>
  );
}
