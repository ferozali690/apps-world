import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "hruday@gmail.com" && password === "hruday123") {
      setLoggedIn(true);
    }
  }

  if (loggedIn) {
    return <Redirect to="/Dashboard" />;
  }
  return (
    <div class="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="myInput">Username</label>
        <input
          id="myInput"
          type="email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Username"
        />
        <br />
        <label htmlFor="myPass">Password</label>
        <input
          id="myPass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br />
        <Link to="/DashBoard">
          <button onClick={handleSubmit}>Log In</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
