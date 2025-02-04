import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    // In a real application, you would fetch the product data from an API
    // For this example, we'll use dummy data
    const dummyProduct = {
      id: id,
      name: "Sample Product",
      price: 49.99,
      image: "/placeholder.svg",
      sizes: ["S", "M", "L", "XL"],
      description:
        "This is a sample product description. It would contain details about the product, its materials, care instructions, etc.",
    }
    setProduct(dummyProduct)
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div style={styles.container}>
      <div style={styles.productContainer}>
        <div style={styles.imageContainer}>
          <img src={product.image || "/placeholder.svg"} alt={product.name} style={styles.productImage} />
        </div>
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
          <p style={styles.productDescription}>{product.description}</p>
          <div style={styles.sizeContainer}>
            <p style={styles.sizeTitle}>Available Sizes:</p>
            {product.sizes.map((size) => (
              <button
                key={size}
                style={{
                  ...styles.sizeButton,
                  ...(selectedSize === size ? styles.selectedSize : {}),
                }}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div style={styles.quantityContainer}>
            <p style={styles.quantityTitle}>Quantity:</p>
            <button style={styles.quantityButton} onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span style={styles.quantityDisplay}>{quantity}</span>
            <button style={styles.quantityButton} onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
          <button style={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  productContainer: {
    display: "flex",
    gap: "2rem",
  },
  imageContainer: {
    flex: "1 1 50%",
  },
  productImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  productInfo: {
    flex: "1 1 50%",
  },
  productName: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#89B9AD",
  },
  productPrice: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#555",
  },
  productDescription: {
    marginBottom: "1rem",
    lineHeight: "1.6",
  },
  sizeContainer: {
    marginBottom: "1rem",
  },
  sizeTitle: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  sizeButton: {
    padding: "0.5rem 1rem",
    margin: "0 0.5rem 0.5rem 0",
    border: "1px solid #89B9AD",
    borderRadius: "4px",
    background: "none",
    cursor: "pointer",
  },
  selectedSize: {
    background: "#89B9AD",
    color: "white",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  quantityTitle: {
    fontWeight: "bold",
    marginRight: "1rem",
  },
  quantityButton: {
    padding: "0.5rem 1rem",
    border: "1px solid #89B9AD",
    background: "none",
    cursor: "pointer",
  },
  quantityDisplay: {
    padding: "0.5rem 1rem",
    border: "1px solid #89B9AD",
    margin: "0 0.5rem",
  },
  addToCartButton: {
    padding: "1rem 2rem",
    backgroundColor: "#89B9AD",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  },
}

export default SingleProductPage

