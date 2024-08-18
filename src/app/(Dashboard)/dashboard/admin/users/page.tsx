import { Get } from "@/components/DataAction/DataHandle";
import React from "react";
import AllUsers from "./AllUsers";
type TUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
};
const UserPage = async () => {
  const { users } = await Get("users/all", "");
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 p-2">
      {users?.map((user: TUser) => (
        <AllUsers key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserPage;
