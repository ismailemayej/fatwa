import { Divider } from "@nextui-org/react";
import { LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminMenu = () => {
  const menu = [
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
  ];

  return (
    <div>
      <ul>
        <div className="text-2xl font-semibold">Admin</div>
        <Divider />
        {menu.map((item) => (
          <li className="my-1">
            <Link
              href={item.link}
              className="flex items-center gap-2 hover:border-s-[3px] hover:border-blue-500 hover:bg-blue-100 bg-blue-50 px-4 py-3 hover:text-blue-700"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMenu;
