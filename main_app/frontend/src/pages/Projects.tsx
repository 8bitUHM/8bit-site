import * as React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

interface Tag {
  tag_name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  github_link: string;
  deploy_link: string;
  client: string;
  paid_client_project: boolean;
  in_development: boolean;
  image: string;
  tags: Tag[];
}

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const data = (window as any).data as Project[];
      if (data && Array.isArray(data)) setProjects(data);
    } catch {
      setError(true);
    }
  }, []);

  const filters = ["All", "Client", "Open source"];

  const shown = filter === "All"
    ? projects
    : filter === "Client"
    ? projects.filter((p) => p.paid_client_project || !!p.client)
    : projects.filter((p) => !p.paid_client_project && !p.client);

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/work</span>
        <h1>Selected work</h1>
        <p className="sub">
          Production software shipped for the University of Hawaiʻi, local clients, and the open-source community — built and maintained by students.
        </p>
      </div>

      <section className="section wrap">
        <div className="chips" style={{ marginBottom: 28 }}>
          {filters.map((f) => (
            <span
              key={f}
              className={`chip${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.toLowerCase()}
            </span>
          ))}
        </div>

        {error && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>
            Could not load projects. Please refresh.
          </p>
        )}

        {!error && projects.length === 0 && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>
            No projects yet — check back soon.
          </p>
        )}

        {shown.length > 0 && (
          <div className="cards-2">
            {shown.map((p, i) => (
              <div className="pcard" key={p.name}>
                <div className="top">
                  <span className="n">{pad(i)}</span>
                  <span className="badge">{p.in_development ? "in dev" : "live"}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t.tag_name}>{t.tag_name}</span>
                  ))}
                </div>
                <div className="links">
                  {p.github_link && (
                    <a href={p.github_link} target="_blank" rel="noreferrer">
                      <GithubIcon /> source
                    </a>
                  )}
                  {p.deploy_link && (
                    <a href={p.deploy_link} target="_blank" rel="noreferrer">
                      <ArrowUpRight /> live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Projects />);
