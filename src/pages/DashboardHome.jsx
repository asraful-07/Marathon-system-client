import React from "react";

const DashboardHome = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Dashboard
        </h3>
        <p className="text-gray-600">
          Manage your tasks, view analytics, and configure your settings here.
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
