"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "@nextui-org/button";
import { Search } from "lucide-react";
const SearchDesktop: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/search?query=${query}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setResults(data.data);
    } catch (err) {
      throw err;
    }
  };
  return (
    <div>
      <div className="lg:px-7">
        <form
          onSubmit={handleSearch}
          className="lg:flex flex-col items-center lg:w-full w-4/5"
        >
          <Input
            onChange={handleInputChange}
            type="text"
            placeholder="Search your Question.."
            value={query}
            className="lg:reletive z-10 lg:block hidden rounded-xl bg-white w-96"
          />
          <div className="lg:hidden block">
            <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-md items-center space-x-2">
              <Input
                type="text"
                placeholder="Search..."
                className="rounded-xl w-full md:w-auto"
              />
              <button
                type="submit"
                className="hover:bg-slate-50 rounded-full p-2 md:p-3 hover:text-black hover:shadow-lg"
              >
                <Search />
              </button>
            </div>
          </div>
          <Button
            color="primary"
            type="submit"
            className=" lg:my-2 w-1/12 lg:z-10 text-sm lg:block hidden  border-white border lg:px-4 "
          >
            Search
          </Button>
        </form>
        <ul className="absolute mt-3 px-3 lg:left-44 left-20 lg:right-44 right-20">
          {results?.map((item: any) => (
            <li key={item._id} className="p-1 rounded-xl">
              <Link href={`q&a/${item.qn}`}>{item.question}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchDesktop;
