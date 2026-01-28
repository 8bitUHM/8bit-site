import * as React from "react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Navbar: FC = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 shadow-soft">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse group"
          >
            <img
              src="/static/main_app/assets/8bit-long-logo.png"
              className="h-8 sm:h-10 w-auto rounded-lg"
              alt="8bit Logo"
            />
            <span className="self-center text-lg sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
              8bit at UH Manoa
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            data-collapse-toggle="navbar-menu"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 sm:p-3 sm:w-11 sm:h-11 justify-center text-sm text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 transition-all duration-200"
            aria-controls="navbar-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation menu */}
          <div
            id="navbar-menu"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-3 sm:p-4 md:p-0 mt-3 sm:mt-4 border border-gray-200/20 dark:border-gray-700/20 rounded-xl sm:rounded-2xl gap-2 md:gap-4 md:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white/50 dark:bg-gray-800/50 md:bg-transparent md:dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
              <li>
                <a
                  href="/"
                  className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 md:hover:bg-transparent md:p-0 transition-all duration-200 font-medium group"
                >
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-primary-600 md:group-hover:to-accent-600 transition-all duration-200">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-primary-400 md:group-hover:text-primary-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Home</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/members"
                  className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 md:hover:bg-transparent md:p-0 transition-all duration-200 font-medium group"
                >
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-primary-600 md:group-hover:to-accent-600 transition-all duration-200">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-primary-400 md:group-hover:text-primary-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Members</span>
                  </span>
                </a>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 md:hover:bg-transparent md:p-0 md:w-auto transition-all duration-200 font-medium group text-gray-700 dark:text-gray-300 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-primary-600 md:group-hover:to-accent-600"
                >
                  <span className="flex items-center space-x-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-primary-400 md:group-hover:text-primary-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Projects & Services</span>
                  </span>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white/95 dark:bg-gray-800/95 backdrop-blur-md divide-y divide-gray-100 dark:divide-gray-700 rounded-lg shadow-large border border-gray-200/20 dark:border-gray-700/20 w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <li>
                      <a
                        href="/projects"
                        className="block px-4 py-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="block px-4 py-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href="/learning"
                  className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-accent-50 dark:hover:bg-accent-900/20 md:hover:bg-transparent md:p-0 transition-all duration-200 font-medium group"
                >
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-accent-600 md:group-hover:to-primary-600 transition-all duration-200">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500 dark:text-accent-400 md:group-hover:text-accent-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    <span>Learning Portal</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const root = document.getElementById("navbar-root");
createRoot(root).render(<Navbar />);
