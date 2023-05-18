import React from "react";
import { useRef, useEffect } from "react";
import "../../css/register.css";
import regPic from "../../images/Reg.png";

const RegisterPage = ({ personReg, setPersonReg }) => {
  const userNameInp = useRef();
  const userEmailInp = useRef();
  const userFisrtPassInp = useRef();
  const userSecondPassInp = useRef();
  useEffect(() => {
    localStorage.setItem("LOCAL_REGISTER", JSON.stringify(personReg));
  }, [personReg]);

  const submitRegisterForm = (e) => {
    e.preventDefault();
    if (userFisrtPassInp.current.value === userSecondPassInp.current.value) {
      setPersonReg([
        ...personReg,
        {
          userID: personReg.length + 1,
          userName: userNameInp.current.value.trim(),
          userEmail: userEmailInp.current.value.trim(),
          userPass: userFisrtPassInp.current.value.trim(),
        },
      ]);
    }
    window.alert("ثبت نام شما با موفقیت به پایان رسید");
    userNameInp.current.value = "";
    userEmailInp.current.value = "";
    userFisrtPassInp.current.value = "";
    userSecondPassInp.current.value = "";
  };
  return (
    <div className="register-page">
      <div className="register">
        <div className="left-register">
          <div className="box-text">
            <h1 className="title-left-register h1 text-warning">information</h1>
            <p className="text-left-register">
              Your user information is stored in local storage and retrieved
              from there when you log in..
            </p>
          </div>
          <div className="box-img">
            <img src={regPic} alt="register pic" />
          </div>
        </div>
        <div className="right-register">
          <div>
            <h1 className="title-right-register">register</h1>
            <form
              className="register-form"
              onSubmit={(e) => submitRegisterForm(e)}
            >
              <label htmlFor="username-reg">Username:</label>
              <input
                type="text"
                className="input-info"
                id="username-reg"
                required
                ref={userNameInp}
              />
              <label htmlFor="email-reg">Email:</label>
              <input
                type="email"
                className="input-info"
                id="email-reg"
                required
                ref={userEmailInp}
              />
              <label htmlFor="password-reg">Password:</label>
              <input
                type="password"
                className="input-info"
                id="password-reg"
                required
                ref={userFisrtPassInp}
              />
              <label htmlFor="confirm-password-reg">Password Confirm:</label>
              <input
                type="password"
                className="input-info"
                id="confirm-password-reg"
                required
                ref={userSecondPassInp}
              />
              {/* <div className="check-box">
                <input type="checkbox" name="" id="agree-term" />
                <label htmlFor="agree-term">
                  I agree to the term & condition
                </label>
              </div> */}
              <div className="submit-form">
                <button className="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
