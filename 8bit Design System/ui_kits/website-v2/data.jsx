/* 8bit v2 — sample data */
const AVATAR = "../../assets/default-member.png";

const PROJECTS = [
  { n: "01", name: "8bit Site", desc: "The organization's own site — member directory, project showcase, and a learning portal. Django API with a React front end.", tags: ["React", "Django", "PostgreSQL"], year: "2025", kind: "Open source", status: "live", client: "8bit @ UH Mānoa" },
  { n: "02", name: "Custodian Manager", desc: "Internal tool that distributes custodial work assignments evenly across staff, with an admin portal for scheduling.", tags: ["React", "PostgreSQL"], year: "2025", kind: "Client", status: "in-dev", client: "UHM Office of Human Resources" },
  { n: "03", name: "ACM Mānoa", desc: "Website for the ACM student chapter — events, officer roster, and membership info.", tags: ["Vite", "React"], year: "2024", kind: "Client", status: "live", client: "ACM Mānoa" },
  { n: "04", name: "Theta360 Guide", desc: "An automotive guide featuring interactive 360° panoramas for immersive walkthroughs.", tags: ["JavaScript", "360°"], year: "2024", kind: "Client", status: "live", client: "Oppkey" },
  { n: "05", name: "CompSciHi", desc: "Outreach site introducing Hawaiʻi students to computer science pathways and resources.", tags: ["React"], year: "2024", kind: "Open source", status: "live", client: "CompSciHi" },
  { n: "06", name: "Robin Rohr Portfolio", desc: "A personal portfolio site for a member — clean, fast, content-driven.", tags: ["React", "Vite"], year: "2024", kind: "Open source", status: "live", client: "Member project" },
];

const MEMBERS = [
  { name: "Jalen Lum", role: "President", socials: ["github", "linkedin", "mail"] },
  { name: "Robin Rohr", role: "Vice President", socials: ["github", "linkedin"] },
  { name: "Kai Nakamura", role: "Treasurer", socials: ["github", "mail"] },
  { name: "Leilani Souza", role: "Software", socials: ["github", "linkedin"] },
  { name: "Marcus Chen", role: "Software", socials: ["github", "mail"] },
  { name: "Anela Kahale", role: "Software", socials: ["github", "linkedin"] },
  { name: "Devin Park", role: "Software", socials: ["github"] },
  { name: "Maya Iwasaki", role: "Software", socials: ["github", "linkedin"] },
];

const TRACKS = [
  { n: "01", name: "Frontend Foundations", lessons: "12 lessons", pct: 80 },
  { n: "02", name: "Backend & APIs", lessons: "9 lessons", pct: 45 },
  { n: "03", name: "Git & Collaboration", lessons: "6 lessons", pct: 100 },
  { n: "04", name: "Deploy & Infrastructure", lessons: "7 lessons", pct: 20 },
];

/* NOTE: confirm these — handles/URLs and meeting details are placeholders. */
const SOCIALS = [
  { name: "Discord", handle: "join the server", url: "https://discord.gg/T7Eu75fpAf", icon: "discord", cmd: "discord" },
  { name: "GitHub", handle: "@8bituhm", url: "https://github.com/8bituhm", icon: "github", cmd: "github" },
  { name: "LinkedIn", handle: "8bit at UH Mānoa", url: "https://www.linkedin.com/company/8bituhm", icon: "linkedin", cmd: "linkedin" },
  { name: "Instagram", handle: "@8bituhm", url: "https://www.instagram.com/8bituhm", icon: "instagram", cmd: "instagram" },
];

const MEETING = { day: "Wednesdays", time: "5:00 – 6:30 PM", room: "POST 318", campus: "UH Mānoa" };

Object.assign(window, { AVATAR, PROJECTS, MEMBERS, TRACKS, SOCIALS, MEETING });
