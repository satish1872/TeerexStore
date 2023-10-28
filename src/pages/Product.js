import React, { useEffect, useState } from "react";
import { TbFilter } from "react-icons/tb";
import { searchProducts, getCatalogue } from "../utility";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Style from "../styles/product.module.css";

/**
 * Product component for displaying and filtering products.
 *
 * @component
 * @returns {JSX.Element} The rendered Product component.
 */
function Product() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    color: [],
    gender: [],
    price: [],
    type: [],
  });

  useEffect(() => {
    async function fetchData() {
      const initialData = await getCatalogue();
      setData(initialData);
    }
    fetchData();
  }, []);

  useEffect(() => {
     async function filter(){
      await applyFilters();
     }
     filter()
  }, [filters]);

  /**
   * Apply selected filters to the product data.
   */
  const applyFilters = async () => {
    let filteredData = [...data];

    if (filters.color.length > 0) {
      filteredData = filteredData.filter((el) =>
        filters.color.includes(el.color)
      );
    }

    if (filters.gender.length > 0) {
      filteredData = filteredData.filter((el) =>
        filters.gender.includes(el.gender)
      );
    }

    if (filters.price.length > 0) {
      // Create an array to hold the results for each price filter
      const priceFilterResults = filters.price.map((range) => {
        const [min, max] = range.split("-").map(Number);

        // Handle the case where there's no max value specified
        if (isNaN(max)) {
          return filteredData.filter((el) => el.price >= min);
        }

        return filteredData.filter((el) => el.price >= min && el.price <= max);
      });

      // Merge the results from each price filter into a single array
      const mergedPriceResults = [].concat(...priceFilterResults);

      // Remove duplicates from the merged results
      const uniquePriceResults = Array.from(new Set(mergedPriceResults));

      // Update filteredData with the uniquePriceResults
      filteredData = uniquePriceResults;
    }

    if (filters.type.length > 0) {
      filteredData = filteredData.filter((el) =>
        filters.type.includes(el.type)
      );
    }

    setData(filteredData);
  };

  /**
   * Handle the search action.
   * @param {string} searchQuery - The search query entered by the user.
   */
  const handleSearch = async (searchQuery) => {
    const result = await searchProducts(data, searchQuery);
    setData(result);
  };

  /**
   * Handle checkbox change for filter options.
   * @param {Object} e - The event object.
   * @param {string} category - The category of the filter.
   */
  const handleCheckboxChange = (e, category) => {
    const { checked, value } = e.target;

    // Convert the category to lowercase
    const lowercaseCategory = category.toLowerCase();

    setFilters((prevFilters) => ({
      ...prevFilters,
      [lowercaseCategory]: checked
        ? [...(prevFilters[lowercaseCategory] || []), value]
        : (prevFilters[lowercaseCategory] || []).filter(
            (item) => item !== value
          ),
    }));
  };

  /**
   * Reset all filters to their initial state.
   */
  const handleResetFilters = async () => {
    setFilters({
      color: [],
      gender: [],
      price: [],
      type: [],
    });
  };

  return (
    <div data-testid="product-component">
      <div className={Style.productserachdiv}>
        <SearchBar onSearch={handleSearch} />
        <button className={Style.filterBtn} onClick={handleResetFilters}>
          <TbFilter />
        </button>
      </div>
      <div className={Style.productHomediv}>
        <div className={Style.filterDiv}>
          <h3>Colour</h3>
          <div>
            <input
              type="checkbox"
              value="Red"
              onChange={(e) => handleCheckboxChange(e, "color")}
              checked={filters.color.includes("Red")}
            />
            <span>Red</span>
          </div>
          <div>
            <input
              type="checkbox"
              value="Blue"
              onChange={(e) => handleCheckboxChange(e, "color")}
              checked={filters.color.includes("Blue")}
            />
            <span>Blue</span>
          </div>
          <div>
            <input
              type="checkbox"
              value="Green"
              onChange={(e) => handleCheckboxChange(e, "color")}
              checked={filters.color.includes("Green")}
            />
            <span>Green</span>
          </div>
          <div>
            <h3>Gender</h3>
            <input
              type="checkbox"
              value="Men"
              onChange={(e) => handleCheckboxChange(e, "gender")}
              checked={filters.gender.includes("Men")}
            />{" "}
            <span>Men</span>
            <br />
            <input
              type="checkbox"
              value="Women"
              onChange={(e) => handleCheckboxChange(e, "gender")}
              checked={filters.gender.includes("Women")}
            />{" "}
            <span>Women</span>
          </div>
          <div>
            <h3>Price</h3>
            <input
              type="checkbox"
              value="0-250"
              data-testid="price-0-250"
              onChange={(e) => handleCheckboxChange(e, "price")}
              checked={filters.price.includes("0-250")}
            />{" "}
            <span htmlFor="price-0-250">0 - Rs250</span>
            <br />
            <input
              type="checkbox"
              value="251-400"
              data-testid="price-251-400"
              onChange={(e) => handleCheckboxChange(e, "price")}
              checked={filters.price.includes("251-400")}
            />{" "}
            <span htmlFor="price-251-400">Rs251 - Rs400</span>
            <br />
            <input
              type="checkbox"
              value="450"
              data-testid="price-450"
              onChange={(e) => handleCheckboxChange(e, "price")}
              checked={filters.price.includes("450")}
            />{" "}
            <span htmlFor="price-450">Rs450</span>
          </div>
          <div>
            <h3>Type</h3>
            <input
              type="checkbox"
              value="Polo"
              onChange={(e) => handleCheckboxChange(e, "type")}
              checked={filters.type.includes("Polo")}
            />{" "}
            <span>Polo</span>
            <br />
            <input
              type="checkbox"
              value="Hoodie"
              onChange={(e) => handleCheckboxChange(e, "type")}
              checked={filters.type.includes("Hoodie")}
            />{" "}
            <span>Hoodie</span>
            <br />
            <input
              type="checkbox"
              value="Basic"
              onChange={(e) => handleCheckboxChange(e, "type")}
              checked={filters.type.includes("Basic")}
            />{" "}
            <span>Basic</span>
          </div>
        </div>
        <ProductList data={data} />
      </div>
    </div>
  );
}

export default Product;