import React from "react";
import EditQuestion from "../EditQuestion";
const AnswerPage = async ({ params }: any) => {
  const target = "ans" || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <EditQuestion data={data} />
    </div>
  );
};
export default AnswerPage;
