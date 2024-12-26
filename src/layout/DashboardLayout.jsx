import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mx-10">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-accent mt-6 drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 h-full text-base-content w-80 p-4 space-y-4">
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

export default DashboardLayout;
