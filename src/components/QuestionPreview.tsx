import React from "react";

const QuestionPreview = ({ data }: any) => {
  return (
    <div>
      <p>
        <strong>Headline:</strong>
        <div className="bg-slate-100 lg:p-3 p-2 rounded-xl">
          {data.headline}
        </div>
      </p>
      <p>
        <strong>Question:</strong>
        <div
          className="bg-slate-100 lg:p-3 p-2 rounded-xl"
          dangerouslySetInnerHTML={{ __html: data.question }}
        ></div>
      </p>
      <p>
        <strong>Answer:</strong>
        <div
          className="bg-slate-100 lg:p-3 p-2 rounded-xl"
          dangerouslySetInnerHTML={{ __html: data.ans }}
        ></div>
      </p>
      <p>
        <strong>Proofment:</strong>
        <div
          className="bg-slate-100 lg:p-3 p-2 rounded-xl"
          dangerouslySetInnerHTML={{ __html: data.proof }}
        ></div>
      </p>
    </div>
  );
};

export default QuestionPreview;
