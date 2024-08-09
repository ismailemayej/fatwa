"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "../DataAction/DataHandle";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
type Inputs = {
  headline: string;
  question: string;
  _id: string;
};
const AskQuestion = ({ lengthData }: any) => {
  const { user } = useAuth();
  const router = useRouter();
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const questionData = {
      qn: lengthData + 1,
      headline: data.headline,
      question: data.question,
      ans: "উত্তর লিখুন",
      time: time,
      date: date,
      userename: user?.name || "Fatwa_question",
      useremail: user?.email || "example@gmail.com",
      useremobile: user?.mobile || "01858226967",
      proof: "উত্তরে সপক্ষে দলিল দিন",
      role: "user",
      approve: false,
      pending: false,
      tags: tags,
      comments: "Comments",
      likes: 0,
    };
    try {
      await Post(questionData, "questions");
      toast.success("Question Submitted");
      reset();
      setTags([]);
      router.push("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex text-xs gap-3">
        <p>Time: {time}</p>
        <p>Date: {date}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size="md"
          type="text"
          label="Headline"
          className="py-2"
          {...register("headline", { required: false })}
        />
        {errors.headline && <span>This field is required</span>}
        <Textarea
          {...register("question", { required: true })}
          label="Question"
          placeholder="Enter your question"
          className="max-w-full min-h-[120px]"
        />
        {errors.question && <span>This field is required</span>}
        <div className="my-2 flex gap-2">
          <Input
            type="text"
            value={tagInput}
            placeholder=" Add tag"
            onChange={(e) => setTagInput(e.target.value)}
            className="mr-2 w-4/12"
          />
          <Button color="danger" type="button" onClick={handleAddTag}>
            Add Tag
          </Button>
        </div>
        <div className="my-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 border-1 px-2 py-1 rounded-full text-sm"
            >
              {tag}
              <button
                type="button"
                className=" hover:text-blue-500 "
                onClick={() => handleRemoveTag(index)}
              >
                &times;
              </button>
            </span>
          ))}
        </div>

        <Button color="primary" type="submit" className="w-full my-2">
          Send
        </Button>
      </form>
    </>
  );
};

export default AskQuestion;
