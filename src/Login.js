import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.worldvectorlogo.com/logos/messages-ios.svg"
          alt=""
        />
        <h1>iMessage</h1>
      </div>
      <Button className="login__button" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
