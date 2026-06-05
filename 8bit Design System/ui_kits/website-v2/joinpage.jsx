/* 8bit v2 — Join (students / interested in joining) */
function JoinPage({ onNav }) {
  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/join</span>
        <h1>Join the club</h1>
        <p className="sub">No experience gatekept. If you want to build real software with a team of students — designers, engineers, and PMs welcome — there's a seat for you. Here's how to plug in.</p>
        <div className="hero-cta" style={{ marginTop: 28 }}>
          <a className="btn btn-acc" href="https://discord.gg/T7Eu75fpAf" target="_blank" rel="noreferrer">join the discord {Icon.arrowUpRight()}</a>
          <a className="btn btn-outline" onClick={() => onNav("Work")}>see what we build</a>
        </div>
      </div>

      {/* meeting info */}
      <section className="section wrap">
        <SectionHeader path="~/join/meetings" title="When we meet" meta="open to all UH students" />
        <div className="meet">
          <div><div className="k">// day</div><div className="v">{MEETING.day}</div><div className="vs">weekly</div></div>
          <div><div className="k">// time</div><div className="v">{MEETING.time}</div><div className="vs">during fall &amp; spring</div></div>
          <div><div className="k">// room</div><div className="v">{MEETING.room}</div><div className="vs">{MEETING.campus}</div></div>
          <div><div className="k">// cost</div><div className="v">Free</div><div className="vs">just show up</div></div>
        </div>
      </section>

      {/* why join */}
      <section className="section wrap">
        <SectionHeader path="~/join/why" title="What you'll do" />
        <div className="reasons">
          <div className="reason"><div className="rn">01 — ship</div><h3>Build real projects</h3><p>Work on production software for real clients — not toy exercises. Your code ships and gets used.</p></div>
          <div className="reason"><div className="rn">02 — learn</div><h3>Level up fast</h3><p>Pair with experienced members, follow our learning tracks, and pick up the full modern stack hands-on.</p></div>
          <div className="reason"><div className="rn">03 — belong</div><h3>Find your people</h3><p>Join a tight community of students who care about building well — across software, design, and product.</p></div>
        </div>
      </section>

      {/* socials */}
      <section className="section wrap">
        <SectionHeader path="~/join/connect" title="Find us online" meta="dm's open" />
        <div className="soc-grid">
          {SOCIALS.map((s) => (
            <a className="soc-card" key={s.name} href={s.url} target="_blank" rel="noreferrer">
              <span className="ico">{Icon[s.icon]()}</span>
              <span>
                <span className="nm">{s.name}</span>
                <span className="hd">{s.handle}</span>
              </span>
              <span className="ar">{Icon.arrowUpRight()}</span>
            </a>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="section wrap">
        <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
          <div className="cta-col" style={{ borderRight: 0 }}>
            <span className="ci">// next step</span>
            <h3>Come to a meeting.</h3>
            <p>Drop into our next {MEETING.day.toLowerCase().replace(/s$/, "")} session, or say hi on Discord first — whatever's easier.</p>
            <a className="btn btn-acc" href="https://discord.gg/T7Eu75fpAf" target="_blank" rel="noreferrer">join the discord {Icon.arrowUpRight()}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
window.JoinPage = JoinPage;
