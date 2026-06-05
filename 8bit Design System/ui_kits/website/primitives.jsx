/* 8bit UI Kit — layout primitives */

const Blobs = ({ tint = "white" }) => (
  <>
    <span className="blob animate-float" style={{ width: 280, height: 280, background: tint === "white" ? "rgba(255,255,255,.2)" : "rgba(244,114,182,.35)", top: -80, left: -40 }} />
    <span className="blob animate-float-slow" style={{ width: 320, height: 320, background: "rgba(255,255,255,.12)", bottom: -60, right: -20 }} />
  </>
);

const SectionBand = ({ variant = "white", hero = false, blobs = false, children }) => (
  <section className={`section-band section-band--${variant}`}>
    {blobs && <Blobs />}
    <div className={`section-inner ${hero ? "section-inner--hero" : ""}`}>{children}</div>
  </section>
);

const Eyebrow = ({ accent = "primary", children }) => (
  <span className={`eyebrow eyebrow--${accent}`}>{children}</span>
);

const Button = ({ variant = "primary", children, onClick, href }) => {
  const cls = `btn btn--${variant}`;
  if (href) return <a className={cls} href={href} target="_blank" rel="noreferrer">{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
};

const IconBlob = ({ variant = "ghost", children }) => (
  <span className={`icon-blob icon-blob--${variant}`}>{children}</span>
);

/* Wavy divider — color `from` band into `to` band, matching the site's SVG path. */
const FILL = {
  white: "#ffffff", soft: "#f0fdfa", mint: "#14b8a6", sky: "#0ea5e9", violet: "#8b5cf6",
};
const GRAD = {
  hero: ["#14b8a6", "#0ea5e9", "#8b5cf6"], warm: ["#fb923c", "#ec4899"], cool: ["#0ea5e9", "#8b5cf6"],
};
const SectionDivider = ({ from = "white", to = "mint" }) => {
  const id = React.useId().replace(/:/g, "");
  const topBg = GRAD[from] ? `linear-gradient(90deg, ${GRAD[from].join(", ")})` : FILL[from];
  const pathFill = GRAD[to] ? `url(#g${id})` : FILL[to];
  return (
    <div style={{ background: topBg, lineHeight: 0, marginTop: -1, marginBottom: -1 }} aria-hidden="true">
      <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        {GRAD[to] && (
          <defs><linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="0">
            {GRAD[to].map((c, i) => <stop key={i} offset={`${(i / (GRAD[to].length - 1)) * 100}%`} stopColor={c} />)}
          </linearGradient></defs>
        )}
        <path fill={pathFill} d="M0,64 C240,128 480,16 720,48 C960,80 1200,128 1440,72 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
};

const StatChip = ({ label, value }) => (
  <div className="stat-chip"><span className="v">{value}</span><span className="l">{label}</span></div>
);

const LogoCard = () => (
  <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
    <span className="blob animate-float" style={{ width: 240, height: 240, background: "rgba(255,255,255,.3)", top: -40, left: 0 }} />
    <span className="blob animate-float-slow" style={{ width: 210, height: 210, background: "rgba(244,114,182,.4)", bottom: 0, right: 0 }} />
    <div className="logo-card">
      <img src="../../assets/8bit-long-logo.png" alt="8bit @ UH Mānoa" />
      <div className="dot-row">
        <span style={{ background: "var(--primary-500)" }} />
        <span style={{ background: "var(--accent-500)" }} />
        <span style={{ background: "var(--violet-500)" }} />
        <span style={{ background: "var(--bubble-500)" }} />
        <span style={{ background: "var(--sunset-500)" }} />
      </div>
    </div>
  </div>
);

Object.assign(window, { Blobs, SectionBand, Eyebrow, Button, IconBlob, SectionDivider, StatChip, LogoCard });
