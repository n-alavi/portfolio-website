"use client";

import { useState } from "react";
import { navLinks } from "../constant/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state between open and closed
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-4 sm:px-6 h-12 sm:h-12 border border-gray-200 border-opacity-40 bg-white/[0.5] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.3rem] rounded-full">
        {/* Hamburger Icon (Visible on Small Screens) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links (Visible on Large Screens) */}
        <div className="hidden sm:flex flex-row items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href} // Ensure a unique key for each link
              href={link.href}
              className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Small Screens (Visible when isOpen is true) */}
      {isOpen && (
        <div className="flex flex-col sm:hidden bg-white border border-gray-200 border-opacity-40 shadow-md p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 px-2 py-1 rounded-md hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
              onClick={toggleMenu} // Close the menu when clicked
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
