import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import LoadingImage from "../components/LoadingImage";

interface Tag {
  tag_name: string;
  color: string;
}
interface Section {}

interface Lesson {
  name: string;
  skills: string;
  image: string;
  description: string;
  slug: string;
  tags: Tag[];
  sections: Section[];
  core_lesson: boolean;
  required_lesson: boolean;
  extension_lesson: boolean;
}

const Index = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lessonData, setLessonData] = useState<Lesson[]>([]);

  useEffect(() => {
    try {
      const lessons = (window as any).data as any;
      setLessonData(lessons);
      // lessons.forEach((lesson: any) => {
      //   console.log(lesson);
      // });

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
                  data-aos-duration="2000"
                >
                  {lessonData.map((lesson, key) => {
                    if (lesson.sections.length > 0) {
                      return (
                        <div key={key} className="col-lg-6 my-3">
                          <div className="rounded shadow">
                            <div>
                              <a href={`/learning/lessons/${lesson.slug}/1`}>
                                <LoadingImage
                                  imageUri={lesson.image}
                                  className="img-fluid float-left rounded-top"
                                />
                              </a>
                            </div>

                            <div className="p-3">
                              <a
                                href={`/learning/lessons/${lesson.slug}/1`}
                                className="card-title title-link fw-bold"
                              >
                                {lesson.name}
                              </a>
                              <p className="card-text">
                                {lesson.required_lesson ? (
                                  <span className={`badge bg-danger me-1`}>
                                    Required Lesson
                                  </span>
                                ) : null}
                                {lesson.core_lesson ? (
                                  <span className={`badge bg-success me-1`}>
                                    Core Lesson
                                  </span>
                                ) : null}
                                {lesson.extension_lesson ? (
                                  <span
                                    className={`badge bg-warning text-dark me-1`}
                                  >
                                    Extension Lesson
                                  </span>
                                ) : null}
                                {lesson.tags.map((tag, key) => (
                                  <span
                                    key={key}
                                    className={`badge ${tag.color} me-1`}
                                  >
                                    {tag.tag_name}
                                  </span>
                                ))}
                                <br></br>
                                {lesson.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
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
createRoot(root).render(<Index />);
