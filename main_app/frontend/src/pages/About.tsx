import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const About = () => (
  <div className="page">
    <div className="wrap page-head">
      <span className="path-label">~/about</span>
      <h1>About 8bit</h1>
      <p className="sub">
        We're a student-run software organization at the University of Hawaiʻi at Mānoa. We design, build, and ship production web applications — for the university, local clients, and the open-source community.
      </p>
    </div>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/about/mission</span>
          <h2>What we're about</h2>
        </div>
      </div>
      <div className="svc">
        <div className="cell">
          <span className="ci">// build</span>
          <h3>Real software</h3>
          <p>We don't build toy projects. Every line of code we write goes into production — used by real people, maintained by our team.</p>
        </div>
        <div className="cell">
          <span className="ci">// learn</span>
          <h3>By doing</h3>
          <p>Our members learn by shipping. The fastest way to grow as an engineer is to work on real problems alongside experienced collaborators.</p>
        </div>
        <div className="cell">
          <span className="ci">// community</span>
          <h3>Together</h3>
          <p>We're a tight-knit group of designers, engineers, and PMs who care about craft — and about each other's growth.</p>
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/about/facts</span>
          <h2>By the numbers</h2>
        </div>
      </div>
      <div className="meta" style={{ borderBottom: "1px solid var(--line)" }}>
        <div><div className="k">founded</div><div className="v">2022</div></div>
        <div><div className="k">campus</div><div className="v">UH Mānoa</div></div>
        <div><div className="k">cost to clients</div><div className="v">$0</div></div>
      </div>
    </section>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/about/stack</span>
          <h2>Our stack</h2>
        </div>
      </div>
      <div className="term">
        <div className="bar">
          <i style={{ background: "#ff5f56" }} />
          <i style={{ background: "#ffbd2e" }} />
          <i style={{ background: "#27c93f" }} />
          <span>8bit-stack — overview</span>
        </div>
        <div className="body">
          <div><span className="pr">$</span> <span className="o">cat tech-stack.md</span></div>
          <div><span className="c"># frontend</span></div>
          <div><span className="o">React · TypeScript · Tailwind CSS</span></div>
          <div><span className="c"># backend</span></div>
          <div><span className="o">Django · PostgreSQL · Docker</span></div>
          <div><span className="c"># infrastructure</span></div>
          <div><span className="o">AWS · Nginx · GitHub Actions</span></div>
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="cta-band">
        <div className="cta-col">
          <span className="ci">// for clients</span>
          <h3>Need something built?</h3>
          <p>We take on web projects for the university and local community at no cost. Reach out and we'll scope it together.</p>
          <a className="btn btn-acc" href="/services/">see our services <ArrowRight /></a>
        </div>
        <div className="cta-col">
          <span className="ci">// for students</span>
          <h3>Want to join us?</h3>
          <p>We welcome students from all disciplines — CS, ICS, design, business. No prior experience required.</p>
          <a className="btn btn-outline" href="/join/">learn how to join <ArrowRight /></a>
        </div>
      </div>
    </section>
  </div>
);

const root = document.getElementById("page-root");
createRoot(root).render(<About />);
