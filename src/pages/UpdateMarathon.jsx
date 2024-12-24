import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateMarathon = () => {
  const marathon = useLoaderData();

  const {
    _id,
    title,
    startRegistrationDate,
    endRegistrationDate,
    marathonStartDate,
    location,
    runningDistance,
    description,
    image,
    aiSuggestion,
  } = marathon;

  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date(startRegistrationDate));
  const [endDate, setEndDate] = useState(new Date(endRegistrationDate));
  const [marathonStart, setMarathonStart] = useState(
    new Date(marathonStartDate)
  );
  const [aiSuggestionValue, setAiSuggestionValue] = useState(aiSuggestion);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTitle = form.title.value;
    const updatedImage = form.image.value;
    const updatedLocation = form.location.value;
    const updatedRunningDistance = form.runningDistance.value;
    const updatedDescription = form.description.value;

    const marathonData = {
      title: updatedTitle,
      startRegistrationDate: startDate,
      endRegistrationDate: endDate,
      marathonStartDate: marathonStart,
      location: updatedLocation,
      runningDistance: updatedRunningDistance,
      description: updatedDescription,
      image: updatedImage,
      aiSuggestion: aiSuggestionValue,
      creator: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      const { data } = await axios.put(
        `http://localhost:5000/marathon/${_id}`,
        marathonData
      );

      console.log(data);
      toast.success("Marathon Event Updated Successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update marathon event.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Update Marathon Event
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
            defaultValue={title}
            required
          />
        </div>

        {/* AI Suggestion */}
        <div className="mb-4">
          <label className="block text-lg font-medium">AI Suggestion</label>
          <input
            type="text"
            name="aiSuggestion"
            value={aiSuggestionValue}
            onChange={(e) => setAiSuggestionValue(e.target.value)}
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
            selected={marathonStart}
            onChange={(date) => setMarathonStart(date)}
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
            defaultValue={location}
            className="w-full mt-2 px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Running Distance */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Running Distance</label>
          <select
            name="runningDistance"
            defaultValue={runningDistance}
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
            defaultValue={description}
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
            defaultValue={image}
            placeholder="Marathon Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#0db496] text-white text-xl font-bold rounded"
        >
          Update Marathon
        </button>
      </form>
    </div>
  );
};

export default UpdateMarathon;
