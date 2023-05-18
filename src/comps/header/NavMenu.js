import React from "react";
// import { useState } from "react";

import { Link } from "react-router-dom";

const NavMenu = ({ countBtnNum, setCountBtnNum }) => {
  return (
    <ul className="menu">
      <li className={` each-li ${countBtnNum === 4 && "selected"} `}>
        <div> پرداخت</div>
        <Link to="/payment" onClick={() => setCountBtnNum(4)}>
          پرداخت
        </Link>
      </li>
      <li className={` each-li ${countBtnNum === 3 && "selected"} `}>
        <div>ارتباط با ما</div>
        <Link to="/contact-us" onClick={() => setCountBtnNum(3)}>
          ارتباط با ما
        </Link>
      </li>
      <li className={` each-li ${countBtnNum === 2 && "selected"} `}>
        <div>محصولات</div>
        <Link to="/products" onClick={() => setCountBtnNum(2)}>
          محصولات
        </Link>
      </li>
      <li className={` each-li ${countBtnNum === 1 && "selected"} `}>
        <div>خانه</div>
        <Link to="/" onClick={() => setCountBtnNum(1)}>
          خانه
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
