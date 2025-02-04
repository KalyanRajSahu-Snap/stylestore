import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await login(email, password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  const hoverStyles = {
    button: {
      ":hover": {
        backgroundColor: "#7AA89D",
      },
    },
    link: {
      ":hover": {
        color: "#7AA89D",
      },
    },
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={{ ...styles.button, ...hoverStyles.button }}>
          Login
        </button>
      </form>
      <div style={styles.links}>
        <Link to="/forgot-password" style={{ ...styles.link, ...hoverStyles.link }}>
          Forgot Password?
        </Link>
        <Link to="/signup" style={{ ...styles.link, ...hoverStyles.link }}>
          Sign Up
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#FFEBD8",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "2rem auto",
  },
  title: {
    fontSize: "2rem",
    color: "#89B9AD",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    margin: "0.5rem 0",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #C7DCA7",
    backgroundColor: "#FFFFFF",
  },
  button: {
    margin: "1rem 0",
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#89B9AD",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "1rem",
  },
  link: {
    color: "#89B9AD",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
}

export default Login

