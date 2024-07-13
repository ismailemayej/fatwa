// components/Search.tsx
"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useState } from "react";
import { Search } from "lucide-react";
const SearchFunction: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = async (e: any) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (query.trim() === "") return;
    try {
      const res = await fetch(`${process.env.BASE_URL}/search?query=${query}`, {
        cache: "no-store",
      });

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
            onChange={handleSearch}
            value={query}
            type="text"
            className="p-2 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-96 relative z-10 rounded-xl outline-none  bg-white placeholder:text-neutral-700  "
            placeholder="type your question.."
          />
          <Button color="primary" className="text-xl w-1/12 z-10 ">
            <span className=" lg:block hidden">Search</span>
            <span className=" lg:hidden block">
              <Search />
            </span>
          </Button>
        </form>
        <ul className="absolute  mt-3  px-3lg:left-44 left-20 lg:right-44 right-20">
          {results?.map((item: any) => (
            <Link className="p-1 rounded-xl" href={`q&a/${item.qn}`}>
              <li key={item._id}>{item.question}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search questions..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((item: any) => (
          <Link
            className=" bg-slate-100 p-1 rounded-xl"
            href={`q&a/${item.qn}`}
          >
            <li key={item._id}>{item.question}</li>
          </Link>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchFunction;
