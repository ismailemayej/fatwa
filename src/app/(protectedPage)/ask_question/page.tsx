import AskQuestion from "@/components/AskQuestion/AskQuestion";
import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import React from "react";
const AskQuestionPage = async () => {
  const allLength = await Get("questions", "");
  const user = await UserInfo();
  const length = allLength?.data;
  return (
    <div>
      <AskQuestion lengthData={length.length} user={user} />
    </div>
  );
};
export default AskQuestionPage;
