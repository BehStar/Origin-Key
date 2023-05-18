import React from "react";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContextProvider";

const EachItemCart = ({ eachProduct }) => {
  const {
    minusFromCart,
    cartItemsSelected,
    plusAddToCart,
    removeFromCart,
    totalShopping,
    totalEachItemSelected,
  } = useContext(ShopContext);
  const priceItem = eachProduct.newPrice;
  const cartItemAmount = cartItemsSelected[eachProduct.id];
  const [sumEachPrice, setSumEachPrice] = useState();

  useEffect(() => {
    setSumEachPrice(cartItemAmount * priceItem);
  }, [cartItemsSelected]);

  useEffect(() => {
    setSumEachPrice(cartItemAmount * priceItem);
  }, [totalShopping]);

  useEffect(() => {
    totalEachItemSelected(eachProduct.id, sumEachPrice);
  }, [sumEachPrice]);

  return (
    <div>
      <ul className="cart-products-table">
        <li className="col-1">
          <button
            type="button"
            className="btn-close"
            onClick={() => removeFromCart(eachProduct.id)}
          ></button>
        </li>
        <li className="col-3 ">{eachProduct.title}</li>
        <li className="col-3 ">{eachProduct.newPrice?.toLocaleString()}</li>
        <li className="col-2  ">
          <div className="count-box">
            <div className="arrows-right ">
              <button className="arrows-icon">
                <i
                  className="fa fa-angle-up"
                  onClick={() => plusAddToCart(eachProduct.id)}
                ></i>
              </button>
              <button className="arrows-icon">
                <i
                  className="fa fa-angle-down"
                  onClick={() => minusFromCart(eachProduct.id)}
                ></i>
              </button>
            </div>
            <div className="count-left">
              {cartItemsSelected[eachProduct.id]}
            </div>
          </div>
        </li>

        <li className="col-3">{sumEachPrice?.toLocaleString()}</li>
      </ul>
    </div>
  );
};

export default EachItemCart;
