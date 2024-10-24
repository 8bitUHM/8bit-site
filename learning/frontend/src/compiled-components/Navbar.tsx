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
      <nav className="bg-teal-600 border-gray-200 dark:border-gray-600 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/learning"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-200 from-sky-200">
              8bit Learning
            </span>
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/learning"
                  className="block py-2 px-3 text-white rounded hover:bg-teal-400 md:hover:bg-transparent md:hover:text-teal-300 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Lessons
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white rounded hover:bg-teal-400 md:hover:bg-transparent md:hover:text-teal-300 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Main Site
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
