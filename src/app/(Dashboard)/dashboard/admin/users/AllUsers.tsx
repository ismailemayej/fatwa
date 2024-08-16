import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
const AllUsers = ({ user }: any) => {
  return (
    <Card className="max-w-[340px]">
      <CardBody className="flex-col gap-2">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-20 h-20 text-large"
        />
        <h1>
          <span className=" text-blue-800">Name:</span> {user?.name}{" "}
        </h1>
        <h1>
          <span className=" text-blue-800">Email:</span> {user?.email}{" "}
        </h1>
        <h1>
          <span className=" text-blue-800">Mobile:</span> {user?.phone}
        </h1>
      </CardBody>
    </Card>
  );
};

export default AllUsers;
