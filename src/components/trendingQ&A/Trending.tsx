import React from "react";
import { Get } from "../DataAction/DataHandle";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

const Trending = async () => {
  const Trending = await Get("trending");

  return (
    <Card className="my-1">
      <div className="bg-slate-100 px-2 text-center py-1">Trending Q&A</div>
      <div className="mt-1 pt-2">
        {Trending?.data?.map((item: any) => (
          <Link href={`/q&a/${item.qn}`}>
            <div
              className="bangla px-2 py-1 hover:text-blue-600 hover:font-semibold"
              key={item._id}
            >
              {item.question}
            </div>
            <Divider />
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default Trending;