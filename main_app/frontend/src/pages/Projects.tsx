import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import LoadingImage from "../components/LoadingImage";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

interface Tag {
  tag_name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  github_link: string;
  deploy_link: string;
  image: string;
  tags: Tag[];
}

const Projects = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    try {
      const projectData = (window as any).data as Project[];
      setProjectData(projectData);
      console.log(projectData);

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }

    initFlowbite();
  }, []);

  const mapProjects = () => {
    return projectData.length > 0 ? (
      <>
        {projectData.map((project: Project, index: number) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={index}
          >
            {project.deploy_link ? (
              <>
                <a
                  href={project.deploy_link}
                  target="_blank"
                  className="border-b"
                >
                  {project.image != null ? (
                    <LoadingImage
                      imageUri={project.image}
                      className="rounded-t-lg"
                    />
                  ) : (
                    <LoadingImage
                      imageUri={"/static/main_app/assets/default-member.png"}
                      className="rounded-t-lg"
                    />
                  )}
                </a>
              </>
            ) : (
              <>
                {" "}
                {project.image != null ? (
                  <LoadingImage
                    imageUri={project.image}
                    className="rounded-t-lg"
                  />
                ) : (
                  <LoadingImage
                    imageUri={"/static/main_app/assets/default-member.png"}
                    className="rounded-t-lg"
                  />
                )}
              </>
            )}

            <div className="p-5">
              <a href={project.github_link} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                  {project.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex pb-4">
                {project.tags.map((val, key) => {
                  return (
                    <>
                      <span
                        key={key}
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300"
                      >
                        {val.tag_name}
                      </span>
                    </>
                  );
                })}
              </div>
              <a
                href={project.github_link}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              >
                GitHub Repository
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </>
    ) : (
      <>
        <div className="flex justify-center">
          <p>8bit's open source projects are in the making!</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="container sm:mx-auto px-5 pb-12 max-w-screen-xl"
        style={{ paddingTop: 150 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                {mapProjects()}
              </div>
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
createRoot(root).render(<Projects />);
