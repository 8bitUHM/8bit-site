import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

interface Lesson {
  name: string;
  slug: string;
  lesson_videos: Video[];
  description: string;
  tags?: Tag[];
}

interface Tag {
  tag_name: string;
}

interface Video {
  title: string;
  video_embed_link: string;
  short_description: string;
  type: "follow_along" | "concept";
}

function getYouTubeEmbedSrc(embedLink: string): string {
  try {
    const url = embedLink.trim();
    let videoId: string | null = null;
    let existingParams = "";

    const embedMatch = url.match(/(?:youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9_-]+)(\?[^#]*)?/);
    if (embedMatch) {
      videoId = embedMatch[1];
      existingParams = (embedMatch[2] || "").replace(/^\?/, "");
    }

    if (!videoId) {
      const watchMatch = url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
      if (watchMatch) videoId = watchMatch[1];
    }

    if (!videoId) {
      const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      if (shortMatch) videoId = shortMatch[1];
    }

    if (!videoId) return embedLink;

    const base = "https://www.youtube-nocookie.com/embed/" + videoId;
    const params = new URLSearchParams(existingParams);
    if (typeof window !== "undefined" && window.location?.origin) {
      params.set("origin", window.location.origin);
    }
    const query = params.toString();
    return query ? `${base}?${query}` : base;
  } catch {
    return embedLink;
  }
}

const Lesson = () => {
  const [pageReady, setPageReady] = useState(false);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const data = (window as any).lesson_data as Lesson[];
      setLesson(data[0] || null);
    } catch {
      setError(true);
    }
    setPageReady(true);
  }, []);

  const sortedVideos = lesson
    ? [...lesson.lesson_videos].sort((a, b) => {
        if (a.type === "concept" && b.type === "follow_along") return -1;
        if (a.type === "follow_along" && b.type === "concept") return 1;
        return 0;
      })
    : [];

  return (
    <div className="page">
      <div className="wrap page-head">
        <a
          href="/learning"
          className="btn btn-ghost"
          style={{ padding: "6px 0", marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          ← lessons
        </a>
        {pageReady && lesson && (
          <>
            <span className="path-label">~/learning/{lesson.slug}</span>
            <h1>{lesson.name}</h1>
            {lesson.description && (
              <p className="sub">{lesson.description}</p>
            )}
            {lesson.tags && lesson.tags.length > 0 && (
              <div className="tag-row">
                {lesson.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">{tag.tag_name}</span>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {pageReady && (
        <>
          {error || !lesson ? (
            <section className="section wrap">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>
                // error loading lesson — try refreshing
              </p>
            </section>
          ) : sortedVideos.length === 0 ? (
            <section className="section wrap">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>
                // content coming soon
              </p>
            </section>
          ) : (
            <section className="section wrap">
              <div className="sec-h">
                <div className="t">
                  <span className="path-label">~/learning/{lesson.slug}/videos</span>
                  <h2>Content</h2>
                </div>
                <span className="meta-r">{sortedVideos.length} section{sortedVideos.length !== 1 ? "s" : ""}</span>
              </div>
              {sortedVideos.map((vid, i) => (
                <div className="video-card" key={i}>
                  <div className="vh">
                    <div className="vtype">
                      {vid.type === "concept" ? "// concept video" : "// follow along"}
                    </div>
                    <div className="vtitle">Section {i + 1}: {vid.title}</div>
                    {vid.short_description && (
                      <div className="vdesc">{vid.short_description}</div>
                    )}
                  </div>
                  <div className="vid">
                    <iframe
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={getYouTubeEmbedSrc(vid.video_embed_link)}
                      title={`${vid.title} — Section ${i + 1}`}
                    />
                  </div>
                </div>
              ))}
            </section>
          )}

          <section className="section wrap" style={{ paddingTop: 32 }}>
            <a href="/learning" className="btn btn-outline">← back to all lessons</a>
          </section>
        </>
      )}
    </div>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Lesson />);
