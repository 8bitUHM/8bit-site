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
      <hr className="w-6/12 mx-auto h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <footer className="w-full py-3 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-lg flex items-center justify-center flex-col gap-3 md:flex-row md:gap-10 transition-all duration-500  mb-1 py-2 ">
              <div className="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <a
                  className="mx-1 text-base hover:underline"
                  target="_blank"
                  href="/admin"
                >
                  Member Login
                </a>
              </div>

              <div className="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <a
                  className="mx-1 text-base hover:underline"
                  target="_blank"
                  href="https://github.com/8bitUHM/8bit-site"
                >
                  Website Source Code
                </a>
              </div>
            </div>

            <span className="text-sm text-gray-500 text-center block">
              ©
              <a href="https://8bituhm.org/" target="_blank">
                8bitUHM
              </a>{" "}
              2024, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
    
  );
};

const root = document.getElementById("footer-root");
createRoot(root).render(<Footer />);
