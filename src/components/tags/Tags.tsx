"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Tags = ({ data }: any) => {
  const router = useRouter();
  const handleTagClick = (tag: string) => {
    // Navigate to the URL corresponding to the clicked tag
    router.push(`/tags/${tag}`);
  };
  const tagsData = data.flatMap((item: any) => item.tags || []);
  return (
    <div className="bangla flex flex-wrap my-6 gap-2 p-3">
      {tagsData.map((tag: any, index: number) => (
        <span
          key={index}
          onClick={() => handleTagClick(tag)}
          className="cursor-pointer border border-gray-300 py-1 px-3 hover:bg-orange-200 rounded-full text-center"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
