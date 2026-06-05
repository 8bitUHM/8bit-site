import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

interface Tag {
  tag_name: string;
}

interface Lesson {
  name: string;
  slug: string;
  tags: Tag[];
  completion_time: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

const Index = () => {
  const [pageReady, setPageReady] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const data = (window as any).data as Lesson[];
      setLessons(data || []);
    } catch {
      setError(true);
    }
    setPageReady(true);
  }, []);

  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/learning</span>
        <h1>Learning Portal</h1>
        <p className="sub">
          Level up from your first commit to shipping full-stack apps. In-house lessons built by members, paced for real project work.
        </p>
      </div>

      <section className="section wrap">
        <div className="sec-h">
          <div className="t">
            <span className="path-label">~/learning/lessons</span>
            <h2>Lessons</h2>
          </div>
          {pageReady && !error && (
            <span className="meta-r">self-paced · {lessons.length} lesson{lessons.length !== 1 ? "s" : ""}</span>
          )}
        </div>

        {!pageReady ? (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)", padding: "32px 0" }}>
            // loading...
          </p>
        ) : error ? (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)", padding: "32px 0" }}>
            // error loading lessons — try refreshing
          </p>
        ) : lessons.length === 0 ? (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)", padding: "32px 0" }}>
            // no lessons available yet
          </p>
        ) : (
          <div className="tracks">
            {lessons.map((lesson, i) => (
              <div
                key={lesson.slug}
                className="track"
                onClick={() => { window.location.href = `/learning/lessons/${lesson.slug}`; }}
              >
                <span className="n">{pad(i + 1)}</span>
                <span className="nm">{lesson.name}</span>
                <span className="tg">
                  {lesson.tags.map((tag, ti) => (
                    <span key={ti}>{tag.tag_name}</span>
                  ))}
                </span>
                <span className="lc">{lesson.completion_time}</span>
                <span className="ar">→</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
