import * as React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 125 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <>
          <section className="bsb-service-7 py-5 py-xl-8">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                  <h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">
                    Services
                  </h3>
                  <h2 className="display-5 mb-5 mb-xl-9 text-center">
                    Our services are 100% free.
                  </h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="container-fluid bg-light border shadow">
                    <div className="row">
                      <div className="col-12 col-lg-4 p-0">
                        <div className="card border-0 bg-transparent">
                          <div className="card-body text-center p-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="56"
                              height="56"
                              fill="currentColor"
                              className="bi bi-window-desktop mb-4"
                              viewBox="0 0 16 16"
                              style={{ color: "#3d8581" }}
                            >
                              <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                              <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z" />
                            </svg>
                            <h4 className="fw-bold text-uppercase mb-4">
                              Static Webpage
                            </h4>
                            <p className="mb-4 text-secondary">
                              Our static webpage service offers clients a sleek
                              and polished online presence that caters to the
                              client's needs. With the help of our organization
                              design team and the use of cutting-edge
                              industry-standard technologies, we create static
                              websites that showcase your brand and message
                              effectively.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 p-0 border-top border-bottom border-start border-end">
                        <div className="card border-0 bg-transparent">
                          <div className="card-body text-center p-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="56"
                              height="56"
                              fill="currentColor"
                              className="bi bi-window-stack mb-4"
                              viewBox="0 0 16 16"
                              style={{ color: "#3d8581" }}
                            >
                              <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                              <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z" />
                            </svg>
                            <h4 className="fw-bold text-uppercase mb-4">
                              Dynamic webpage
                            </h4>
                            <p className="mb-4 text-secondary">
                              Utilizing the latest in web development frameworks
                              and technologies, we build web applications that
                              will engage your audience. With a powerful backend
                              driving dynamic content and an intuitive
                              administrator portal for easy content management,
                              we empower you to keep your website fresh and
                              relevant.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 p-0">
                        <div className="card border-0 bg-transparent">
                          <div className="card-body text-center p-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="56"
                              height="56"
                              fill="currentColor"
                              className="bi bi-universal-access-circle mb-4"
                              viewBox="0 0 16 16"
                              style={{ color: "#3d8581" }}
                            >
                              <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z" />
                              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
                            </svg>
                            <h4 className="fw-bold text-uppercase mb-4">
                              Infrastructure
                            </h4>
                            <p className="mb-4 text-secondary">
                              Along with the rest of our services, we handle
                              site deployment and hosting on platforms like
                              Vercel or AWS. Whether you're launching a new
                              static webpage or upgrading to a dynamic web
                              application, we take care of the infrastructure
                              from deployment to domain management, allowing you
                              to focus on what matters most.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-12 text-center">
                    <small>Are you a potential client?</small>
                    <br></br>
                    <a href="mailto:8bituhmanoa@gmail.com">
                      <button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#3d8581" }}
                      >
                        Send us an email
                      </button>
                    </a>
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

export default Services;
