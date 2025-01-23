import React from "react";
import image from './highlights/KMH_5093.jpg'
import image2 from './highlights/KMH_5107.jpg'
import image3 from './highlights/KMH_5135.jpg'
import Logos from "./Logos";

function Home() {
  return (
    <div className="container-fluid bg-light">
      <Logos />
      
      <div className="row py-4">
        <div className="col-12">
          <div className="d-flex justify-content-center mb-4">
            <div className="row g-3">
              <div className="col-md-4">
                <img src={image} alt="Event Highlight 1" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-md-4">
                <img src={image2} alt="Event Highlight 2" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-md-4">
                <img src={image3} alt="Event Highlight 3" className="img-fluid rounded shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="card border-primary shadow rounded">
            <div className="card-body text-center p-5">
              <h1 className="display-4 text-primary mb-3">DADA GOLF</h1>
              <h6 className="text-muted mb-3">TOURNAMENT</h6>
              <h2 className="h3 text-dark mb-3">WOMEN WELLNESS MONTH</h2>
              <h2 className="h3 text-dark mb-3">FEMALE HEALTH AWARENESS CAMPAIGN</h2>
              <h3 className="h4 text-danger mb-0">MAY 1ST - MAY 30TH</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;