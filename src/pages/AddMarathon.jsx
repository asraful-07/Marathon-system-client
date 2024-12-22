import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MarathonsPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // If the user is not logged in, redirect to the login page
  if (!user) {
    navigate("/login");
    return null;
  }

  // State for marathon details form
  const [marathon, setMarathon] = useState({
    title: "",
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: "",
    runningDistance: "25k",
    description: "",
    marathonImage: "",
    createdAt: new Date(),
    totalRegistrationCount: 0,
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarathon((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file change for marathon image
  const handleImageChange = (e) => {
    setMarathon((prevState) => ({
      ...prevState,
      marathonImage: e.target.files[0],
    }));
  };

  // Handle date change
  const handleDateChange = (date, field) => {
    setMarathon((prevState) => ({
      ...prevState,
      [field]: date,
    }));
  };

  // Handle form submission (you can adjust this based on your backend setup)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Marathon Event Created:", marathon);
    // Here you would send the marathon data to your server or Firebase
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create Marathon Event
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg"
      >
        {/* Marathon Title */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Marathon Title</label>
          <input
            type="text"
            name="title"
            value={marathon.title}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Start Registration Date */}
        <div className="mb-4">
          <label className="block text-lg font-medium">
            Start Registration Date
          </label>
          <DatePicker
            selected={marathon.startRegistrationDate}
            onChange={(date) => handleDateChange(date, "startRegistrationDate")}
            className="w-full mt-2 px-4 py-2 border rounded"
            dateFormat="MMMM d, yyyy"
            required
          />
        </div>

        {/* End Registration Date */}
        <div className="mb-4">
          <label className="block text-lg font-medium">
            End Registration Date
          </label>
          <DatePicker
            selected={marathon.endRegistrationDate}
            onChange={(date) => handleDateChange(date, "endRegistrationDate")}
            className="w-full mt-2 px-4 py-2 border rounded"
            dateFormat="MMMM d, yyyy"
            required
          />
        </div>

        {/* Marathon Start Date */}
        <div className="mb-4">
          <label className="block text-lg font-medium">
            Marathon Start Date
          </label>
          <DatePicker
            selected={marathon.marathonStartDate}
            onChange={(date) => handleDateChange(date, "marathonStartDate")}
            className="w-full mt-2 px-4 py-2 border rounded"
            dateFormat="MMMM d, yyyy"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={marathon.location}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Running Distance */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Running Distance</label>
          <select
            name="runningDistance"
            value={marathon.runningDistance}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border rounded"
            required
          >
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Description</label>
          <textarea
            name="description"
            value={marathon.description}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border rounded"
            rows="4"
            required
          />
        </div>

        {/* Marathon Image */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Marathon Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full mt-2 px-4 py-2 border rounded"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#0db496] text-white text-xl font-bold rounded"
        >
          Create Marathon
        </button>
      </form>
    </div>
  );
};

export default MarathonsPage;
