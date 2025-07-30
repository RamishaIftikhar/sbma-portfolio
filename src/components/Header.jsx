import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={`w-full flex flex-col md:flex-row items-center justify-between py-4 px-4 text-white gap-4 md:gap-0 ${
        isHome ? "bg-black" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center pl-4 sm:pl-12">
        <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center md:justify-center gap-4 text-xs sm:text-sm font-medium mt-2">
        <Link to="/" className="hover:text-green-400">HOME</Link>
        <Link to="/about" className="hover:text-green-400">ABOUT US</Link>
        <Link to="/services" className="hover:text-green-400">SERVICES</Link>
        <Link to="/page" className="hover:text-green-400">PAGE</Link>
        <Link to="/contact" className="hover:text-green-400">CONTACT</Link>
      </nav>

      {/* Contact Button */}
      <Link to="/contact" className="pr-4 sm:pr-12">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-5 rounded-full text-xs sm:text-sm">
          CONTACT US
        </button>
      </Link>
    </header>
  );
};

export default Header;
