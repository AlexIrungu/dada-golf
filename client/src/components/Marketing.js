import React from "react";
import "./Marketing.css";

function Marketing() {
  return (
    <div className="marketing-container">
      <h2 className="marketing-title">DADA HEALTH FESTIVAL</h2>
      <h5 className="marketing-subtitle">
        will be published on broad-cast, print and digital media.
      </h5>
      <p className="marketing-description">
        This will increase brand awareness and improve our partners' brand positioning. In addition, the DHF offers opportunities for interactions with guests, mentions throughout the festival Campaign and logo appearance on all branding material
      </p>
      <img src="marketing.jpg" alt="Marketing Image" className="marketing-image" />
      <img src="breast-cancer-awareness.jpg" alt="Breast Cancer Awareness" className="breast-cancer-image" />
      <img src="visibility.jpg" alt="Visibility" className="visibility-image" />
      <div className="clearfix"></div>
    </div>
  );
}

export default Marketing;
