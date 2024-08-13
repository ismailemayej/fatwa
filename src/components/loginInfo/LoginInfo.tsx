import React from "react";

const LoginInfo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 rounded-xl my-2 px-2 border">
        <div className="font-bold">User</div>
        <div className="bg-white px-2">
          <p>Email:ismaile535@gmail.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl px-2 border">
        <span className="font-bold">Admin</span>
        <div className="bg-white px-2">
          <p>Email:portfolio@gmail.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </div>
  );
};
export default LoginInfo;
