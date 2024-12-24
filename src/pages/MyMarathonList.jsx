import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateMarathon from "./UpdateMarathon";

const MyMarathonList = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/marathons/${user?.email}`
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
      await axios.delete(`http://localhost:5000/marathon/${id}`);
      toast.success("Delete Successful");
      getData();
    } catch (error) {
      console.error("Failed to delete job:", error);
      toast.error("Error deleting job.");
    }
  };

  // Handle modal open and passing selected marathon data
  const handleEdit = (marathon) => {
    setSelectedMarathon(marathon);
    document.getElementById("my_modal_5").showModal();
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 my-24">
      <h1 className="text-2xl font-bold mb-4">My Marathon List</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Title</th>
            <th className="border border-gray-200 px-4 py-2">
              Marathon Start Date
            </th>
            <th className="border border-gray-200 px-4 py-2">Location</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marathons.map((marathon) => (
            <tr key={marathon._id}>
              <td className="border border-gray-200 px-4 py-2">
                {marathon.title}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {marathon.marathonStartDate}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {marathon.location}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <button
                  className="text-green-500 hover:text-green-700 mr-2"
                  onClick={() => handleEdit(marathon)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(marathon._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for updating marathon */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Marathon</h3>
          {selectedMarathon && <UpdateMarathon marathon={selectedMarathon} />}
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyMarathonList;
