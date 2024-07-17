import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { Home } from "lucide-react";

const DetailsCard = ({ data }: any) => {
  const { qn, question, ans, proof, time, date, headline, _id } = data;
  return (
    <Card className="max-w-full mb-1.5 bangla">
      <CardHeader className="flex gap-3 bg-[#f8f8f8] bangla">
        <div className=" flex flex-col w-10/12 text-blue-700">
          <div className="font-bold text-ellipsis">
            <h3 className="font-semibold text-xl">
              {question ? question : headline}
            </h3>

            <div className="flex">
              <span className=" px-2 text-sm bg-green-900 text-white rounded-s-xl">
                {date}
              </span>
              <span className=" text-sm px-2 bg-green-600 text-white rounded-e-xl">
                সময়:{time}
              </span>
              <Link href="/">
                <button className="text-xs mx-1">
                  <Home className="text-sm size-5 bg-blue-500 text-white rounded-full p-[3px]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="">
        <p
          className="bangla text-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: ans }}
        ></p>
      </CardBody>
      <Divider />
      <CardFooter className="bangla  bg-red-100 text-green-900">
        <p className="text-md flex gap-1">
          <span className=" font-bold">সূত্র:</span>
          <span className="">{proof}</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default DetailsCard;
