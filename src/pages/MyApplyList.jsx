import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selectedMarathon, setSelectedMarathon] = useState(null);
  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/register/${user?.email}`
      );
      setMarathons(response.data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      toast.error("Error fetching jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/register/${id}`);
      toast.success("Delete Successful");
      getData();
    } catch (error) {
      console.error("Failed to delete job:", error);
      toast.error("Error deleting job.");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-24">
      <h1 className="text-3xl font-bold text-center my-6">
        My Applied Marathons
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Marathon Title</th>
              <th className="border px-4 py-2">Start Date</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marathons?.map((marathon) => (
              <tr key={marathon._id}>
                <td className="border px-4 py-2">{marathon.title}</td>
                <td className="border px-4 py-2">
                  {marathon.marathonStartDate}
                </td>
                <td className="border px-4 py-2">{marathon.firstName}</td>
                <td className="border px-4 py-2">{marathon.lastName}</td>
                <td className="border px-4 py-2">{marathon.contactNumber}</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(marathon._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {/* {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow-lg w-96"
          >
            <h2 className="text-xl font-bold mb-4">Update Registration</h2>
            <p>
              <strong>Marathon Title:</strong> {selectedMarathon.title}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedMarathon.marathonStartDate}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                defaultValue={selectedMarathon.firstName}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                defaultValue={selectedMarathon.lastName}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                defaultValue={selectedMarathon.contactNumber}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Additional Info
              </label>
              <textarea
                name="additionalInfo"
                defaultValue={selectedMarathon.additionalInfo}
                className="w-full mt-1 p-2 border rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setShowUpdateModal(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )} */}

      {/* Delete Confirmation Modal */}
      {/* {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this registration?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MyApplyList;
