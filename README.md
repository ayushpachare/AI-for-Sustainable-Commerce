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

Module 1: AI Auto-Category & Tag Generator
Architecture
This module automatically generates product metadata using AI.

Components
1. Frontend (React)
User enters:

Product name

Product description

The data is sent to the backend API.

2. Backend (Node.js + Express)
The backend receives product information and sends it to the Gemini AI model.

3. AI Processing (Gemini API)
The AI analyzes the product details and generates:

Primary category (from predefined ecommerce categories)

Sub-category

5–10 SEO tags

Sustainability filters such as plastic-free, compostable, vegan, recycled

4. Database (MongoDB)
The generated metadata is stored in MongoDB so it can be reused later and displayed in the history panel.

Flow
User Input
↓
Backend API (/generate-tags)
↓
Gemini AI Processing
↓
Structured JSON Response
↓
Store Data in MongoDB
↓
Display Results in Frontend

AI Prompt Design
The prompt is designed to ensure the AI returns structured product metadata.

Example prompt:

Analyze the following product information and generate structured metadata.

Product Name: {productName}
Description: {description}

Return a JSON response with:

1. Primary Category (from common ecommerce categories)
2. Sub Category
3. 5–10 SEO Tags
4. Sustainability Filters (plastic-free, compostable, vegan, recycled)

Ensure the response is clean JSON.
Module 2: AI B2B Proposal Generator
Architecture
This module generates a sustainability-focused B2B proposal for companies based on their budget and requirements.

Components
1. Input Layer

User provides:

Business type

Sustainability goals

Budget limit

2. Backend Processing

The backend sends the input data to the Gemini AI model.

3. AI Proposal Generation

The AI suggests:

Sustainable product mix

Budget allocation within the provided limit

Estimated cost breakdown

Impact positioning summary

4. Structured Output

The proposal is returned in JSON format so it can easily be used by other systems.

Flow
User Input
↓
Backend API (/generate-proposal)
↓
Gemini AI Analysis
↓
Proposal Generation
↓
Structured JSON Output

AI Prompt Design
Example prompt:

Generate a sustainability-focused B2B product proposal.

Business Type: {businessType}
Budget: {budget}
Sustainability Goal: {goal}

Return a structured JSON response containing:

1. Suggested sustainable product mix
2. Budget allocation within the given budget
3. Estimated cost breakdown
4. Impact positioning summary
Module 3: AI Impact Reporting Generator
Architecture
This module calculates the environmental impact of eco-friendly purchases and generates a readable sustainability report.

Components
1. Order Data (MongoDB)

The system retrieves:

Product details

Quantity ordered

Sustainability attributes

2. Logic-based Impact Calculation

Backend logic estimates:

Plastic saved

Carbon emissions avoided

These calculations are based on predefined sustainability rules.

3. AI Summary Generation

The calculated values are sent to Gemini AI to create a human-readable impact report.

4. Database Storage

The impact report is stored along with the order data.

Flow
Order Data
↓
Impact Calculation (Backend Logic)
↓
Send Metrics to Gemini AI
↓
AI Generates Impact Summary
↓
Store Report with Order

AI Prompt Design
Example prompt:

Create a short sustainability impact report using the following data.

Product: {productName}
Plastic Saved: {plasticSaved} grams
Carbon Emissions Avoided: {carbonAvoided} grams CO2
Local Sourcing: {localSource}

Generate a simple human-readable sustainability statement.
Module 4: AI WhatsApp Support Bot
Architecture
This module provides automated customer support through WhatsApp.

Components
1. WhatsApp Integration

The system connects to WhatsApp using APIs such as:

WhatsApp Business API

Twilio WhatsApp API

Customer messages are received through webhooks.

2. Backend Processing

The backend processes the incoming message and identifies the intent of the query.

Possible intents include:

Order status queries

Return policy questions

Refund requests

3. Database Integration

If the user asks about order status, the system fetches real order data from MongoDB.

4. AI Response Generation

Gemini AI generates helpful responses for customer questions.

5. Escalation System

If the issue involves:

Refund requests

Complaints

High-priority problems

The conversation is escalated to a human support agent.

6. Conversation Logging

All messages are stored in the database for monitoring and analytics.

Flow
Customer Message (WhatsApp)
↓
Webhook Request
↓
Backend Processing
↓

If Order Query
→ Fetch Order Data from Database

If Policy Question
→ Generate AI Response

If Refund / Complaint
→ Escalate to Human Support

↓
Send Response to Customer
↓
Store Conversation Logs

AI Prompt Design
Example prompt:

You are a customer support assistant for an eco-friendly ecommerce platform.

User Question: {customerMessage}

Provide a clear and helpful answer.

If the user asks about order status, use available order data.
If the question relates to return policy, explain it simply.
If the issue is related to refunds or complaints, recommend contacting human support.
