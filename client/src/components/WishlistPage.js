import React, { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"
import ProductCard from "./ProductCard"

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p style={styles.emptyMessage}>Your wishlist is empty.</p>
      ) : (
        <div style={styles.productGrid}>
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} removeFromWishlist={() => removeFromWishlist(product.id)} />
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
  emptyMessage: {
    fontSize: "1.2rem",
    color: "#555",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
  },
}

export default WishlistPage

