import { Get, UserInfo } from "@/components/DataAction/DataHandle";

import React from "react";

const Dashboard = async () => {
  const user = await UserInfo();
  const allData = await Get("ans", "");
  return <div>This is user name {user?.name}</div>;
};
export default Dashboard;
