import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
export const config = {
  endpoint: `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart`,
};

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
