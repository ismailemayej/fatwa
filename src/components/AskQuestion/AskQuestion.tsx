"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  headline: string;
  question: string;
  _id: string;
};
const AskQuestion = ({ lengthData, useremail }: any) => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const questionData = {
      qn: lengthData + 1,
      headline: data.headline,
      question: data.question,
      ans: "give Ans",
      time: time,
      date: date,
      useremail: useremail,
      proof: "give Proof",
      approve: false,
      tags: [],
      comments: "Comments",
      likes: 0,
    };
    console.log(questionData);
  };
  return (
    <>
      <div className="flex text-xs gap-3">
        <p>Time:{time}</p>
        <p>Date:{date}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size="md"
          type="text"
          label="Headline"
          className="py-2"
          {...register("headline", { required: true })}
        />
        {errors.headline && <span>This field is required</span>}
        <Textarea
          {...register("question", { required: true })}
          label="question"
          placeholder="Enter your Question"
          className="max-w-full min-h-[120px]"
        />
        {errors.question && <span>This field is required</span>}
        <Button color="primary" type="submit" className="w-full my-2">
          Send
        </Button>
      </form>
    </>
  );
};

export default AskQuestion;
