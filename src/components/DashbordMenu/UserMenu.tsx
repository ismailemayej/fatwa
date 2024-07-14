import Link from "next/link";
import React from "react";
import { MainMenuItem, UserMenuItem } from "./MenuItem";

const UserMenu = ({ user }: any) => {
  return (
    <div>
      <ul>
        <span className=" lg:hidden block">
          <p>Main Menu</p>
          <hr />
          {MainMenuItem.map((item) => (
            <li className="my-1">
              <Link
                href={item.link}
                className="flex items-center gap-2 hover:border-s-[4px] hover:border-blue-100 hover:transition-all hover:scale-60 py-3 hover:pl-2 hover:text-white"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </span>
        <p>User Dashboard</p>
        <hr />
        {UserMenuItem.map((item) => (
          <li className="my-1">
            <Link
              href={item.link}
              className="flex items-center gap-2 hover:border-s-[3px] hover:border-blue-500 hover:bg-blue-100 px-4 py-3 hover:text-blue-700"
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

export default UserMenu;
