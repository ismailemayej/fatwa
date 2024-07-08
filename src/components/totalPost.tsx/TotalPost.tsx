import { Card } from "@nextui-org/react";
import React from "react";

const TotalPost = () => {
  return (
    <Card className="my-1 bangla text-center">
      <div className="bg-slate-100  px-2 font-semibold py-1">Info</div>
      <div className="grid grid-cols-2 gap-1 w-full text-xl items-center align-middle">
        <div className=" h-24  m-2 p-2 bg-red-100 rounded-xl">
          <span className="">সর্বমোট প্রশ্নঃ</span>
          <br />
          <span className="font-semibold ">২০৬৩ টি</span>
        </div>
        <div className=" h-24  m-2 p-2 bg-red-100 rounded-xl ">
          <span className="">উত্তর সহ</span>
          <br />
          <span className="font-semibold ">২০৫৩ টি</span>
        </div>
      </div>
    </Card>
  );
};

export default TotalPost;
