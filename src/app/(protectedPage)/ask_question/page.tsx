import AskQuestion from "@/components/AskQuestion/AskQuestion";
import { Get } from "@/components/DataAction/DataHandle";

import React from "react";
const AskQuestionPage = async () => {
  const allLength = await Get("questions", "");

  const length = allLength?.data;
  return (
    <div>
      <AskQuestion lengthData={length.length} />
    </div>
  );
};
export default AskQuestionPage;
