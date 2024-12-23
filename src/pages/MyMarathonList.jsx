import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MyMarathonList = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

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
      // Refresh the UI
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Marathon List</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Title</th>
            <th className="border border-gray-200 px-4 py-2">
              MarathonStartDate
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
                <NavLink>
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <FaEdit />
                  </button>
                </NavLink>
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
    </div>
  );
};

export default MyMarathonList;
