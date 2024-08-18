import React from "react";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import { FileDigit, Mails, SquareUserRound } from "lucide-react";
const AllUsers = ({ user }: any) => {
  console.log();
  return (
    <Card className="max-w-[250px] relative">
      {user?.role === "admin" && (
        <div className=" absolute top-2 right-3 bg-red-500 rounded-xl px-2 text-white text-sm shadow-orange-100">
          Admin
        </div>
      )}
      <CardBody className="flex-col gap-2  justify-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-28 h-28 text-large mx-auto"
        />
        <div className="mx-auto">
          <h1 className="flex gap-2">
            <SquareUserRound className=" size-5 items-center" />{" "}
            {user?.name || "anynumus"}{" "}
          </h1>
          <h1 className="flex gap-2">
            <Mails className=" size-5 items-center" />
            {user?.email || "example@gmail.com"}
          </h1>
          <h1 className="flex gap-2">
            <FileDigit className=" size-5 items-center" />
            {user?.phone || "01852....21"}
          </h1>
        </div>
      </CardBody>
    </Card>
  );
};

export default AllUsers;
