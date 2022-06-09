import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function DocumentList() {
  const [documentList, setDocumentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.getDocuments().then((response) => {
      console.log(response);
      let data = response.data;
      setDocumentList(data);
    });
  }, []);

  return (
    <div className="showDocuments">
      <div className="docContainer">
        <h1>Documents</h1>
        {documentList.map((val, key) => {
          return (
            <div
              className="documents"
              key={key}
              onClick={() => {
                navigate(`/view/${val.id}`);
              }}
            >
              <h3>Title: {val.title}</h3>
              <p>Date: {val.date}</p>
              <button className="docBtn">See more...</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
