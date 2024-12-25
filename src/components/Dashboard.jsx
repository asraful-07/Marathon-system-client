import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-accent my-12 drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
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
  );
};

export default Dashboard;
