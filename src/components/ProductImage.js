import React from "react";
import styles from "../styles/ProductCard.module.css";
function ProductImage({ imageURL, name }) {
  return (
    <>
      <h3 className={styles.productName}>{name}</h3>
      <img src={imageURL} alt={name} className={styles.productImage} />
    </>
  );
}

export default ProductImage;
