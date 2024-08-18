import React from "react";
import { Input } from "../ui/input";

const SearchMobile = () => {
  return (
    <div>
      <Input
        // onChange={handleInputChange}
        type="text"
        placeholder="Search your Question..."
        // value={query}
        className="rounded-xl bg-white lg:w-96 w-[60%]"
      />
    </div>
  );
};

export default SearchMobile;
