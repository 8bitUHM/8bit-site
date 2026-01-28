import * as React from "react";
import { FC } from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import { initFlowbite } from "flowbite";

const Navbar: FC = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 shadow-soft">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 py-3 sm:py-4">
          <a
            href="/learning"
            className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg sm:rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <span className="self-center text-lg sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
              8bit Learning
            </span>
          </a>
          
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 sm:p-3 sm:w-11 sm:h-11 justify-center text-sm text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 transition-all duration-200"
            aria-controls="mega-menu-full"
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
          
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-3 sm:p-4 md:p-0 mt-3 sm:mt-4 border border-gray-200/20 dark:border-gray-700/20 rounded-xl sm:rounded-2xl gap-2 md:gap-4 md:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white/50 dark:bg-gray-800/50 md:bg-transparent md:dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
              <li>
                <a
                  href="/learning"
                  className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 md:hover:bg-transparent md:p-0 transition-all duration-200 font-medium group"
                  aria-current="page"
                >
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-primary-600 md:group-hover:to-accent-600 transition-all duration-200">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-primary-400 md:group-hover:text-primary-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    <span>Lessons</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-accent-50 dark:hover:bg-accent-900/20 md:hover:bg-transparent md:p-0 transition-all duration-200 font-medium group"
                >
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-accent-600 md:group-hover:to-primary-600 transition-all duration-200">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500 dark:text-accent-400 md:group-hover:text-accent-600 transition-transform duration-200 md:group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <span>Back to Main Site</span>
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
