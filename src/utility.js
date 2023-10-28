import { config } from "./App";
/**
 * Retrieves the catalog data from the specified endpoint.
 * @returns {Promise<Array>} A promise that resolves to an array of product catalog data.
 * @throws {Error} If fetching the data fails.
 */
export const getCatalogue = async () => {
  try {
    const response = await fetch(`${config.endpoint}/catalogue.json`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};


/**
 * Searches for products in the catalog based on a query string.
 * @param {Array} data - The catalog data to search within.
 * @param {string} query - The search query string.
 * @returns {Array} An array of products that match the search query.
 */
export const searchProducts = async (data, query) => {
  const keywords = query.toLowerCase().split(" ");

  const filteredData = data.filter((item) => {
    const itemAttributes = [
      item.name.toLowerCase(),
      item.color.toLowerCase(),
      item.type.toLowerCase(),
    ];

    // Check if any of the keywords match any of the item's attributes
    return keywords.some((keyword) =>
      itemAttributes.some((attribute) => attribute.includes(keyword))
    );
  });

  return filteredData;
};
