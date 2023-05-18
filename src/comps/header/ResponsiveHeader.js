import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../pages/contexts/ShopContextProvider";

import NavMenuResp from "./NavMenuResp";
import logoPic from "../../images/Origin-Key.jpg";

const ResponsiveHeader = () => {
  const [isShowNavMenuResp, setIsShowNavMenuRes] = useState(false);
  const { sumCountToShow } = useContext(ShopContext);
  return (
    <div className="res">
      <ul className="top-res">
        <li className="humberger-box">
          <div
            className="humberger-menu"
            onClick={() => {
              setIsShowNavMenuRes(!isShowNavMenuResp);
            }}
          >
            <div className="icon-burger">
              {isShowNavMenuResp && <NavMenuResp />}
            </div>
          </div>
        </li>
        <li className="logo-box-res">
          <Link to="/">
            <img className="logo-res" src={logoPic} alt="Logo ORIGIN KEY" />
          </Link>
        </li>
        <li className="cart-box-res">
          <Link to="cart">
            <i className="fa fa-cart-plus " />
          </Link>
          <span>{sumCountToShow}</span>
        </li>
        <li className="login-box-res">
          <Link to="login">
            <i className="fa fa-user login"></i>
          </Link>
          <Link to="register">
            <i className="fa fa-registered "></i>
          </Link>
        </li>
      </ul>
      <div className="bottom-res">
        <input
          type="text"
          className="text-res"
          placeholder="عنوان مورد نظر خود را جستجو کنید..."
        />
        <i className="fa fa-search icon-serach-res" />
      </div>
    </div>
  );
};

export default ResponsiveHeader;
