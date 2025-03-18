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
import Footer from "./components/Footer"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
          <div className="App" style={styles.app}>
              <Navbar />
              <main style={styles.main}>
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
              </main>
              <Footer/>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}


const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: "1 0 auto",
  },
}
export default App