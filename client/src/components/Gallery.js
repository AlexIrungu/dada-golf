import React, { useState, useEffect } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define the URL to fetch data from
    const url = 'http://localhost:3000/api/dadawellness-breastcancerawarenessfestival/';

    // Define options for the fetch request
    const requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    // Define the URL for the proxy server
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    // Fetch the data from the API through the proxy server
    fetch(proxyUrl + url, requestOptions)
      .then(response => response.json())
      .then(data => {
        // Extract the relevant information from the response
        const imageUrls = data.map(item => item.imageUrl);

        // Update state with the array of image URLs
        setImages(imageUrls);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="gallery">
      {images.map((imageUrl, i) => (
        <img src={imageUrl} alt={`Image ${i + 1}`} key={i} />
      ))}
    </div>
  );
}

export default Gallery;
