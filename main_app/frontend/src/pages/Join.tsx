import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createRoot } from "react-dom/client";

const Join = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 150 }}
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
              website creation, working closely with clients to bring their
              digital ideas to life. With dedicated teams in software, design,
              and business, we offer a collaborative experience that promotes
              growth across disciplines.
            </p>
            <p className="lead fs-4 text-secondary mb-1">Mission:</p>
            <p className="mb-4">
              "Empowering innovation and digital transformation, 8bit is
              committed to leveraging our expertise in software development to
              deliver tailored solutions that drive impact and success for our
              clients."
            </p>
            <p className="lead fs-4 text-secondary mb-1">Purpose:</p>
            <p className="mb-4">
              "Our purpose is to cultivate a collaborative environment where
              students can hone their skills in software development while
              creating meaningful digital experiences that address real-world
              challenges."
            </p>
            <p>
              After completing this form, please send a copy of your resume to
              Leighton Miguel, The President and Software Team Lead, at{" "}
              <a href="mailto:lmig4@hawaii.edu">lmig4@hawaii.edu</a>. If you
              have any questions, comments, or concerns, please feel free to
              reach out to Leighton at the same email address.
            </p>
            <p>
              Additionally, make sure to join our{" "}
              <a href="https://discord.gg/T7Eu75fpAf" target="_blank">
                Discord
              </a>{" "}
              for updates, discussions, and to connect with other members of the
              8bit community.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="ratio ratio-1x1 ">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdRraEXX34wpI9v9Vh8D1whM8F74kbA8VKiM6ZET0qDNeigig/viewform"
                className="embed-responsive-item shadow"
                style={{ borderRadius: 15 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Join />);
