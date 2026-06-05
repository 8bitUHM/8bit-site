import * as React from "react";
import { useState, useMemo } from "react";
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
  start: Date; end: Date | null; poster: string | null;
  recurring: boolean; recurrenceEnd: Date | null;
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
    location: e.location, start: new Date(e.start_datetime),
    end: e.end_datetime ? new Date(e.end_datetime) : null,
    poster: e.poster || null, recurring: e.is_recurring,
    recurrenceEnd: e.recurrence_end_date ? new Date(e.recurrence_end_date + "T00:00:00") : null,
    cancellations,
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

function upcomingOccurrences(events: Ev[], from: Date, to: Date, limit?: number): Occ[] {
  let all: Occ[] = [];
  events.forEach((ev) => { all = all.concat(occurrencesInRange(ev, from, to)); });
  all = all.filter((o) => !o.cancelled).sort((a, b) => a.start.getTime() - b.start.getTime());
  return limit ? all.slice(0, limit) : all;
}

/* --- inline SVGs --- */
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6"/></svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
);

/* --- EventFeedCard --- */
const EventFeedCard: React.FC<{ occ: Occ; onOpen: (slug: string) => void }> = ({ occ, onOpen }) => (
  <a
    className={`ev-card${occ.poster ? " has-poster" : ""}`}
    onClick={() => onOpen(occ.slug)}
    style={{ cursor: "pointer" }}
  >
    <div className="ev-date">
      <span className="m">{MON_ABBR[occ.start.getMonth()].toLowerCase()}</span>
      <span className="d">{occ.start.getDate()}</span>
      <span className="wd">{DOW[occ.start.getDay()].toLowerCase()}</span>
    </div>
    <div className="ev-body">
      <div className="ev-meta">
        <span className="ev-type">
          <i className={`tdot t-${occ.type}`} />
          {EVENT_TYPE_LABELS[occ.type] || occ.type}
        </span>
        {occ.recurring && (
          <span className="ev-rec">
            <RepeatIcon /> weekly
          </span>
        )}
      </div>
      <h3>{occ.title}</h3>
      <p>{occ.summary}</p>
      <div className="ev-foot">
        <span><ClockIcon />{fmtTimeRange(occ.start, occ.end)}</span>
        {occ.location && <span><MapPinIcon />{occ.location}</span>}
      </div>
    </div>
    {occ.poster && (
      <div className="ev-thumb">
        <img src={occ.poster} alt={`${occ.title} flyer`} />
      </div>
    )}
    <span className="ev-ar"><ArrowRight /></span>
  </a>
);

/* --- Calendar --- */
const Calendar: React.FC<{ events: Ev[]; onOpen: (slug: string) => void }> = ({ events, onOpen }) => {
  const today = useMemo(() => dOnly(new Date()), []);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });

  const cells = useMemo(() => {
    const first = new Date(view.y, view.m, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
    const gridStart = addDays(first, -startPad);
    const monthStart = dOnly(first);
    const monthEnd = dOnly(new Date(view.y, view.m, daysInMonth));

    const map: Record<string, Occ[]> = {};
    events.forEach((ev) => {
      occurrencesInRange(ev, monthStart, monthEnd).forEach((o) => {
        const k = ymd(o.date);
        (map[k] = map[k] || []).push(o);
      });
    });
    Object.values(map).forEach((arr) => arr.sort((a, b) => a.start.getTime() - b.start.getTime()));

    const out: { date: Date; inMonth: boolean; occ: Occ[] }[] = [];
    for (let i = 0; i < 42; i++) {
      const d = addDays(gridStart, i);
      out.push({ date: d, inMonth: d.getMonth() === view.m, occ: map[ymd(d)] || [] });
    }
    while (out.length > 35 && out.slice(35).every((c) => !c.inMonth)) out.length = 35;
    return out;
  }, [view, events]);

  const go = (delta: number) => setView((v) => {
    const d = new Date(v.y, v.m + delta, 1);
    return { y: d.getFullYear(), m: d.getMonth() };
  });

  return (
    <div className="cal">
      <div className="cal-head">
        <span className="cal-title">
          {MONTHS[view.m]} <span className="yr">{view.y}</span>
        </span>
        <div className="cal-nav">
          <button
            className="cal-today"
            onClick={() => setView({ y: today.getFullYear(), m: today.getMonth() })}
          >
            today
          </button>
          <button onClick={() => go(-1)} aria-label="Previous month">
            <ChevronLeft />
          </button>
          <button onClick={() => go(1)} aria-label="Next month">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="cal-dows">
        {DOW.map((d) => <div key={d} className="cal-dow">{d.toLowerCase()}</div>)}
      </div>
      <div className="cal-grid">
        {cells.map((c, i) => (
          <div
            key={i}
            className={`cal-cell${c.inMonth ? "" : " out"}${sameDay(c.date, today) ? " today" : ""}`}
          >
            <span className="cal-num">{c.date.getDate()}</span>
            <div className="cal-evs">
              {c.occ.map((o, j) => (
                <button
                  key={j}
                  className={`cal-ev t-${o.type}${o.cancelled ? " cx" : ""}`}
                  title={o.cancelled ? `${o.title} — ${o.reason}` : o.title}
                  onClick={() => onOpen(o.slug)}
                >
                  <i className="tdot" /><span className="ct">{o.title}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- Events page --- */
const Events = () => {
  const [eventsData, setEventsData] = React.useState<Ev[]>([]);
  const [error, setError] = React.useState(false);

  const today = useMemo(() => dOnly(new Date()), []);

  React.useEffect(() => {
    try {
      const raw = (window as any).events_data as DjangoEvent[];
      setEventsData((raw || []).map(mapEvent));
    } catch {
      setError(true);
    }
  }, []);

  const horizon = addDays(today, 80);
  const upcoming = useMemo(() => upcomingOccurrences(eventsData, today, horizon, 6), [eventsData]);

  const handleOpen = (slug: string) => { window.location.href = `/events/${slug}/`; };

  return (
    <div className="page">
      <div className="wrap page-head">
        <span className="path-label">~/events</span>
        <h1>Events</h1>
        <p className="sub">
          Workshops, weekly build nights, socials, and info sessions. Open to all UH Mānoa students — come build with us.
        </p>
      </div>

      <section className="section wrap">
        <div className="sec-h">
          <div className="t">
            <span className="path-label" style={{ display: "block", marginBottom: 10 }}>~/events/calendar</span>
            <h2>Calendar</h2>
          </div>
          <span className="meta-r">all events by month</span>
        </div>
        {error ? (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-mono)", color: "var(--dim)" }}>
            // error loading events
          </p>
        ) : (
          <>
            <Calendar events={eventsData} onOpen={handleOpen} />
            <div className="cal-legend">
              {Object.entries(EVENT_TYPE_LABELS).map(([t, label]) => (
                <span key={t} className="leg">
                  <i className={`tdot t-${t}`} />{label}
                </span>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="section wrap">
        <div className="sec-h">
          <div className="t">
            <span className="path-label" style={{ display: "block", marginBottom: 10 }}>~/events/upcoming</span>
            <h2>Upcoming</h2>
          </div>
          {upcoming.length > 0 && <span className="meta-r">next {upcoming.length}</span>}
        </div>
        <div className="ev-feed">
          {upcoming.length === 0 ? (
            <div className="ev-empty">// no upcoming events — check back soon</div>
          ) : (
            upcoming.map((o, i) => (
              <EventFeedCard key={o.slug + i} occ={o} onOpen={handleOpen} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

const root = document.getElementById("page-root");
createRoot(root!).render(<Events />);
