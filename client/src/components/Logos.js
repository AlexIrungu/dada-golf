import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';

import download from '../assets/download.jpeg';
import dada from '../assets/dada.png';
import aghakan from '../assets/aghakan.jpeg';
import sarit from '../assets/sarit.png';
import brain from '../assets/brain.png';
import mater from '../assets/mater.png';

function Logos() {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current.querySelectorAll('.logo-item');
    
    // Enhanced animation with more dynamic movement
    gsap.fromTo(logos, 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: 'back.out(1.7)',
        repeat: -1,
        yoyo: true
      }
    );

    // More pronounced hover effects
    logos.forEach(logo => {
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, { 
          scale: 1.15, 
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });

      logo.addEventListener('mouseleave', () => {
        gsap.to(logo, { 
          scale: 1, 
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });
    });
  }, []);

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">Our Valued Partners</h2>
        <div 
          ref={logosRef} 
          className="row justify-content-center align-items-center g-4"
        >
          {[
            { src: download, alt: 'Partner 1' },
            { src: dada, alt: 'Partner 2' },
            { src: aghakan, alt: 'Partner 3' },
            { src: sarit, alt: 'Partner 4' },
            { src: brain, alt: 'Partner 5' },
            { src: mater, alt: 'Partner 6' }
          ].map((logo, index) => (
            <div 
              key={index} 
              className="col-6 col-md-4 col-lg-2 text-center logo-item"
            >
              <div className="p-3 bg-white rounded-3 shadow-sm">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="img-fluid" 
                  style={{ 
                    maxHeight: '120px', 
                    objectFit: 'contain',
                    filter: 'grayscale(30%) contrast(110%)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logos;