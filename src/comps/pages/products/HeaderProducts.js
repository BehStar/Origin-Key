import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/products.css";

const HeaderProducts = () => {
  // const [isShowboxFilter, setIsShowBoxFilter] = useState(false);
  return (
    <div className="filter-row">
      <div className="text-filter">فیلتر:</div>
      <ul
        className="filter-list"
        // style={{ display: isShowboxFilter ? "block" : "none" }}
      >
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active-product" : "")}
          >
            تمام محصولات
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/autodesk-products"
            className={({ isActive }) => (isActive ? "active-product" : "")}
          >
            اتودسک
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/microsoft-products"
            className={({ isActive }) => (isActive ? "active-product" : "")}
          >
            مایکروسافت
          </NavLink>
        </li>
      </ul>
    </div>
    // </div> */}
  );
};

export default HeaderProducts;
