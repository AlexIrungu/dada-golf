import React from "react";
import './Goals.css'
import Opportunities from "./Opportunities";
import Marketing from './Marketing'

function Goals(){
    return(
        <div className="container mt-5 d-flex justify-content-between" >
         
          <div className="goals-card">
            <div className="body-card">
              <div className="row mt-3">
              <h3>What we want to achieve</h3>
                <div className="col-12 ">
                  <ul>
                    <li>Developing of breast cancer awareness material.</li>
                    <li>Arranging awareness lectures for female audience.</li>
                    <li>Conduct free clinical exams for selected female groups.</li>
                    <li>Subsidized pap fees through our hospital partners.</li>
                    <li>Expanded health care access to patients.</li>
                    <li>Equipping specialized units in small scale medical centers and dispensaries</li>
                  </ul>
                </div>
                <div class="col-12 ">
                  <p>The primary goal will also be to give clear information on conditions and concerns affecting women through a forum of medical experts i.e Oncologists, Pediatricians, Surgeons, Dentists, nurses, pharmacy professionals, Counsellors etc.</p>
                  <ul>
                    <li>Breast cancer</li>
                    <li>Reproductive health</li>
                    <li>Mental health during and after pregnancy</li>
                    <li>Mother and Child Care</li>
                    <li>Family planning</li>
                    <li>Financial planning</li>
                    <li>Medical insurance awareness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <Opportunities />
          </div>
        <div className="col-md-4">
          <Marketing />
          </div>
        </div>
        
    )

}
export default Goals