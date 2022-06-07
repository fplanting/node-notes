import React, { useEffect, useState } from "react";
import "../App.css";
import AuthService from "../services/auth.service";

export default function CreateDocument() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); //ev fixa om för date här
  const [content, setContent] = useState("");

  const submitDocument = () => {};

  return (
    <div className="createDocument">
      <div className="uploadDocument">
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Date</label>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label>Content</label>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={submitDocument}>Submit Document</button>
      </div>
    </div>
  );
}
