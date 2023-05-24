import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
//   const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <NavLink exact to="/">
            <a class="navbar-brand" >
            Home
          </a>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
                <NavLink to="/home">
                  <a class="nav-link active" aria-current="page"  o>
                  Home
                </a>
                </NavLink>
              </li> */}
              <li class="nav-item">
                <NavLink to="/about">
                  <a class="nav-link active" aria-current="page"  o>
                  About
                </a>
                </NavLink>
              </li>
              {/* <li class="nav-item">
                <NavLink to="/proposition">
                  <a class="nav-link" >
                  Proposition
                </a>
                </NavLink>
              </li> */}
             
              <li class="nav-item">
                <NavLink to="/our-events">
                  <a class="nav-link ">Our Events</a>
                  </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/goals">
                  <a class="nav-link ">Goals</a>
                  </NavLink>
              </li>
              {/* <li class="nav-item">
                <NavLink to="/marketing">
                  <a class="nav-link ">Marketing</a>
                  </NavLink>
              </li> */}
              {/* <li class="nav-item">
                <NavLink to="/opportunities">
                  <a class="nav-link ">Opportunities</a>
                  </NavLink>
              </li> */}
              <li class="nav-item">
                <NavLink to="/gallery">
                  <a class="nav-link ">Gallery</a>
                  </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
