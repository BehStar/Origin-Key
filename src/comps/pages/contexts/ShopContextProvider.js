import React from "react";
import { createContext, useState, useEffect } from "react";
import data from "../../data";
export const ShopContext = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  // create an object that contains the productsID and how many(tedad) user selected product
  const [cartItemsSelected, setCartItemsSelected] = useState(getDefaultCart());
  // cartItemsSelected={itemId(0):0,itemId(1):3,...}
  //   add to count cartpage from SingleProductPage
  const addToCart = (itemId, amount) => {
    setCartItemsSelected((prev) => ({ ...prev, [itemId]: amount }));
  };
  //   update plus count(arrowUp) in cartPage
  const plusAddToCart = (itemId) => {
    setCartItemsSelected((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //   update minus count (arrowDown)in cartPage
  const minusFromCart = (itemId) => {
    setCartItemsSelected((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //   ===============================================================================
  // create an object that contains the productsID and how much(jam-tooman) user selected product
  const [totalShopping, setTotalShopping] = useState(getDefaultCart());
  // totalShopping={itemId(0):0,itemId(1):150,...}
  const totalEachItemSelected = (itemId, sum) => {
    setTotalShopping((prev) => ({ ...prev, [itemId]: sum }));
  };
  //Remove Each Li **************************************
  const removeFromCart = (itemId) => {
    setCartItemsSelected((prev) => ({ ...prev, [itemId]: 0 }));
    setTotalShopping((prev) => ({ ...prev, [itemId]: 0 }));
  };
  //sumToPAY(جمع قابل پرداخت)
  //  and sumCountToShow is count items selected in header on behnid the cart icon
  const [sumToPay, setSumToPay] = useState(0);
  const [sumCountToShow, setSumCountToShow] = useState(0);
  const sum = () => {
    let sumAmount = 0;
    let sumCount = 0;
    for (let i = 0; i < data.length + 1; i++) {
      sumAmount += totalShopping[i];
      sumCount += cartItemsSelected[i];
    }
    setSumToPay(sumAmount);
    setSumCountToShow(sumCount);
  };
  useEffect(() => {
    sum();
  }, [totalShopping, addToCart]);

  const contextValue = {
    cartItemsSelected,
    addToCart,
    plusAddToCart,
    minusFromCart,
    removeFromCart,
    totalShopping,
    totalEachItemSelected,
    sumToPay,
    sumCountToShow,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
