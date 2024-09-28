import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import profile from "@/../../public/profile.jpg";

const CommentProfile = ({ comment, index }: any) => {
  return (
    <div
      key={index}
      className="border-b mb-2 py-2 border bg-slate-50 shadow-xl rounded-xl px-2"
    >
      <div className="flex gap-4">
        <Image
          alt="commenter"
          src={profile}
          height={1}
          width={50}
          className=" rounded-full border "
        />
        <div>
          <p className="font-bold">{comment.name}</p>
          <p className="text-xm">{comment.email}</p>
        </div>
      </div>
      <Divider className="my-1" />
      <p className="px-2 mt-2">{comment.comment}</p>
    </div>
  );
};

export default CommentProfile;
