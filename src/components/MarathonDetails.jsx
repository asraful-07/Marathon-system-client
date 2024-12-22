import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MarathonDetails = () => {
  const { user } = useContext(AuthContext);
  const marathon = useLoaderData();
  const {
    image,
    title,
    startRegistrationDate,
    endRegistrationDate,
    description,
    totalRegistrations,
  } = marathon;

  // Check if registration is open
  const isRegistrationOpen =
    new Date(startRegistrationDate) <= new Date() &&
    new Date(endRegistrationDate) >= new Date();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover mb-4 rounded"
      />
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Registration Period:</strong>{" "}
        {new Date(startRegistrationDate).toLocaleDateString()} -{" "}
        {new Date(endRegistrationDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Total Registrations:</strong> {totalRegistrations}
      </p>

      {/* Registration status */}
      {isRegistrationOpen ? (
        <p className="text-green-500 mt-4">Registration is open!</p>
      ) : (
        <p className="text-red-500 mt-4">Registration is currently closed.</p>
      )}

      {/* Registration Button */}
    </div>
  );
};

export default MarathonDetails;
