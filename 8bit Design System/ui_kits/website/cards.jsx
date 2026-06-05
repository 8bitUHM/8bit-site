/* 8bit UI Kit — content cards */

const BentoTile = ({ title, description, icon, variant = "mint", wide = false }) => (
  <div className={`bento bento--${variant} ${wide ? "bento--wide" : ""} animate-slide-up`}>
    <IconBlob variant="ghost">{icon}</IconBlob>
    <h3 style={{ marginTop: 18 }}>{title}</h3>
    <p>{description}</p>
  </div>
);

const STEP_COLOR = { primary: "var(--primary-500)", accent: "var(--accent-500)", violet: "var(--violet-500)" };
const ProcessStep = ({ step, title, description, accent = "primary" }) => (
  <div className="step animate-slide-up">
    <div className="step-num" style={{ background: STEP_COLOR[accent] }}>{step}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ServiceRow = ({ title, description, icon, bg, reverse = false }) => (
  <div className={`service-panel ${reverse ? "reverse" : ""} animate-slide-up`} style={{ background: bg }}>
    <div className="service-ico">{icon}</div>
    <div style={{ textAlign: reverse ? "right" : "left" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ProjectCard = ({ name, description, image, client, paid, inDev, tags = [] }) => (
  <div className="card-pop hoverable animate-slide-up" style={{ display: "flex", flexDirection: "column" }}>
    <div className="proj-img">
      <img src={image} alt={name} />
      {client && <span className="proj-badge left" style={paid ? { background: "var(--lime-500)", color: "#fff" } : { background: "#fff", color: "var(--gray-900)" }}>{paid ? "Paid Client" : "Client Project"}</span>}
      {inDev && <span className="proj-badge right" style={{ background: "var(--sunset-500)", color: "#fff" }}>In Dev</span>}
    </div>
    <div className="proj-body" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <h3>{name}</h3>
      <p>{description}</p>
      {client && <p className="proj-built">Built for {client}</p>}
      {tags.length > 0 && (
        <div className="tag-row">
          {tags.map((t) => <span key={t.name} className="tag" style={{ background: t.color }}>{t.name}</span>)}
        </div>
      )}
      <a className="proj-cta" style={{ marginTop: "auto" }} href="https://github.com/8bituhm" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>
);

const SOCIAL = { github: "github", linkedin: "linkedin", mail: "mail" };
const MemberCard = ({ name, role, image, leadership = false, socials = [] }) => (
  <div className="card-pop hoverable animate-slide-up" style={{ position: "relative" }}>
    <div className={`member-swoosh ${leadership ? "lead" : "soft"}`} />
    <div className="member-photo"><img src={image} alt={name} /></div>
    <div className="member-body">
      <h3>{name}</h3>
      <div className="role-badges">
        {leadership && <span className="role-badge lead">{role}</span>}
        <span className="role-badge team">Software Team</span>
      </div>
      <div className="socials">
        {socials.map((s) => (
          <a key={s} href="#" onClick={(e) => e.preventDefault()} aria-label={s}>
            <span style={{ width: 18, height: 18, display: "inline-block" }}>{Icon[SOCIAL[s]]()}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

Object.assign(window, { BentoTile, ProcessStep, ServiceRow, ProjectCard, MemberCard });
