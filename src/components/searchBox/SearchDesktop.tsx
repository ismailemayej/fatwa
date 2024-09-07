"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input"; // Verify the correct path
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
        `http://localhost:5000/api/v1/questions/search?query=${query}`,
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
      console.error("Error fetching search results:", err);
      // Optionally handle errors by showing a message to the user
    }
  };

  return (
    <div>
      <div className="lg:px-7">
        <form
          onSubmit={handleSearch}
          className="lg:flex flex-col items-center lg:w-full w-4/5"
        >
          {/* Desktop Search Box */}
          <Input
            onChange={handleInputChange}
            type="text"
            placeholder="Search your Question..."
            value={query}
            className=" z-10 lg:block hidden rounded-xl bg-white w-96"
          />

          {/* Mobile Search Box */}
          <div className="lg:hidden block">
            <div className="flex lg:w-full  items-center">
              <Input
                onChange={handleInputChange}
                type="text"
                placeholder="Search..."
                className="rounded-xl lg:w-full "
                value={query}
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
            className="lg:my-2 w-1/12 lg:z-10 text-sm lg:block hidden border-white border lg:px-4"
          >
            Search
          </Button>
        </form>
        {/* Search Results */}
        {/* {results.length > 0 ? (
          <ul className="absolute mt-3 px-3 lg:left-44 left-20 lg:right-44 right-20 bg-white border rounded-lg shadow-lg z-50">
            {results.map((item: any) => (
              <li key={item._id} className="p-2 hover:bg-gray-100 rounded-xl">
                <Link href={`/q&a/${item.qn}`}>{item.question}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-4">No results found for "{query}"</p>
        )} */}
      </div>
    </div>
  );
};

export default SearchDesktop;
