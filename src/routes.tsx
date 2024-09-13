import { ReactElement } from "react";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

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
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <FaUser />,
  },
];
export default routes;
