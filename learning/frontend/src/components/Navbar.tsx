import * as React from "react";
import { FC } from "react";
import { useEffect, useState } from "react";

const Navbar: FC = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    try {
      const username = (window as any).username as any;
      setUsername(username);
    } catch (e: any) {
      console.error(e);
    }
  }, []);

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
                <a href="/learning/lessons" className="nav-link text-white">
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
                className="btn dropdown-toggle btn-outline-light d-inline"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {username}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/learning/logout">
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
