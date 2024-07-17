"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { toast } from "sonner";
import { Eye, FilePenLine, Trash2 } from "lucide-react";
import { Delete } from "../DataAction/DataHandle";
import ModalCommon from "../Modal/Modal";
import EditQuestion from "@/app/(Dashboard)/dashboard/admin/answer/EditQuestion";
export default function AllQuestion({ allData }: any) {
  const deleteItem = async (qn: number) => {
    try {
      await Delete("ans", qn);
      toast.success("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the item");
    }
  };
  return (
    <Card className="max-w-[400px] h-72">
      <CardHeader className="">
        {allData.headline ? (
          <p className="overflow-hidden text-ellipsis line-clamp-2">
            {allData?.headline}
          </p>
        ) : (
          <p className="text-red-700">No Headline</p>
        )}
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="overflow-hidden text-ellipsis line-clamp-7">
          {allData?.question}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex gap-2 text-orange-600 size-100">
        <ModalCommon
          button={
            <Eye className="rounded-full p-0.5 border text-2xl bg-slate-100" />
          }
          body={<EditQuestion data={allData} />}
        />
        <FilePenLine className=" rounded-full p-0.5 border text-2xl bg-slate-100" />
        <button onClick={() => deleteItem(allData.qn)}>
          <Trash2 className=" rounded-full p-0.5 border text-2xl bg-slate-100" />
        </button>
      </CardFooter>
    </Card>
  );
}
