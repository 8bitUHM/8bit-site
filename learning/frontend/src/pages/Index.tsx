import * as React from "react";
import { createRoot } from "react-dom/client";

const Index = () => {
  return (
    <>
      <div className="container text-left">
        Learning hii
      </div>
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);
