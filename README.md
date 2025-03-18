
# StyleStore - E-commerce Fashion Website

StyleStore is a modern, responsive e-commerce website built with React.js, focusing on fashion and clothing. It offers a seamless shopping experience with features like user authentication, product browsing, wishlist management, and a shopping cart.

## Features

- **User Authentication**: Secure signup and login functionality.
- **Product Catalog**: Browse products across different categories (Men's, Women's, Kids').
- **Product Details**: View detailed information about each product.
- **Shopping Cart**: Add items to cart, adjust quantities, and proceed to checkout.
- **Wishlist**: Save favorite items for later.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Indian Rupee (INR) Currency**: All prices are displayed in INR.

## Technologies Used

- React.js
- React Router for navigation
- Context API for state management
- Express.js for the backend server
- MongoDB for database
- JSON Web Tokens (JWT) for authentication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/KalyanRajSahu-Snap/stylestore.git
   cd stylestore
   ```

2. Install dependencies for both frontend and backend:
   ```
   npm install
   cd client && npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

   This will start both the backend server and the React frontend.

5. Open `http://localhost:3000` in your browser to view the application.

## Project Structure

- `/client`: React frontend application
- `/server`: Express.js backend server
- `/server/models`: MongoDB models
- `/server/routes`: API routes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
