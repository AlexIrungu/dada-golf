import React from "react";

function Achievements(){
    return(
        <div className="container mt-5">
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">What We've Accomplished</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex align-items-center">
                            <span className="badge bg-primary me-3">✓</span>
                            Breast awareness talk shows on TV and radio
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <span className="badge bg-primary me-3">✓</span>
                            Publication materials on reproductive health awareness
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <span className="badge bg-primary me-3">✓</span>
                            Sensitization through media influencers
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <span className="badge bg-primary me-3">✓</span>
                            Public awareness forums
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <span className="badge bg-primary me-3">✓</span>
                            Organization of medical camps
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Achievements