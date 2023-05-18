import React from "react";
import { Link } from "react-router-dom";

const NavMenuResp = () => {
  return (
    <ul className="menu-res">
      <li className="each-li ">
        <Link to="/">خانه</Link>
      </li>
      <li className="each-li">
        <Link to="/products">محصولات</Link>
      </li>
      <li className="each-li">
        <Link to="/contact-us">ارتباط با ما</Link>
      </li>
      <li className="each-li ">
        <Link to="/payment">پرداخت</Link>
      </li>
    </ul>
  );
};

export default NavMenuResp;
