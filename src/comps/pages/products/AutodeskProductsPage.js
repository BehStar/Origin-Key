import React from "react";
import ProductBox from "./ProductBox";
import HeaderProducts from "./HeaderProducts";

const AutodeskProductsPage = ({ data }) => {
  return (
    <div>
      <div className="products-page">
        <HeaderProducts />
        <div className="container-pro">
          <div className="products-row">
            {data.map(
              (eachProduct) =>
                eachProduct.brand === "autodesk" && (
                  <ProductBox key={eachProduct.id} eachProduct={eachProduct} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutodeskProductsPage;
