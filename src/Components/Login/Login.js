import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "./Login.css";

const Login = () => {
  const { setLogin } = useContext(LoginContext);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const loginValidator = () => {
    userCredentials.username === "admin" &&
      userCredentials.password === "admin" &&
      setLogin(true);
  };
  console.log(userCredentials);
  return (
    <div className="login-container">
      <form onSubmit={loginValidator} className="form-container">
        <label className="input-text">Username:</label>
        <input
          onChange={(e) => onChangeHandler(e)}
          name="username"
          className="input-text"
          type="text"
          required
        />
        <label className="input-text">Password:</label>
        <input
          onChange={(e) => onChangeHandler(e)}
          name="password"
          className="input-text"
          type="text"
          required
        />
        <input className="button-submit" type="submit" />
      </form>
    </div>
  );
};

export default Login;
