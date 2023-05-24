import React from "react";
import download from "../assets/download.png"
import aghakan from "../assets/aghakan.jpeg"
import brain from "../assets/brain.png"
import mater from "../assets/mater.png"
import dada from '../assets/dada.png'
import sarit from '../assets/sarit.png'
import '../App.css'
function Footer(){
    return(
       
    <div>
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
        <div className="col-md-1 mb-1 text-center">
          <img src={sarit} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
        <div className="col-md-2 mb-3 text-center">
          <img src={brain} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
        <div className="col-md-1 mb-3 text-center">
          <img src={mater} alt="Logo" style={{ width: "100px", height: "auto" }} />
        </div>
      </div>
    
    </div>
  );
}



export default Footer