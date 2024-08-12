import { Button, Input } from "@nextui-org/react";
import React from "react";
const ProfileEdit = ({ user }: any) => {
  return (
    <div className=" w-3/4 mx-auto gap-2">
      <form>
        <Input
          type="text"
          className="bg-white  rounded-xl py-1"
          label="Full Name"
          defaultValue={user?.name}
        />
        <Input
          type="email"
          className="bg-white  rounded-xl py-1"
          label="Email"
          defaultValue={user?.email}
        />
        <Input
          type="text"
          className="bg-white  rounded-xl py-1"
          label="phone"
          defaultValue={user?.phone}
        />
        <Button type="submit">update</Button>
      </form>
    </div>
  );
};
export default ProfileEdit;
