import { Button } from "@material-ui/core";
import React from "react";
import "../styles/login.css";
import { auth, provider } from "./firebase";
function Login({ addUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        addUser(result.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt="whatsapp-logo"
        />
        <div className="login_text">
          <h1>Sign in to whatsapp</h1>
        </div>
        <br></br>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
