import React, { useRef, useState, useEffect, Redirect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useLogin } from "../services/login.provider";

export default function MainPage() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [sucess, setSuccess] = useState("");
  const navigate = useNavigate();
  const { user, login } = useLogin();

  if (user) {
    return <Navigate to="/documents" />;
  }

  const handleSubmit = async (e) => {
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
        if (data.message === "success") {
          login({ username });
          setUsername("");
          setPassword("");
          setSuccess(true);
          navigate("/documents");
        } else {
          seterrMsg("invalid password");
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
