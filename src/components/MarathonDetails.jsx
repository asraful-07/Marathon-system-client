import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const MarathonDetails = () => {
  const { user } = useContext(AuthContext);
  const marathon = useLoaderData();
  const {
    _id,
    image,
    title,
    startRegistrationDate,
    endRegistrationDate,
    description,
    totalRegistrations,
    marathonStartDate,
  } = marathon;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const registrationData = {
      applyId: _id,
      email: user?.email,
      title: form.marathonTitle.value,
      // marathonStartDate: form.marathonStartDate.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      contactNumber: form.contactNumber.value,
      additionalInfo: form.additionalInfo.value,
    };

    try {
      const { data } = await axios.post(
        `http://localhost:5000/register`,
        registrationData
      );
      toast.success("Registration Successful!");
      form.reset();
    } catch (err) {
      toast.error(err.response?.data || "An error occurred");
    }
  };

  return (
    <div className="flex flex-wrap items-center container mx-auto">
      <div className="p-6 w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <img
          src={image}
          alt={title}
          className="max-w-full h-60 object-cover mb-4 rounded"
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
      <div className="p-6 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register for Marathon
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="emailAddress" className="block text-lg font-medium">
              Email
            </label>
            <input
              id="emailAddress"
              type="email"
              name="email"
              disabled
              defaultValue={user?.email}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Marathon Title</label>
            <input
              type="text"
              name="marathonTitle"
              defaultValue={title}
              className="w-full px-4 py-2 mt-2 border rounded"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">
              Marathon Start Date
            </label>
            <DatePicker
              className="border p-2 rounded-md"
              selected={new Date(marathonStartDate)}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full px-4 py-2 mt-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full px-4 py-2 mt-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              className="w-full px-4 py-2 mt-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Additional Info</label>
            <textarea
              name="additionalInfo"
              className="w-full px-4 py-2 mt-2 border rounded"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#0db496] text-white text-xl font-bold rounded hover:bg-[#0aa584] transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default MarathonDetails;
