import React from "react";
import { Link } from "react-router-dom";
import windowsSVG from "../../../images/windows.svg";
import appleSVG from "../../../images/apple.svg";

const ProductBox = ({ eachProduct }) => {
  return (
    <div className="product-col">
      <div className="product-box">
        <div className="first-row">
          <div className="box-img">
            <img src={eachProduct.img} alt={eachProduct.altImg} />
          </div>
          <div className="box-title">
            <h6>{eachProduct.title}</h6>
          </div>
        </div>
        <div className="second-row">
          <p>{eachProduct.description}</p>
        </div>
        <div className="third-row">
          <span>platform</span>
          <div className="svg-box">
            {eachProduct.isItForMac && <img src={appleSVG} alt="mac" />}
          </div>
          <div className="svg-box">
            {eachProduct.isItForWindows && (
              <img src={windowsSVG} alt="windows" />
            )}
          </div>
        </div>
        <div className="fourth-row">
          <Link
            to={`/single-product/${eachProduct.id}`}
            className="submit-product"
          >
            مشاهده
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
