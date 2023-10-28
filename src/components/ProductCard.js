import React from "react";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import CartButton from "./CartButton";
import styles from "../styles/ProductCard.module.css";

/**
 * ProductCard component displays information about a product.
 *
 * @component
 * @param {Object} el - The product data.
 * @param {string} el.imageURL - The URL of the product image.
 * @param {string} el.name - The name of the product.
 * @param {number} el.price - The price of the product.
 * @param {number} el.quantity - The available quantity of the product.
 * @returns {JSX.Element} The rendered ProductCard component.
 */
function ProductCard({ el }) {
  const { quantity } = el;

  return (
    <div className={styles.productCard}>
      <ProductImage imageURL={el.imageURL} name={el.name} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductInfo name={el.name} price={el.price} />
        {quantity > 0 ? (
          <CartButton el={el} />
        ) : (
          <p className={styles.outOfStockMessage}>Out of Stock</p>
        )}
      </div>
    </div>
  );
}


export default ProductCard;
