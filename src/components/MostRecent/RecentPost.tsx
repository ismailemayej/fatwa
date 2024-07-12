import React from "react";
import { Get } from "../DataAction/DataHandle";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
const RecentPost = async () => {
  const RecentData = await Get("recent-posts");
  const data = RecentData?.data?.filter((item: any) => item.approve === true);

  return (
    <Card className="my-1">
      <div className="bg-slate-100 px-2 text-center py-1">Recent Question</div>
      <div className="mt-1 pt-2">
        {data?.map((item: any) => (
          <>
            <CardHeader className="flex gap-3 bg-[#f8f8f8] bangla">
              <div className=" bg-green-200 rounded-xl w-2/12 text-black  flex flex-col p-2 items-center ">
                প্রশ্ন
                <span className="text-sm">#{item?.qn}</span>
              </div>

              <div className=" flex flex-col w-10/12 text-blue-700">
                <div className="font-semibold text-ellipsis">
                  <Link
                    key={item._id}
                    className="text-lg lg:text-lg bangla"
                    href={`/q&a/${item?.qn}`}
                  >
                    <h3 className="overflow-hidden text-ellipsis line-clamp-2">
                      {item?.headline ? item?.headline : item?.question}
                    </h3>
                  </Link>
                  <div className="flex gap-3 text-black">
                    <span className=" text-sm">{item?.date}</span>
                    <span className=" text-sm">সময়:{item?.time}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <Divider />
          </>
        ))}
      </div>
    </Card>
  );
};

export default RecentPost;
