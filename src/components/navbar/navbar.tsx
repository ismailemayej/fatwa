import React from "react";
import ServerNavbar from "./ServerNavbar";

import { useAuth } from "@/lib/authContext";
const Navbar = () => {
  const { user } = useAuth();
  return (
    <div>
      <ServerNavbar user={user} />
    </div>
  );
};
export default Navbar;
