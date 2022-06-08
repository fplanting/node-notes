import React, { useRef, useState, useEffect, Redirect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage(props) {
  console.log(props);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [sucess, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    seterrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    console.log("hejhej");
    e.preventDefault();
    fetch("http://localhost:3000/documents/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "sucess") {
          setUsername("");
          setPassword("");
          setSuccess(true);
          navigate("/documents");
          console.log("true");
          props.setLogin(true);
        } else {
          seterrMsg("invalid password");
          console.log("false");
        }
      });
  };

  return (
    <>
      {sucess ? (
        <p>hej</p>
      ) : (
        <div className="createDocument">
          <div className="uploadDocument">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            ></p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <label>Password</label>
              <input
                type="password"
                id="password"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
