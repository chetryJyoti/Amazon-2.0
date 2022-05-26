import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="amazon_logo"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h4>Email</h4>
          <input type="text"></input>
          <h4>Password</h4>
          <input type="password"></input>
          <button className="login_signinBtn">Continue</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login_createAccount">
        <p>New to Amazon?</p>
        <button className="login_signupBtn">Create Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
