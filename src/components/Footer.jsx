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
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 px-6">
          {/* Left Section: Logo and Description */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
            <p className="text-center lg:text-left text-lg font-light max-w-xs">
              Marathon Management System is a platform designed to connect event
              organizers with participants. Register, track, and manage your
              marathons efficiently. Join us and be part of exciting events
              today!
            </p>
          </div>
          {/* Links */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
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
            </nav>
          </div>
          {/* Social Media */}

          <div>
            <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496]"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496]"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496]"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0db496]"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 mt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SoloSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
