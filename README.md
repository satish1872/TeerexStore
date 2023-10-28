# TeeRexCart - Online T-Shirt Store

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Contact](#contact)

## Introduction

TeeRexCart is a simple web application that enables King Shan to start and manage his online t-shirt business. Customers can browse a catalog of t-shirts, add products to their shopping cart, and complete the checkout process. This project provides a user-friendly interface for a seamless shopping experience.

## Project Structure

The project follows a specific file structure:

```
teerexstore/
│
├── public/
│   ├── ... (static assets)
│
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── CartButton.js
│   │   ├── CartItems.js
│   │   ├── Filter.js
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   ├── ProductImage.js
│   │   ├── ProductInfo.js
│   │   ├── ProductList.js
│   │   └── SearchBar.js
│   ├── context/
│   │   └── CartContext.js
│   ├── index.js
│   ├── pages/
│   │   ├── Cart.js
│   │   └── Product.js
│   ├── styles/
│   │   ├── CartItems.module.css
│   │   ├── navbar.module.css
│   │   ├── ProductCard.module.css
│   │   ├── ProductList.module.css
│   │   └── product.module.css
│   └── utility.js
│
├── package.json
├── package-lock.json
├── README.md
└── ... (other project files)
```

## Features

- Browse the catalog on a product listing page.
- Each product card displays an image, name, and price.
- Search for products using free text, such as name, color, and type.
- Filter products by gender, color, price range, and type.
- Add one or more t-shirts to the shopping cart.
- View and manage the shopping cart, including increasing quantity and deleting items.
- Display the total amount in the shopping cart.

## Components

### 1. App.js

This is the main component that renders the application and sets up routing.

### 2. Product.js

Product component for displaying and filtering products.

### 3. Cart.js

Cart component for managing the shopping cart.

### 4. CartItems.js

Displays individual items in the shopping cart and allows quantity management.

### 5. CartButton.js

Displays buttons to add items to the cart and manage quantities.

### 6. Filter.js

Allows users to filter products by category, including gender, color, price range, and type.

### 7. Navbar.js

Navigation bar component with links to product listings and the shopping cart.

### 8. ProductCard.js

Displays information about a product, including its image, name, and price.

### 9. ProductImage.js

Renders the product image.

### 10. ProductInfo.js

Displays additional product details.

### 11. ProductList.js

Displays a list of products based on the given data.

### 12. SearchBar.js

Searches for products based on user input.

### 13. CartContext.js

Context for managing the shopping cart state.

### 14. utility.js

Utility functions for fetching data and searching products.

## Installation

To run TeeRexCart locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd teerexstore`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your web browser and visit: `http://localhost:3000`

Now, you can browse the catalog, search for products, and add items to your shopping cart.

## Running Tests

To run tests, use the following command:

npm test

## Technologies Used

- React
- React Router
- CSS Modules
- PropTypes
- Fetch API

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature-name'`
4. Push to your branch: `git push origin feature-name`
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors

- [Satish Kumar Prasad]

## Contact

For any questions or feedback, please contact [satish18072000@gmail.com].
