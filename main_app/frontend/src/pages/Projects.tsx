import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

const PER_PAGE = 6;

interface Tag {
  tag_name: string;
}
interface Project {
  name: string;
  description: string;
  github_link: string;
  deploy_link: string;
  client: string;
  paid_client_project: boolean;
  in_development: boolean;
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
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 6-6 6 6 6"/>
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 6 6 6-6 6"/>
  </svg>
);

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
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

  const matches = useMemo(() => {
    return projects.filter((p) => {
      if (filter === "Client" && !(p.paid_client_project || !!p.client)) return false;
      if (filter === "Open source" && (p.paid_client_project || !!p.client)) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = [p.name, p.description, p.client || "", p.tags.map((t) => t.tag_name).join(" ")].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [projects, filter, query]);

  const totalPages = Math.max(1, Math.ceil(matches.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const shown = matches.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const resetPage = () => setPage(1);

  const pad = (n: number) => String(n).padStart(2, "0");

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
        <div className="work-controls">
          <div className="chips">
            {filters.map((f) => (
              <span
                key={f}
                className={`chip${filter === f ? " active" : ""}`}
                onClick={() => { setFilter(f); resetPage(); }}
              >
                {f.toLowerCase()}
              </span>
            ))}
          </div>
          <div className="search">
            <span className="search-ico"><SearchIcon /></span>
            <input
              type="text"
              placeholder="search projects, clients, tags…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); resetPage(); }}
            />
            {query && (
              <button
                className="search-clear"
                onClick={() => { setQuery(""); resetPage(); }}
                aria-label="Clear search"
              >
                <XIcon />
              </button>
            )}
          </div>
        </div>

        <div className="work-count">
          {matches.length} project{matches.length === 1 ? "" : "s"}
          {filter !== "All" ? ` · ${filter.toLowerCase()}` : ""}
          {query ? ` · "${query}"` : ""}
        </div>

        {error && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>
            // could not load projects — please refresh
          </p>
        )}

        {!error && shown.length === 0 && (
          <div className="ev-empty">// no projects match — try a different search or filter</div>
        )}

        {shown.length > 0 && (
          <div className="cards-2">
            {shown.map((p, i) => (
              <div className="pcard" key={p.name}>
                <div className="top">
                  <span className="n">{pad((current - 1) * PER_PAGE + i + 1)}</span>
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

        {totalPages > 1 && (
          <div className="pager">
            <button
              className="pg-arrow"
              disabled={current === 1}
              onClick={() => setPage(current - 1)}
              aria-label="Previous page"
            >
              <ChevronLeft />
            </button>
            <div className="pg-nums">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className={`pg-num${n === current ? " on" : ""}`}
                  onClick={() => setPage(n)}
                >
                  {pad(n)}
                </button>
              ))}
            </div>
            <button
              className="pg-arrow"
              disabled={current === totalPages}
              onClick={() => setPage(current + 1)}
              aria-label="Next page"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

const root = document.getElementById("page-root");
createRoot(root!).render(<Projects />);
