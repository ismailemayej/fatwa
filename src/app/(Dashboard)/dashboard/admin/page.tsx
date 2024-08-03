import { Chart } from "@/components/AdminDashboard/Chart";
import AllQuestion from "@/components/AllQuestion/AllQuestion";
import { UserInfo } from "@/components/DataAction/DataHandle";
import { ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
const Dashboard = async () => {
  const user = await UserInfo();
  const res = await fetch(`${process.env.BASE_URL}/questions?pending=true`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const allData = await res.json();
  if (allData.data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No Question</p>
      </div>
    );
  }

  return (
    <ScrollShadow
      hideScrollBar
      offset={100}
      orientation="horizontal"
      className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
    >
      {/* 1st lavel */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="bg-white rounded-xl m-3 p-2 shadow-xl lg:col-span-9">
          <Chart />
        </div>
        <div className="lg:col-span-3 bg-white rounded-xl m-3 shadow-xl p-3">
          <div className="flex lg:gap-1 gap-3 lg:flex-col">
            <p className="items-center">
              <Image
                src={user?.image || ""}
                className=" w-32 border-3 border-green-500 h-32 rounded-full "
                alt=""
                height={100}
                width={50}
              />
            </p>
            <h1 className=" mt-2 lg:mt-0 ">
              <p>{user?.name}</p>
              <p>{user?.email}</p>
            </h1>
          </div>
        </div>
      </div>
      <div className=" bg-white p-3 m-3 rounded-xl shadow-xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        {allData?.data?.map((item: any) => (
          <div key={item._id} className="">
            <AllQuestion allData={item} />
          </div>
        ))}
      </div>
    </ScrollShadow>
  );
};
export default Dashboard;
