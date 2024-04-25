import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
          <div className="col text-center">
            <h1>Join 8bit</h1>
            
          </div>
        </div>
      </div>
      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </>
  );
};

export default Join;
