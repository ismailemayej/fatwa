import React from "react";

import { Card, Divider } from "@nextui-org/react";
import Link from "next/link";
import { Get } from "../DataAction/DataHandle";

const Trending = async () => {
  const Trending = await Get("questions", "trending");
  const data = Trending?.data?.filter((item: any) => item.approve === true);
  return (
    <Card className="my-1">
      <div className="bg-slate-100 px-2 text-center py-1">Trending Q&A</div>
      <div className="mt-1 pt-2">
        {data?.map((item: any) => (
          <Link key={item._id} href={`/q&a/${item.qn}`}>
            <div
              className="bangla px-2 py-1 hover:text-blue-600 hover:font-semibold"
              key={item._id}
            >
              {item?.headline ? item?.headline : item?.question}
            </div>
            <Divider />
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default Trending;
