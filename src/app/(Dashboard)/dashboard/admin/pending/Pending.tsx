import React from "react";
import { Button, Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
const Pending = async () => {
  const res = await fetch(`${process.env.BASE_URL}/ans?approve=false`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await res.json();
  return (
    <div className=" grid grid-cols-1 gap-2 lg:grid-cols-4">
      {result.data.map((item: any) => (
        <Card className="bangla shadow-xl relative h-64">
          <div>
            <div className="bangla flex flex-col">
              <div className=" text-blue-500 font-semibold">
                <h3 className="text-sm text-black"> Headline:</h3>
                <div className=" rounded-xl bg-slate-100 border p-2">
                  {item.headline}
                </div>
              </div>
              <div className=" text-blue-500 font-semibold">
                <h3 className="text-sm text-black"> Question:</h3>
                <div className=" rounded-xl bg-slate-100 border p-2 overflow-hidden text-ellipsis line-clamp-3">
                  {item.question}
                </div>
              </div>
              <div className="flex gap-3 text-black">
                <span className=" text-xs">{item.date}</span>
                <span className=" text-xs">{item.time}</span>
              </div>
            </div>
            <CardHeader className="w-full absolute bottom-0 right-0 left-0 ">
              <Link href="answer">
                <Button className="w-full" color="primary">
                  ঊত্তর করুন
                </Button>
              </Link>
            </CardHeader>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default Pending;
