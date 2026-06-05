/* 8bit v2 — Work, Team, Services, Learning */
const { useState } = React;

/* ---------------- WORK ---------------- */
function WorkPage({ onNav }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Client", "Open source"];
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.kind === filter);
  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/work</span>
        <h1>Selected work</h1>
        <p className="sub">Production software shipped for the University of Hawaiʻi, local clients, and the open-source community — built and maintained by students.</p>
      </div>
      <section className="section wrap">
        <div className="chips" style={{ marginBottom: 28 }}>
          {filters.map((f) => (
            <span key={f} className={`chip ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f.toLowerCase()}</span>
          ))}
        </div>
        <div className="cards-2">
          {shown.map((p) => (
            <div className="pcard" key={p.n}>
              <div className="top">
                <span className="n">{p.n}</span>
                <span className="badge">{p.status}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="links">
                <a href="https://github.com/8bituhm" target="_blank" rel="noreferrer">{Icon.github()} source</a>
                <a onClick={(e) => e.preventDefault()}>{Icon.arrowUpRight()} live</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------- TEAM ---------------- */
function TeamPage({ onNav }) {
  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/team</span>
        <h1>The people</h1>
        <p className="sub">Student leaders and a software team who take on real client work and open source together — gaining hands-on experience and shipping things that matter.</p>
      </div>
      <section className="section wrap">
        <SectionHeader path="~/team/leadership" title="Members" meta={`${MEMBERS.length} active`} />
        <div className="team-grid">
          {MEMBERS.map((m) => (
            <div className="mcard" key={m.name}>
              <div className="ph"><img src={AVATAR} alt={m.name} /></div>
              <div className="b">
                <div className="nm">{m.name}</div>
                <div className="role">{m.role.toLowerCase()}</div>
                <div className="socials">
                  {m.socials.map((s) => <a key={s} onClick={(e) => e.preventDefault()} aria-label={s}>{Icon[s]()}</a>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function ServicesPage({ onNav }) {
  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/services</span>
        <h1>What we build</h1>
        <p className="sub">We assess your goals, then customize the right solution. Everything below is free for clients — you bring the vision, we bring the engineering.</p>
      </div>

      <section className="section wrap">
        <SectionHeader path="~/services/offerings" title="Offerings" />
        <div className="svc">
          <ServiceCell ci="01" title="Static Website" desc="A sleek, polished online presence built with modern tooling to showcase your brand, story, and message." ct="// html · css · js" />
          <ServiceCell ci="02" title="Dynamic Web App" desc="Applications with a powerful backend, dynamic content, and an intuitive admin portal for easy management." ct="// react · django · postgres" />
          <ServiceCell ci="03" title="Infrastructure" desc="Deployment, hosting, and domain management on AWS or UH-hosted servers — we handle it end to end." ct="// aws · docker · ci/cd" />
        </div>
      </section>

      <section className="section wrap">
        <SectionHeader path="~/services/process" title="How it works" />
        <div className="process">
          <div className="step"><div className="sn">01 — consult</div><h3>Consult</h3><p>We learn your goals, audience, and requirements through a focused consultation.</p></div>
          <div className="step"><div className="sn">02 — build</div><h3>Build</h3><p>Our software, design, and PM members collaborate to build the right solution.</p></div>
          <div className="step"><div className="sn">03 — launch</div><h3>Launch</h3><p>We handle deployment, hosting, and domains so you can focus on your work.</p></div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeader path="~/services/start" title="Start a project" />
        <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
          <div className="cta-col" style={{ borderRight: 0 }}>
            <span className="ci">// $0 to clients</span>
            <h3>Let's scope it together.</h3>
            <p>Send a short note about what you're building. We'll set up a consult and map out how 8bit can help.</p>
            <a className="btn btn-acc" href="mailto:8bituhmanoa@gmail.com">email us {Icon.arrowUpRight()}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- LEARNING ---------------- */
function LearningPage({ onNav }) {
  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/learning</span>
        <h1>Learning Portal</h1>
        <p className="sub">Level up from your first commit to shipping full-stack apps. In-house tracks built by members, paced for real project work.</p>
      </div>

      <section className="section wrap">
        <SectionHeader path="~/learning/tracks" title="Tracks" meta="self-paced" />
        <div className="tracks">
          {TRACKS.map((t) => (
            <div className="track" key={t.n} onClick={() => {}}>
              <span className="n">{t.n}</span>
              <span className="nm">{t.name}</span>
              <span className="lc">{t.lessons}</span>
              <span className="bar"><i style={{ width: `${t.pct}%` }} /></span>
              <span className="ar">→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <SectionHeader path="~/learning/lesson" title="Inside a lesson" />
        <div className="term">
          <div className="bar"><i style={{ background: "#ff5f56" }} /><i style={{ background: "#ffbd2e" }} /><i style={{ background: "#27c93f" }} /><span>git-collaboration — lesson 04</span></div>
          <div className="body">
            <div><span className="pr">$</span> <span className="o">git checkout -b feat/login</span></div>
            <div><span className="c"># make your change, then stage + commit</span></div>
            <div><span className="pr">$</span> <span className="o">git add . &amp;&amp; git commit -m "add login form"</span></div>
            <div><span className="pr">$</span> <span className="o">git push origin feat/login</span></div>
            <div><span className="c"># open a pull request → get a review → merge 🎉</span></div>
          </div>
        </div>
        <div style={{ marginTop: 24 }}>
          <a className="btn btn-acc" href="https://discord.gg/T7Eu75fpAf" target="_blank" rel="noreferrer">enter the portal {Icon.arrowUpRight()}</a>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { WorkPage, TeamPage, ServicesPage, LearningPage });
