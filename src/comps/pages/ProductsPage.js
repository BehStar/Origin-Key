import React from "react";
import "../../css/products.css";
import ProductBox from "./products/ProductBox";
import HeaderProducts from "./products/HeaderProducts";

const ProductsPage = ({ data }) => {
  return (
    <div className="products-page ">
      <HeaderProducts />
      <div className="container-pro">
        <div className="products-row">
          {data.map((eachProduct) => (
            <ProductBox key={eachProduct.id} eachProduct={eachProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
