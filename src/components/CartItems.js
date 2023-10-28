import React,{useContext} from "react";
import PropTypes from "prop-types";
import styles from "../styles/CartItems.module.css";
import { CartContext } from "../context/CartContext";

function CartItems({ el, handleDelete }) {
  const { id, imageURL, name, price, quantity, availableqty } = el;
  const { product, setProduct } = useContext(CartContext);

  const handleQtyChange = (e) => {
    const payload = e.target.value;
    let updatedqty = product.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Number(payload),
        };
      } else {
        return item;
      }
    });
    setProduct(updatedqty);
  };

  return (
    <div className={styles.cartItem} data-testid="cart-item">
      {" "}
      <div>
        <img src={imageURL} alt={name} className={styles.cartItemImg} />{" "}
      </div>
      <div className={styles.cartItemDetails}>
        {" "}
        <h3>{name}</h3>
        <h4>Rs {price}</h4>
      </div>
      <div className={styles.cartItemSelect}>
        {" "}
        <select
          data-testid={`quantity-select-${id}`}
          onChange={handleQtyChange}
          defaultValue={quantity}
        >
          {new Array(availableqty).fill(0).map((qty, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.cartItemButton}>
        {" "}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    availableqty: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartItems;
