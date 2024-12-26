import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMarathon, setSelectedMarathon] = useState(null);

  const [marathonStartDate, setMarathonStartDate] = useState(
    selectedMarathon?.marathonStartDate
      ? new Date(selectedMarathon?.marathonStartDate)
      : new Date()
  );

  useEffect(() => {
    setMarathonStartDate(
      selectedMarathon?.marathonStartDate
        ? new Date(selectedMarathon?.marathonStartDate)
        : new Date()
    );
  }, [selectedMarathon]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/register/${user?.email}`,
        { params: { search } }
      );
      setMarathons(response.data);
    } catch (error) {
      console.error("Failed to fetch marathons:", error);
      toast.error("Error fetching marathons.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTitle = form.title.value;
    const updatedFirstName = form.firstName.value;
    const updatedLastName = form.lastName.value;
    const updatedContactNumber = form.contactNumber.value;

    const marathonRegisterData = {
      title: updatedTitle,
      marathonStartDate: marathonStartDate,
      firstName: updatedFirstName,
      lastName: updatedLastName,
      contactNumber: updatedContactNumber,
    };

    try {
      const { data } = await axios.put(
        `http://localhost:5000/register/${selectedMarathon?._id}`,
        marathonRegisterData
      );

      getData();
      toast.success("Marathon Event Updated Successfully!");
      document.getElementById("edit-marathon").close();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update marathon event.");
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

  const handleEdit = (marathon) => {
    setSelectedMarathon(marathon);
    document.getElementById("edit-marathon").showModal();
  };

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
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
      <form onSubmit={handleSearch}>
        <div className="flex p-1 w-fit overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
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

      {/* Modal for updating marathon */}
      <dialog id="edit-marathon" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-3xl font-bold text-center mb-6">
            Update My Apply List
          </h1>
          <div className="modal-action flex-col" method="dialog">
            <form onSubmit={handleSubmit} method="dialog">
              <div className="mb-4">
                <label className="block text-lg font-medium">
                  Marathon Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full mt-2 px-4 py-2 border rounded"
                  defaultValue={selectedMarathon?.title}
                  readOnly
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
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium">FirstName</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full mt-2 px-4 py-2 border rounded"
                  defaultValue={selectedMarathon?.firstName}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium">LastName</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full mt-2 px-4 py-2 border rounded"
                  defaultValue={selectedMarathon?.lastName}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium">
                  ContactNumber
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  className="w-full mt-2 px-4 py-2 border rounded"
                  defaultValue={selectedMarathon?.contactNumber}
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

export default MyApplyList;
