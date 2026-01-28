import * as React from "react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Footer: FC = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <footer className="w-full mt-16 sm:mt-20 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-t border-gray-200/20 dark:border-gray-700/20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            {/* Links Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="/admin"
                target="_blank"
                className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span>Member Login</span>
              </a>

              <a
                href="https://github.com/8bitUHM/8bit-site"
                target="_blank"
                className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <span>Website Source Code</span>
              </a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

            {/* Copyright */}
            <div className="text-center">
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://8bituhm.org/"
                  target="_blank"
                  className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-200"
                >
                  8bit @ UH Manoa
                </a>
                . All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const root = document.getElementById("footer-root");
createRoot(root).render(<Footer />);
