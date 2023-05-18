import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./contexts/ShopContextProvider";
import "../../css/single-product.css";
const SingleProductPage = ({ data }) => {
  const { addToCart } = useContext(ShopContext);

  const { id } = useParams();
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    setDataState(data[id - 1]);
  }, [id]);

  const [countNumberProduct, setCountNumberProduct] = useState(1);
  const minusBtnHandler = () => {
    if (countNumberProduct > 1) {
      setCountNumberProduct((prevCount) => prevCount - 1);
    }
  };
  const plusBtnHandler = () => {
    setCountNumberProduct((prevCount) => prevCount + 1);
  };
  return (
    <div className="single-page">
      <div className="container-single-page">
        <div className="box-single-product">
          <div className="title-single">
            <h2>{dataState.title}</h2>
          </div>
          <div className="box-product">
            <div className="right-single">
              <div className="price-single">
                <div className="old-price">
                  <span className="price">
                    {dataState.oldPrice?.toLocaleString()}
                  </span>
                  <span className="tooman">تومان</span>
                </div>
                <div className="new-price">
                  <span className="price">
                    {dataState.newPrice?.toLocaleString()}
                  </span>
                  <span className="tooman">تومان</span>
                </div>
              </div>
              <div className="first-explain-single">
                <p>{dataState.firstExplain}</p>
              </div>
              <div className="second-explain-single">
                <p>{dataState.secondExplain}</p>
              </div>
              <div className="third-explain-single">
                <p>{dataState.thirdExplain}</p>
              </div>
              <div className="row-btns">
                <div className="btn-group-nums">
                  <button className="btn-nums" onClick={() => plusBtnHandler()}>
                    +
                  </button>
                  <span>{countNumberProduct}</span>
                  <button
                    className="btn-nums"
                    onClick={() => minusBtnHandler()}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="add-to-card"
                onClick={() => addToCart(dataState.id, countNumberProduct)}
              >
                اضافه کردن به سبد خرید
              </button>
            </div>
            <div className="left-single">
              <img src={dataState.imgInput} alt={dataState.altImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
