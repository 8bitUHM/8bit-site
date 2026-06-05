import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Services = () => (
  <div className="page">
    <div className="wrap page-head">
      <span className="path-label">~/services</span>
      <h1>What we build</h1>
      <p className="sub">
        We assess your goals, then customize the right solution. Everything below is free for clients — you bring the vision, we bring the engineering.
      </p>
    </div>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/services/offerings</span>
          <h2>Offerings</h2>
        </div>
      </div>
      <div className="svc">
        <div className="cell">
          <span className="ci">01</span>
          <h3>Static Website</h3>
          <p>A sleek, polished online presence built with modern tooling to showcase your brand, story, and message.</p>
          <span className="ct">// html · css · js</span>
        </div>
        <div className="cell">
          <span className="ci">02</span>
          <h3>Dynamic Web App</h3>
          <p>Applications with a powerful backend, dynamic content, and an intuitive admin portal for easy management.</p>
          <span className="ct">// react · django · postgres</span>
        </div>
        <div className="cell">
          <span className="ci">03</span>
          <h3>Infrastructure</h3>
          <p>Deployment, hosting, and domain management on AWS or UH-hosted servers — we handle it end to end.</p>
          <span className="ct">// aws · docker · ci/cd</span>
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/services/process</span>
          <h2>How it works</h2>
        </div>
      </div>
      <div className="process">
        <div className="step">
          <div className="sn">01 — consult</div>
          <h3>Consult</h3>
          <p>We learn your goals, audience, and requirements through a focused consultation.</p>
        </div>
        <div className="step">
          <div className="sn">02 — build</div>
          <h3>Build</h3>
          <p>Our software, design, and PM members collaborate to build the right solution.</p>
        </div>
        <div className="step">
          <div className="sn">03 — launch</div>
          <h3>Launch</h3>
          <p>We handle deployment, hosting, and domains so you can focus on your work.</p>
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/services/start</span>
          <h2>Start a project</h2>
        </div>
      </div>
      <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
        <div className="cta-col" style={{ borderRight: 0 }}>
          <span className="ci">// $0 to clients</span>
          <h3>Let's scope it together.</h3>
          <p>Send a short note about what you're building. We'll set up a consult and map out how 8bit can help.</p>
          <a className="btn btn-acc" href="mailto:8bituhmanoa@gmail.com">
            email us <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  </div>
);

const root = document.getElementById("page-root");
createRoot(root).render(<Services />);
