import React from "react";
import ShopCard from "../component/card";

const HomePage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};
export default HomePage;
