import React from "react"
import ProductCard from "../components/ProductCard"

const MensPage = () => {
  const categories = ["T-shirts", "Shirts", "Jeans", "Formals", "Jackets", "Suits", "Sweaters", "Shoes", "Accessories"]

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Men's Collection</h1>
      {categories.map((category) => (
        <section key={category} style={styles.section}>
          <h2 style={styles.sectionTitle}>{category}</h2>
          <div style={styles.productGrid}>
            {[...Array(4)].map((_, index) => (
              <ProductCard
                key={index}
                product={{
                  id: `mens-${category}-${index}`,
                  name: `${category} Item ${index + 1}`,
                  price: 29.99,
                  imageUrl: "/placeholder.svg",
                }}
              />
            ))}
          </div>
          <button style={styles.moreButton}>More --&gt;</button>
        </section>
      ))}
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
  section: {
    marginBottom: "3rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#C7DCA7",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
    marginBottom: "1rem",
  },
  moreButton: {
    backgroundColor: "#89B9AD",
    color: "#FFEBD8",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    float: "right",
  },
}

export default MensPage

