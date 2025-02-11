import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/Logo (2).png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          {/* Left Section: Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
            <p className="text-lg font-light max-w-sm">
              Marathon Management System is designed to connect event organizers
              with participants. Register, track, and manage your marathons
              efficiently.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <nav className="space-y-2">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-[#0db496] block"
              >
                Home
              </NavLink>
              <NavLink
                to="/marathons"
                className="text-gray-300 hover:text-[#0db496] block"
              >
                Marathons
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-gray-300 hover:text-[#0db496] block"
              >
                Dashboard
              </NavLink>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496] transition transform hover:scale-110"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496] transition transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496] transition transform hover:scale-110"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496] transition transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#0db496]">SoloSphere</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
