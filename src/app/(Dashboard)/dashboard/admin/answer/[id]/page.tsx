import React from "react";
import EditQuestion from "../EditQuestion";
import { ScrollShadow } from "@nextui-org/react";
const AnswerPage = async ({ params }: any) => {
  const target = (params.id && "questions") || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <ScrollShadow
      hideScrollBar
      offset={100}
      orientation="horizontal"
      className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
    >
      <EditQuestion data={data} />
    </ScrollShadow>
  );
};
export default AnswerPage;
