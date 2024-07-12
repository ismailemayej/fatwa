import AskQuestion from "@/components/AskQuestion/AskQuestion";
import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import React from "react";
const AskQuestionPage = async () => {
  const allLength = await Get("ans", "");
  const mail = await UserInfo();
  const length = allLength?.data;
  return (
    <div>
      <AskQuestion lengthData={length.length} useremail={mail?.email} />
    </div>
  );
};
export default AskQuestionPage;
