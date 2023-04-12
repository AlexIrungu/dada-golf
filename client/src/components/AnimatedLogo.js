import React from 'react';
import PartnerLogo from './PartnerLogo';

const AnimatedLogo = () => {
  const partners = [
    { name: "Broadways Bread", logo: "/broadways,png" },
    { name: "Go Places Digital", logo: "/goplaces.png" },
    { name: "Astrrazeneca", logo: "/astrazeneca.png" },
    {name: "Mater Kenya", logo: "/mater.png"},
    {name: "NHIF", logo: "/nhif.png" },
    {name: "SOKO flour", logo: "/soko.png"},
    {name: "Ananas Mall", logo: "/ananas.png"},
    {name: "Senator Mworia", logo: "/"},
    {name: "Eric Gichane", logo: "/"},
    {name: "Sarit Centre", logo: "/sarit.png"},
    {name: "Nairobi City Council Government", logo: "/" },
  ];

  return (
    <div className="animated-logo">
      <img src="/logo.svg" alt="My Company" />

      <div className="partners-list">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} logo={partner.logo} name={partner.name} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;

