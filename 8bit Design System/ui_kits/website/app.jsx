/* 8bit UI Kit — app shell with simple page routing */
const { useState } = React;

function App() {
  const [page, setPage] = useState("Home");
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const PAGES = { Home: HomePage, Members: MembersPage, Projects: ProjectsPage, Services: ServicesPage };
  const Current = PAGES[page] || HomePage;

  return (
    <>
      <Navbar current={page} onNavigate={navigate} />
      <main>
        <Current onNavigate={navigate} key={page} />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
