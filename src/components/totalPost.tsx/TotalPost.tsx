import { Card } from "@nextui-org/react";
import React from "react";
import { Get } from "../DataAction/DataHandle";
import { ConvertE2B } from "../convert/Convert";
const TotalPost = async () => {
  const TotalQuestion = await Get("ans", "");
  const TotalAnswer = await Get("ans", "approve=true");
  // Convert lengths to Bengali numerals
  const totalQuestionLength = ConvertE2B(TotalQuestion?.data.length ?? 0);
  const totalAnswerLength = ConvertE2B(TotalAnswer?.data.length ?? 0);
  return (
    <Card className="my-1 bangla text-center">
      {/* <div className="bg-slate-100  px-2 font-semibold py-1">Info</div> */}
      <div className="grid grid-cols-2 gap-1 w-full text-xl items-center align-middle">
        <div className=" h-20  m-2 p-2 bg-red-100 rounded-xl">
          <span className="">সর্বমোট প্রশ্নঃ</span>
          <br />
          <span className="font-semibold ">{totalQuestionLength} টি</span>
        </div>
        <div className=" h-20  m-2 p-2 bg-red-100 rounded-xl ">
          <span className="">উত্তর সহ</span>
          <br />
          <span className="font-semibold ">{totalAnswerLength} টি</span>
        </div>
      </div>
    </Card>
  );
};
export default TotalPost;
