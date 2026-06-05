import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

/* --- constants --- */
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MON_ABBR = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DOW = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const EVENT_TYPE_LABELS: Record<string, string> = {
  workshop: "workshop",
  meeting: "meeting",
  social: "social",
  info_session: "info session",
  other: "event",
};

/* --- date helpers --- */
function dOnly(d: Date): Date { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function addDays(d: Date, n: number): Date { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function ymd(d: Date): string { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function sameDay(a: Date, b: Date): boolean { return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }
function fmtTime(d: Date): string {
  let h = d.getHours(), m = d.getMinutes();
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12; if (h === 0) h = 12;
  return m === 0 ? `${h}:00 ${ap}` : `${h}:${String(m).padStart(2,"0")} ${ap}`;
}
function fmtTimeRange(start: Date, end: Date | null): string {
  if (!end) return fmtTime(start);
  if (sameDay(start, end)) return `${fmtTime(start)} – ${fmtTime(end)}`;
  return `${fmtTime(start)} – ${MON_ABBR[end.getMonth()]} ${end.getDate()}`;
}
function fmtLongDate(d: Date): string {
  return `${DOW[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/* --- interfaces --- */
interface DjangoEvent {
  title: string; slug: string; summary: string; description: string;
  start_datetime: string; end_datetime: string | null; location: string;
  registration_link: string | null; event_type: string; poster: string | null;
  is_published: boolean; is_recurring: boolean; recurrence_end_date: string | null;
  cancellations: { occurrence_date: string; reason: string }[];
}
interface Ev {
  slug: string; title: string; type: string; summary: string; location: string;
  description: string; start: Date; end: Date | null; poster: string | null;
  recurring: boolean; recurrenceEnd: Date | null; registration: string | null;
  cancellations: Record<string, string>;
}
interface Occ {
  slug: string; title: string; type: string; summary: string; location: string;
  recurring: boolean; date: Date; start: Date; end: Date | null;
  poster: string | null; cancelled: boolean; reason: string | null;
}

/* --- data mapping --- */
function mapEvent(e: DjangoEvent): Ev {
  const cancellations: Record<string, string> = {};
  e.cancellations.forEach((c) => { cancellations[c.occurrence_date] = c.reason; });
  return {
    slug: e.slug, title: e.title, type: e.event_type, summary: e.summary,
    description: e.description, location: e.location,
    start: new Date(e.start_datetime),
    end: e.end_datetime ? new Date(e.end_datetime) : null,
    poster: e.poster || null, recurring: e.is_recurring,
    recurrenceEnd: e.recurrence_end_date ? new Date(e.recurrence_end_date + "T00:00:00") : null,
    registration: e.registration_link || null, cancellations,
  };
}

/* --- occurrence expansion --- */
function buildOcc(ev: Ev, occDate: Date): Occ {
  const occStart = new Date(occDate.getFullYear(), occDate.getMonth(), occDate.getDate(), ev.start.getHours(), ev.start.getMinutes());
  let occEnd: Date | null = null;
  if (ev.end) occEnd = new Date(occStart.getTime() + (ev.end.getTime() - ev.start.getTime()));
  const k = ymd(occDate);
  const cancelled = Object.prototype.hasOwnProperty.call(ev.cancellations, k);
  return {
    slug: ev.slug, title: ev.title, type: ev.type, summary: ev.summary,
    location: ev.location, recurring: ev.recurring, date: dOnly(occDate),
    start: occStart, end: occEnd, poster: ev.poster,
    cancelled, reason: cancelled ? ev.cancellations[k] : null,
  };
}

function occurrencesInRange(ev: Ev, from: Date | null, to: Date | null): Occ[] {
  const startDate = dOnly(ev.start);
  if (!ev.recurring) {
    if (from && startDate < from) return [];
    if (to && startDate > to) return [];
    return [buildOcc(ev, startDate)];
  }
  if (!ev.recurrenceEnd) return [];
  const recEnd = ev.recurrenceEnd;
  const rangeStart = from && from > startDate ? from : startDate;
  const rangeEnd = to && to < recEnd ? to : recEnd;
  if (rangeStart > rangeEnd) return [];
  let cur = new Date(startDate);
  while (cur < rangeStart) cur = addDays(cur, 7);
  const out: Occ[] = [];
  while (cur <= rangeEnd && cur <= recEnd) { out.push(buildOcc(ev, cur)); cur = addDays(cur, 7); }
  return out;
}

/* --- inline SVGs --- */
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}><path d="m15 6-6 6 6 6"/></svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
);
const TicketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9a3 3 0 0 0 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/><path d="M13 5v14"/></svg>
);

/* --- EventDetail page --- */
const EventDetail = () => {
  const rawEvent = (window as any).event_data as DjangoEvent | null;

  if (!rawEvent) {
    return (
      <div className="page wrap" style={{ padding: "90px 0 120px" }}>
        <span className="path-label">~/events/404</span>
        <h1 style={{ fontSize: "var(--t-h1)", margin: "16px 0 20px" }}>Event not found</h1>
        <p style={{ marginBottom: 28, color: "var(--dim)", fontSize: "var(--t-lead)", fontWeight: 500 }}>
          This event may have been unpublished or moved.
        </p>
        <a className="btn btn-acc" href="/events/">
          <ChevronLeft /> back to events
        </a>
      </div>
    );
  }

  const ev = mapEvent(rawEvent);
  const today = dOnly(new Date());
  const upcomingDates = ev.recurring
    ? occurrencesInRange(ev, today, addDays(today, 120)).slice(0, 6)
    : [];

  return (
    <div className="page">
      <div className="wrap page-head">
        <a className="back-link" href="/events/">
          <ChevronLeft /> events
        </a>
        <div className="ev-detail-meta">
          <span className="ev-type">
            <i className={`tdot t-${ev.type}`} />
            {EVENT_TYPE_LABELS[ev.type] || ev.type}
          </span>
          {ev.recurring && (
            <span className="ev-rec">
              <RepeatIcon /> weekly meeting
            </span>
          )}
        </div>
        <h1>{ev.title}</h1>
        <p className="sub">{ev.summary}</p>
      </div>

      <section className="section wrap">
        <div className="ev-detail">
          <div className="ev-detail-main">
            {ev.description.split("\n\n").map((para, i) => (
              <p key={i} className="ev-para">{para}</p>
            ))}

            {ev.recurring && upcomingDates.length > 0 && (
              <div className="ev-sched">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--acc)", marginBottom: 14, letterSpacing: ".02em" }}>
                  ~/upcoming-dates
                </div>
                <div className="sched-list">
                  {upcomingDates.map((o, i) => (
                    <div key={i} className={`sched-row${o.cancelled ? " cx" : ""}`}>
                      <span className="sd">
                        <CalendarIcon /> {fmtLongDate(o.start)}
                      </span>
                      <span className="st">
                        {o.cancelled ? `cancelled — ${o.reason}` : fmtTimeRange(o.start, o.end)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="ev-aside">
            {ev.poster && (
              <div className="ev-poster">
                <img src={ev.poster} alt={`${ev.title} flyer`} />
              </div>
            )}
            <div className="ev-panel">
              <div className="ev-panel-row">
                <span className="pl"><CalendarIcon /> when</span>
                <span className="pv">{fmtLongDate(ev.start)}</span>
                <span className="ps">
                  {fmtTimeRange(ev.start, ev.end)}{ev.recurring ? " · weekly" : ""}
                </span>
              </div>
              {ev.location && (
                <div className="ev-panel-row">
                  <span className="pl"><MapPinIcon /> where</span>
                  <span className="pv">{ev.location}</span>
                </div>
              )}
              {ev.recurring && ev.recurrenceEnd && (
                <div className="ev-panel-row">
                  <span className="pl"><RepeatIcon /> repeats</span>
                  <span className="pv">Weekly</span>
                  <span className="ps">through {fmtLongDate(ev.recurrenceEnd)}</span>
                </div>
              )}
              {ev.registration ? (
                <a
                  className="btn btn-acc"
                  href={ev.registration}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
                >
                  <TicketIcon /> register / RSVP
                </a>
              ) : (
                <a
                  className="btn btn-outline"
                  href="/join/"
                  style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
                >
                  just show up — how to join
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

const root = document.getElementById("page-root");
createRoot(root!).render(<EventDetail />);
