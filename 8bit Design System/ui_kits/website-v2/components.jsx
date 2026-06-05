/* 8bit v2 — chrome + primitives */

const NAV_ITEMS = ["Work", "Team", "Services", "Learning", "Join"];

function Nav({ current, onNav, theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <div className="brand" onClick={() => onNav("Home")}>
          <img src="../../assets/8bit-mark.png" alt="8bit" />
          <b>8bit at UH Mānoa</b>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            {NAV_ITEMS.map((it) => (
              <a key={it} className={current === it ? "active" : ""} onClick={() => onNav(it)}>{it.toLowerCase()}</a>
            ))}
          </div>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? Icon.sun() : Icon.moon()}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-main">
          <div className="lead">
            We build real software, in the open.
            <span className="sub">// student software studio — uh mānoa</span>
          </div>
          <div className="foot-col">
            <h4>site</h4>
            {NAV_ITEMS.map((it) => <a key={it} onClick={() => onNav(it)}>{it}</a>)}
          </div>
          <div className="foot-col">
            <h4>connect</h4>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
            <a href="mailto:8bituhmanoa@gmail.com">Email</a>
          </div>
        </div>
        <div className="foot-bar">
          <span className="on">● online</span>
          <span>8bit @ uh mānoa</span>
          <div className="foot-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>{Icon[s.icon]()}</a>
            ))}
          </div>
          <span className="sp">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- primitives ---- */
const SectionHeader = ({ path, title, meta, action }) => (
  <div className="sec-h">
    <div className="t">
      <span className="path-label">{path}</span>
      <h2>{title}</h2>
    </div>
    {meta && <span className="meta-r">{meta}</span>}
    {action}
  </div>
);

const MetaStrip = ({ items }) => (
  <div className="meta">
    {items.map((it) => (
      <div key={it.k}><div className="k">// {it.k}</div><div className="v">{it.v}</div></div>
    ))}
  </div>
);

const WorkRow = ({ n, name, tag, year, onClick }) => (
  <div className="idx-row" onClick={onClick}>
    <span className="n">{n}</span>
    <span className="nm">{name}</span>
    <span className="tg">{tag}</span>
    <span className="yr">{year}</span>
    <span className="ar">→</span>
  </div>
);

const ServiceCell = ({ ci, title, desc, ct }) => (
  <div className="cell">
    <span className="ci">{ci}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
    <span className="ct">{ct}</span>
  </div>
);

Object.assign(window, { NAV_ITEMS, Nav, Footer, SectionHeader, MetaStrip, WorkRow, ServiceCell });
