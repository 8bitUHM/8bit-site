import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Join = () => {
  return (
    <>
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 150, paddingBottom: 300 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="row">
          <div className="col">
            <p className="lead fs-4 text-secondary mb-3">
              Thank you for your interest in 8bit!
            </p>
            <p>
              8bit, a student group from the University of Hawaii at Manoa, is
              passionate about software development. We specialize in full-stack
              website creation, working closely with organizations to bring
              their digital ideas to life. With dedicated teams in software,
              design, and business, we offer a collaborative experience that
              promotes growth across disciplines.
            </p>
            <p className="lead fs-4 text-secondary mb-1">Mission:</p>
            <p className="mb-4">
              "Empowering innovation and digital transformation, 8bit is
              committed to leveraging our expertise in software development to
              deliver tailored solutions that drive impact and success for our
              organizations."
            </p>
            <p className="lead fs-4 text-secondary mb-1">Purpose:</p>
            <p className="mb-4">
              "Our purpose is to cultivate a collaborative environment where
              students can hone their skills in software development while
              creating meaningful digital experiences that address real-world
              challenges."
            </p>
            <h4>
              All of the information to join 8bit's software team can be found
              in our{" "}
              <a href="https://discord.gg/T7Eu75fpAf" target="_blank">
                Discord
              </a>{" "}
              read-me channel.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Join />);
