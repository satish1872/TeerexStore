import React from "react";
import styles from "../styles/ProductCard.module.css";

function ProductInfo({ name, price }) {
  return (
    <div className={styles.productDetails}>
      <h3 style={{ marginTop: "16px" }}>Rs {price}</h3>
    </div>
  );
}

export default ProductInfo;
