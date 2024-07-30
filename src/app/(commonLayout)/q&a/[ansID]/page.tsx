import DetailsCard from "@/components/DetailsCard";
import React from "react";
import RecentPost from "@/components/MostRecent/RecentPost";
const Details = async ({ params }: any) => {
  const target = (params && "questions") || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.ansID}`);
  const data = await res.json();

  return (
    <div>
      <DetailsCard key={data._id} data={data} />
      <RecentPost />
    </div>
  );
};
export default Details;
