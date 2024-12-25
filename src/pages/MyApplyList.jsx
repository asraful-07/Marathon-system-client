import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // State for search input

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, search]); // Refetch data when search changes

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/register/${user?.email}`,
        { params: { search } } // Pass search query as a parameter
      );
      setMarathons(response.data);
    } catch (error) {
      console.error("Failed to fetch marathons:", error);
      toast.error("Error fetching marathons.");
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
      console.error("Failed to delete marathon:", error);
      toast.error("Error deleting marathon.");
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
      {/* Search Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData();
        }}
      >
        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 w-fit">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Marathon Title"
            aria-label="Search Marathon Title"
          />
          <button
            type="submit"
            className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>
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
                  {new Date(marathon.marathonStartDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{marathon.firstName}</td>
                <td className="border px-4 py-2">{marathon.lastName}</td>
                <td className="border px-4 py-2">{marathon.contactNumber}</td>
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
      </div>
    </div>
  );
};

export default MyApplyList;
