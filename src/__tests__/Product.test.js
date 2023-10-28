import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Product from "../pages/Product";

describe("Product Component", () => {
  beforeEach(() => {
    act(() => {
      render(<Product data-testid="product-component" />);
    });
  });

  it("applies filters correctly", () => {
    // Your test logic for applying filters goes here
  });

  it("handles search correctly", () => {
    // Simulate a user entering a search query in the SearchBar component
    const searchInput = screen.getByPlaceholderText("Search for products...");
    fireEvent.change(searchInput, { target: { value: "Product 1" } });

    // Your test logic for handling search goes here
  });

  it("filters products by price range", () => {
    // Simulate user selecting a price range filter, e.g., 0 - Rs250
    const priceFilterInput = screen.getByTestId("price-0-250");
    fireEvent.click(priceFilterInput);

    // Your test logic for filtering products by price range goes here
  });

  // Add more test cases as needed
});
