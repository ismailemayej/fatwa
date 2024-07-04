"use client";
import Image from "next/image";
import React from "react";
import slider from "../../public/mainsliderbg.jpg";
import { motion } from "framer-motion";
import TypingHeadings from "./typingheading";
import { Button } from "@nextui-org/react";
import { Search } from "lucide-react";

const MainSlider = () => {
  const headings = [
    "Islamic Question and Answer",
    " Related Web site is Fatwa ",
    " Only for you",
  ];
  return (
    <div className="relative  w-6/6 rounded-lg">
      <Image
        className=" min-w-full lg:h-96 object-fill"
        src={slider}
        alt="Sliderbg"
        height={200}
        width={500}
      />
      <motion.div className="right-8 lg:right-36 absolute gap-1bg-[#1c0a2767] lg:bottom-32 top-12 lg:top-36 shadow-xl p-3 text-md lg:text-3xl rounded-xl left-8 bottom-34 lg:left-36 text-white bangla py-2 px-2">
        <TypingHeadings headings={headings} />
      </motion.div>
      <div className=" flex bg-white absolute bottom-20 lg:left-44 left-20 lg:right-44 right-20">
        <input
          type="email"
          className=" w-11/12 outline-none rounded-lg  px-4 lg:my-0 my-1"
          placeholder="type your question.."
        />
        <Button color="primary" className="text-xl w-1/12 my-2 mr-2 ">
          <span className=" lg:block hidden">Search</span>
          <span className=" lg:hidden block">
            <Search />{" "}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default MainSlider;
