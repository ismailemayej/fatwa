"use client";
import { useState } from "react";
import Menu from "../menu/menu";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" text-white lg:px-0 px-2 py-2  bg-gray-900 w-full z-20 top-0 start-0 border-green-700 lg:border-b-8 border-b-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:flex-none flex">
            <button
              onClick={toggleOpen}
              type="button"
              className="p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
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
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            প্রশ্ন
          </button>
        </div>
      </nav>
      {isOpen && <Menu />}
    </>
  );
}
