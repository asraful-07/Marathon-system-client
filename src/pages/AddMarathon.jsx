import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const AddMarathon = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [marathonStartDate, setMarathonStartDate] = useState(new Date());
  const [aiSuggestion, setAiSuggestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const location = form.location.value;
    const runningDistance = form.runningDistance.value;
    const description = form.description.value;

    const marathonData = {
      title,
      startRegistrationDate: startDate,
      endRegistrationDate: endDate,
      marathonStartDate,
      location,
      runningDistance,
      description,
      image,
      createdAt: new Date(),
      totalRegistrations: 0,
      aiSuggestion,
      creator: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      const { data } = await axios.post(
        `http://localhost:5000/marathons`,
        marathonData
      );
      toast.success("Marathon Event Created Successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create marathon event.");
    }
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
            className="w-full mt-2 px-4 py-2 border rounded"
            required
          />
        </div>

        {/* AI Suggestion */}
        <div className="mb-4">
          <label className="block text-lg font-medium">AI Suggestion</label>
          <input
            type="text"
            name="aiSuggestion"
            value={aiSuggestion}
            onChange={(e) => setAiSuggestion(e.target.value)}
            className="w-full mt-2 px-4 py-2 border rounded"
            placeholder="Suggestions for marathon name or features"
          />
        </div>

        {/* Start Registration Date */}
        <div className="mb-4">
          <label className="block text-lg font-medium">
            Start Registration Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border p-2 rounded-md"
          />
        </div>

        {/* End Registration Date */}
        <div className="mb-4">
          <label className="block text-lg font-medium">
            End Registration Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
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
            selected={marathonStartDate}
            onChange={(date) => setMarathonStartDate(date)}
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
            className="w-full mt-2 px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Running Distance */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Running Distance</label>
          <select
            name="runningDistance"
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
            className="w-full mt-2 px-4 py-2 border rounded"
            rows="4"
            required
          />
        </div>

        {/* Marathon Image */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Marathon Image</label>
          <input
            type="text"
            name="image"
            placeholder="Company Image URL"
            className="input input-bordered w-full"
            required
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

export default AddMarathon;
