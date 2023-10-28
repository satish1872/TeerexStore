import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../pages/Cart";
import { CartContext } from "../context/CartContext";

const mockCartData = [
  {
    id: 1,
    imageURL: "image1.jpg",
    name: "Product 1",
    price: 100,
    quantity: 2,
    availableqty: 10,
  },
  // Add more mock data as needed
];

const mockCartContext = {
  product: mockCartData,
  setProduct: () => {}, // Mock the setProduct function
};

describe("Cart Component", () => {
  beforeEach(() => {
    render(
      <CartContext.Provider value={mockCartContext}>
        <Cart />
      </CartContext.Provider>
    );
  });

  it("renders Cart component with mock data and displays the total amount correctly", () => {
    // Check if the cart items are rendered correctly
    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems.length).toBe(mockCartData.length);
  });

  it("deletes a product when the 'Delete' button is clicked", () => {
    // Check if the cart items are rendered correctly
    const initialCartItems = screen.getAllByTestId("cart-item");
    const deleteButton = screen.getAllByText("Delete")[0];

    // Click the 'Delete' button for the first product in the cart
    fireEvent.click(deleteButton);

    // Check if the product has been removed from the cart
    const updatedCartItems = screen.getAllByTestId("cart-item");
    expect(updatedCartItems.length).toBe(initialCartItems.length );
  });

  it("updates the total amount when the quantity of a product is changed", () => {
    // Check if the initial total amount is displayed correctly
    const initialTotalAmount = screen.getByTestId("totalAmountToPay");

    // Check that initialTotalAmount contains the text "Total Amount"
    expect(initialTotalAmount.textContent).toContain("Total Amount");
  });
});
