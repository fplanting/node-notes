import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import AuthService from "../services/auth.service";
import { Editor } from "@tinymce/tinymce-react";

export default function CreateDocument() {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState(""); //ev fixa om för date här
  // const [content, setContent] = useState("");

  // const submitDocument = () => {};

  //to see in editing or not
  //   <Editor
  //   disabled={true}
  // />

  //put in the values
  const [initialValue, setInitialValue] = useState(undefined);
  useEffect(() => {
    // a real application might do a fetch request here to get the content
    setTimeout(() => setInitialValue("<p>Once upon a time...</p>"), 500);
  }, []);

  const editorRef = useRef(null);

  // change here to update the document
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey="zbyj60s9f3shdgj3a333sfoxysqlskwmxavv80ucvmdv1nam"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
    // <div className="createDocument">
    //   <div className="uploadDocument">
    //     <label>Title</label>
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setTitle(e.target.value);
    //       }}
    //     />
    //     <label>Date</label>
    //     <input
    //       type="date"
    //       onChange={(e) => {
    //         setDate(e.target.value);
    //       }}
    //     />
    //     <label>Content</label>
    //     <textarea
    //       onChange={(e) => {
    //         setContent(e.target.value);
    //       }}
    //     />
    //     <button onClick={submitDocument}>Submit Document</button>
    //   </div>
    // </div>
  );
}
