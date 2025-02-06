"use client"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

const CartIcon = () => {
  const { cart } = useCart()
  const navigate = useNavigate()

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const handleClick = () => {
    navigate("/cart")
  }

  return (
    <div onClick={handleClick} style={styles.container}>
      🛒 Cart ({totalItems})
    </div>
  )
}

const styles = {
  container: {
    cursor: "pointer",
    padding: "8px 12px",
    backgroundColor: "#C7DCA7",
    color: "#89B9AD",
    borderRadius: "4px",
    display: "inline-block",
    transition: "background-color 0.3s ease",
  },
}

export default CartIcon

