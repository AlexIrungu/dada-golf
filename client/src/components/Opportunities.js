import React from "react";

function Opportunities() {
  return (
    <div className="card border-primary h-100 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Opportunities</h4>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {[
            {
              icon: "megaphone",
              text: "BRANDING: The entrance & exit points, provision of an expo stand and stage."
            },
            {
              icon: "people",
              text: "INTERACTION: Sponsors will get an experiential booth to boost interaction with the guests."
            },
            {
              icon: "bar-chart",
              text: "PUBLICITY: Logo appearance in all marketing materials, event branding and the event booklets."
            },
            {
              icon: "mic",
              text: "MENTIONS: Mentions on all of our media tours"
            },
            {
              icon: "globe",
              text: "ONLINE VISIBILITY: Mentions on our digital pages and website as partners for this event."
            }
          ].map(({ icon, text }, index) => (
            <li key={index} className="list-group-item d-flex align-items-center">
              <i className={`bi bi-${icon} me-3 text-primary`}></i>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Opportunities;