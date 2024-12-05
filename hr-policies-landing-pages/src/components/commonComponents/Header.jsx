import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm bg-white ">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://reecocefe.in/wp-content/uploads/2022/09/Reecocefe-Logo.webp"
            alt="Logo"
            className="h-12 sm:h-16 w-auto -ml-6 lg:-ml-16"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-9 ml-auto font-sans">
          <a href="/confidentiality" className="text-[#2d486f] hover:underline">
            HOME
          </a>
          <a
            href="https://reecocefe.in/about-us/"
            className="text-[#2d486f] hover:underline"
          >
            ABOUT US
          </a>
          <a
            href="https://reecocefe.in/services/"
            className="text-[#2d486f] hover:underline"
          >
            OUR SERVICES
          </a>
          <a
            href="https://reecocefe.in/portfolio/"
            className="text-[#2d486f] hover:underline"
          >
            PORTFOLIO
          </a>
          <a
            href="https://reecocefe.in/contact/"
            className="text-[#2d486f] hover:underline"
          >
            CONTACT
          </a>
          <button className="text-white bg-gradient-to-r from-[#3DE43D] to-[#228B22] rounded-3xl px-4 py-2 transition-transform duration-300 hover:from-[#2bb32b] hover:to-[#196619] hover:shadow-md hover:scale-105">
            Get In Touch
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M3.75 6h16.5m-16.5 6h16.5m-16.5 6h16.5" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <a
              href="/"
              className="text-[#2d486f] hover:bg-gray-200 px-4 py-2 rounded-md"
            >
              HOME
            </a>
            <a
              href="https://reecocefe.in/about-us/"
              className="text-[#2d486f] hover:bg-gray-200 px-4 py-2 rounded-md"
            >
              ABOUT US
            </a>
            <a
              href="https://reecocefe.in/services/"
              className="text-[#2d486f] hover:bg-gray-200 px-4 py-2 rounded-md"
            >
              OUR SERVICES
            </a>
            <a
              href="https://reecocefe.in/portfolio/"
              className="text-[#2d486f] hover:bg-gray-200 px-4 py-2 rounded-md"
            >
              PORTFOLIO
            </a>
            <a
              href="https://reecocefe.in/contact/"
              className="text-[#2d486f] hover:bg-gray-200 px-4 py-2 rounded-md"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
