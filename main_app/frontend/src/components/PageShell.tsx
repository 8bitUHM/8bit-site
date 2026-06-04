import * as React from "react";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

const PageShell: React.FC<PageShellProps> = ({ children, className = "" }) => (
  <div
    className={`page-shell ${className}`}
    data-aos="fade-up"
    data-aos-duration="700"
  >
    {children}
  </div>
);

export default PageShell;
