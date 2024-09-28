import DetailsCard from "@/components/DetailsCard";
import React from "react";
import RecentPost from "@/components/MostRecent/RecentPost";
import Reviews from "@/components/Review/Reviews";
import { userInformation } from "@/components/DataAction/DataHandle";
const Details = async ({ params }: any) => {
  const user = await userInformation();
  const target = (params && "questions") || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.ansID}`);
  const data = await res.json();

  return (
    <div>
      <DetailsCard key={data._id} data={data} />

      <Reviews post={data} user={user} />

      <RecentPost />
    </div>
  );
};
export default Details;
