import React from "react";

const Login = (props) => (
  <nav className="login">
    <h2>In Login</h2>
    <p>Sign in</p>
    <button className="github" onClick={() => props.authenticate("github")}>
      Log In With Github
    </button>
    <button className="github" onClick={() => props.authenticate("twitter")}>
      Log In With Twitter
    </button>
    <button className="github" onClick={() => props.authenticate("facebook")}>
      Log In With Facebook
    </button>
  </nav>
);

export default Login;
