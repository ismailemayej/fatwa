"use client";
import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const PostEditor = ({ data }: any) => {
  const editor = useRef(null);
  const [details, setDetails] = useState("");

  return (
    <JoditEditor
      //   {...details("exampleRequired", { required: true })}
      ref={editor}
      value={details}
      onBlur={(newContent) => setDetails(newContent)}
    />
  );
};

export default PostEditor;
