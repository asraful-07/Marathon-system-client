import React from "react";
import { useNavigate } from "react-router-dom";

const MarathonCards = ({ marathon }) => {
  const navigate = useNavigate();

  const {
    _id,
    title,
    startRegistrationDate,
    endRegistrationDate,
    location,
    image,
  } = marathon;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Marathon Image */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      <div className="p-4">
        {/* Marathon Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-1">
          <strong>Location:</strong> {location}
        </p>

        {/* Registration Dates */}
        <p className="text-sm text-gray-600 mb-4">
          <strong>Registration:</strong>{" "}
          {new Date(startRegistrationDate).toLocaleDateString()} -{" "}
          {new Date(endRegistrationDate).toLocaleDateString()}
        </p>

        {/* See Details Button */}
        <button
          onClick={() => navigate(`/marathons/${_id}`)}
          className="w-full py-2 px-4 bg-[#0db496] text-white font-bold rounded-lg hover:bg-[#0a8a72] transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MarathonCards;
