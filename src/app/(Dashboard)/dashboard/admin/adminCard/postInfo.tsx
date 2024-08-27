"use client";
import React from "react";
import { Progress } from "antd";
const Scrollbar: React.FC = () => {
  return (
    <Progress
      className="text-white"
      type="dashboard"
      steps={8}
      percent={80}
      trailColor="rgba(06, 06, 06, 0.06)"
      strokeWidth={20}
    />
  );
};
export default Scrollbar;
