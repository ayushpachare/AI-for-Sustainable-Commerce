import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import Product from "../models/Product.js"

dotenv.config();

const router = express.Router();
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

console.log("tagRoutes loaded");

router.post("/generate-tags", async (req, res) => {
  try {
    const { productName, description } = req.body;

    console.log("Product Name:", productName);
    console.log("Product Description:", description);

    const prompt = `
You are an e-commerce AI assistant.

Product Name: ${productName}
Description: ${description}

Return JSON in this format:

{
 "category": "",
 "subCategory": "",
 "seoTags": [],
 "sustainabilityFilters": []
}

Rules:
- Generate 10 SEO tags
- Generate 5 sustainability filters if applicable
- Return structured JSON output
`;

    const response = await genAI.models.generateContent({ 
      model: "gemini-3-flash-preview",
      contents: prompt
    });

    const text = response.text;

    const cleaned = text
  .replace(/```json/gi, "")
  .replace(/```/g, "")
  .trim();

  const aiData = JSON.parse(cleaned);
    console.log("AI Response:", aiData);

    const product = new Product({
      productName,
      description,
      category : aiData.category,
      subCategory : aiData.subCategory,
      seoTags : aiData.seoTags,
      sustainabilityFilters : aiData.sustainabilityFilters
    })

    await product.save();

    res.json({
      success: true,
      result: text
    });

  } catch (error) {
    console.log("AI Error:", error);
    res.status(500).json({
      message: "AI error"
    });
  }
});

router.post("/generate-b2b", async (req, res) => {
  try {
    const { clientType, budget, requirement } = req.body;

    console.log("Client Type:", clientType);
    console.log("Budget:", budget);
    console.log("Requirement:", requirement);

    const prompt = `
You are an expert B2B AI consultant.
Generate a structured B2B proposal.

Client Type: ${clientType}
Budget: ${budget}
Requirement: ${requirement}

Return exact JSON in this format:

{
  "products": [
    { "name": "", "qty": 0, "cost": 0 }
  ],
  "totalCost": 0,
  "impact": ""
}

Rules:
- Generate 2-4 product suggestions that fit the client's requirement.
- Quantities and individual costs should roughly multiply to product total cost.
- The 'totalCost' must be the sum of all product costs and must not exceed the provided budget.
- 'impact' must be a concise, professional 1-2 sentence summary of how this benefits the client.
- Return ONLY valid JSON without markdown wrapping or extra text.
`;

    const response = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });

    const text = response.text;

    console.log("B2B AI Response:", text);

    res.json({
      success: true,
      result: text
    });

  } catch (error) {
    console.log("B2B AI Error:", error);
    res.status(500).json({
      message: "AI error"
    });
  }
});

export default router; 