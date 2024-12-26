import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
    totalRegistrations: initialTotalRegistrations,
    marathonStartDate,
  } = marathon;

  const [startDate, setStartDate] = useState(new Date(marathonStartDate));
  const [totalRegistrations, setTotalRegistrations] = useState(
    initialTotalRegistrations
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const registrationData = {
      applyId: _id,
      email: user?.email,
      title: form.marathonTitle.value,
      marathonStartDate: startDate,
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
      setTotalRegistrations((prev) => prev + 1);
      form.reset();
    } catch (err) {
      toast.error(err.response?.data || "An error occurred");
    }
  };

  const marathonStartDateObj = new Date(marathonStartDate);

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
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Time Until Marathon Starts:</h3>
          <CountdownCircleTimer
            isPlaying
            duration={Math.floor((marathonStartDateObj - new Date()) / 1000)}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            strokeWidth={6}
            size={120}
          >
            {({ remainingTime }) => {
              const days = Math.floor(remainingTime / 86400);
              const hours = Math.floor((remainingTime % 86400) / 3600);
              const minutes = Math.floor((remainingTime % 3600) / 60);
              return (
                <div>
                  <p>{days} Days</p>
                  <p>{hours} Hours</p>
                  <p>{minutes} Minutes</p>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>
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
              className="border p-2 rounded-md w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
