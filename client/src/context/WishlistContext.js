import React, { createContext, useState, useContext, useEffect } from "react"
import { AuthContext } from "./AuthContext"

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user) {
      const storedWishlist = localStorage.getItem(`wishlist_${user.id}`)
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist))
      }
    } else {
      setWishlist([])
    }
  }, [user])

  const addToWishlist = (product) => {
    if (user) {
      const updatedWishlist = [...wishlist, product]
      setWishlist(updatedWishlist)
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(updatedWishlist))
    }
  }

  const removeFromWishlist = (productId) => {
    if (user) {
      const updatedWishlist = wishlist.filter((item) => item.id !== productId)
      setWishlist(updatedWishlist)
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(updatedWishlist))
    }
  }

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}
