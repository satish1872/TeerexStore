import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

/**
 * Context for managing the shopping cart state.
 *
 * @type {React.Context}
 * @property {Array} product - The current shopping cart items.
 * @property {Function} setProduct - A function to update the shopping cart items.
 */
export const CartContext = createContext();

/**
 * CartContextProvider component for managing the shopping cart state.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The rendered CartContextProvider component.
 */
const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  return (
    <CartContext.Provider value={{ product, setProduct }}>
      {children}
    </CartContext.Provider>
  );
};



export default CartContextProvider;
