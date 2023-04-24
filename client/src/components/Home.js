import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
//import dfgdh from "../assets/dfgdh.png"

import Timer from "./Timer";
import Footer from "./Footer";
// import AnimatedLogo from "./AnimatedLogo";

function Home() {
  return (
    <div className="container-fluid">
      <Timer />
      <Footer />
      {/* <AnimatedLogo /> */}
     
      <div className="row">
        <div className="col-md-12 text-center">
          {/* <img src={dfgdh} alt="Logo" className="mt-3 mb-5" style={{ width: "100px", height: "auto" }} /> */}
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
     
    </div>
  );
}

export default Home;
