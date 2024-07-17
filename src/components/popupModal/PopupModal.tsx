"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@nextui-org/react";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Delete } from "../DataAction/DataHandle";
import { useState } from "react";

export function PopupModal({ item }: any) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const deleteItem = async (qn: number) => {
    try {
      await Delete("ans", qn);
      toast.success("Item deleted successfully");
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the item");
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button className="bg-blue-600 py-1 rounded-xl w-full text-white">
          View Details
        </button>
      </DialogTrigger>
      <DialogContent className="">
        <div className=" bg-white bangla m-[-20px] rounded-xl">
          <Card className="bangla shadow-xl relative p-2">
            <div className="flex gap-2">
              <CircleCheck className="bg-blue-500 text-white rounded-full" />
              <p> Status : Pending </p>
            </div>
            <div>
              <div className="bangla flex flex-col">
                <div className=" text-blue-500 font-semibold">
                  <h3 className="text-sm text-black"> Headline:</h3>
                  <div className=" rounded-xl bg-slate-100 border p-2">
                    {item.headline}
                  </div>
                </div>
                <div className=" font-semibold">
                  <h3 className="text-sm text-black"> Question:</h3>
                  <div className=" rounded-xl bg-slate-100 border p-2">
                    {item.question}
                  </div>
                </div>
                <div className="flex gap-3 text-black">
                  <span className=" text-xs">{item.date}</span>
                  <span className=" text-xs">{item.time}</span>
                </div>
              </div>
            </div>
            <div className="flex w-full mx-auto">
              <Link href={`/dashboard/admin/answer/${item.qn}`}>
                <button className="bg-blue-600 py-1 rounded-xl w-80 text-white">
                  ঊত্তর প্রদান
                </button>
              </Link>
              <button
                className="bg-blue-600 py-1 rounded-xl w-32 text-white"
                onClick={() => deleteItem(item.qn)}
              >
                Delete
              </button>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
