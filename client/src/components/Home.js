import React from "react";
import './Home.css'
import image from './highlights/KMH_5093.jpg'
import image2 from './highlights/KMH_5107.jpg'
import image3 from './highlights/KMH_5135.jpg'


import Logos from "./Logos";


function Home() {
  return (
    <div className="container-fluid bg-pink">
      {/* <Timer /> */}
      <Logos />
       {/* Placeholder for photos */}
       <div className="photo-container">
        {/* Add your photos here  */}
        <img src={image} alt="" className="home-image" />
         <img src={image2} alt="" className="home-image" /> 
         <img src={image3} alt="" className="home-image" />
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
