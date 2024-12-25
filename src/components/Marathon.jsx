import React from "react";

const MarathonSection = () => {
  const images = [
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
  ];

  return (
    <div className="flex overflow-hidden w-full h-[300px]">
      {images.map((image, index) => (
        <div key={index} className="flex-1">
          <img
            src={image}
            alt={`Marathon Scene ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MarathonSection;
