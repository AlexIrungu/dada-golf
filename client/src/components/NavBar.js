import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link to="/" className="navbar-brand fs-4 fw-bold">Dada Golf</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav" 
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav text-center">
            {[
              { to: "/about", label: "About" },
              { to: "/our-events", label: "Our Events" },
              { to: "/goals", label: "Goals" },
              { to: "/gallery", label: "Gallery" }
            ].map(({ to, label }) => (
              <li key={to} className="nav-item mx-2">
                <Link 
                  to={to} 
                  className="nav-link text-white hover-underline position-relative"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;