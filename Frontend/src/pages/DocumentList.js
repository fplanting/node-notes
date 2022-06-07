import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
//import { useHistory } from "react-router-dom";

export default function DocumentList() {
  const [documentList, setDocumentList] = useState([]);
  //let history = useHistory();

  useEffect(() => {
    AuthService.getDocuments().then((response) => {
      let data = response.data.data;
      setDocumentList(data.data);
    });
  }, []);

  return (
    <div className="showDocuments">
      <div className="docContainer">
        {documentList.map((val, key) => {
          return (
            <div
              className="documents"
              key={key}
              onClick={() => {
                // history.push(`/document/${val.id}`);
              }}
            >
              <h3>{val.title}</h3>
              <p>{val.date}</p>
              <button>Click here to see more..</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
