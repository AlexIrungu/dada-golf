import React, { useEffect, useRef } from 'react';
import './Logos.css';
import download from '../assets/download.jpeg';
import dada from '../assets/dada.png';
import aghakan from '../assets/aghakan.jpeg';
import sarit from '../assets/sarit.png';
import brain from '../assets/brain.png';
import mater from '../assets/mater.png';

function Logos() {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current.getElementsByClassName('logo-item');

    let delay = 0;
    for (let i = 0; i < logos.length; i++) {
      const logo = logos[i];
      logo.style.animationDelay = `${delay}s`;
      delay += 0.3;
    }
  }, []);

  return (
    <div className="logos-container">
      <div className="logos-title">Our Partners</div>
      <div className="logos-list" ref={logosRef}>
        <div className="logo-item">
          <img src={download} alt="Logo" />
        </div>
        <div className="logo-item">
          <img src={dada} alt="Logo" />
        </div>
        <div className="logo-item">
          <img src={aghakan} alt="Logo" />
        </div>
        <div className="logo-item">
          <img src={sarit} alt="Logo" />
        </div>
        <div className="logo-item">
          <img src={brain} alt="Logo" />
        </div>
        <div className="logo-item">
          <img src={mater} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Logos;
