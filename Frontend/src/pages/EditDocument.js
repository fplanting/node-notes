import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import AuthService from "../services/auth.service";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";

export default function EditDocument() {
  const [title, setTitle] = useState("");
  const [submit, setSubmit] = useState("");
  const [date, setDate] = useState(""); //ev fixa om för date här
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const apiKey = "zbyj60s9f3shdgj3a333sfoxysqlskwmxavv80ucvmdv1nam";

  const submitDocument = (e) => {
    e.preventDefault();
    AuthService.createDocument(title, date, content).then(() => (response) => {
      navigate("/documents");
    });
  };

  //to see in editing or not
  //   <Editor
  //   disabled={true}
  // />

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
            onChange={(newText) => {
              setContent(newText);
            }}
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
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
