import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/ProductCard.module.css";

/**
 * CartButton component displays buttons to add items to the cart and manage quantities.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.el - The product information to display and add to the cart.
 * @param {string} props.el.id - The unique identifier for the product.
 * @param {string} props.el.imageURL - The URL of the product's image.
 * @param {string} props.el.name - The name of the product.
 * @param {number} props.el.price - The price of the product.
 * @param {number} props.el.quantity - The available quantity of the product.
 *
 * @returns {JSX.Element} The rendered CartButton component.
 */
function CartButton({ el }) {
  /**
   * React context to manage the cart state.
   *
   * @type {Object}
   * @property {Object[]} product - An array of products in the cart.
   * @property {function} setProduct - A function to update the cart state.
   */
  const { product, setProduct } = useContext(CartContext);

  /**
   * Adds the product to the cart if it's available.
   * If the product is already in the cart, it increments the quantity.
   */
  const addToCart = () => {
    if (el.quantity > 0) {
      const isProductInCart = product.some((item) => item.id === el.id);

      if (!isProductInCart) {
        const newProduct = {
          id: el.id,
          imageURL: el.imageURL,
          name: el.name,
          price: el.price,
          quantity: 1,
          availableqty: el.quantity,
        };

        setProduct([...product, newProduct]);
      }
    } else {
      alert("Product is Out of Stock!!!");
    }
  };

  /**
   * Finds the existing cart item with the same ID as the current product.
   *
   * @type {Object|undefined}
   */
  const existingCartItem = product.find((item) => item.id === el.id);

  /**
   * Handles the change in product quantity by updating the cart state.
   *
   * @param {string} id - The ID of the product to update.
   * @param {number} amount - The amount to change the quantity by (positive or negative).
   */
  const handleCount = (id, amount) => {
    const updatedQty = product.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    );

    setProduct(updatedQty);
  };

  /**
   * Increments the quantity of an existing cart item and displays an alert
   * if the maximum limit is reached.
   */
  const handleIncrementAndAlert = () => {
    if (existingCartItem.quantity >= el.quantity) {
      alert("You Reached Maximum Limit");
    } else {
      handleCount(el.id, 1);
    }
  };

  return (
    <div>
      {existingCartItem ? (
        <div className={styles.cartButtons}>
          <button
            className={styles.countButton}
            onClick={() => handleCount(el.id, -1)}
            disabled={existingCartItem.quantity === 1}
          >
            -
          </button>
          <span className={styles.cartItemCount}>
            {existingCartItem.quantity}
          </span>
          <button
            className={styles.countButton}
            onClick={handleIncrementAndAlert}
          >
            +
          </button>
        </div>
      ) : (
        <button className={styles.addToCartButton} onClick={addToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default CartButton;
