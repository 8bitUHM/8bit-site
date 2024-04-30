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
        
      </div>
      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </>
  );
};

export default Index;
