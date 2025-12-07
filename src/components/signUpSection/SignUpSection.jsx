import React from "react";
import "./SignUpSection.css";

import signUpImg from "../../assets/SignUp.svg";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

{
  /* <PiEyeLight /> */
}

function SignUpSection() {
  return (
    <div className="container">
      <div className="signUpBox">
        <img className="signupImgLeft" src={signUpImg} alt="" />
        <div className="signUpRight">
          <h2>Sign In</h2>
          <div className="acc">
            <p>
              Don’t have an accout yet? <span>Sign Up</span>
            </p>
          </div>
          <form action="" className="signUpForm">
            <input type="text" placeholder="Your usernam or email address" />
            <div className="iconInput">
              <input type="password" placeholder="Password" />
              <PiEyeSlashLight />
            </div>
            <div className="forgot">
              <div className="remember">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <h3>Forgot Password?</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
