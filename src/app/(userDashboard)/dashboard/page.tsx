import { Get, UserInfo } from "@/components/DataAction/DataHandle";
import Image from "next/image";
import React from "react";
import { DashboardMobileMenu } from "./DashboadMobileMenu";
import UserMenu from "@/components/DashbordMenu/UserMenu";
const UserDashboard = async () => {
  const user = await UserInfo();
  const userEmail = user?.email;
  const userData = await Get("ans", `useremail=${userEmail}`);
  return (
    <div>
      <DashboardMobileMenu>
        <UserMenu user={user} />
      </DashboardMobileMenu>
      {userData.data.length > 0 ? (
        userData?.data.map((item: any) => (
          <div key={item._id}>{item.headline}</div>
        ))
      ) : (
        <div>No Any Post</div>
      )}

      {user?.name && <div>{user.name}</div>}
      {user?.email && <div>{user.email}</div>}
      {user?.image && (
        <Image
          className="rounded-full"
          src={user.image}
          height={50}
          width={50}
          alt="User Image"
        />
      )}
    </div>
  );
};

export default UserDashboard;
