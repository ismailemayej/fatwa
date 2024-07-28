import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { ConvertE2B } from "./convert/Convert";

export default function PostCard({ data }: any) {
  const { qn, question, ans, proof, time, date, headline, _id } = data;
  const stripHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const cleanDetails = stripHtmlTags(data.ans);
  return (
    <Card className="max-w-full mb-1.5 bangla">
      <CardHeader className="flex gap-3 bg-[#f8f8f8] bangla">
        <div className=" bg-green-200 rounded-xl w-2/12 text-black  flex flex-col p-2 items-center ">
          প্রশ্ন
          <span className="text-sm"># {ConvertE2B(qn)}</span>
        </div>
        <div className=" flex flex-col w-10/12 text-blue-700">
          <div className="font-semibold text-ellipsis">
            <Link
              key={_id}
              className="text-lg font-bold lg:text-xl bangla"
              href={`/q&a/${qn}`}
            >
              <h3 className="font-semibold overflow-hidden text-ellipsis line-clamp-2">
                {headline ? headline : question}
              </h3>
            </Link>
            <div className="flex">
              <span className=" px-2 text-xs bg-green-900 text-white rounded-s-xl">
                {ConvertE2B(date)}
              </span>
              <span className=" text-xs px-2 bg-green-300 text-black rounded-e-xl">
                সময়:{ConvertE2B(time)}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="">
        <p className="bangla overflow-hidden text-ellipsis line-clamp-4">
          {cleanDetails}
        </p>
        <span className="flex w-full justify-between mt-[-20px]">
          <p className="text-xs text-white">.</p>
          <Link
            className="bg-blue-500 border-l-8 border-white bangla text-xs px-2 rounded-xl py-0.5  text-white"
            href={`/q&a/${qn}`}
          >
            বিস্তারিত
          </Link>
        </span>
      </CardBody>
      <Divider />
      <CardFooter className="bangla text-green-900">
        <p className="text-sm flex gap-1">
          <span className="font-semibold text-black">সূত্র:</span>
          <span className="overflow-hidden text-ellipsis line-clamp-1">
            {proof}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
