import * as React from "react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import "../styles/v2-tokens.css";
import "../styles/v2-kit.css";

const Footer: FC = () => (
  <footer className="foot">
    <div className="wrap">
      <div className="foot-main">
        <div className="lead">
          Learn it. Build it. Ship it.
          <span className="sub">// 8bit learning portal · uh mānoa</span>
        </div>
        <div className="foot-col">
          <h4>portal</h4>
          <a href="/learning">lessons</a>
        </div>
        <div className="foot-col">
          <h4>8bit</h4>
          <a href="/">main site</a>
          <a href="/services">services</a>
          <a href="/join">join us</a>
        </div>
      </div>
      <div className="foot-bar">
        <span className="on">● online</span>
        <span>8bit @ uh mānoa</span>
        <span className="sp">© {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

const root = document.getElementById("footer-root");
createRoot(root).render(<Footer />);
