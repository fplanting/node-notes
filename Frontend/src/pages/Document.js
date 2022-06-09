import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function Document() {
  const navigate = useNavigate();
  let { id } = useParams();

  const [document, setDocument] = useState({});

  useEffect(() => {
    AuthService.getOneDocument(id).then((response) => {
      let data = response.data.result;
      console.log(response);
      setDocument({
        id: data[0].id,
        title: data[0].title,
        date: data[0].date,
        content: data[0].content,
      });
    });
  }, []);

  return (
    <div className="showDocument">
      <div className="documentContainer">
        <div className="document">
          <h1>Title: {document.title}</h1>
          <h3>Date: {document.date}</h3>
          <p>{document.content}</p>
          <button
            onClick={() => {
              navigate(`/edit/${document.id}`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
