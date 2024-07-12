"use client";
import React from "react";
import { motion } from "framer-motion";
import TypingHeadings from "../typingheading";
import SearchFunction from "../Search";
import { BackgroundSlider } from "./Backgroud";
import Navbar from "../navbar/navbar";

const MainSlider = () => {
  const headings = [
    "Islamic Question and Answer",
    " Related Web site is Fatwa ",
    " Only for you",
  ];
  return (
    <>
      <div className="lg:h-[24rem] h-[16rem] relative flex flex-col items-center justify-center">
        <Navbar />
        <div className="max-w-2xl mx-auto p-4">
          <motion.h1 className="relative z-10 bg-white text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            <TypingHeadings headings={headings} />
          </motion.h1>
          <SearchFunction />
        </div>
        <BackgroundSlider />
      </div>
      ;
    </>
  );
};

export default MainSlider;
