"use client";
import { Update } from "@/components/DataAction/DataHandle";
import { Input, Textarea, Button } from "@nextui-org/react";
import React, { useState, useRef } from "react";
import { toast } from "sonner";
import JoditEditor from "jodit-react";

const EditQuestion = ({ data }: any) => {
  const { qn, question, ans, proof, headline } = data;
  const [formData, setFormData] = useState({
    headline: headline || "",
    question: question || "",
    ans: ans || "",
    proof: proof || "",
    approve: false,
  });

  const [isPreview, setIsPreview] = useState(false);
  const editor = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditorChange = (newContent: string) => {
    setFormData((prevData) => ({ ...prevData, ans: newContent }));
  };

  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
  };

  const handleApprove = async () => {
    if (
      window.confirm(
        "আপনার লেখাটি এখন সবার সামনে চলে যাবে , তাই লেখা পড়ে নিশ্চিত হয়ে নিন। যদি নিশ্চিত থাকেন তাহলে ok ক্লিক করুন।"
      )
    ) {
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
            <div className="bg-slate-100 lg:p-3 p-2 rounded-xl">
              {formData.headline}
            </div>
          </p>
          <p>
            <strong>Question:</strong>
            <div
              className="bg-slate-100 lg:p-3 p-2 rounded-xl"
              dangerouslySetInnerHTML={{ __html: formData.question }}
            ></div>
          </p>
          <p>
            <strong>Answer:</strong>
            <div
              className="bg-slate-100 lg:p-3 p-2 rounded-xl"
              dangerouslySetInnerHTML={{ __html: formData.ans }}
            ></div>
          </p>
          <p>
            <strong>Proofment:</strong>
            <div
              className="bg-slate-100 lg:p-3 p-2 rounded-xl"
              dangerouslySetInnerHTML={{ __html: formData.proof }}
            ></div>
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
            className="text-2xl"
            type="text"
            label="Question"
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
          <JoditEditor
            ref={editor}
            value={formData.ans}
            onChange={handleEditorChange}
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
