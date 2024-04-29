import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);

  useEffect(() => {
    try {
      const lessons = (window as any).data as any;
      lessons.forEach((lesson: any) => {
        console.log(lesson);
      });

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="container text-left" style={{ marginTop: 80 }}>
        {pageReady ? (
          <>
            {canMap ? (
              <>
                <div>Leanring page haha</div>
              </>
            ) : (
              <div style={{ marginBottom: 700 }}>
                Uh oh! Something went wrong with our request for data. Please
                refresh and try again!
              </div>
            )}
          </>
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ marginBottom: 700 }}
          >
            <div className="spinner-border my-5"></div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);