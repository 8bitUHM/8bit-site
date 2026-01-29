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
  client: string;
  paid_client_project: boolean;
  in_development: boolean;
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
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 animate-slide-up flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              {project.deploy_link ? (
                <a href={project.deploy_link} target="_blank" className="block">
                  {project.image != null ? (
                    <LoadingImage
                      imageUri={project.image}
                      className="w-full h-72 sm:h-80 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <LoadingImage
                      imageUri={"/static/main_app/assets/default-member.png"}
                      className="w-full h-72 sm:h-80 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </a>
              ) : (
                <>
                  {project.image != null ? (
                    <LoadingImage
                      imageUri={project.image}
                      className="w-full h-72 sm:h-80 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <LoadingImage
                      imageUri={"/static/main_app/assets/default-member.png"}
                      className="w-full h-72 sm:h-80 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </>
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Client Badge */}
              {project.client && (
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {project.paid_client_project ? "Paid Client" : "Client"}
                </div>
              )}

              {/* In Development Badge */}
              {project.in_development && (
                <div className="absolute top-3 right-3 bg-amber-500/95 dark:bg-amber-500/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
                  <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  In Development
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              {project.deploy_link ? (
                <a 
                  href={project.deploy_link} 
                  target="_blank"
                  className="block mb-2 group/link"
                >
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 transition-colors duration-200">
                    {project.name}
                    <svg className="inline-block w-4 h-4 ml-1.5 mb-1 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h3>
                </a>
              ) : (
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
              )}

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Client Info */}
              {project.client && (
                <div className="mb-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    {project.paid_client_project ? (
                      <>This was a <span className="font-semibold">paid</span> client project for <span className="font-semibold">{project.client}</span>!</>
                    ) : (
                      <>This was a client project for <span className="font-semibold">{project.client}</span>!</>
                    )}
                  </p>
                </div>
              )}

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagKey) => (
                    <span
                      key={tagKey}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300"
                    >
                      {tag.tag_name}
                    </span>
                  ))}
                </div>
              )}

              {/* GitHub Button */}
              <a
                href={project.github_link}
                target="_blank"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg hover:from-primary-600 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 group-hover:shadow-glow mt-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </>
    ) : (
      <div className="col-span-full text-center py-12">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 max-w-md mx-auto">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">Projects Coming Soon!</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">8bit's open source projects are in the making!</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="container sm:mx-auto px-4 sm:px-6 max-w-screen-xl"
        style={{ paddingTop: 120, paddingBottom: 100 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                      Projects
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                    Explore the innovative projects we've built, from client solutions to open source contributions.
                  </p>
                </div>

                {/* Projects Grid - 2 projects per row on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {mapProjects()}
                </div>
              </>
            ) : (
              <div className="text-center py-16 sm:py-20">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-4 sm:mx-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Oops! Something went wrong</h3>
                  <p className="text-sm sm:text-base text-red-600 dark:text-red-400 mb-4">We couldn't load the projects. Please refresh and try again.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">Loading amazing projects...</p>
            <div className="mt-2 flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Projects />);
