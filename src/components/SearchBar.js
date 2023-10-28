import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

/**
 * SearchBar component for searching products.
 *
 * @component
 * @param {function} onSearch - Callback function to handle search.
 * @returns {JSX.Element} The rendered SearchBar component.
 */
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  /**
   * Handles key press event in the input field.
   * Calls the `onSearch` callback when the Enter key is pressed.
   *
   * @param {Object} e - The key press event object.
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => onSearch(query)}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}


export default SearchBar;
