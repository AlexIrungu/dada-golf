import React from 'react';
import './Logos.css';
import download from '../assets/download.jpeg';
import dada from '../assets/dada.png';
import aghakan from '../assets/aghakan.jpeg';
import sarit from '../assets/sarit.png';
import brain from '../assets/brain.png';
import mater from '../assets/mater.png';

function Logos() {
  return (
    <div className="logos-container">
      <div className="row">
        <div className="col-md-2 mb-3 text-center logo">
          <img src={download} alt="Logo" />
        </div>
        <div className="col-md-2 mb-3 text-center logo">
          <img src={dada} alt="Logo" />
        </div>
        <div className="col-md-4 mb-3 text-center logo">
          <img src={aghakan} alt="Logo" />
        </div>
        <div className="col-md-1 mb-1 text-center logo">
          <img src={sarit} alt="Logo" />
        </div>
        <div className="col-md-2 mb-3 text-center logo">
          <img src={brain} alt="Logo" />
        </div>
        <div className="col-md-1 mb-3 text-center logo">
          <img src={mater} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Logos;
