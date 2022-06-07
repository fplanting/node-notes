import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Document() {
  let { id } = useParams();

  const [document, setDocument] = useState({});

  //fix this (${id})
  useEffect(() => {
    AuthService.getOneDocument().then((response) => {
      let data = response.data.data;
      setDocument(
        { title: data.data[0].title },
        { date: data.data[0].date },
        { content: data.data[0].content }
      );
    });
  }, []);

  return (
    <div className="showDocument">
      <div className="documentContainer">
        <div className="document">
          <h1>{document.title}</h1>
          <h3>{document.date}</h3>
          <p>{document.content}</p>
          <button>Make a change</button>
        </div>
      </div>
    </div>
  );
}
