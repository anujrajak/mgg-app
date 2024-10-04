"use client";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for images
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { MdMenu } from "react-icons/md"; // Hamburger icon

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto">
      {/* Header for Small Devices */}
      <section className="flex items-center justify-between p-4 md:hidden">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleDrawer} className="text-2xl">
          <MdMenu />
        </button>

        {/* Logo */}
        <Image className="h-14 w-auto" alt="logo" src={logo} />

        {/* Sign In Button */}
        <Link
          href="auth/sign-in"
          type="button"
          className="h-12 text-lg text-white bg-gradient-to-r from-[#4F9531] to-[#21747C] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full px-4 py-2.5"
        >
          Sign in
        </Link>
      </section>

      {/* Drawer for Small Devices */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
            <button onClick={toggleDrawer} className="text-xl mb-4">
              Close
            </button>
            {/* Menu List */}
            <ul>
              {/* Example menu items */}
              <li className="py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2">
                <Link href="/about">About</Link>
              </li>
              <li className="py-2">
                <Link href="/services">Services</Link>
              </li>
              <li className="py-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Input for Small Devices */}
      <div
        className={`relative flex-grow max-w-xs mt-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 pl-12 pr-4 text-gray-700 bg-transparent border-2 rounded-full focus:outline-none focus:ring-0"
          style={{
            borderColor: "#4F9531",
          }}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#4F9531] to-[#21747C] rounded-full p-2 text-lg">
          <LuSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
