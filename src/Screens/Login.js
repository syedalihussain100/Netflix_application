import React, { useState } from "react";
import "./Login.css";
import SignUpScreen from "./SignUpScreen";

function Login() {
  const [signin, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_scrennbackground">
        <img
          className="loginscreen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
        />
        <button onClick={() => setSignIn(true)} className="login_button">
          Sign In
        </button>
        <div className="login_gradiant" />
      </div>
      <div className="login__body">
        {signin ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, Tv programmers and more...</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready To Watch Enter Your Email to create or restart your
              membership
            </h3>

            <div className="login_input">
              <input type="email" placeholder="Enter Your Email" />
              <button
                onClick={() => setSignIn(true)}
                className="loginScreen_button"
              >
                Get Started
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
