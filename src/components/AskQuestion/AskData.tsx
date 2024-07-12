// "use client";
// import { Button, Input, Textarea } from "@nextui-org/react";
// import React from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// type Inputs = {
//   headline: string;
//   question: string;
//   _id: string;
// };
// const AskData = ({ data }: any) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     console.log(data);
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input
//         size="md"
//         type="text"
//         label="Headline"
//         className="py-2"
//         {...register("headline", { required: true })}
//       />
//       {errors.headline && <span>This field is required</span>}
//       <Textarea
//         {...register("question", { required: true })}
//         label="question"
//         placeholder="Enter your Question"
//         className="max-w-full min-h-[120px]"
//       />
//       {errors.question && <span>This field is required</span>}
//       {/* <JoditEditor
//         ref={editor}
//         value={details}
//         onBlur={(newContent) => setDetails(newContent)}
//         onChange={(newContent) => {}}
//       /> */}
//       <Button color="primary" type="submit" className="w-full my-2">
//         Send
//       </Button>
//     </form>
//   );
// };

// export default AskData;
