"use client";
import React from "react";
import ServerNavbar from "./ServerNavbar";
import { userInformation } from "@/utils/LocalStore";
const navbar = () => {
  const user = userInformation();
  return (
    <div>
      <ServerNavbar user={user} />
    </div>
  );
};

export default navbar;
