import * as React from "react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.css";
import { initFlowbite } from "flowbite";

const Footer: FC = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-20 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-t border-gray-200/20 dark:border-gray-700/20 shadow-soft">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © 2024{" "}
                <a 
                  href="/" 
                  className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  8bit UHM
                </a>
                . All Rights Reserved.
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                Learning portal made with{" "}
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse-soft" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>{" "}
                by{" "}
                <span className="font-medium text-accent-600 dark:text-accent-400">
                  Leighton M.
                </span>
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
