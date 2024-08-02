"use client";
import { Update } from "@/components/DataAction/DataHandle";
import { Input, Textarea, Button } from "@nextui-org/react";
import React, { useState, useRef } from "react";
import { toast } from "sonner";
import JoditEditor from "jodit-react";
import QuestionPreview from "@/components/QuestionPreview";
import { useRouter } from "next/navigation";
const EditQuestion = ({ data }: any) => {
  const router = useRouter();
  const { qn, question, ans, proof, headline } = data;
  const [formData, setFormData] = useState({
    headline: headline || "",
    question: question || "",
    ans: ans || "",
    proof: proof || "",
    pending: false,
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
    const updatedData = { ...formData, pending: true, approve: true };
    try {
      await Update(updatedData, "questions", qn);
      toast.success("Question Approved");
      router.push("/dashboard/admin");
      router.refresh();
    } catch (error) {
      toast.error("Error approving question");
    }
  };

  return (
    <div className="flex flex-col gap-2 bangla text-xl bg-white m-3 p-3 rounded-xl lg:w-4/5 w-4/5 mx-auto">
      {isPreview ? (
        <QuestionPreview data={formData} />
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
