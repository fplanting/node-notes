import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

export default function Document() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    AuthService.getOneDocument(id).then((response) => {
      let data = response.data.result;
      setTitle(data[0].title);
      setDate(data[0].date);
      setContent(data[0].content);
    });
  }, []);

  return (
    <div className="showDocument">
      <div className="documentContainer">
        <div className="document">
          <h1>Title: {title}</h1>
          <h3>Date: {date}</h3>
          <div>{parse(content)}</div>
          <button
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
