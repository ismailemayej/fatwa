import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import DashboardForAdmin from "@/components/UserDashboard/DashboardForAdmin";
import React from "react";
import { DashboardMobileMenu } from "../DashboadMobileMenu";
import AdminMenu from "@/components/DashbordMenu/AdminMenu";
const Dashboard = async () => {
  const user = await UserInfo();
  const allData = await Get("ans", "");
  return (
    <div>
      This is user name {user?.name}
      <DashboardMobileMenu>
        <AdminMenu />
      </DashboardMobileMenu>
      <DashboardForAdmin data={allData} />
    </div>
  );
};
export default Dashboard;
