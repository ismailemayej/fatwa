"use client";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";
import { DashboardMobileMenu } from "@/app/(Dashboard)/dashboard/DashboadMobileMenu";
import AdminMenu from "../DashbordMenu/AdminMenu";
import { MainMenuItem } from "../DashbordMenu/MenuItem";
export default function AdminDashboardNavbar({ user }: any) {
  return (
    <>
      <div className="lg:bg-white shadow-xl lg:text-black text-white bg-[#405189] lg:px-3 px-2 py-3 w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:flex-none flex items-center gap-2">
            <DashboardMobileMenu>
              <AdminMenu />
            </DashboardMobileMenu>
            <Link href="/" className="flex items-center space-x-3">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Fatwa
              </span>
            </Link>
          </div>

          <div className="hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <ul className="flex justify-between gap-10 flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg first-line:md:space-x-8 md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
              {MainMenuItem.map((item, index) => (
                <li key={index} className="my-1">
                  <Link
                    href={item.link}
                    className=" hover:border-b-3 hover:border-yellow-600 hover:px-1 hover:transition-all hover:scale-95"
                    aria-current="page"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button color="primary" variant="ghost" onClick={() => signOut()}>
            LogOut
          </Button>
        </div>
      </div>
    </>
  );
}
