import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto m-24">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn bg-[#0db496] text-white drawer-button"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content w-80 p-4 space-y-4">
            {/* Sidebar content */}
            <li>
              <NavLink
                to="/dashboard/add-marathon"
                className="text-lg font-semibold hover:text-[#0db496]"
              >
                Add Marathon
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-marathon-list"
                className="text-lg font-semibold hover:text-[#0db496]"
              >
                My Marathon List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-apply-list"
                className="text-lg font-semibold hover:text-[#0db496]"
              >
                My Apply List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
