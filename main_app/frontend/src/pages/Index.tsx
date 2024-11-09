import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Index = () => {
  React.useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <div
        className="container sm:mx-auto px-5 max-w-screen-xl"
        style={{ paddingTop: 135 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Top part */}
        <div>
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            We are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              8bit
            </span>{" "}
            @ UH Manoa
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            We empower our members through immersive multi-team experiences.
          </p>
          <p className="my-4">
            8bit is a group of students from the University of Hawaii at Manoa
            passionate about software development and creating impactful
            software solutions. Specializing in full-stack website development,
            we collaborate with clients and contribute to open source software,
            bringing digital visions to life. With dedicated teams in software
            development, design, and business, we offer a holistic experience,
            fostering multi-disciplinary collaboration and professional growth.
          </p>
        </div>

        {/* Grid part? */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full my-2">
            <h1 className=" text-xl font-bold text-gray-900 dark:text-white md:text-2xl ">
              Digital Solutions
            </h1>
            <p className="text-gray-400">
              We aim to bring our software to life.
            </p>
          </div>
          <div className="w-full my-2">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl ">
              Unique Experiences
            </h1>
            <p className="text-gray-400">
              We believe in teaching real life software development experience.
            </p>
          </div>
        </div>

        {/* embed part */}
        <div className="my-5">
          <iframe
            className="w-full aspect-video rounded"
            allowFullScreen={true}
            allow="accelerometer; magnetometer; gyroscope"
            src="https://panoraven.com/en/embed/WOfnSPPfuM"
          ></iframe>
          <small>
            Experience an interactive 360 view of one of 8bit's team meetings
            with Oppkey.
          </small>
        </div>
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
