import React from "react";
import { useContext } from "react";
import { ShopContext } from "./contexts/ShopContextProvider";
import data from "../data";
import "../../css/cart.css";
import EachItemCart from "./cart/EachItemCart";

const CartPage = () => {
  const { cartItemsSelected, sumToPay } = useContext(ShopContext);

  return (
    <div className="cart-page">
      <div className="cart-page-container">
        {/* header Table=================================== */}
        <ul className="cart-header-table">
          <li className="col-1">شماره</li>
          <li className="col-3">محصول</li>
          <li className="col-3"> فی (تومان) </li>
          <li className="col-2">تعداد</li>
          <li className="col-3">جمع (تومان)</li>
        </ul>
        {/* each line Table(product)============================= */}
        {data.map((eachProduct) => {
          if (cartItemsSelected[eachProduct.id] !== 0)
            return (
              <EachItemCart eachProduct={eachProduct} key={eachProduct.id} />
            );
        })}

        {/* last line table (Total Products)================================= */}
        <ul className="cart-payment-table">
          <li className="col-9">مبلغ قابل پرداخت</li>
          <li className="col-3"> {sumToPay?.toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
