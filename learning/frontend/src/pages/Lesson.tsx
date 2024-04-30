import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  const [section, setSectionData] = useState<Section>();

  useEffect(() => {
    try {
      const lessons = (window as any).lesson_data as any;
      const sections = (window as any).section_data as any;
      setSectionData(sections[0]);
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
                <div className="row">
                  <nav aria-label="Page navigation example" className="pt-2">
                    <ul className="pagination">
                      {section.page == 1 ? null : (
                        <li className="page-item">
                          <a
                            className="page-link"
                            href={`/learning/lessons/${lesson.name}/${
                              section.page - 1
                            }`}
                          >
                            Previous
                          </a>
                        </li>
                      )}

                      {lesson.sections.map((section, key) => (
                        <li key={key} className="page-item">
                          <a
                            className="page-link"
                            href={`/learning/lessons/${lesson.name}/${section.page}`}
                          >
                            {`${section.page}`}
                          </a>
                        </li>
                      ))}
                      {section.page == lesson.sections.length ? null : (
                        <li className="page-item">
                          <a
                            className="page-link"
                            href={`/learning/lessons/${lesson.name}/${
                              section.page + 1
                            }`}
                          >
                            Next
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>

                  <div data-aos="fade-up" data-aos-duration="1000">
                    <h1>{lesson.name}</h1>
                    <h3>
                      {`Section ${section.page} : `}
                      {section.title}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
                <nav aria-label="Page navigation example" className="pt-2">
                  <ul className="pagination">
                    {section.page == 1 ? null : (
                      <li className="page-item">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.name}/${
                            section.page - 1
                          }`}
                        >
                          Previous
                        </a>
                      </li>
                    )}

                    {lesson.sections.map((section, key) => (
                      <li key={key} className="page-item">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.name}/${section.page}`}
                        >
                          {`${section.page}`}
                        </a>
                      </li>
                    ))}
                    {section.page == lesson.sections.length ? null : (
                      <li className="page-item">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.name}/${
                            section.page + 1
                          }`}
                        >
                          Next
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
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
