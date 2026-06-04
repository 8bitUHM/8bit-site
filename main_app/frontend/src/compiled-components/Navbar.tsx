import * as React from "react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const normalize = (p: string) =>
  p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;

const isActive = (path: string) =>
  typeof window !== "undefined" &&
  normalize(window.location.pathname) === normalize(path);

const Navbar: FC = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `block py-2 px-4 text-sm sm:text-base font-bold rounded-full transition-all duration-200 ${
      active
        ? "text-white bg-primary-500 shadow-pop-primary"
        : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20"
    }`;
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 glass-nav">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 py-4 sm:py-5">
        <a href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <img
            src="/static/main_app/assets/8bit-long-logo.png"
            className="h-8 sm:h-10 w-auto rounded-lg"
            alt="8bit Logo"
          />
          <span className="self-center text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            8bit at UH Manoa
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 dark:text-gray-300 rounded-lg md:hidden hover:bg-primary-50 dark:hover:bg-primary-900/20"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 17 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div id="navbar-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-3 md:mt-0 gap-1 md:flex-row md:gap-2 bg-primary-50/80 dark:bg-gray-800/80 md:bg-transparent rounded-2xl md:rounded-none">
            <li><a href="/" className={linkClass("/")}>Home</a></li>
            <li><a href="/members/" className={linkClass("/members/")}>Members</a></li>
            <li><a href="/projects/" className={linkClass("/projects/")}>Projects</a></li>
            <li><a href="/services/" className={linkClass("/services/")}>Services</a></li>
            <li><a href="/learning" className={linkClass("/learning")}>Learning Portal</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const root = document.getElementById("navbar-root");
createRoot(root).render(<Navbar />);
