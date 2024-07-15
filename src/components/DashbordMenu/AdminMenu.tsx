import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AdminMenuItem, MainMenuItem } from "./MenuItem";

const AdminMenu = () => {
  return (
    <div>
      <ul>
        <span className=" lg:hidden block">
          <p className="text-white pl-2 font-bold">Main Menu</p>
          <hr />
          {MainMenuItem.map((item) => (
            <li className="my-1">
              <Link
                href={item.link}
                className="flex items-center gap-2 hover:border-s-[3px] hover:border-blue-500 hover:transition-all px-4 py-3 hover:text-white"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </span>

        <p className="text-white pl-2 font-bold">Admin Dashboard</p>
        <hr />
        {AdminMenuItem.map((item) => (
          <li className="my-1">
            <Link
              href={item.link}
              className="flex items-center gap-2 hover:border-s-[3px] hover:border-blue-200 hover:transition-all hover:text-white hover:px-5 px-3 py-3"
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
