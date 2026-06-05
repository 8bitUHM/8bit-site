import * as React from "react";
import { FC, useState } from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const isLessons =
  typeof window !== "undefined" && window.location.pathname.startsWith("/learning");

const Navbar: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      return (localStorage.getItem("8bit-theme") as "light" | "dark") || "light";
    } catch {
      return "light";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("8bit-theme", next);
    } catch {}
    document.body.setAttribute("data-theme", next);
  };

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a href="/learning" className="brand">
          <img src="/static/main_app/assets/8bit-logo.webp" alt="8bit" />
          <b>8bit · learning</b>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="/learning" className={isLessons ? "active" : ""}>lessons</a>
            <a href="/">main site</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="theme-toggle nav-mobile-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="/learning" className={isLessons ? "active" : ""}>lessons</a>
          <a href="/">main site</a>
        </div>
      )}
    </nav>
  );
};

const root = document.getElementById("navbar-root");
createRoot(root).render(<Navbar />);
