import React from "react";
import image from './highlights/KMH_5093.jpg'
import image2 from './highlights/KMH_5107.jpg'
import image3 from './highlights/KMH_5135.jpg'
import Logos from "./Logos";
import Marketing from "./Marketing";

function Home() {
  const highlightImages = [
    { src: image, alt: "Event Highlight 1" },
    { src: image2, alt: "Event Highlight 2" },
    { src: image3, alt: "Event Highlight 3" }
  ];

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Logos />
        
        {/* Image Highlights Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {highlightImages.map((img, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-2xl shadow-xl"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Event Information Section */}
        <div className="max-w-4xl mx-auto space-y-12">
         
          <Marketing />
        </div>
      </div>
    </div>
  );
}

export default Home;