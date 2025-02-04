import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const { signup } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }
    try {
      await signup(name, email, password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f0f0f0",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "2rem",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
    },
    input: {
      padding: "1rem",
      marginBottom: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    button: {
      padding: "1rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    loginLink: {
      marginTop: "1rem",
      textAlign: "center",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
  }

  const hoverStyles = {
    button: {
      backgroundColor: "#0069d9",
    },
    link: {
      color: "#0056b3",
    },
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} onMouseEnter={() => {}} onMouseLeave={() => {}}>
          Sign Up
        </button>
      </form>
      <div style={styles.loginLink}>
        Already have an account?{" "}
        <Link to="/login" style={styles.link} onMouseEnter={() => {}} onMouseLeave={() => {}}>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Signup

