import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import LoadingImage from "../components/LoadingImage";

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
          <div
            key={index}
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-4 pt-2"
          >
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
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: "baseline" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
      <Navbar />
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
                  <div
                    className="mb-4"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="row px-sm-0 px-4">{mapProjects()}</div>
                  </div>
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
      <div style={{ marginTop: 150 }}>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
const root = document.getElementById("root");
createRoot(root).render(<Projects />);
