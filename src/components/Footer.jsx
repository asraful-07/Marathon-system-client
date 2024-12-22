import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo (2).png";

const Footer = () => {
  return (
    <footer className="bg-[#383737] text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 px-6">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={logo} alt="Logo" className="h-16 mb-4" />
          <p className="text-center lg:text-left text-lg font-light max-w-xs">
            Marathon Management System is a platform designed to connect event
            organizers with participants. Register, track, and manage your
            marathons efficiently. Join us and be part of exciting events today!
          </p>
        </div>

        {/* Middle Section: Useful Links */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h5 className="text-xl font-semibold mb-4">Useful Links</h5>
          <nav className="space-x-2">
            <NavLink to="/" className="text-white hover:text-[#0db496]">
              Home
            </NavLink>
            <NavLink
              to="/marathons"
              className="text-white hover:text-[#0db496]"
            >
              Marathons
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-white hover:text-[#0db496]"
            >
              Dashboard
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-[#0db496]">
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-6 mt-4 lg:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0db496] text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0db496] text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0db496] text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center py-4">
        <p className="text-sm">
          &copy; 2024 Marathon Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
