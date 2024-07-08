import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

const DetailsCard = ({ data }: any) => {
  const { qn, question, ans, proof, time, date } = data;
  return (
    <Card className="max-w-full mb-1.5">
      <CardHeader className="bg-[#f8f8f8] bangla">
        <div className=" flex flex-col font-semibold text-lg lg:text-xl text-blue-700">
          {question}
          <div className="flex gap-3 text-black">
            <span className=" text-sm">{date}</span>
            <span className=" text-sm">সময়:{time}</span>
          </div>
        </div>

        <Breadcrumbs>
          <BreadcrumbItem href="/docs/components/button">Button</BreadcrumbItem>
          <BreadcrumbItem href="/docs/components/breadcrumbs">
            Breadcrumbs
          </BreadcrumbItem>
          <BreadcrumbItem href="/docs/components/card">Card</BreadcrumbItem>
          <BreadcrumbItem href="/docs/components/checkbox">
            Checkbox
          </BreadcrumbItem>
          <BreadcrumbItem href="/docs/components/code">Code</BreadcrumbItem>
        </Breadcrumbs>
      </CardHeader>
      <Divider />
      <CardBody className="">
        <p className="bangla">{ans}</p>
      </CardBody>
      <Divider />
      <CardFooter className="bangla text-green-900">
        <p className="text-sm flex gap-1">
          <span className="font-semibold text-black">সূত্র:</span>
          <span>{proof}</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default DetailsCard;
