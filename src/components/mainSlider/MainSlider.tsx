"use client";
import React from "react";
import { motion } from "framer-motion";
import TypingHeadings from "../typingheading";

import { BackgroundSlider } from "./Backgroud";

import { useAuth } from "@/lib/authContext";
import SearchDesktop from "../searchBox/SearchDesktop";
const MainSlider = () => {
  const { user } = useAuth();
  const headings = [
    "Islamic Question and Answer",
    " Related Web site is Fatwa ",
    " Only for you",
  ];
  return (
    <>
      <div className="lg:block hidden">
        <div className="lg:h-[18rem] lg:mb-14 lg:relative flex items-center justify-center">
          <div className="max-w-2xl mx-auto p-4">
            <motion.h1 className="lg:relative z-10 bg-white text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              <TypingHeadings headings={headings} />
            </motion.h1>
            <SearchDesktop />
          </div>
          <BackgroundSlider />
        </div>
      </div>
    </>
  );
};

export default MainSlider;
