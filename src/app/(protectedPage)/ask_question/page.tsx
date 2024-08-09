import AskQuestion from "@/components/AskQuestion/AskQuestion";
import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import { useAuth } from "@/lib/authContext";
import React from "react";
const AskQuestionPage = async () => {
  const allLength = await Get("questions", "");
  const { user } = useAuth();
  const length = allLength?.data;

  return (
    <div>
      <AskQuestion lengthData={length.length} user={user} />
    </div>
  );
};
export default AskQuestionPage;
