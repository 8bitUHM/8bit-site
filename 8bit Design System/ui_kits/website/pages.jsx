/* 8bit UI Kit — page compositions (Home, Members, Projects, Services) */

const MEMBERS = [
  { name: "Jalen Lum", role: "President", leadership: true, socials: ["github", "linkedin", "mail"] },
  { name: "Robin Rohr", role: "Vice President", leadership: true, socials: ["github", "linkedin"] },
  { name: "Kai Nakamura", role: "Treasurer", leadership: true, socials: ["linkedin", "mail"] },
  { name: "Leilani Souza", socials: ["github", "linkedin"] },
  { name: "Marcus Chen", socials: ["github", "mail"] },
  { name: "Anela Kahale", socials: ["github", "linkedin", "mail"] },
];
const AV = "../../assets/default-member.png";

const PROJECTS = [
  { name: "8bit Site", description: "The official 8bit website — a Django + React build with a member directory, project showcase, and learning portal.", image: "../../assets/about-us-3.webp", client: "8bit @ UH Mānoa", paid: false, tags: [{ name: "React", color: "#0ea5e9" }, { name: "Django", color: "#14b8a6" }, { name: "TypeScript", color: "#8b5cf6" }] },
  { name: "Custodian Manager", description: "Internal UH Mānoa HR app to manage and distribute custodial work assignments evenly across staff.", image: "../../assets/about-us-3.webp", client: "UHM Office of Human Resources", paid: true, inDev: true, tags: [{ name: "React", color: "#0ea5e9" }, { name: "Postgres", color: "#0d9488" }] },
  { name: "ACM Mānoa", description: "Website for the Association for Computing Machinery student chapter — events, officers, and membership.", image: "../../assets/about-us-3.webp", client: "ACM Mānoa", paid: false, tags: [{ name: "Vite", color: "#8b5cf6" }, { name: "React", color: "#0ea5e9" }] },
  { name: "Theta360 Guide", description: "An automotive guide website featuring interactive 360° panoramas for immersive walkthroughs.", image: "../../assets/about-us-3.webp", client: "Oppkey", paid: true, tags: [{ name: "360°", color: "#ec4899" }, { name: "JavaScript", color: "#f97316" }] },
];

/* ---------- HOME ---------- */
const HomePage = ({ onNavigate }) => (
  <div className="page">
    <SectionBand variant="hero" hero blobs>
      <div className="hero-grid">
        <div className="animate-fade-in">
          <h1 className="h-hero">We are <span style={{ textDecoration: "underline", textDecorationStyle: "wavy", textUnderlineOffset: 10, textDecorationColor: "rgba(255,255,255,.6)" }}>8bit</span> @ UH Mānoa</h1>
          <p className="lead on-color-soft" style={{ maxWidth: 520, marginBottom: 32 }}>We empower our members through immersive, hands-on software development.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Button variant="white" onClick={() => onNavigate("Members")}>Meet the Team</Button>
            <Button variant="ghost" onClick={() => onNavigate("Projects")}>View Projects</Button>
          </div>
        </div>
        <div className="animate-slide-up">
          <LogoCard />
          <div className="stat-row">
            <StatChip value="UHM" label="Campus" />
            <StatChip value="Software" label="Focus" />
            <StatChip value="Free" label="Services" />
          </div>
        </div>
      </div>
    </SectionBand>

    <SectionDivider from="hero" to="white" />

    <SectionBand variant="white">
      <Eyebrow accent="primary">What we do</Eyebrow>
      <h2 className="h-sec">Build, learn, and ship together</h2>
      <div className="bento-grid" style={{ marginTop: 40 }}>
        <BentoTile variant="mint" title="Digital Solutions" description="We bring software to life through innovative development and creative problem-solving." icon={Icon.monitor()} />
        <BentoTile variant="sky" title="Unique Experiences" description="Real-life software development through hands-on projects and mentorship." icon={Icon.book()} />
        <BentoTile variant="violet" wide title="Learning Portal" description="Level up with our in-house tutorials and guided lessons — from your first commit to shipping full-stack apps." icon={Icon.cap()} />
        <BentoTile variant="warm" title="Client & Open Source" description="From paid client work to open source contributions — we build for impact." icon={Icon.archive()} />
      </div>
    </SectionBand>

    <SectionDivider from="white" to="warm" />

    <SectionBand variant="warm" blobs>
      <Eyebrow accent="light">About 8bit</Eyebrow>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="about-grid">
        <div>
          <h2 className="h-sec" style={{ color: "#fff" }}>Students building real software at UH Mānoa</h2>
          <p className="lead on-color-soft" style={{ marginBottom: 16 }}>8bit is a group of students passionate about software development and creating impactful software solutions. We specialize in full-stack website development and collaborate with clients while contributing to open source.</p>
          <p className="on-color-soft" style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.6, margin: 0 }}>Guided by student leadership, our members take on real client work and open source projects.</p>
        </div>
        <ul className="feature-list">
          {["Full-stack web development", "Client project experience", "Open source contributions", "Student-led mentorship", "Free services for clients"].map((t) => (
            <li key={t}><span className="dot" /><span className="t">{t}</span></li>
          ))}
        </ul>
      </div>
    </SectionBand>

    <SectionDivider from="warm" to="white" />

    <SectionBand variant="white">
      <h2 className="h-sec" style={{ textAlign: "center" }}>Ready to join our community?</h2>
      <p className="lead" style={{ color: "var(--fg-2)", textAlign: "center", maxWidth: 620, margin: "0 auto 40px" }}>Connect on Discord, explore our GitHub, or reach out via email. We're always looking for passionate students.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Button variant="primary" href="https://discord.gg/T7Eu75fpAf"><span style={{ width: 20, height: 20, display: "inline-block" }}>{Icon.discord()}</span> Join Discord</Button>
        <Button variant="secondary" href="https://github.com/8bituhm"><span style={{ width: 18, height: 18, display: "inline-block" }}>{Icon.github()}</span> View GitHub</Button>
      </div>
    </SectionBand>
  </div>
);

