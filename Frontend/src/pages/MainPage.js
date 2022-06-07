import React, { useRef, useState, useEffect } from "react";

export default function MainPage() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [sucess, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    seterrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setSuccess(true);
  };

  const login = () => {};

  return (
    <>
      {sucess ? (
        <h1>You are logged in</h1>
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
              <button onClick={login}>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
