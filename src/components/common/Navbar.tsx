"use client";
import { useFetchCategories } from "@/utils/api/categoryApi";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

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

export default function Navbar() {
  const { data: blogCategories, isLoading: isLoadingCategories } =
    useFetchCategories("blog");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (blogCategories) {
      setCategories(Object.values(processCategory(blogCategories)));
    }
  }, [blogCategories]);
  return (
    <section className="w-full my-auto bg-[#21747C] text-white hidden md:block">
      <div className="container h-16 my-auto mx-auto flex items-center justify-between text-xl">
        <div className="container flex justify-center">
          {isLoadingCategories
            ? ""
            : categories.map((item: any) => (
                <div
                  className="dropdown dropdown-hover"
                  key={`${item.name}-dropdown`}
                >
                  <button tabIndex={0} className="btn btn-ghost">
                    {item.name} <MdKeyboardArrowDown className="text-xl" />
                  </button>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-[#21747C] rounded-box z-[1] w-52 shadow"
                  >
                    {item.childs &&
                      item.childs.map((option: any) => (
                        <li key={`${option._id}`}>
                          <a>{option.name}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
