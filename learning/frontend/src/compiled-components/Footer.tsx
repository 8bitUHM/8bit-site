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
      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-teal-800 border-t border-gray-200 shadow flex items-center justify-between  dark:bg-gray-800 dark:border-gray-600 flex-wrap">
        <span className="text-sm text-white  ">
          © 2024{" "}
          <a href="/" className="hover:underline">
            8bit UHM
          </a>
          . All Rights Reserved.
        </span>

        <span className="flex flex-wrap items-center  text-sm font-medium text-white sm:mt-0">
          Learning portal made with ❤️ by Leighton M.
        </span>
      </footer>
    </>
  );
};

const root = document.getElementById("footer-root");
createRoot(root).render(<Footer />);
