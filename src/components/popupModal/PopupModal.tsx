import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@nextui-org/react";
import { Check, CircleCheck } from "lucide-react";
import Link from "next/link";

export function PopupModal({ item }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-600 py-1 rounded-xl w-full text-white">
          View Details
        </button>
      </DialogTrigger>
      <DialogContent className="">
        <div className=" bg-white m-[-20px] rounded-xl">
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
            <Link href={`/dashboard/admin/answer/${item.qn}`}>
              <button className="bg-blue-600 py-1 rounded-xl w-full text-white">
                ঊত্তর প্রদান
              </button>
            </Link>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
