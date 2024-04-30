import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingImage from "../components/LoadingImage";

interface Lesson {
  name: string;
  skills: string;
  image: string;
  description: string;
  slug: string;
}

const Index = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lessonData, setLessonData] = useState<Lesson[]>([]);

  useEffect(() => {
    try {
      const lessons = (window as any).data as any;
      setLessonData(lessons);
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
                  {lessonData.map((lesson, key) => (
                    <div key={key} className="col-lg-6 my-3">
                      <div className="rounded shadow">
                        <div>
                          <a href={`/learning/lessons/${lesson.slug}`}>
                            <LoadingImage
                              imageUri={lesson.image}
                              className="img-fluid float-left rounded-top"
                            />
                          </a>
                        </div>

                        <div className="p-3">
                          <a
                            href={`/learning/lessons/${lesson.slug}`}
                            className="card-title title-link fw-bold"
                          >
                            {lesson.name}
                          </a>
                          <p className="card-text">
                            <b>Skills:</b> {lesson.skills}
                            <br></br>
                            {lesson.description}
                          </p>
                        </div>
                      </div>
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

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);
