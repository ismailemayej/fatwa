import React from "react";
import AllUsers from "./AllUsers";
import { userInformation } from "@/components/DataAction/DataHandle";

const UserPage = async () => {
  const users = await userInformation();
  return (
    <div>
      <AllUsers user={users} />
    </div>
  );
};

export default UserPage;
