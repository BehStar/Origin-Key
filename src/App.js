import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/app.css";
import Header from "./comps/header/Header";
import CartPage from "./comps/pages/CartPage";
import ContactUs from "./comps/pages/ContactUs";
import Home from "./comps/pages/home/Home";
import LoginPage from "./comps/pages/LoginPage";
import PaymentPage from "./comps/pages/PaymentPage";
import RegisterPage from "./comps/pages/RegisterPage";
import ProductsPage from "./comps/pages/ProductsPage";
import AutodeskProductsPage from "./comps/pages/products/AutodeskProductsPage";
import MicrosoftProductPage from "./comps/pages/products/MicrosoftProductPage";
import SingleProductPage from "./comps/pages/SingleProductPage";
import Footer from "./comps/footer/Footer";
import data from "./comps/data";
import { ShopContextProvider } from "./comps/pages/contexts/ShopContextProvider";

const App = () => {
  ///variables for login and register when add user saves in local storage and rerender comps
  const [personReg, setPersonReg] = useState(() => {
    return JSON.parse(localStorage.getItem("LOCAL_REGISTER")) || [];
  });
  const [localStorageData, setLocalStorageData] = useState([]);
  useEffect(() => {
    setLocalStorageData(JSON.parse(localStorage.getItem("LOCAL_REGISTER")));
  }, [personReg]);

  return (
    <ShopContextProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <RegisterPage personReg={personReg} setPersonReg={setPersonReg} />
            }
            exact
          />
          <Route
            path="/login"
            element={
              <LoginPage
                personReg={personReg}
                localStorageData={localStorageData}
              />
            }
            exact
          />
          <Route path="/contact-us" element={<ContactUs />} exact />
          <Route path="/payment" element={<PaymentPage />} exact />
          <Route path="/cart" element={<CartPage />} exact />
          <Route
            path="/products"
            element={<ProductsPage data={data} />}
            exact
          />
          <Route
            path="/autodesk-products"
            element={<AutodeskProductsPage data={data} />}
            exact
          />
          <Route
            path="/microsoft-products"
            element={<MicrosoftProductPage data={data} />}
            exact
          />
          <Route
            path="/single-product/:id"
            element={<SingleProductPage data={data} />}
          />
        </Routes>
      </main>
      <Footer />
    </ShopContextProvider>
  );
};

export default App;
