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


      {/* Navbar Links (Visible on Large Screens) */}
      <div className="hidden sm:flex w-full justify-center">

        <div className="justify-center items-center border-gray-200 border-opacity-40 bg-white/[0.5] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.3rem] rounded-full">

          <div className="flex flex-row items-center gap-4 p-3 ">
            {navLinks.map((link) => (
              <a
                key={link.href} // Ensure a unique key for each link
                href={link.href}
                className="text-gray-700 px-3 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-400 ease-in-out"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

      </div>


      {/* Hamburger Icon (Visible on Small Screens) */}
      <div className="sm:hidden flex w-full bg-[#fff8e8]">
        <button onClick={toggleMenu}
          className="p-4 focus:outline-none"
        >
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


      {/* Dropdown Menu for Small Screens (Visible when isOpen is true) */}
      <div className={`${isOpen ? 'flex' : 'hidden'} sm:hidden absolute flex flex-col opacity-100 translate-y-0 max-h-screen w-full bg-[#fff8e8] border
       border-gray-200 border-opacity-40 shadow-md p-4 gap-4 transform transition-all duration-400 ease-in-out border-t-0 `}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 px-2 py-1 rounded-md hover:text-white hover:bg-purple-200 transition-all duration-400 ease-in-out"
            onClick={toggleMenu} // Close the menu when clicked
          >
            {link.label}
          </a>
        ))}
      </div>


    </div>
  );
}
