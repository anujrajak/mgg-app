import Image from "next/image";
import logo from "@/assets/imgs/logo.png";
import { LuSearch } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export default function AdminPage() {
  const menuList = [
    {
      title: "Body Care",
      options: [{ label: "option 1", value: "value 1" }],
    },
    {
      title: "Hair Care",
      options: [{ label: "option 1", value: "value 1" }],
    },
    {
      title: "Face & Skin Care",
      options: [{ label: "option 1", value: "value 1" }],
    },
    {
      title: "Mens",
      options: [{ label: "option 1", value: "value 1" }],
    },
    {
      title: "Womens",
      options: [{ label: "option 1", value: "value 1" }],
    },
    {
      title: "Children",
      options: [{ label: "option 1", value: "value 1" }],
    },
    {
      title: "Samples",
      options: [{ label: "option 1", value: "value 1" }],
    },
  ];

  return (
    <div className="flex flex-col w-screen  bg-white">
      <div className="container mx-auto">
        <section className="flex items-center h-24 justify-between p-6">
          <Image className="h-14 w-auto" alt="logo" src={logo} />
          <div className="flex items-center justify-between space-x-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
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
              className="h-12 text-lg text-white bg-gradient-to-r from-[#4F9531] to-[#21747C] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full px-5 py-2.5"
            >
              Sign in
            </Link>
          </div>
        </section>
      </div>
      <section className="w-vw my-auto bg-[#21747C] text-white">
        <div className="h-16 my-auto mx-auto flex items-center justify-between text-xl">
          <div className="container flex justify-center">
            <div>
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
        </div>
      </section>
      <section className="my-auto flex justify-center items-center px-36">
        <div className="flex flex-col pt-6 pb-6"></div>
      </section>
    </div>
  );
}
