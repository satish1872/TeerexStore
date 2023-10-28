import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import PropTypes from "prop-types";
import style from "../styles/navbar.module.css";

/**
 * Navbar component displays the navigation bar with links to products and the cart.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */
function Navbar() {
  const { product } = useContext(CartContext);
  return (
    <div className={style.mainNavDiv}>
      <div>
        <h3>TeeRex Store</h3>
      </div>
      <div className={style.cartMainDiv}>
        <Link to="/">
          <h3>Products</h3>
        </Link>
        <div className={style.cart}>
          <Link to="/cart">
            <BsCart3 style={{ width: "40px", height: "20px" }} />
          </Link>
          <h4>{product.length}</h4>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
