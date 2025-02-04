const express = require("express")
const router = express.Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }
    user = new User({ name, email, password })
    await user.save()
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.status(201).json({ user: { id: user._id, name: user.name, email: user.email }, token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.json({ user: { id: user._id, name: user.name, email: user.email }, token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router

