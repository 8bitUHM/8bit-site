import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect,useState } from "react";

const Index = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);

  useEffect(() => {
    try {
      const lessons = (window as any).data as any;
      lessons.forEach((lesson:any)=>{
        console.log(lesson)
      })
      
      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);
  return pageReady ? (
    <>
      <div className="container text-left">
        Learning hii
      </div>
    </>
  ): (
    <div
      className="d-flex justify-content-center"
      style={{ marginBottom: 700 }}
    >
      <div className="spinner-border my-5"></div>
    </div>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);
