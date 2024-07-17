import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { CircleCheck } from "lucide-react";
import { PopupModal } from "@/components/popupModal/PopupModal";

const Pending = async () => {
  const res = await fetch(`${process.env.BASE_URL}/ans?approve=false`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await res.json();

  if (result.data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No Pending Question</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
      {result.data.map((item: any) => (
        <Card key={item.id} className="bangla shadow-xl relative h-64 p-2">
          <div className="flex gap-2">
            <CircleCheck className="bg-blue-500 text-white rounded-full" />
            <p>Status: Pending</p>
          </div>
          <div>
            <div className="bangla flex flex-col">
              <div className="text-blue-500 font-semibold">
                <h3 className="text-sm text-black">Question:</h3>
                <div className="rounded-xl bg-slate-100 border p-2 overflow-hidden text-ellipsis line-clamp-4">
                  {item.question}
                </div>
              </div>
              <div className="flex gap-3 text-black">
                <span className="text-xs">{item.date}</span>
                <span className="text-xs">{item.time}</span>
              </div>
            </div>
            <CardHeader className="w-full absolute bottom-0 right-0 left-0">
              <PopupModal item={item} />
            </CardHeader>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Pending;
