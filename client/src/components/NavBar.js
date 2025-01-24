import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { 
      to: "/about", 
      label: "About", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      to: "/our-events", 
      label: "Our Events", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      )
    },
    { 
      to: "/goals", 
      label: "Goals", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      to: "/gallery", 
      label: "Gallery", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-teal-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-white text-2xl font-bold tracking-wider 
            transform hover:scale-105 transition-transform duration-300"
          >
            Dada Golf
          </Link>

          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className={`
            fixed inset-0 bg-teal-900 bg-opacity-95 
            md:static md:bg-transparent md:block
            ${isOpen ? 'block' : 'hidden'}
            transition-all duration-300 ease-in-out
          `}>
            <ul className="flex flex-col md:flex-row items-center justify-center h-full space-y-6 md:space-y-0 md:space-x-6">
              {navItems.map(({ to, label, icon }) => (
                <li key={to} className="text-center">
                  <Link 
                    to={to} 
                    className="
                      flex items-center justify-center
                      text-white text-xl md:text-base 
                      px-4 py-2 rounded-lg
                      transition-all duration-300
                      hover:bg-teal-700 hover:text-white
                      transform hover:scale-105
                      group"
                  >
                    {icon}
                    <span className="group-hover:text-teal-200">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {isOpen && (
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl md:hidden"
                aria-label="Close menu"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;