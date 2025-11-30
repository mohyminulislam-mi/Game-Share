import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto text-base-content mt-10">
      <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- Brand Section --- */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3 ">
            <img src={Logo} alt=" Logo" className="w-48" />
          </Link>
          <p className="text-sm text-gray-600 mt-7">
            GameShare is a Single-Page Application (SPA) built with React that
            serves as a dedicated portal for comprehensive game details and the
            latest gaming news.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                My Games
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <h6 className="footer-title">Social</h6>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </nav>
      </div>

      {/* --- Bottom Section --- */}

      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600 flex justify-between flex-col lg:flex-row">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-700">Gameshare</span>. All
          rights reserved.
        </div>
        <div>
          <p>
            Develop by -{" "}
            <a
              href="https://www.linkedin.com/in/mohyminulislam/"
              target="blank"
              className="font-bold text-green-600"
            >
              Mohyminul Islam
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
