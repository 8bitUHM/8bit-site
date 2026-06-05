import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.203.166 1.485.276.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const SOCIALS = [
  { name: "Discord", icon: <DiscordIcon />, url: "https://discord.gg/T7Eu75fpAf" },
  { name: "GitHub", icon: <GithubIcon />, url: "https://github.com/8bituhm" },
  { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/8bituhm" },
  { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/8bituhmanoa" },
];

const PROJECTS_PREVIEW = [
  { n: "01", name: "8bit Site", tags: "react · django · postgres", year: "2025" },
  { n: "02", name: "UH Mānoa Apps", tags: "react · node · aws", year: "2024" },
  { n: "03", name: "Client Portal", tags: "next.js · typescript", year: "2024" },
  { n: "04", name: "Open Source Tools", tags: "python · docker", year: "2023" },
];

const Home = () => (
  <div className="page">
    <section className="hero wrap">
      <div className="cmd">
        <span className="pr">8bit ~ %</span>{" "}
        <span className="fl">./build</span> --for "UH &amp; local clients" --cost 0
      </div>
      <h1>We build real software, in the open.<span className="cur" /></h1>
      <p className="sub">
        A student-led software studio at the University of Hawaiʻi at Mānoa. We design, build, and ship production web apps for the university and local clients — hands-on, collaborative, free of charge.
      </p>
      <div className="hero-cta">
        <a className="btn btn-acc" href="/services/">
          start a project <ArrowRight />
        </a>
        <a className="btn btn-outline" href="/projects/">view work</a>
      </div>
    </section>

    <div className="wrap">
      <div className="meta">
        <div><div className="k">based</div><div className="v">UH Mānoa</div></div>
        <div><div className="k">discipline</div><div className="v">Full-stack</div></div>
        <div><div className="k">cost to clients</div><div className="v">$0</div></div>
      </div>
    </div>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/work</span>
          <h2>Selected work</h2>
        </div>
        <a className="btn btn-ghost" href="/projects/">all projects →</a>
      </div>
      <div className="index">
        {PROJECTS_PREVIEW.map((p) => (
          <a key={p.n} className="idx-row" href="/projects/" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="n">{p.n}</span>
            <span className="nm">{p.name}</span>
            <span className="tg">{p.tags}</span>
            <span className="yr">{p.year}</span>
            <span className="ar">→</span>
          </a>
        ))}
      </div>
    </section>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/services</span>
          <h2>What we build</h2>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>free for clients</span>
      </div>
      <div className="svc">
        <div className="cell">
          <span className="ci">01</span>
          <h3>Static Website</h3>
          <p>A sleek, polished presence built with modern tooling to showcase your brand and message.</p>
          <span className="ct">// html · css · js</span>
        </div>
        <div className="cell">
          <span className="ci">02</span>
          <h3>Dynamic Web App</h3>
          <p>Powerful backends, dynamic content, and an intuitive admin portal for easy management.</p>
          <span className="ct">// react · django · postgres</span>
        </div>
        <div className="cell">
          <span className="ci">03</span>
          <h3>Infrastructure</h3>
          <p>Deployment, hosting, and domain management on AWS or UH-hosted servers, end to end.</p>
          <span className="ct">// aws · docker · ci/cd</span>
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="sec-h">
        <div className="t">
          <span className="path-label">~/join</span>
          <h2>Get involved</h2>
        </div>
      </div>
      <div className="cta-band">
        <div className="cta-col">
          <span className="ci">// for clients</span>
          <h3>Have a project?</h3>
          <p>Tell us what you're building. We scope it with you, then design, build, and ship it — at no cost.</p>
          <a className="btn btn-acc" href="/services/">start a project <ArrowRight /></a>
        </div>
        <div className="cta-col">
          <span className="ci">// for students</span>
          <h3>Join the team.</h3>
          <p>Work on real client software with a team of student engineers, designers, and PMs. No experience gatekept.</p>
          <a className="btn btn-outline" href="/join/">how to join <ArrowRight /></a>
          <div className="home-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

const root = document.getElementById("page-root");
createRoot(root).render(<Home />);
