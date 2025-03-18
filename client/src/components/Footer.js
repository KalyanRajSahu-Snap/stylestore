"use client"

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.copyright}>
            <p>Copyright StyleStore 2025. All rights reserved.</p>
          </div>
          <div style={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src="/placeholder.svg?height=24&width=24" alt="Instagram" style={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src="/placeholder.svg?height=24&width=24" alt="Twitter" style={styles.icon} />
            </a>
            <a href="mailto:contact@stylestore.com" style={styles.socialLink}>
              <img src="/placeholder.svg?height=24&width=24" alt="Email" style={styles.icon} />
            </a>
            <a href="tel:+919876543210" style={styles.socialLink}>
              <img src="/placeholder.svg?height=24&width=24" alt="Phone" style={styles.icon} />
              <span style={styles.phoneNumber}>+91 9876543210</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "#89B9AD",
    color: "#FFEBD8",
    padding: "1.5rem 0",
    marginTop: "2rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  copyright: {
    margin: "0.5rem 0",
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  socialLink: {
    color: "#FFEBD8",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s ease",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  phoneNumber: {
    marginLeft: "0.5rem",
    fontSize: "0.9rem",
  },
}

export default Footer

