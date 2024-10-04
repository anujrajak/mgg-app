"use client";
import Image from "next/image";
import logo from "@/assets/imgs/logo.png";
import { LuSearch } from "react-icons/lu";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md"; // Hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import Link from "next/link";
import HorizontalScrollList from "@/components/common/HorizontalScrollList";
import DealsSection from "@/components/common/DealsSection";
import { useState } from "react";
import Footer from "@/components/common/Footer";

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const menuList = [
    {
      title: "Body Care",
      options: [{ label: "Option 1", value: "value 1" }],
    },
    {
      title: "Hair Care",
      options: [{ label: "Option 1", value: "value 1" }],
    },
    {
      title: "Face & Skin Care",
      options: [{ label: "Option 1", value: "value 1" }],
    },
    {
      title: "Mens",
      options: [{ label: "Option 1", value: "value 1" }],
    },
    {
      title: "Womens",
      options: [{ label: "Option 1", value: "value 1" }],
    },
    {
      title: "Children",
      options: [{ label: "Option 1", value: "value 1" }],
    },
    {
      title: "Samples",
      options: [{ label: "Option 1", value: "value 1" }],
    },
  ];

  return (
    <div className="flex flex-col w-screen bg-white">
      {/* Header for Large Devices */}
      <div className="container mx-auto hidden md:block">
        <section className="flex items-center h-24 justify-between p-4 md:p-6">
          <Image className="h-14 w-auto" alt="logo" src={logo} />
          <div className="flex items-center justify-between space-x-2 md:space-x-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-xs md:max-w-md">
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

            {/* Sign In Button */}
            <Link
              href="auth/sign-in"
              type="button"
              className="h-12 text-lg text-white bg-gradient-to-r from-[#4F9531] to-[#21747C] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full px-4 md:px-5 py-2.5"
            >
              Sign in
            </Link>
          </div>
        </section>
      </div>

      {/* Header for Small Devices */}
      <div className="container mx-auto block md:hidden">
        <section className="flex items-center justify-between p-4">
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

        {/* Search Input for Small Devices */}
        <div className="px-4 relative mt-2 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 pl-12 pr-4 text-gray-700 bg-transparent border-2 rounded-full focus:outline-none focus:ring-0"
            style={{
              borderColor: "#4F9531",
            }}
          />
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#4F9531] to-[#21747C] rounded-full p-2 text-lg">
            <LuSearch className="text-white" />
          </div>
        </div>

        {/* Drawer for Small Devices */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75"
            onClick={closeDrawer}
          >
            <div
              className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
            >
              <button
                onClick={closeDrawer}
                className="text-xl mb-4 float-right"
              >
                <AiOutlineClose />
              </button>
              {/* Menu List with Collapses */}
              {menuList.map((item) => (
                <div key={item.title} className="collapse collapse-arrow mb-2">
                  <input type="checkbox" />
                  <div className="collapse-title text-lg">{item.title}</div>
                  <div className="collapse-content">
                    <ul>
                      {item.options.map((option, i) => (
                        <li key={`${option.label}-${i}`}>
                          <Link href="#">{option.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Menu Section for Large Devices */}
      <section className="w-full my-auto bg-[#21747C] text-white hidden md:block">
        <div className="h-16 my-auto mx-auto flex items-center justify-between text-xl px-4 md:px-0">
          <div className="container flex justify-center">
            {menuList.map((item) => (
              <div
                className="dropdown dropdown-hover"
                key={`${item.title}-dropdown`}
              >
                <button tabIndex={0} className="btn btn-ghost">
                  {item.title} <MdKeyboardArrowDown className="text-xl" />
                </button>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-[#21747C] rounded-box z-[1] w-52 shadow"
                >
                  {item.options.map((option, i) => (
                    <li key={`${option.label}-${i}`}>
                      <a>{option.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll List Section */}
      <section className="my-auto flex justify-center items-center px-4 md:px-36">
        <div className="flex flex-col py-6">
          <HorizontalScrollList />
        </div>
      </section>

      {/* Ad Placement Section */}
      <div className="bg-[#EDF5F5] h-52 w-full flex items-center justify-center mt-8">
        <h2 className="text-center text-lg font-semibold">Ad Placement</h2>
      </div>

      {/* Deals Section */}
      <section className="my-auto flex justify-center items-center px-4 md:px-36">
        <div className="flex flex-col">
          <DealsSection />
        </div>
      </section>
      <Footer />
    </div>
  );
}
