"use client";
import Link from "next/link";
import { DashboardMobileMenu } from "@/app/(Dashboard)/dashboard/DashboadMobileMenu";
import AdminMenu from "../DashbordMenu/AdminMenu";
import { MainMenuItem } from "../DashbordMenu/MenuItem";
import profile from "../../../public/profile.jpg";
import { useAuth } from "@/lib/authContext";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import ProfileMenuOn from "../profileMenu/ProfileMenu";
export default function AdminDashboardNavbar() {
  const { user } = useAuth();

  return (
    <>
      <div className=" shadow-xl lg:text-black text-white bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 lg:px-3 px-2 py-3 w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:flex-none flex items-center gap-2">
            <DashboardMobileMenu>
              <AdminMenu />
            </DashboardMobileMenu>
            <Link href="/" className="flex items-center space-x-3">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
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
                    <span className="text-sm text-white font-medium">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {user?.email ? (
            <>
              <ProfileMenuOn
                menuon={
                  <Image
                    src={profile}
                    height={40}
                    width={40}
                    alt="profile"
                    className="border-2 border-white rounded-full"
                  />
                }
              />
            </>
          ) : (
            <Link href="/login">
              <CircleUser className="lg:hidden block size-10" />
              <button
                type="button"
                className="text-white lg:block hidden border-1 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login or Registration
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
