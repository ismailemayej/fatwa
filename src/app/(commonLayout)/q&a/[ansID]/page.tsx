import DetailsCard from "@/components/DetailsCard";
import React from "react";
import { useRouter } from "next/router";

const Details = async ({ params }: any) => {
  const target = "ans" || "trending";
  const res = await fetch(`${process.env.BASE_URL}/${target}/${params.ansID}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return <DetailsCard data={data} />;
};
export default Details;