import React from "react";
import Trending from "./trendingQ&A/Trending";
import { ScrollShadow } from "@nextui-org/react";

const LeftSide = () => {
  return (
    <div className="lg:block hidden border-gray-200 rounded-xl border-1 p-2 h-screen col-span-3 ">
      <ScrollShadow
        hideScrollBar
        offset={100}
        orientation="horizontal"
        className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
      >
        <Trending />
      </ScrollShadow>
    </div>
  );
};

export default LeftSide;
