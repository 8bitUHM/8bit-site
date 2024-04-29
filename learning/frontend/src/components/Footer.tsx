import * as React from "react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <div
        className="fixed-bottom mt-5"
        style={{ position: "absolute", width: "100%" }}
      >
        <section>
          <footer
            className="text-center text-white"
            style={{ backgroundColor: "#25524f" }}
          >
            <div className="container p-1">
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  Learning portal made with{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>{" "}
                  by Leighton M.
                </div>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ backgroundColor: "#1b3d3b" }}
            >
              © 2024 Copyright{" "}
              <a className="text-white" href="https://www.8bituhm.org">
                8bituhm.org
              </a>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Footer;
