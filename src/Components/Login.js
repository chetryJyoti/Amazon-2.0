import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
function Login() {
  // helps in changing the url when the user login in
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login to a existing user account
  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // register a new user
  const register = (e) => {
    e.preventDefault();

    // creates a new user account in firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        // if the auth object is not empty then go to home page
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          ></input>

          <h4>Password</h4>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>

          <button onClick={singIn} type="submit" className="login_signinBtn">
            Continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login_createAccount">
        <p>New to Amazon?</p>
        <button onClick={register} className="login_signupBtn">
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
