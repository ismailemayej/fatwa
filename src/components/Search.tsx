// components/Search.tsx

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
      <div className="flex flex-col">
        <form
          onSubmit={handleSearch}
          className="bg flex bg-white absolute bottom-20 lg:left-44 left-20 lg:right-44 right-20"
        >
          <input
            onChange={handleSearch}
            value={query}
            type="text"
            className=" w-11/12 outline-none px-4 lg:my-0 my-1"
            placeholder="type your question.."
          />
          <Button
            color="primary"
            className="text-xl w-1/12 my-2 mr-2 bg-[#0B01F9] text-white "
          >
            <span className=" lg:block hidden">Search</span>
            <span className=" lg:hidden block">
              <Search />
            </span>
          </Button>{" "}
        </form>
        <div className="absolute  mt-3  px-3lg:left-44 left-20 lg:right-44 right-20">
          {results?.map((item: any) => (
            <Link
              className=" bg-slate-100 p-1 rounded-xl"
              href={`q&a/${item.qn}`}
            >
              <li key={item._id}>{item.question}</li>
            </Link>
          ))}
        </div>
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
