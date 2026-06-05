/* 8bit v2 — Home */
function HomePage({ onNav }) {
  return (
    <div className="page">
      {/* hero */}
      <section className="hero wrap">
        <div className="cmd"><span className="pr">8bit ~ %</span> <span className="fl">./build</span> --for "UH &amp; local clients" --cost 0</div>
        <h1>We build real software, in the open.<span className="cur" /></h1>
        <p className="sub">A student-led software studio at the University of Hawaiʻi at Mānoa. We design, build, and ship production web apps for the university and local clients — hands-on, collaborative, free of charge.</p>
        <div className="hero-cta">
          <a className="btn btn-acc" onClick={() => onNav("Services")}>start a project {Icon.arrowRight()}</a>
          <a className="btn btn-outline" onClick={() => onNav("Work")}>view work</a>
        </div>
      </section>

      <div className="wrap"><MetaStrip items={[
        { k: "based", v: "UH Mānoa" },
        { k: "discipline", v: "Full-stack" },
        { k: "cost to clients", v: "$0" },
      ]} /></div>

      {/* work */}
      <section className="section wrap">
        <SectionHeader path="~/work" title="Selected work" action={<a className="btn btn-ghost" onClick={() => onNav("Work")}>all projects →</a>} />
        <div className="index">
          {PROJECTS.slice(0, 4).map((p) => (
            <WorkRow key={p.n} n={p.n} name={p.name} tag={p.tags.slice(0, 2).join(" · ").toLowerCase()} year={p.year} onClick={() => onNav("Work")} />
          ))}
        </div>
      </section>

      {/* services */}
      <section className="section wrap">
        <SectionHeader path="~/services" title="What we build" meta="free for clients" />
        <div className="svc">
          <ServiceCell ci="01" title="Static Website" desc="A sleek, polished presence built with modern tooling to showcase your brand and message." ct="// html · css · js" />
          <ServiceCell ci="02" title="Dynamic Web App" desc="Powerful backends, dynamic content, and an intuitive admin portal for easy management." ct="// react · django · postgres" />
          <ServiceCell ci="03" title="Infrastructure" desc="Deployment, hosting, and domain management on AWS or UH-hosted servers, end to end." ct="// aws · docker · ci/cd" />
        </div>
      </section>

      {/* get involved */}
      <section className="section wrap">
        <SectionHeader path="~/join" title="Get involved" />
        <div className="cta-band">
          <div className="cta-col">
            <span className="ci">// for clients</span>
            <h3>Have a project?</h3>
            <p>Tell us what you're building. We scope it with you, then design, build, and ship it — at no cost.</p>
            <a className="btn btn-acc" onClick={() => onNav("Services")}>start a project {Icon.arrowRight()}</a>
          </div>
          <div className="cta-col">
            <span className="ci">// for students</span>
            <h3>Join the team.</h3>
            <p>Work on real client software with a team of student engineers, designers, and PMs. No experience gatekept.</p>
            <a className="btn btn-outline" onClick={() => onNav("Join")}>how to join {Icon.arrowRight()}</a>
            <div className="home-socials">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>{Icon[s.icon]()}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.HomePage = HomePage;
