import React from "react";
import Opportunities from "./Opportunities";
// import Marketing from './Marketing'

function Goals(){
    return(
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-primary mb-4">What We Want to Achieve</h3>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="list-group list-group-flush">
                                            {[
                                                "Developing of breast cancer awareness material",
                                                "Arranging awareness lectures for female audience",
                                                "Conduct free clinical exams for selected female groups",
                                                "Subsidized pap fees through our hospital partners",
                                                "Expanded health care access to patients",
                                                "Equipping specialized units in small scale medical centers and dispensaries"
                                            ].map((goal, index) => (
                                                <li key={index} className="list-group-item">
                                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                    {goal}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <p className="card-text text-muted">
                                            The primary goal will also be to give clear information on conditions and concerns affecting women through a forum of medical experts i.e Oncologists, Pediatricians, Surgeons, Dentists, nurses, pharmacy professionals, Counsellors etc.
                                        </p>
                                        <ul className="list-group list-group-flush">
                                            {[
                                                "Breast cancer",
                                                "Reproductive health",
                                                "Mental health during and after pregnancy",
                                                "Mother and Child Care",
                                                "Family planning",
                                                "Financial planning",
                                                "Medical insurance awareness"
                                            ].map((topic, index) => (
                                                <li key={index} className="list-group-item">
                                                    <i className="bi bi-heart-fill text-danger me-2"></i>
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Opportunities />
                    </div>
                    {/* <div className="col-lg-3">
                        <Marketing />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Goals;