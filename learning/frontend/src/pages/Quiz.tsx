import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

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
  quiz: string;
}
const Quiz = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lesson, setLessonData] = useState<Lesson>();

  useEffect(() => {
    try {
      const lessons = (window as any).lesson_data as any;

      setLessonData(lessons[0]);

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);
  return (
    <>
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
                  data-aos-duration="1000"
                >
                  <p>
                    <a className="text-black " href="/learning/lessons">
                      <button type="button" className="btn btn-outline-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                          />
                        </svg>{" "}
                        Back to Lessons
                      </button>
                    </a>
                  </p>
                  <nav aria-label="Page navigation example" className="pt-2">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.slug}/${lesson.sections.length}`}
                        >
                          Previous
                        </a>
                      </li>

                      {lesson.sections.map((sectionx, key) => {
                        return (
                          <li key={key} className="page-item ">
                            <a
                              className="page-link"
                              href={`/learning/lessons/${lesson.slug}/${sectionx.page}`}
                            >
                              {`${sectionx.page}`}
                            </a>
                          </li>
                        );
                      })}
                      <li className="page-item active">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.slug}/quiz`}
                        >
                          Quiz
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <div>
                    <h1>{lesson.name}</h1>
                    <h3>{`${lesson.name} Lesson Quiz`}</h3>
                    <p>
                      After completing this quiz, notify Leighton on Discord for
                      lesson and quiz completion.
                    </p>

                    <div className="ratio ratio-1x1 mt-3">
                      <iframe
                        src={`${lesson.quiz}`}
                        className="embed-responsive-item shadow my-2"
                        style={{ borderRadius: 15 }}
                      ></iframe>
                    </div>
                  </div>

                  <nav aria-label="Page navigation example" className="mt-4">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.slug}/${lesson.sections.length}`}
                        >
                          Previous
                        </a>
                      </li>

                      {lesson.sections.map((sectionx, key) => {
                        return (
                          <li key={key} className="page-item ">
                            <a
                              className="page-link"
                              href={`/learning/lessons/${lesson.slug}/${sectionx.page}`}
                            >
                              {`${sectionx.page}`}
                            </a>
                          </li>
                        );
                      })}
                      <li className="page-item active">
                        <a
                          className="page-link"
                          href={`/learning/lessons/${lesson.slug}/quiz`}
                        >
                          Quiz
                        </a>
                      </li>
                    </ul>
                  </nav>
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
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Quiz />);
