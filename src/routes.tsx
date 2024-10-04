import { ReactElement } from "react";
import { FaUser } from "react-icons/fa";
import { MdDashboard, MdCategory } from "react-icons/md";

export interface RoutesType {
  name: string;
  layout: string;
  path: string;
  icons: ReactElement;
}

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "#",
    icon: <MdDashboard />,
  },
  {
    name: "Category",
    layout: "/admin",
    path: "category",
    icon: <MdCategory />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <FaUser />,
  },

  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <FaUser />,
  },
];

export default routes;
