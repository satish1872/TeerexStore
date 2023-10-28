import React from "react";
import ProductCard from "./ProductCard";
import Style from "../styles/ProductList.module.css";

function ProductList({ data }) {
  return (
    <div className={Style.mainProductdiv}>
      {data.length > 0 ? (
        data.map((el) => <ProductCard key={el.id} el={el} />)
      ) : (
        <h3>No Matching Items Found</h3>
      )}
    </div>
  );
}

export default ProductList;
