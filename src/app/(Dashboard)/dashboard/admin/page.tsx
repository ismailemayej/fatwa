import { Chart } from "@/components/AdminDashboard/Chart";
import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import Image from "next/image";

import React from "react";

const Dashboard = async () => {
  const user = await UserInfo();
  const allData = await Get("ans", "");
  return (
    <div>
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
    </div>
  );
};
export default Dashboard;
