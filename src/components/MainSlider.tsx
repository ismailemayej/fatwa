"use client";
import Image from "next/image";
import React, { useState } from "react";
import slider from "../../public/mainsliderbg.jpg";
import { motion } from "framer-motion";
import TypingHeadings from "./typingheading";
import SearchFunction from "./Search";

const MainSlider = ({ data }: any) => {
  const headings = [
    "Islamic Question and Answer",
    " Related Web site is Fatwa ",
    " Only for you",
  ];
  return (
    <>
      <div className="relative  w-6/6">
        <div>
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
          {/* <div className="flex flex-col">
            <div className="bg flex bg-white absolute bottom-20 lg:left-44 left-20 lg:right-44 right-20">
              <input
                onChange={onChange}
                value={value}
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
                  <Search />{" "}
                </span>
              </Button>
            </div>
            <div className="absolute  mt-3  px-3lg:left-44 left-20 lg:right-44 right-20">
              {datas?.map((item: any) => (
                <p className="p-2 " key={item._id}>
                  {value}
                </p>
              ))}
            </div>
          </div> */}
          <SearchFunction />
        </div>
      </div>
    </>
  );
};

export default MainSlider;
