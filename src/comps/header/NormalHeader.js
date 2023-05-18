import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../pages/contexts/ShopContextProvider";
import LoginRegisterSecShow from "./LoginRegisterSecShow";
import Search from "./Search";
import NavMenu from "./NavMenu";
import logoPic from "../../images/Origin-Key.jpg";

const NormalHeader = ({ countBtnNum, setCountBtnNum }) => {
  const { sumCountToShow } = useContext(ShopContext);

  return (
    <div className="normal-header ">
      <div className={`left-row ${countBtnNum === 1 && "selected"}`}>
        <Link to="/" onClick={() => setCountBtnNum(1)}>
          <img src={logoPic} alt="Logo ORIGIN KEY" />
        </Link>
      </div>

      <div className="right-row">
        <div className="top-right-row ">
          <div className="login-register-sec-box">
            <LoginRegisterSecShow
              countBtnNum={countBtnNum}
              setCountBtnNum={setCountBtnNum}
            />
          </div>
          <div className="search-box">
            <Search />
          </div>
        </div>
        <div className="bottom-right-row ">
          <div
            className={`cartbuy-box ${countBtnNum === 5 && "selected-icon"}`}
          >
            <Link to="cart">
              <i
                className={`fa fa-cart-plus`}
                onClick={() => setCountBtnNum(5)}
              />
            </Link>
            <span className="count-buy">{sumCountToShow}</span>
          </div>
          <div className="col-8 h-100 ">
            <NavMenu
              countBtnNum={countBtnNum}
              setCountBtnNum={setCountBtnNum}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalHeader;
