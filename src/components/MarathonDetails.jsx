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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img
        src={image}
        alt={title}
        className="max-w-4xl h-60 object-cover mb-4 rounded"
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
    </div>
  );
};

export default MarathonDetails;
