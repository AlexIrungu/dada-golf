import React from 'react';
import image from './highlights/1(1).jpg';

function Gallery() {
  // Use require.context to get all the image files in a directory
  const images = require.context('./highlights', true, /\.(png|jpe?g|svg|jpg)$/);

  return (
    <div className="container">
      <img src={image} alt="cover" />
      {/* Use .keys() to get an array of all the image filenames */}
      <div className="row justify-content-center">
        {images.keys().map((path, index) => {
          // Use the .default attribute for each image file to access the actual file path.
          let final_path = images(path).default;
          console.log(final_path);
          
          return (
            <div className="col-md-4 my-3" key={index}>
              <img src={final_path} alt={`Highlight ${index + 1}`} className="w-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
