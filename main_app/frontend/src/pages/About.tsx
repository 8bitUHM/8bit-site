import * as React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 150 }}
      >
        This site is still under construction.
      </div>
    </>
  );
};

export default About;
