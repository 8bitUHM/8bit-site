import * as React from "react";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top"
        style={{ backgroundColor: "#3d8581" }}
      >
        <div className="container justify-content-md-between">
          <a href="./" className="ms-md-2 d-md-block d-none">
            <img src="/static/main_app/assets/8bit-long-logo.png" height={35} />
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <a href="./" className="nav-link text-white">
                  Lessons
                </a>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  Main Site
                </a>
              </li>
            </ul>
          </div>

          <span className="navbar-text fw-bold d-md-block">
            <div className="dropdown">
              <button
                className="btn  btn-outline-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-circle btn-outline-light "
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
