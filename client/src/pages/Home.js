"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { formatPrice } from "../utils/formatPrice"

const trendingProducts = [
  { id: 1, name: "Trendy T-Shirt", price: 1999, image: "/placeholder.svg" },
  { id: 2, name: "Stylish Jeans", price: 3999, image: "/placeholder.svg" },
  { id: 3, name: "Elegant Dress", price: 5999, image: "/placeholder.svg" },
  { id: 4, name: "Cozy Sweater", price: 2999, image: "/placeholder.svg" },
  { id: 5, name: "Chic Blouse", price: 2499, image: "/placeholder.svg" },
]

const Home = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth
      const animationDuration = 30000 // 30 seconds

      const animate = () => {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + 1,
          behavior: "smooth",
        })

        if (scrollContainer.scrollLeft >= scrollWidth / 2) {
          scrollContainer.scrollTo({ left: 0 })
        }
      }

      const intervalId = setInterval(animate, 50)

      return () => clearInterval(intervalId)
    }
  }, [])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to StyleStore</h1>

      <section style={styles.trendingSection}>
        <h2 style={styles.sectionTitle}>Trending Now</h2>
        <div ref={scrollRef} style={styles.scrollContainer}>
          <div style={styles.productContainer}>
            {trendingProducts.concat(trendingProducts).map((product, index) => (
              <Link key={`${product.id}-${index}`} to={`/product/${product.id}`} style={styles.productLink}>
                <div style={styles.product}>
                  <img src={product.image || "/placeholder.svg"} alt={product.name} style={styles.productImage} />
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productPrice}>{formatPrice(product.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.categorySection}>
        <div style={styles.categoryContainer}>
          <Link to="/mens" style={styles.categoryLink}>
            <div style={styles.category}>
              <img src="/placeholder.svg" alt="Shop for Men" style={styles.categoryImage} />
              <h2 style={styles.categoryTitle}>Shop for Men</h2>
            </div>
          </Link>
        </div>
        <div style={styles.categoryContainer}>
          <Link to="/womens" style={styles.categoryLink}>
            <div style={styles.category}>
              <img src="/placeholder.svg" alt="Shop for Women" style={styles.categoryImage} />
              <h2 style={styles.categoryTitle}>Shop for Women</h2>
            </div>
          </Link>
        </div>
      </section>
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
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#89B9AD",
    textAlign: "center",
  },
  trendingSection: {
    marginBottom: "3rem",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#C7DCA7",
  },
  scrollContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  productContainer: {
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  productLink: {
    textDecoration: "none",
    color: "inherit",
  },
  product: {
    display: "inline-block",
    width: "200px",
    marginRight: "1rem",
    verticalAlign: "top",
    whiteSpace: "normal",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  productName: {
    fontSize: "1rem",
    marginTop: "0.5rem",
    marginBottom: "0.25rem",
  },
  productPrice: {
    fontSize: "0.9rem",
    color: "#555",
  },
  categorySection: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3rem",
  },
  categoryContainer: {
    flex: "0 0 48%", // Adjust this value to control the width and space between categories
  },
  categoryLink: {
    textDecoration: "none",
    color: "inherit",
  },
  category: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  categoryImage: {
    width: "100%",
    height: "300px", // Adjust this value to control the height of the category images
    objectFit: "cover",
  },
  categoryTitle: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
}

export default Home

