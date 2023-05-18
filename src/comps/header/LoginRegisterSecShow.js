import React from "react";
import { Link } from "react-router-dom";

const LoginRegisterSecShow = ({ countBtnNum, setCountBtnNum }) => {
  return (
    <div>
      <div className="box-register col-2">
        <span className={` ${countBtnNum === 6 && "selected-icon"} `}>
          <Link to="register">
            <i
              className="fa fa-registered register-icon"
              onClick={() => setCountBtnNum(6)}
            />
          </Link>
        </span>
        <span className={` ${countBtnNum === 7 && "selected-icon"} `}>
          <Link to="login">
            <i
              className="fa fa-user login-icon"
              onClick={() => setCountBtnNum(7)}
            />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginRegisterSecShow;
