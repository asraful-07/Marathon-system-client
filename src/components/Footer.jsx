import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo (2).png";

const Footer = () => {
  return (
    <footer className="bg-[#383737] text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 px-6">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={logo} alt="Logo" className="h-16 mb-4" />
          <p className="text-center lg:text-left text-lg font-light max-w-xs">
            Crowdcube is a crowdfunding platform for raising money for various
            projects, ideas, and causes. Join us and make a difference today!
          </p>
        </div>

        {/* Middle Section: Useful Links */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h5 className="text-xl font-semibold">Useful Links</h5>
          <nav className="space-y-2">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/marathons" className="hover:underline">
              Marathons
            </NavLink>
            <NavLink to="/dashboard" className="hover:underline">
              Dashboard
            </NavLink>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-center lg:text-right">
          <p className="text-sm">&copy; 2024 Crowdcube. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