/* ---------- MEMBERS ---------- */
const MembersPage = () => (
  <div className="page">
    <SectionBand variant="hero" hero blobs>
      <Eyebrow accent="light">Our Team</Eyebrow>
      <h1 className="h-hero" style={{ marginBottom: 12 }}>Meet the members</h1>
      <p className="lead on-color-soft" style={{ maxWidth: 560 }}>Student leaders and software-team members building real projects together.</p>
    </SectionBand>
    <SectionDivider from="hero" to="white" />
    <SectionBand variant="white">
      <Eyebrow accent="primary">Leadership & Team</Eyebrow>
      <div className="member-grid" style={{ marginTop: 28 }}>
        {MEMBERS.map((m) => <MemberCard key={m.name} {...m} image={AV} />)}
      </div>
    </SectionBand>
  </div>
);

/* ---------- PROJECTS ---------- */
const ProjectsPage = () => (
  <div className="page">
    <SectionBand variant="hero" hero blobs>
      <Eyebrow accent="light">Our Work</Eyebrow>
      <h1 className="h-hero" style={{ marginBottom: 12 }}>Projects we've shipped</h1>
      <p className="lead on-color-soft" style={{ maxWidth: 560 }}>From paid client work to open source — software built for real impact.</p>
    </SectionBand>
    <SectionDivider from="hero" to="soft" />
    <SectionBand variant="soft">
      <Eyebrow accent="accent">Featured projects</Eyebrow>
      <div className="project-grid" style={{ marginTop: 28 }}>
        {PROJECTS.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </SectionBand>
  </div>
);

/* ---------- SERVICES ---------- */
const ServicesPage = () => (
  <div className="page">
    <SectionBand variant="hero" hero blobs>
      <Eyebrow accent="light">What we offer</Eyebrow>
      <h1 className="h-hero" style={{ marginBottom: 12 }}>Our Services</h1>
      <p className="lead on-color-soft" style={{ maxWidth: 560, marginBottom: 28 }}>We charge nothing for our services.</p>
      <Button variant="white" href="mailto:8bituhmanoa@gmail.com">Get in Touch</Button>
    </SectionBand>
    <SectionDivider from="hero" to="white" />
    <SectionBand variant="white">
      <Eyebrow accent="primary">How it works</Eyebrow>
      <h2 className="h-sec">From idea to launch</h2>
      <div className="steps" style={{ marginTop: 36 }}>
        <ProcessStep step={1} title="Consult" accent="primary" description="We learn about your goals, audience, and requirements through a personalized consultation." />
        <ProcessStep step={2} title="Build" accent="accent" description="Our software, design, and business teams collaborate to build the right solution for you." />
        <ProcessStep step={3} title="Launch" accent="violet" description="We handle deployment, hosting, and domain management so you can focus on what matters." />
      </div>
    </SectionBand>
    <SectionDivider from="white" to="soft" />
    <SectionBand variant="soft">
      <Eyebrow accent="accent">What we offer</Eyebrow>
      <h2 className="h-sec">Services tailored to your needs</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 32 }}>
        <ServiceRow title="Static Website" bg="var(--primary-500)" icon={Icon.window()} description="A sleek, polished online presence. Our design team and modern tooling create websites that showcase your brand and message effectively." />
        <ServiceRow title="Dynamic Web App" bg="linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 100%)" reverse icon={Icon.app()} description="Applications that engage your audience, with a powerful backend driving dynamic content and an intuitive admin portal for easy management." />
        <ServiceRow title="Infrastructure" bg="linear-gradient(90deg, #fb923c 0%, #ec4899 100%)" icon={Icon.server()} description="We handle site deployment and hosting on AWS or UH-hosted servers — from deployment to domain management, we take care of the infrastructure." />
      </div>
    </SectionBand>
    <SectionDivider from="soft" to="violet" />
    <SectionBand variant="violet" blobs>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", background: "#fff", borderRadius: "var(--radius-lg)", padding: "48px 40px", boxShadow: "var(--shadow-pop)" }}>
        <h2 className="h-sec" style={{ fontSize: 30 }}>Interested in 8bit services?</h2>
        <p className="lead" style={{ color: "var(--fg-2)", marginBottom: 24 }}>Get in touch to discuss how we can help bring your vision to life.</p>
        <Button variant="primary" href="mailto:8bituhmanoa@gmail.com">Send us an Email</Button>
      </div>
    </SectionBand>
  </div>
);

Object.assign(window, { HomePage, MembersPage, ProjectsPage, ServicesPage });
