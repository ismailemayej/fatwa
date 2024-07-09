import React from "react";
import { Input } from "@nextui-org/react";
import PostEditor from "./Editor";
import { useForm } from "react-hook-form";

const AskQuestion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold">Ask Question</h2>
      <Input
        {...register("headline", { required: true })}
        type="text"
        className="mx-auto my-3 outline-none"
        variant="bordered"
        label="headline"
      />
      {errors.headline && <p className="text-red-500">Headline is required.</p>}
      <PostEditor />
      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
  );
};

export default AskQuestion;
