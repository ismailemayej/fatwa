import React from "react";
import ServerNavbar from "./ServerNavbar";
const Navbar = ({ user }: any) => {
  console.log(user?.email);
  return (
    <div>
      <ServerNavbar user={user} />
    </div>
  );
};
export default Navbar;
