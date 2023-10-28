import React from "react";
import PropTypes from "prop-types";

/**
 * Filter component displays a set of checkboxes for filtering products by category.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.category - The category label for the filter.
 * @param {string[]} props.options - An array of filter options within the category.
 * @param {string[]} props.selectedFilters - An array of selected filter options.
 * @param {function} props.onCheckboxChange - A function to handle checkbox changes.
 * @returns {JSX.Element} The rendered Filter component.
 */
function Filter({ category, options, selectedFilters, onCheckboxChange }) {
  return (
    <div>
      <h3>{category}</h3>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={(e) => onCheckboxChange(e, category)}
            checked={selectedFilters.includes(option)}
          />
          <span>{option}</span>
          <br />
        </div>
      ))}
    </div>
  );
}

Filter.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default Filter;
