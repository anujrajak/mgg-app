import { MdKeyboardArrowDown } from "react-icons/md";

export const menuList = [
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

export default function Navbar() {
  return (
    <section className="w-full my-auto bg-[#21747C] text-white hidden md:block">
      <div className="container h-16 my-auto mx-auto flex items-center justify-between text-xl">
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
  );
}
