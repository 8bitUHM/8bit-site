import * as React from "react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 150 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        This page is still under construction.
      </div>
    </>
  );
};

export default Index;
