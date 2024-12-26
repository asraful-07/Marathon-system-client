import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const EditMarathon = ({ selectedMarathon }) => {
  const [startDate, setStartDate] = useState(
    selectedMarathon?.startRegistrationDate
      ? new Date(selectedMarathon?.startRegistrationDate)
      : new Date()
  );
  const [endDate, setEndDate] = useState(
    selectedMarathon?.endRegistrationDate
      ? new Date(selectedMarathon?.endRegistrationDate)
      : new Date()
  );
  const [marathonStartDate, setMarathonStartDate] = useState(
    selectedMarathon?.marathonStartDate
      ? new Date(selectedMarathon?.marathonStartDate)
      : new Date()
  );
  const [runningDistance, setRunningDistance] = useState(
    selectedMarathon?.runningDistance ? selectedMarathon?.runningDistance : ""
  );

  useEffect(() => {
    setStartDate(
      selectedMarathon?.startRegistrationDate
        ? new Date(selectedMarathon?.startRegistrationDate)
        : new Date()
    );
    setEndDate(
      selectedMarathon?.endRegistrationDate
        ? new Date(selectedMarathon?.endRegistrationDate)
        : new Date()
    );
    setMarathonStartDate(
      selectedMarathon?.marathonStartDate
        ? new Date(selectedMarathon?.marathonStartDate)
        : new Date()
    );
    setRunningDistance(
      selectedMarathon?.runningDistance ? selectedMarathon?.runningDistance : ""
    );
  }, [selectedMarathon]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTitle = form.title.value;
    const updatedImage = form.image.value;
    const updatedLocation = form.location.value;
    const updatedDescription = form.description.value;
    const updateAiSuggestion = form.aiSuggestion.value;

    const marathonData = {
      title: updatedTitle,
      startRegistrationDate: startDate,
      endRegistrationDate: endDate,
      marathonStartDate: marathonStartDate,
      location: updatedLocation,
      runningDistance: runningDistance,
      description: updatedDescription,
      image: updatedImage,
      aiSuggestion: updateAiSuggestion,
    };

    try {
      const { data } = await axios.put(
        `http://localhost:5000/marathon/${selectedMarathon?._id}`,
        marathonData
      );

      toast.success("Marathon Event Updated Successfully!");
      document.getElementById("edit-marathon").close();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update marathon event.");
    }
  };

  return (
    <div>
      <dialog id="edit-marathon" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-3xl font-bold text-center mb-6">
            Update Marathon Event
          </h1>
          <div className="modal-action flex-col" method="dialog">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-medium">
                  Marathon Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full mt-2 px-4 py-2 border rounded"
                  defaultValue={selectedMarathon?.title}
                  required
                />
              </div>
              {/* AI Suggestion */}
              <div className="mb-4">
                <label className="block text-lg font-medium">
                  AI Suggestion
                </label>
                <input
                  type="text"
                  name="aiSuggestion"
                  defaultValue={selectedMarathon?.aiSuggestion}
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
                  required
                />
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-lg font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={selectedMarathon?.location}
                  className="w-full mt-2 px-4 py-2 border rounded"
                  required
                />
              </div>

              {/* Running Distance */}
              <div className="mb-4">
                <label className="block text-lg font-medium">
                  Running Distance
                </label>
                <select
                  name="runningDistance"
                  defaultValue={selectedMarathon?.runningDistance}
                  onChange={(e) => setRunningDistance(e.target.value)}
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
                  defaultValue={selectedMarathon?.description}
                  className="w-full mt-2 px-4 py-2 border rounded"
                  rows="4"
                  required
                />
              </div>

              {/* Marathon Image */}
              <div className="mb-4">
                <label className="block text-lg font-medium">
                  Marathon Image
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={selectedMarathon?.image}
                  placeholder="Marathon Image URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* if there is a button in form, it will close the modal */}
              <button
                type="submit"
                className="w-full my-4 py-3 bg-[#0db496] text-white text-xl font-bold rounded"
              >
                Update Marathon
              </button>
            </form>
            <button
              onClick={() => document.getElementById("edit-marathon").close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditMarathon;
