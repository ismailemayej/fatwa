"use client";
import { useState } from "react";
import Menu from "../menu/menu";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";
import { HomeMobileMenu } from "../HomeMenu/HomeMobileMenu";
export default function ServerNavbar({ user }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="absolute bg-[#05000f2a]  text-white lg:px-0 px-2 py-3 w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:flex-none flex">
            <HomeMobileMenu />
            <Link href="/" className="flex items-center space-x-3">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Fatwa
              </span>
            </Link>
          </div>

          <div className="hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <ul className="flex justify-between gap-10 text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg first-line:md:space-x-8 md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-6 text-white rounded md:bg-transparent hover:border hover:bg-slate-600 hover:px-3 hover:transition-all hover:scale-95 hover:delay-100 hover:rounded-lg md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent hover:border hover:bg-slate-600 hover:px-3 hover:transition-all hover:scale-95 hover:delay-100 hover:rounded-lg md:p-0"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent hover:border hover:bg-slate-600 hover:px-3 hover:transition-all hover:scale-95 hover:delay-100 hover:rounded-lg md:p-0"
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent hover:border hover:bg-slate-600 hover:px-3 hover:transition-all hover:scale-95 hover:delay-100 hover:rounded-lg md:p-0"
                  aria-current="page"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          {user?.email ? (
            <Button color="primary" onClick={() => signOut()}>
              LogOut
            </Button>
          ) : (
            <Link href="/login">
              <button
                type="button"
                className="text-white border-1 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login or Registration
              </button>
            </Link>
          )}
        </div>
      </nav>
      <span className=" flex justify-start"> {isOpen && <Menu />}</span>
    </>
  );
}
