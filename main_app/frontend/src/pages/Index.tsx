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
            width: "99vw",
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
          data-aos-once="true"
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
              <a
                href="/learning"
                className="btn btn-outline-success mx-2 px-3 py-2"
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
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5">
        <div
          className="container my-5"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row align-items-center">
            <div className="col-6 text-center">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item shadow rounded"
                  allowFullScreen={true}
                  allow="accelerometer; magnetometer; gyroscope"
                  src="https://panoraven.com/en/embed/aN3ha1BgtK"
                ></iframe>
              </div>
              <h6 className="lead fs-6 text-secondary mt-2">
                Experience an interactive 360 view of our collaborative team
                meetings.
              </h6>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <h1>Tailored Solutions</h1>
              <h4 className="lead fs-5 text-secondary">
                Our team specializes in providing customized web development
                services meticulously crafted to align with the distinct needs
                and objectives of your college department or local business.
                From personalized design elements to tailored functionality, we
                ensure that every aspect of your website is thoughtfully
                tailored to reflect your brand identity and achieve your
                specific goals.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5" style={{ backgroundColor: "#F6F6F6" }}>
        <div
          className="container my-5"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row align-items-center">
            <div className="col-5">
              <h1>Innovative Approach</h1>
              <h4 className="lead fs-5 text-secondary">
                Discover our commitment to staying ahead of the curve with
                forward-thinking solutions. At 8bit, we constantly research and
                implement the latest technologies and trends in web development.
                From cutting-edge design techniques to advanced functionality,
                we leverage innovation to elevate your online presence and
                ensure your website stands out in today's digital landscape.
              </h4>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <img className="img-fluid" src="" alt="Technologies" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5">
        <div
          className="container my-5"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row align-items-center">
            <div className="col-6 text-center">
              <LoadingImage
                imageUri="/static/main_app/assets/dashboard.webp"
                className="img-fluid"
              />
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <h1>Client Dashboard</h1>
              <h4 className="lead fs-5 text-secondary">
                Gain easy access to view and manage all your current websites
                built by 8bit through our intuitive client dashboard. Stay
                informed about project progress, monitor site performance, and
                collaborate seamlessly with our team—all in one centralized
                platform designed for your convenience.{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-5" style={{ backgroundColor: "#F6F6F6" }}>
        <div
          className="container my-5"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row align-items-center">
            <div className="col text-center">
              <h1>Get Started with 8Bit</h1>
              <h4 className="lead fs-5 text-secondary">
                Explore our services and take the first step towards enhancing
                your online presence with our tailored web development
                solutions.
              </h4>
              <img className="img-fluid" src="" alt="big pic" />
              <h4>Ready to transform your digital presence?</h4>
              <a
                href="/services"
                className="btn btn-outline-success my-3 px-3 py-2"
                style={{
                  borderRadius: 110,
                  borderColor: "#3d8581",
                  color: "#FFF",
                  backgroundColor: "#3d8581",
                  fontSize: 20,
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
                Discover our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
