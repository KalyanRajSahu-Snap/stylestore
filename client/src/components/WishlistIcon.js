import React, { useContext, useState } from "react"
import { WishlistContext } from "../context/WishlistContext"
import { AuthContext } from "../context/AuthContext"

const WishlistIcon = ({ product, isNavbar = false }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext)
  const { user } = useContext(AuthContext)
  const [animate, setAnimate] = useState(false)

  const handleClick = () => {
    if (!user) {
      alert("Please log in to add items to your wishlist.")
      return
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
      setAnimate(true)
      setTimeout(() => setAnimate(false), 1000)
    }
  }

  const iconStyle = {
    cursor: "pointer",
    transition: "transform 0.3s ease",
    ...(animate && {
      animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    }),
  }

  const navbarStyle = {
    marginRight: "1rem",
    color: "#FFEBD8",
  }

  return (
    <div onClick={handleClick} style={isNavbar ? { ...iconStyle, ...navbarStyle } : iconStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isInWishlist(product.id) ? "#FFC5C5" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>
  )
}

export default WishlistIcon
