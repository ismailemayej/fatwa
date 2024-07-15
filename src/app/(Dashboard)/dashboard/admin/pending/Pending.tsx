import React from "react";

const Pending = async () => {
  const res = await fetch("http://localhost:5000/api/v1/ans?approve=false", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await res.json();

  return (
    <div>
      {result.data.map((item: any) => (
        <p>{item.headline}</p>
      ))}
    </div>
  );
};
export default Pending;
