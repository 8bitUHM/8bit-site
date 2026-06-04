import * as React from "react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Footer: FC = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Members" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "https://github.com/8bituhm", label: "GitHub", external: true },
  ];

  return (
    <footer className="w-full mt-0 bg-gradient-cool text-white relative overflow-hidden">
      <span className="blob w-72 h-72 bg-white/20 -top-16 -left-10 animate-float" />
      <span className="blob w-80 h-80 bg-bubble-400/30 bottom-0 right-0 animate-float-slow" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/static/main_app/assets/8bit-long-logo.png"
            className="h-10 w-auto mb-4 bg-white rounded-2xl p-2 shadow-pop"
            alt="8bit Logo"
          />
          <span className="text-2xl font-display font-bold">8bit @ UH Manoa</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm font-bold text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="/admin" target="_blank" rel="noreferrer" className="text-sm font-bold text-white/90 hover:text-white hover:underline">
            Member Login
          </a>
          <span className="hidden sm:inline text-white/50">|</span>
          <a href="https://github.com/8bitUHM/8bit-site" target="_blank" rel="noreferrer" className="text-sm font-bold text-white/90 hover:text-white hover:underline">
            Website Source Code
          </a>
        </div>
        <p className="text-center text-sm text-white/80 font-semibold">
          © {new Date().getFullYear()} 8bit @ UH Manoa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const root = document.getElementById("footer-root");
createRoot(root).render(<Footer />);
