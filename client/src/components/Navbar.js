"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import CartIcon from "./CartIcon"
import WishlistIcon from "./WishlistIcon"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    // You might want to redirect the user to the home page or login page after logout
  }

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        StyleStore
      </Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/mens" style={styles.link}>
          Men's
        </Link>
        <Link to="/womens" style={styles.link}>
          Women's
        </Link>
        <Link to="/kids" style={styles.link}>
          Kids'
        </Link>
      </div>
      <div style={styles.rightSection}>
        {user ? (
          <>
            <span style={styles.greeting}>Hi, {user.name}</span>
            <Link to="/wishlist" style={styles.iconLink}>
              <WishlistIcon product={{ id: "navbar" }} isNavbar={true} />
            </Link>
            <CartIcon />
            <button onClick={handleLogout} style={styles.authButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <CartIcon />
            <Link to="/login" style={styles.authButton}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#89B9AD",
    color: "#FFEBD8",
    fontFamily: "SF Pro Display, sans-serif",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#FFEBD8",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#FFEBD8",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  greeting: {
    marginRight: "1rem",
  },
  authButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#C7DCA7",
    color: "#89B9AD",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
  iconLink: {
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
    color: "#FFEBD8",
    textDecoration: "none",
  },
}

export default Navbar

