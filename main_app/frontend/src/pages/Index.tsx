import * as React from "react";
import Navbar from "../components/Navbar";
import LoadingImage from "../components/LoadingImage";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="div position-relative py-5 text-white">
        <img
          src="https://wallpapers.com/images/hd/cyan-background-hbd4i6sgbw7m2unc.jpg" //temporary image
          alt="Background"
          style={{
            width: "100vw",
            maxHeight: "100%",
            minHeight: "100%",
            filter: "brightness(0.4)",
            position: "absolute",
            zIndex: -1,
            objectFit: "cover",
          }}
        ></img>
        <div
          className="container text-left my-5 my-md-1"
          style={{ paddingTop: 150 }}
          data-aos="fade-up"
          data-aos-duration="2000"
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
                className="btn btn-outline-success mx-2 px-3 py-2"
                type="submit"
                style={{
                  borderRadius: 45,
                  borderColor: "#3d8581",
                  color: "#FFF",
                  backgroundColor: "#3d8581",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#50918d";
                  e.currentTarget.style.color = "#FFF";
                  e.currentTarget.style.boxShadow =
                    "0px 0.5rem 1rem rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#3d8581";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                About Us
              </button>
              <button
                className="btn btn-outline-success mx-2 px-3 py-2"
                type="submit"
                style={{
                  borderRadius: 45,
                  borderColor: "#3d8581",
                  color: "#FFF",
                  backgroundColor: "#3d8581",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#50918d";
                  e.currentTarget.style.color = "#FFF";
                  e.currentTarget.style.boxShadow =
                    "0px 0.5rem 1rem rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#3d8581";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Learn Our Stack
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5">
        <div className="container" data-aos="fade-in" data-aos-duration="2000">
          <div className="row">
            <div className="col">
              Hello
              <h1>HELKLA;SKDJASD;</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5" style={{ backgroundColor: "#F6F6F6" }}>
        <div className="container" data-aos="fade-in" data-aos-duration="2000">
          <div className="row">
            <div className="col">
              Hello
              <h1>HELKLA;SKDJASD;</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5">
        <div className="container" data-aos="fade-in" data-aos-duration="2000">
          <div className="row">
            <div className="col">
              Hello
              <h1>HELKLA;SKDJASD;</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
