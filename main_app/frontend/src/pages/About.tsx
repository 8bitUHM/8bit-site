import * as React from "react";
import Navbar from "../components/Navbar";
import LoadingImage from "../components/LoadingImage";
import { createRoot } from "react-dom/client";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 150 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <>
          <section className="py-3 py-md-5 py-xl-8">
            <div className="container">
              <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                <div className="col-12 col-lg-6 col-xl-5">
                  <LoadingImage
                    imageUri="/static/assets/about-us-3.webp"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="row justify-content-xl-center">
                    <div className="col-12 col-xl-11">
                      <h2 className="h1 mb-3">Who Are We?</h2>
                      <p className="lead fs-4 text-secondary mb-3">
                        We empower our clients through tailored software
                        services and our members through immersive multi-team
                        experiences.
                      </p>
                      <p className="mb-5">
                        8bit is a group of students from the University of
                        Hawaii at Manoa passionate about coding and creating
                        impactful software solutions. Specializing in full-stack
                        website development, we collaborate with clients to
                        bring their digital visions to life. With dedicated
                        teams in software development, design, and business, we
                        offer a holistic experience, fostering
                        multi-disciplinary collaboration and professional
                        growth.
                      </p>
                      <div className="row gy-4 gy-md-0 gx-xxl-5X">
                        <div className="col-12 col-md-6">
                          <div className="d-flex">
                            <div>
                              <h4 className="mb-3">Digital Solutions</h4>
                              <p className="text-secondary mb-0">
                                We aim to bring the client's vision to life.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="d-flex">
                            <div>
                              <h4 className="mb-3">Unique Experience</h4>
                              <p className="text-secondary mb-0">
                                We believe in teaching real life career
                                experience.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<About />);