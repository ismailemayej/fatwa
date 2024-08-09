import { Get, userInformation } from "@/components/DataAction/DataHandle";

import React from "react";
const UserDashboard = async () => {
  const user = await userInformation();
  const userData = await Get("questions", `useremail=${user?.email}`);
  return (
    <div className="p-3 bg-white rounded-xl m-4">
      {userData.data.length > 0 ? (
        userData?.data.map((item: any) => (
          <div key={item._id}>{item.headline}</div>
        ))
      ) : (
        <div>No Any Post</div>
      )}

      {user?.name && <div>{user.name}</div>}
      {user?.email && <div>{user.email}</div>}
      {/* {user?.image && (
        <Image
          className="rounded-full"
          src={user.image}
          height={50}
          width={50}
          alt="User Image"
        />
      )} */}
    </div>
  );
};

export default UserDashboard;
