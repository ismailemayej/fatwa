"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Switch,
} from "@nextui-org/react";
import { toast } from "sonner";
import { Eye, FilePenLine, Trash2 } from "lucide-react";
import { Delete, Get, Update } from "../DataAction/DataHandle";
import ModalCommon from "../Modal/Modal";
import Link from "next/link";
import QuestionPreview from "../QuestionPreview";

export default function AllQuestion({ allData }: any) {
  const [approve, setApprove] = useState(allData.approve);
  useEffect(() => {
    Get("ans", "approve=true");
  }, [allData]);
  const deleteItem = async (qn: number) => {
    try {
      await Delete("ans", qn);
      toast.success("Item deleted successfully");
    } catch (error) {
      toast.error("An error occurred while deleting the item");
    }
  };

  const handleApproveToggle = async (qn: any) => {
    try {
      const updatedData = { ...allData, approve: !approve };
      await Update(updatedData, "ans", qn);
      setApprove(!approve);
      toast.success("status Request Change successfully");
    } catch (error) {
      toast.error("An error occurred while updating the approval status");
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
        {/* for preview */}
        <ModalCommon
          button={
            <Eye className=" hover:transition-all hover:p-0.5 hover:border hover:border-green-600 rounded-full  border text-2xl bg-slate-100" />
          }
          body={<QuestionPreview data={allData} />}
        />
        {/* for Edit */}
        <Link href={`/dashboard/admin/answer/${allData.qn}`}>
          <FilePenLine className=" hover:transition-all hover:p-0.5 hover:border hover:border-green-600 rounded-full  border text-2xl bg-slate-100" />
        </Link>
        {/* for delete */}
        <button onClick={() => deleteItem(allData.qn)}>
          <Trash2 className=" hover:transition-all hover:p-0.5 hover:border hover:border-green-600 rounded-full  border text-2xl bg-slate-100" />
        </button>
        {/* for approve false or true */}
        <button
          className=" bg-neutral-400 border rounded-xl px-2 text-white hover:bg-slate-200 hover:text-black"
          onClick={() => handleApproveToggle(allData.qn)}
        >
          {(allData.approve === true && "Showing") ||
            (allData.approve === false && "pending")}
        </button>
      </CardFooter>
    </Card>
  );
}