import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import DashboardForAdmin from "@/components/UserDashboard/DashboardForAdmin";
import React from "react";
const Dashboard = async () => {
  const user = await UserInfo();
  const allData = await Get("ans", "");
  return (
    <div>
      This is user name {user?.name}
      <DashboardForAdmin data={allData} />
    </div>
  );
};
export default Dashboard;
