import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import AuthService from "../services/auth.service";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function EditDocument() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const apiKey = process.env.REACT_APP_SECRET_KEY;

  useEffect(() => {
    AuthService.getOneDocument(id).then((response) => {
      let data = response.data.result;
      let date = dayjs(data[0].date);
      console.log(data[0].date);
      console.log(date);

      setDate(date.format("YYYY-MM-DD"));
      setTitle(data[0].title);
      setContent(data[0].content);
      if (editorRef.current) {
        editorRef.current.value = data[0].content;
      }
    });
  }, []);

  const submitDocument = async (e) => {
    e.preventDefault();
    if (editorRef.current) {
      let content = editorRef.current.getContent();
      let response = await AuthService.updateDocument(id, title, date, content);
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Editor
            apiKey={apiKey}
            textareaName="content"
            initialValue={content}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              menubar: false,
            }}
          />
          <button type="submit">Save</button>
          <button
            onClick={() => {
              navigate(`/view/${id}`);
            }}
          >
            Back
          </button>
        </form>
      </div>
    </>
  );
}
