import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './OurPartners.css';

const OurPartners = () => {
  const logoRef = useRef(null);
  const partnersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // animate the logo in two parts
    tl.from(logoRef.current, { duration: 1.5, y: -50, opacity: 0, backgroundColor: '#f8c300', ease: 'power4.out' })
      .to(logoRef.current, { duration: 2, y: -20, rotation: 360, ease: 'elastic.out' });

    // animate each list item using staggered animation
    gsap.from(partnersRef.current, { 
      duration: 1, 
      delay: 0.5, 
      y: -20, 
      opacity: 0, 
      backgroundColor: '#ff5733',
      stagger: { amount: 0.2, grid: 'auto' },
      ease: 'power4.out'
    });
  }, []);

  return (
    <div className="logo-and-partners">
      <div className="logo" ref={logoRef}>
        {/* Replace with your logo image */}
        <img src="" alt="Logo" />
      </div>
      <ul className="partners">
        {/* Replace with your partner list items */}
        <li ref={el => partnersRef.current[0] = el}>Broadways Bread</li>
        <li ref={el => partnersRef.current[1] = el}>Go Places Digital</li>
        <li ref={el => partnersRef.current[2] = el}>Astrrazeneca</li>
        <li ref={el => partnersRef.current[3] = el}>Mater Kenya</li>
        <li ref={el => partnersRef.current[4] = el}>NHIF</li>
        <li ref={el => partnersRef.current[5] = el}>SOKO flour</li>
        <li ref={el => partnersRef.current[6] = el}>Ananas Mall</li>
        <li ref={el => partnersRef.current[7] = el}>Senator Mworia</li>
        <li ref={el => partnersRef.current[8] = el}>Eric Gichane</li>
        <li ref={el => partnersRef.current[9] = el}>Sarit Centre</li>
        <li ref={el => partnersRef.current[10] = el}>Nairobi City Council Government</li>
      </ul>
    </div>
  );
};

export default OurPartners;
