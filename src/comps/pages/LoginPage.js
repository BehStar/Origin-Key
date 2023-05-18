import React from "react";
import { useState, useRef } from "react";
import "../../css/login.css";
import loginPic from "../../images/login-pic.webp";

const LoginPage = ({ localStorageData }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [passOrText, setPassOrText] = useState("password");
  const userNameLogin = useRef();
  const userPassLogin = useRef();
  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (
      localStorageData.some(
        (peopleReg) =>
          peopleReg.userName === userNameLogin.current.value.trim() &&
          peopleReg.userPass === userPassLogin.current.value.trim()
      )
    ) {
      window.alert("welcome");
      //   setShowAlertSuccessLogin(true);
      //   setTimeout(() => {
      //     setShowAlertSuccessLogin(false);
      //   }, 5000);
    } else {
      window.alert("Username or Password is wrong");
      //   setShowALertFaildLogin(true);
      //   setTimeout(() => {
      //     setShowALertFaildLogin(false);
      //   }, 5000);
    }
  };
  const showPassHandler = () => {
    setIsShowPass(!isShowPass);
    setPassOrText(isShowPass ? "password" : "text");
  };
  return (
    <div className="login-page">
      <div className="container-login">
        <div className="left-login-page">
          <img src={loginPic} />
        </div>
        <form className="login-form" onSubmit={(e) => submitLoginHandler(e)}>
          <h2 className="title-login">login form</h2>
          <div className="row-social">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google"></i>
          </div>
          <label htmlFor="username"> Username: </label>
          <input
            id="username"
            type="text"
            className="input-info"
            required
            name="username"
            ref={userNameLogin}
          />
          <label htmlFor="password">Password: </label>
          <input
            type={passOrText}
            id="password"
            className="input-info"
            required
            name="password"
            ref={userPassLogin}
          />
          <i className="fa fa-eye eye-pass" onClick={() => showPassHandler()} />
          <div
            className="light"
            style={{ display: isShowPass ? "block" : "none" }}
          ></div>
          {/* <div className="check-box">
            <input type="checkbox" name="" id="rem-check" />
            <label htmlFor="rem-check"> remember password</label>
          </div> */}
          <div className="submit-form">
            <button className="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
