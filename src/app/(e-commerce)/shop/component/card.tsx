import React from "react";
import {
  Card,
  CardFooter,
  CardBody,
  Image,
  CardHeader,
} from "@nextui-org/react";

export default function ShopCard() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <CardHeader>
          <div className="font-bold bangla mx-2 text-xl">
            বুখারী শরীফ খন্ড-১
          </div>
        </CardHeader>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
          height={250}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-2 flex gap-2">
        <small className="text-default-500 text-xl bangla p-1 rounded-full border bangla font-bold">
          ৩০০৳
        </small>
        <button className="bg-red-500 text-white px-3">Add to card</button>
      </CardFooter>
    </Card>
  );
}
