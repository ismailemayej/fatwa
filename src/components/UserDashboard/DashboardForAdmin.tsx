import React from "react";
const DashboardForAdmin = ({ data }: any) => {
  return (
    <div>
      {data.data.map((item: any) => (
        <h2 key={item._id}>{item.headline}</h2>
      ))}
    </div>
  );
};

export default DashboardForAdmin;
