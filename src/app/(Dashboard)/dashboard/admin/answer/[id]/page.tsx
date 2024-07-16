import React from "react";
const AnswerPage = async ({ params }: any) => {
  const target = "ans" || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  const { qn, question, ans, proof, time, date, headline, _id } = data;
  return (
    <div>
      <>
        <p>{qn}</p>
        <p>{question}</p>
        <p>{proof}</p>
      </>
    </div>
  );
};
export default AnswerPage;
