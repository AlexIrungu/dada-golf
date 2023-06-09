import React from 'react';
import './Gallery.css';
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
    <div className='gallery-wrapper'>
      {Object.values(images).map((value, index) => (
        <div className='gallery-item' key={index}>
          <img src={value} alt='dada gallery' />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
