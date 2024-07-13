"use client";
import { toast } from "sonner";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { ThumbsUp } from "lucide-react";
const DetailsCard = ({ data }: any) => {
  const { qn, question, ans, proof, time, date, likes } = data;

  const handleLike = async (qn: number) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/ans/${qn}/like`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.status) {
        // Update the like count in the state or re-fetch the question data
        toast.success(`Likes submited ${likes}`);
      } else {
        console.error("Error liking question:", data.message);
      }
    } catch (error) {
      console.error("Error liking question:", error);
    }
  };

  return (
    <Card className="max-w-full mb-1.5">
      <CardHeader className="bg-[#f8f8f8] bangla">
        <div className=" flex flex-col font-semibold text-lg lg:text-xl text-blue-700">
          {question}
          <div className="flex gap-3 text-black">
            <span className=" text-sm">{date}</span>
            <span className=" text-sm">সময়:{time}</span>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="">
        <p className="bangla">{ans}</p>
      </CardBody>
      <Divider />
      <CardFooter className="bangla text-green-900">
        <p className="text-sm flex gap-1">
          <span className="font-semibold text-black">সূত্র:</span>
          <span>{proof}</span>
        </p>
      </CardFooter>
      <CardFooter className="bangla flex gap text-green-900">
        <button
          onClick={() => handleLike(qn)}
          className=" bg-slate-500 hover:bg-slate-50 hover:border-1 hover:text-black hover:border-black hover:transition-all  py-1 rounded-xl text-sm px-6 flex gap-1 items-center text-white"
        >
          <ThumbsUp /> {likes}
        </button>
      </CardFooter>
      <CardFooter className="bangla flex gap text-green-900">
        {}
        <button
          onClick={() => handleLike(qn)}
          className=" bg-slate-500 hover:bg-slate-50 hover:border-1 hover:text-black hover:border-black hover:transition-all  py-1 rounded-xl text-sm px-6 flex gap-1 items-center text-white"
        ></button>
      </CardFooter>
    </Card>
  );
};

export default DetailsCard;
