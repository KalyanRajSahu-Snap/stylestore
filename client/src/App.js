import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import MensPage from "./pages/MensPage"
import WomensPage from "./pages/WomensPage"
import KidsPage from "./pages/KidsPage"
import SingleProductPage from "./pages/SingleProductPage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import WishlistPage from "./components/WishlistPage"
import Cart from './components/Cart';
import "./styles/App.css"

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mens" element={<MensPage />} />
                <Route path="/womens" element={<WomensPage />} />
                <Route path="/kids" element={<KidsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<SingleProductPage />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  )
}

export default App