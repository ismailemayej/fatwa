import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import TotalPost from "./totalPost.tsx/TotalPost";
import Advisement from "./advisement/Advisement";
import Tags from "./tags/Tags";
import { Get } from "./DataAction/DataHandle";

const RightSide = async () => {
  const { data } = await Get("questions", "");
  return (
    <div className="bangls font-semibold lg:block hidden border-gray-200 rounded-xl border-1 p-2 h-screen col-span-3 ">
      <Link href="/ask_question">
        <Button color="primary" className="w-full bg-primary">
          প্রশ্ন করুন
        </Button>
      </Link>
      <TotalPost />
      <Advisement />
      <Tags data={data} />
    </div>
  );
};
export default RightSide;
