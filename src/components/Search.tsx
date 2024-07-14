"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useState } from "react";
import { Search } from "lucide-react";
const SearchFunction: React.FC = () => {
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
      console.error(err);
    }
  };

  return (
    <div>
      <div className="">
        <form
          onSubmit={handleSearch}
          className="flex items-center lg:w-full w-4/5 mx-auto"
        >
          <input
            onChange={handleInputChange}
            value={query}
            type="text"
            className="p-2 border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-96 relative z-10 rounded-xl outline-none bg-white placeholder:text-neutral-700"
            placeholder="type your question.."
          />
          <Button type="submit" color="primary" className="text-xl w-1/12 z-10">
            <span className="lg:block hidden">Search</span>
            <span className="lg:hidden block">
              <Search />
            </span>
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

export default SearchFunction;
