import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingImage from "../components/LoadingImage";

interface Section {
  page: number;
  title: string;
  content: string;
}

interface Lesson {
  name: string;
  skills: string;
  image: string;
  slug: string;
  sections: Section[];
}

const Lesson = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lesson, setLessonData] = useState<Lesson>();

  useEffect(() => {
    try {
      const lessons = (window as any).data as any;
      setLessonData(lessons[0]);

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="container text-left"
        style={{ marginTop: 80, marginBottom: 80 }}
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                <div
                  className="row"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {lesson.name}
                  {lesson.sections.map((section, key) => (
                    <div key={key}>
                      <h1>{section.title}</h1>
                      <div
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                  ))}
                </div>
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

export default Lesson;
const root = document.getElementById("root");
createRoot(root).render(<Lesson />);
