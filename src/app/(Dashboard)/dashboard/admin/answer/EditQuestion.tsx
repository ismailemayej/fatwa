"use client";
import { Update } from "@/components/DataAction/DataHandle";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { toast } from "sonner";

const EditQuestion = ({ data }: any) => {
  const router = useRouter;
  const { qn, question, ans, proof, headline } = data;
  const [formData, setFormData] = useState({
    headline: headline || "",
    question: question || "",
    ans: ans || "",
    proof: proof || "",
    approve: false,
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
  };

  const handleApprove = async () => {
    if (window.confirm("Are you sure you want to approve this question?")) {
      const updatedData = { ...formData, approve: true };
      try {
        await Update(updatedData, "ans", qn);

        toast.success("Question Approved");
      } catch (error) {
        toast.error("Error approving question");
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 bangla text-xl bg-white m-3 p-3 rounded-xl lg:w-4/5 w-4/5 mx-auto">
      {isPreview ? (
        <div>
          <p>
            <strong>Headline:</strong>
            <div className=" bg-slate-100 lg:p-3 p-2 rounded-xl">
              {formData.headline}
            </div>
          </p>
          <p>
            <strong>Question:</strong>{" "}
            <div className=" bg-slate-100 lg:p-3 p-2 rounded-xl">
              {formData.question}
            </div>
          </p>
          <p>
            <strong>Answer:</strong>
            <div className=" bg-slate-100 lg:p-3 p-2 rounded-xl">
              {formData.ans}
            </div>
          </p>
          <p>
            <strong>Proofment:</strong>
            <div className=" bg-slate-100 lg:p-3 p-2 rounded-xl">
              {formData.proof}
            </div>
          </p>
        </div>
      ) : (
        <div className="text-2xl">
          <Input
            className="text-2xl"
            type="text"
            label="Headline"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
          />
          <Textarea
            type="text"
            label="Question"
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
          <Textarea
            type="text"
            label="Answer"
            name="ans"
            value={formData.ans}
            onChange={handleChange}
          />
          <Textarea
            type="text"
            label="Proofment"
            name="proof"
            value={formData.proof}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="flex gap-2">
        <Button color="primary" onClick={handleTogglePreview}>
          {isPreview ? "Back" : "Next"}
        </Button>
        {isPreview && (
          <Button color="success" onClick={handleApprove}>
            Approve
          </Button>
        )}
      </div>
    </div>
  );
};

export default EditQuestion;
