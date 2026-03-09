# AI for Sustainable Commerce

AI for Sustainable Commerce is an AI-powered tool that helps e-commerce platforms automatically generate product categories, SEO tags, and sustainability recommendations using AI.

This system reduces manual catalog effort and improves product discoverability by generating structured metadata for products.

---

## Features

- AI-based product category prediction
- Automatic sub-category suggestion
- Generate 5–10 SEO optimized tags
- Sustainability filter suggestions (plastic-free, recyclable, compostable, etc.)
- Structured JSON output
- Store generated results in MongoDB
- History panel to view previously generated results

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### AI Integration
- Google Gemini API

---

## How It Works

1. User enters **product name** and **product description**.
2. The backend sends the data to **Gemini AI**.
3. AI analyzes the product details and generates:
   - Category
   - Sub-category
   - SEO tags
   - Sustainability filters
4. The result is returned as **structured JSON**.
5. The generated data is stored in **MongoDB**.
6. Users can view previous results in the **history panel**.

---

## Project Structure
