import AllQuestion from "@/components/AllQuestion/AllQuestion";
import { Get, userInformation } from "@/components/DataAction/DataHandle";
import React from "react";
const UserDashboard = async () => {
  const user = await userInformation();
  const { data } = await Get("questions", `useremail=${user?.email}`);
  return (
    <div className="p-3 bg-white rounded-xl m-4">
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
      <div className=" bg-white p-3 m-3 rounded-xl shadow-xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        {data.length > 0 ? (
          data.map((item: any) => (
            <div key={item._id} className="">
              <AllQuestion allData={item} />
            </div>
          ))
        ) : (
          <div>No Any Post</div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
