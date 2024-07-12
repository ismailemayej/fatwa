import DetailsCard from "@/components/DetailsCard";
import React from "react";
import RecentPost from "@/components/MostRecent/RecentPost";

const Details = async ({ params }: any) => {
  const target = "ans" || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.ansID}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      <DetailsCard data={data} />
      <RecentPost />
    </div>
  );
};
export default Details;
