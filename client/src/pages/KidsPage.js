import React from "react"
import ProductCard from "../components/ProductCard"

const KidsPage = () => {
  const categories = {
    boys: ["T-shirts", "Shirts", "Dresses", "Shoes", "Winter Clothing"],
    girls: ["Dresses", "Tops", "Clothing Sets", "Footwear", "Accessories"],
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kids' Collection</h1>

      <section style={styles.genderSection}>
        <h2 style={styles.genderTitle}>Boys</h2>
        {categories.boys.map((category) => (
          <div key={`boys-${category}`} style={styles.section}>
            <h3 style={styles.sectionTitle}>{category}</h3>
            <div style={styles.productGrid}>
              {[...Array(4)].map((_, index) => (
                <ProductCard
                  key={index}
                  product={{
                    id: `kids-boys-${category}-${index}`,
                    name: `Boys ${category} Item ${index + 1}`,
                    price: 24.99,
                    imageUrl: "/placeholder.svg",
                  }}
                />
              ))}
            </div>
            <button style={styles.moreButton}>More --&gt;</button>
          </div>
        ))}
      </section>

      <section style={styles.genderSection}>
        <h2 style={styles.genderTitle}>Girls</h2>
        {categories.girls.map((category) => (
          <div key={`girls-${category}`} style={styles.section}>
            <h3 style={styles.sectionTitle}>{category}</h3>
            <div style={styles.productGrid}>
              {[...Array(4)].map((_, index) => (
                <ProductCard
                  key={index}
                  product={{
                    id: `kids-girls-${category}-${index}`,
                    name: `Girls ${category} Item ${index + 1}`,
                    price: 24.99,
                    imageUrl: "/placeholder.svg",
                  }}
                />
              ))}
            </div>
            <button style={styles.moreButton}>More --&gt;</button>
          </div>
        ))}
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
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#89B9AD",
  },
  genderSection: {
    marginBottom: "3rem",
  },
  genderTitle: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#89B9AD",
  },
  section: {
    marginBottom: "2rem",
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

export default KidsPage

