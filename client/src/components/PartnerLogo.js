import React from 'react';

const PartnerLogo = ({logo, name}) => {
  return (
    <div className="partner-logo">
      <img src={logo} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PartnerLogo;
