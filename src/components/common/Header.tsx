"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for images
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/assets/imgs/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { useFetchCategories } from "@/utils/api/categoryApi";

function processCategory(blogCategories: any) {
  let menuItems: any = {};
  blogCategories.forEach((element: any) => {
    menuItems[element._id] = element;
    if (element.parentCategory) {
      if (!menuItems[element.parentCategory._id]["childs"]) {
        menuItems[element.parentCategory._id]["childs"] = [];
      }
      menuItems[element.parentCategory._id].childs.push(element);
    }
  });
  return menuItems;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const { data: blogCategories, isLoading: isLoadingCategories } =
    useFetchCategories("blog");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (blogCategories) {
      setCategories(Object.values(processCategory(blogCategories)));
    }
  }, [blogCategories]);

  return (
    <>
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
            {/* <Link
              href="auth/sign-in"
              type="button"
              className="h-12 text-lg text-white bg-gradient-to-r from-[#4F9531] to-[#21747C] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full px-4 md:px-5 py-2.5"
            >
              Sign in
            </Link> */}
          </div>
        </section>
      </div>

      {/* Header for Small Devices */}
      <div className="container mx-auto block md:hidden">
        <section className="flex items-center justify-between p-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu Icon */}
            <button
              onClick={toggleDrawer}
              className="text-[30px] text-[#323232]"
            >
              <RiMenu4Fill />
            </button>

            {/* Logo */}
            <Image className="h-14 w-auto ml-4" alt="logo" src={logo} />
          </div>
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

              {isLoadingCategories
                ? ""
                : categories.map((item: any) => (
                    <div
                      key={item.name}
                      className="collapse collapse-arrow mb-2"
                    >
                      <input type="checkbox" />
                      <div className="collapse-title text-lg">{item.name}</div>
                      <div className="collapse-content">
                        <ul>
                          {item.childs &&
                            item.childs.map((option: any) => (
                              <li key={`${option._id}`}>
                                <Link href="#">{option.name}</Link>
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
    </>
  );
};

export default Header;
