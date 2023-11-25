import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        navigate("/"); // Use navigate to navigate to the desired route
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        navigate("/"); // Use navigate to navigate to the desired route
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="Login">
      <Link to="/" className="click_Login_logo">
        <img
          className="Login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Login_logo"
        />
      </Link>
      <div className="Login_container">
        <h1 className="sign_in">Sign In</h1>
        <form className="Login_form">
          <h5 className="e_mail">E-mail</h5>
          <input
            className="e_mail_filed"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="password">Password</h5>
          <input
            className="password_filed"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button
            className="Login_signIN_button"
            type="submit"
            onClick={signIn}>
            Sign In
          </button>

          <p className="Login_text">
            By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.
          </p>

          <button className="Login_register_button" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
