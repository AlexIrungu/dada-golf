import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import dfgdh from "../assets/dfgdh.png"
import download from "../assets/download.png"
import aghakan from "../assets/aghakan.jpeg"
import brain from "../assets/brain.png"
import mater from "../assets/mater.png"
import dada from '../assets/dada.png'
import Timer from "./Timer";
// import AnimatedLogo from "./AnimatedLogo";
import OurPartners from "./OurPartners";

function Home() {
  return (
    <div className="container-fluid">
      <Timer />
      {/* <AnimatedLogo /> */}
      <OurPartners />
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={dfgdh} alt="Logo" className="mt-3 mb-5" style={{ width: "100px", height: "auto" }} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="card shadow rounded">
            <div className="card-body">
              <h1 className="text-center mb-4">DADA GOLF</h1>
              <h6 className="text-center mb-4">TOURNAMENT</h6>
              <h2 className="text-center mb-4">WOMEN WELLNESS MONTH</h2>
              <h2 className="text-center mb-4">FEMALE HEALTH AWARENESS CAMPAIGN</h2>
              <h3 className="text-center mb-4">MAY 1ST - MAY 30TH</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 mb-3 text-center">
          <img src={download} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
        <div className="col-md-2 mb-3 text-center">
          <img src={dada} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
        <div className="col-md-4 mb-3 text-center">
          <img src={aghakan} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
        <div className="col-md-2 mb-3 text-center">
          <img src={brain} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
        <div className="col-md-2 mb-3 text-center">
          <img src={mater} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
