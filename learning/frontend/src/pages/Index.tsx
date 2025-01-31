import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import LoadingImage from "../components/LoadingImage";
import "../styles/styles.css";

interface Tag {
  tag_name: string;
  color: string;
}

interface Lesson {
  name: string;
  skills: string;
  image: string;
  description: string;
  slug: string;
  tags: Tag[];
  core_lesson: boolean;
  required_lesson: boolean;
  extension_lesson: boolean;
  completion_time: string;
}

const Index = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lessonData, setLessonData] = useState<Lesson[]>([]);

  useEffect(() => {
    try {
      const lessons = (window as any).data as Lesson[];
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
        className="container sm:mx-auto px-5 max-w-screen-xl"
        style={{ paddingTop: 100, paddingBottom: 100 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {lessonData.map((lesson, key) => {
                    return (
                      <div
                        key={key}
                        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                      >
                        <a
                          href={`/learning/lessons/${lesson.slug}`}
                          className="mb-3"
                        >
                          <LoadingImage
                            imageUri={lesson.image}
                            className="img-fluid float-left rounded-t mb-3"
                          />
                        </a>
                        <div className="p-5">
                          <a href={`/learning/lessons/${lesson.slug}`}>
                            <h5 className="text-2xl font-bold text-gray-900 dark:text-white hover:underline">
                              {`Lesson ${key + 1} - ${lesson.name}`}
                            </h5>
                          </a>
                          <span className="my-1 bg-red-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
                            {`Est. Time: ${lesson.completion_time}`}
                          </span>
                          <div className="flex py-1 flex-wrap">
                            {lesson.required_lesson ? (
                              <span className="my-1 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-red-900 dark:text-red-300">
                                Required Lesson
                              </span>
                            ) : null}
                            {lesson.core_lesson ? (
                              <span className="my-1 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
                                Core Lesson
                              </span>
                            ) : null}
                            {lesson.tags.map((val, key) => {
                              return (
                                <>
                                  <span
                                    key={key}
                                    className="my-1 bg-blue-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300"
                                  >
                                    {val.tag_name}
                                  </span>
                                </>
                              );
                            })}
                          </div>

                          <p className="font-normal text-gray-700 dark:text-gray-400">
                            {lesson.description}
                          </p>
                        </div>
                      </div>
                    );
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
          <div className="flex justify-center py-12">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
