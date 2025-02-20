"use client"
import { WishlistContext } from "../context/WishlistContext"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { formatPrice } from "../utils/formatPrice"

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = WishlistContext()
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    removeFromWishlist(product.id)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div style={styles.emptyWishlist}>
          <p>Your wishlist is empty.</p>
          <Link to="/" style={styles.continueShoppingLink}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div style={styles.productGrid}>
          {wishlist.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.image || "/placeholder.svg"} alt={product.name} style={styles.productImage} />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>{formatPrice(product.price)}</p>
              <div style={styles.buttonContainer}>
                <button onClick={() => handleAddToCart(product)} style={styles.addToCartButton}>
                  Add to Cart
                </button>
                <button onClick={() => removeFromWishlist(product.id)} style={styles.removeButton}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#89B9AD",
  },
  emptyWishlist: {
    textAlign: "center",
    marginTop: "2rem",
  },
  continueShoppingLink: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#89B9AD",
    color: "#FFEBD8",
    textDecoration: "none",
    borderRadius: "4px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
  },
  productCard: {
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  productName: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  productPrice: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "1rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  addToCartButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#89B9AD",
    color: "#FFEBD8",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#FFC5C5",
    color: "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
}

export default WishlistPage

