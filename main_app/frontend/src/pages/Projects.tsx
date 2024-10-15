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
  }, []);

  const mapProjects = () => {
    return projectData.length > 0 ? (
      <>
        {projectData.map((project: Project, index: number) => (
          <>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-4 pt-2">
              <div className="team-list position-relative overflow-hidden shadow rounded">
                {project.image != null ? (
                  <LoadingImage
                    imageUri={project.image}
                    className="img-fluid float-left"
                  />
                ) : (
                  <LoadingImage
                    imageUri={"/static/main_app/assets/default-member.png"}
                    className="img-fluid float-left"
                  />
                )}
                <div className="content float-right p-3">
                  <h5 className="title mb-0">{project.name}</h5>
                  <small className="text-muted">{project.description}</small>
                  <br></br>
                  {project.tags.map((tag, index) => {
                    return (
                      <span key={index} className={`badge bg-primary me-1`}>
                        {tag.tag_name}
                      </span>
                    );
                  })}
                  <br></br>
                  <a
                    href={project.github_link}
                    target="_blank"
                    className="btn btn-dark me-1 mt-2"
                  >
                    Repository{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    ) : (
      <>
        <div
          style={{ marginBottom: 400 }}
          className="d-flex justify-content-center"
        >
          <p>8bit's open source projects are in the making!</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 125 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <section className="bsb-service-7 py-5 py-xl-8">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                      <h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">
                        Open Source Projects
                      </h3>
                      <h2 className="display-5 mb-5 mb-xl-9 text-center">
                        Software for the Community.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row px-sm-0 px-4">{mapProjects()}</div>
                </div>
              </section>
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
createRoot(root).render(<Projects />);
