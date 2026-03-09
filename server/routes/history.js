import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

router.get("/history", async (req, res) => {
  try {

    const history = await Product.find().sort({ createdAt: -1 })

    res.json({
      success: true,
      data: history
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching history"
    })
  }
})

export default router 