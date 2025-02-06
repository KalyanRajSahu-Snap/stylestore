"use client"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>
      {cart.length === 0 ? (
        <div style={styles.emptyCart}>
          <p>Your cart is empty</p>
          <Link to="/" style={styles.continueShoppingLink}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image || "/placeholder.svg"} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>Price: ${item.price.toFixed(2)}</p>
                <div style={styles.quantityControl}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={styles.quantityButton}>
                    -
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={styles.quantityButton}>
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div style={styles.total}>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button style={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
    color: "#89B9AD",
    marginBottom: "2rem",
  },
  emptyCart: {
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
  cartItem: {
    display: "flex",
    borderBottom: "1px solid #eee",
    paddingBottom: "1rem",
    marginBottom: "1rem",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "1rem",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: "1.2rem",
    color: "#333",
  },
  itemPrice: {
    color: "#666",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  quantityButton: {
    padding: "0.25rem 0.5rem",
    backgroundColor: "#C7DCA7",
    border: "none",
    cursor: "pointer",
  },
  quantity: {
    margin: "0 0.5rem",
  },
  removeButton: {
    marginTop: "0.5rem",
    padding: "0.25rem 0.5rem",
    backgroundColor: "#FFC5C5",
    color: "#333",
    border: "none",
    cursor: "pointer",
  },
  total: {
    marginTop: "2rem",
    textAlign: "right",
  },
  checkoutButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#89B9AD",
    color: "#FFEBD8",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
}

export default Cart

