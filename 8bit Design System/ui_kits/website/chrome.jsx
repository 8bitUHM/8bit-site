/* 8bit UI Kit — chrome: Navbar + Footer */

const NAV_ITEMS = ["Home", "Members", "Projects", "Services"];

const Navbar = ({ current, onNavigate }) => (
  <nav className="glass-nav">
    <div className="nav-inner">
      <a className="nav-brand" href="#" onClick={(e) => { e.preventDefault(); onNavigate("Home"); }}>
        <img src="../../assets/8bit-logo.webp" alt="8bit" />
        <span>8bit at UH Mānoa</span>
      </a>
      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <button key={item} className={`nav-link ${current === item ? "active" : ""}`} onClick={() => onNavigate(item)}>
            {item}
          </button>
        ))}
        <button className="nav-link" style={{ color: "var(--violet-600)" }} onClick={() => onNavigate("Services")}>Learning Portal</button>
      </div>
    </div>
  </nav>
);

const Footer = ({ onNavigate }) => (
  <footer className="footer">
    <span className="blob animate-float" style={{ width: 280, height: 280, background: "rgba(255,255,255,.2)", top: -60, left: -40 }} />
    <span className="blob animate-float-slow" style={{ width: 320, height: 320, background: "rgba(244,114,182,.3)", bottom: -80, right: -20 }} />
    <div className="footer-inner">
      <img className="footer-logo" src="../../assets/8bit-logo.webp" alt="8bit" />
      <div className="footer-title">8bit @ UH Mānoa</div>
      <nav className="footer-nav">
        {NAV_ITEMS.map((item) => <button key={item} onClick={() => onNavigate(item)}>{item}</button>)}
        <a href="https://github.com/8bituhm" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <p className="footer-copy">© {new Date().getFullYear()} 8bit @ UH Mānoa. All rights reserved.</p>
    </div>
  </footer>
);

Object.assign(window, { Navbar, Footer });
