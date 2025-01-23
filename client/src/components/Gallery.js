import React from 'react';
import { importAllImages } from '../utils/utils';

function Gallery() {
  const images = importAllImages(
    require.context(
      "./highlights", 
      false, 
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="container-fluid px-4 py-3">
      <div className="row g-3">
        {Object.values(images).map((value, index) => (
          <div 
            key={index} 
            className="col-6 col-md-4 col-lg-3 col-xl-2"
          >
            <div className="gallery-item position-relative overflow-hidden rounded shadow-sm">
              <img 
                src={value} 
                alt='gallery image' 
                className="img-fluid w-100 h-100 object-fit-cover transition hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;