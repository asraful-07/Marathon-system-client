import React from "react";

const MarathonSection = () => {
  const images = [
    "https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg",
    "https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-1-370x370.jpg",
    "https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-7-370x370.jpg",
    "https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-8-370x370.jpg",
  ];

  return (
    <div className="container mx-auto mb-24 gap-4">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Instagram updates</h1>
        <button className="btn btn-outline bg-[#0db496] font-bold py-4 px-6 rounded-full transition-all duration-300 hover:bg-accent hover:text-white text-center">
          follow us
        </button>
      </div>
      <div className="flex overflow-hidden w-full h-[300px]">
        {images.map((image, index) => (
          <div key={index} className="flex-1 relative group">
            <img
              src={image}
              alt={`Marathon Scene ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* Optional: Dark overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarathonSection;
