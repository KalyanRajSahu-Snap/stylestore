import { Link } from "react-router-dom"
import WishlistIcon from "./WishlistIcon"
import { useCart } from "../context/CartContext"

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "4px",
    marginBottom: "16px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "8px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  price: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "8px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    backgroundColor: "#FFC5C5",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "8px",
  },
}

const ProductCard = ({ product, removeFromWishlist }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} style={styles.image} />
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
      </Link>
      <div style={styles.actions}>
        <WishlistIcon product={product} />
        <button onClick={handleAddToCart} style={styles.button}>
          Add to Cart
        </button>
        {removeFromWishlist && (
          <button onClick={() => removeFromWishlist(product.id)} style={styles.removeButton}>
            Remove from Wishlist
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard

