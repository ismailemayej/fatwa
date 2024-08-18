"use client";
import Link from "next/link";
import { HomeMobileMenu } from "../HomeMenu/HomeMobileMenu";
import { MainMenuItem } from "../DashbordMenu/MenuItem";
import { CircleUser } from "lucide-react";
import profile from "../../../public/profile.jpg";
import Image from "next/image";
import ProfileMenuOn from "../profileMenu/ProfileMenu";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
export default function ServerNavbar({ users }: any) {
  const { user } = useAuth();
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    if (path === "/") {
      router.refresh();
    }
  }, [user, router, path]);
  return (
    <>
      <nav className="lg:absolute lg:bg-[#7371f03a] bg-blue-600 text-white lg:px-0 px-2 py-3 w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:flex-none flex items-center">
            <HomeMobileMenu />
            <Link href="/" className=" space-x-3 text-2xl">
              Fatwa
            </Link>
          </div>
          <div className="hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <ul className="flex justify-between gap-10 text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg first-line:md:space-x-8 md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
              {MainMenuItem.map((item, index) => (
                <li key={index} className="my-1">
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 hover:border-b-[3px]  hover:border-blue-100 hover:transition-all hover:px-2  hover:text-white"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {users?.email ? (
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
      </nav>
    </>
  );
}
