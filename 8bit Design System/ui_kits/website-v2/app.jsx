/* 8bit v2 — app shell: routing + theme toggle (persisted) */
function App() {
  const [page, setPage] = React.useState("Home");
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem("8bit-theme") || "light"; } catch (e) { return "light"; }
  });

  React.useEffect(() => {
    try { localStorage.setItem("8bit-theme", theme); } catch (e) {}
  }, [theme]);

  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const PAGES = { Home: HomePage, Work: WorkPage, Team: TeamPage, Services: ServicesPage, Learning: LearningPage, Join: JoinPage };
  const Current = PAGES[page] || HomePage;

  return (
    <div className="site" data-theme={theme}>
      <Nav current={page} onNav={nav} theme={theme} onToggleTheme={toggle} />
      <main><Current onNav={nav} key={page} /></main>
      <Footer onNav={nav} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
