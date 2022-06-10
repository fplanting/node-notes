import React, { useState, useRef } from "react";
import "../App.css";
import AuthService from "../services/auth.service";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";

export default function CreateDocument() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const apiKey = process.env.REACT_APP_SECRET_KEY;

  const submitDocument = async (e) => {
    e.preventDefault();
    if (editorRef.current) {
      let content = editorRef.current.getContent();
      let response = await AuthService.createDocument(title, date, content);
      if (response.data.message === "success") {
        navigate("/documents");
      }
    }
  };

  return (
    <>
      <div className="createDocument">
        <form onSubmit={submitDocument}>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Editor
            apiKey={apiKey}
            textareaName="content"
            initialValue="write your text here..."
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              menubar: false,
            }}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
