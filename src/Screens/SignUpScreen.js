import React, { useRef, useState } from "react";
import "./SignUp.css";
import { auth } from "../firebase";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <form>
        <h1>SignIn</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          ref={passwordRef}
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Signup_button" type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="signup_span"> New to Netflix? </span>
          <span className="signup_link" onClick={register}>
            Sign up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
