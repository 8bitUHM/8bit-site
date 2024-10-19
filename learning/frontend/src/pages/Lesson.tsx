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
      console.log(lessons[0].quiz);

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);

  const pagination = () => {
    return (
      <nav aria-label="Page navigation example" className="py-3">
        <ul className="inline-flex -space-x-px text-sm">
          {section.page == 1 ? null : (
            <li className="page-item">
              <a
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href={`/learning/lessons/${lesson.slug}/${section.page - 1}`}
              >
                Previous
              </a>
            </li>
          )}

          {lesson.sections.map((sectionx, key) => {
            if (sectionx.page == section.page) {
              return (
                <li key={key} className="page-item">
                  <a
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    href={`/learning/lessons/${lesson.slug}/${sectionx.page}`}
                  >
                    {`${sectionx.page}`}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={key} className="page-item">
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href={`/learning/lessons/${lesson.slug}/${sectionx.page}`}
                  >
                    {`${sectionx.page}`}
                  </a>
                </li>
              );
            }
          })}
          {lesson.quiz == null ? null : (
            <li className="page-item ">
              <a
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href={`/learning/lessons/${lesson.slug}/quiz`}
              >
                Quiz
              </a>
            </li>
          )}

          {lesson.quiz != null || section.page != lesson.sections.length ? (
            <>
              {section.page != lesson.sections.length ? (
                <li className="page-item ">
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href={`/learning/lessons/${lesson.slug}/${
                      section.page + 1
                    }`}
                  >
                    Next
                  </a>
                </li>
              ) : (
                <li className="page-item ">
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href={`/learning/lessons/${lesson.slug}/quiz`}
                  >
                    Next
                  </a>
                </li>
              )}
            </>
          ) : null}
        </ul>
      </nav>
    );
  };

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
                <div>
                  <div className="flex items-center hover:underline mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                    <a href="/learning"> Back to lessons</a>
                  </div>
                  <h1 className="text-3xl font-bold">{lesson.name}</h1>
                  <h3 className="text-xl">
                    {`Section ${section.page} : `}
                    {section.title}
                  </h3>
                  {pagination()}
                  <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    className="py-2"
                  />
                  {pagination()}
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
createRoot(root).render(<Lesson />);
