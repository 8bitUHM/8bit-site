import * as React from "react";
import Navbar from "../components/Navbar";
import LoadingImage from "../components/LoadingImage";
import Footer from "../components/Footer";

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
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10 col-md-12 col-sm-12  text-center">
            <h1 style={{ fontSize: 50, fontWeight: 100 }}>
              Elevating Your Online Presence
            </h1>
            <h4 className="mt-4" style={{ fontWeight: 100 }}>
              Expand your online reach effortlessly with 8bit's comprehensive
              web development solutions, tailored for departments and local
              businesses alike.
            </h4>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col text-center">
            <button
              className="btn btn-outline-success mx-2"
              type="submit"
              style={{
                borderRadius: 45,
                borderColor: "#3d8581",
                color: "#FFF",
                backgroundColor: "#3d8581",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#3d8581";
                e.currentTarget.style.color = "#FFF";
              }}
              onMouseOut={(e) => {
                
              }}
            >
              About Us
            </button>
            <button
              className="btn btn-outline-success mx-2"
              type="submit"
              style={{
                borderRadius: 45,
                borderColor: "#3d8581",
                color: "#FFF",
                backgroundColor: "#3d8581",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#3d8581";
                e.currentTarget.style.color = "#FFF";
              }}
              onMouseOut={(e) => {
                
              }}
            >
              Learn Our Stack
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </>
  );
};

export default Index;
