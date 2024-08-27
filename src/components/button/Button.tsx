import { Button } from "@nextui-org/button";
import React from "react";

const SimpleButton = ({ children, type }: any) => {
  return (
    <Button
      type={type}
      className="w-full text-white bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
    >
      {children}
    </Button>
  );
};

export default SimpleButton;
