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

# AI Auto-Category & Tag Generator

## Overview

The **AI Auto-Category & Tag Generator** is a module that automatically generates product metadata using AI.
It analyzes product details and returns structured information such as category, sub-category, SEO tags, and sustainability filters.

This system helps e-commerce platforms automatically organize products and improve search visibility.

---

# Architecture

This module follows a **full-stack architecture** using:

* **Frontend:** React.js
* **Backend:** Node.js + Express.js
* **AI Processing:** Gemini API
* **Database:** MongoDB

---

# System Components

## 1. Frontend (React)

The frontend provides an interface where users enter product details.

User inputs:

* Product Name
* Product Description

These inputs are sent to the backend API for AI processing.

---

## 2. Backend (Node.js + Express)

The backend server:

1. Receives product data from the frontend
2. Sends the data to the Gemini AI model
3. Processes the AI response
4. Stores the generated metadata in MongoDB
5. Returns the structured data to the frontend

API Endpoint:

```
POST /generate-tags
```

---

## 3. AI Processing (Gemini API)

The Gemini AI model analyzes the product information and generates:

* **Primary Category** (from predefined ecommerce categories)
* **Sub Category**
* **5–10 SEO Tags**
* **Sustainability Filters**

  * plastic-free
  * compostable
  * vegan
  * recycled

The AI returns a **structured JSON response**.

---

## 4. Database (MongoDB)

The generated metadata is stored in **MongoDB**.

This allows:

* Reusing previously generated results
* Displaying product history in the **History Panel**
* Avoiding repeated AI calls for the same data

---

# System Flow

```
User Input (Product Name + Description)
        ↓
Frontend sends request to Backend
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
```

---

# AI Prompt Design

The AI prompt ensures the response is **clean structured JSON**.

Example Prompt:

```
Analyze the following product information and generate structured metadata.

Product Name: {productName}
Description: {description}

Return a JSON response with:

1. Primary Category (from common ecommerce categories)
2. Sub Category
3. 5–10 SEO Tags
4. Sustainability Filters (plastic-free, compostable, vegan, recycled)

Ensure the response is clean JSON.
```

---

# Features

* AI-based product categorization
* Automatic SEO tag generation
* Sustainability product filtering
* MongoDB storage for history
* Structured JSON responses
* Full-stack architecture

---

# Tech Stack

Frontend

* React.js

Backend

* Node.js
* Express.js

AI

* Gemini API

Database

* MongoDB

---

# Future Improvements

* Admin dashboard for product analytics
* AI product description generation
* Bulk product processing
* Advanced sustainability scoring

---
---

# AI B2B Proposal Generator

## Overview

The **AI B2B Proposal Generator** is a module that automatically generates a sustainability-focused business proposal for companies.

Based on the company's **business type, sustainability goals, and budget**, the system uses AI to recommend a suitable mix of eco-friendly products and provide a structured proposal.

This helps businesses adopt sustainable practices while staying within their budget.

---

# Architecture

This module follows a **backend-driven AI architecture** where business inputs are analyzed by an AI model to generate a structured proposal.

Technologies used:

* **Backend:** Node.js + Express.js
* **AI Processing:** Gemini API
* **Output Format:** Structured JSON

---

# System Components

## 1. Input Layer

The user provides the following information:

* **Business Type** (e.g., corporate office, restaurant, retail store)
* **Sustainability Goals** (e.g., reduce plastic usage, adopt eco-friendly products)
* **Budget Limit**

These inputs are sent to the backend for processing.

---

## 2. Backend Processing

The backend server:

1. Receives the user input
2. Sends the information to the Gemini AI model
3. Processes the AI response
4. Returns the structured proposal to the frontend

API Endpoint:

```
POST /generate-proposal
```

---

## 3. AI Proposal Generation (Gemini)

The Gemini AI analyzes the provided information and generates a sustainability proposal including:

* **Suggested Sustainable Product Mix**
* **Budget Allocation within the provided limit**
* **Estimated Cost Breakdown**
* **Impact Positioning Summary** (environmental benefit explanation)

The AI ensures the proposal is practical and aligned with sustainability goals.

---

## 4. Structured Output

The generated proposal is returned in **JSON format**, which allows:

* Easy integration with frontend dashboards
* Reusability in other systems
* Further analysis or reporting

---

# System Flow

```
User Input
      ↓
Backend API (/generate-proposal)
      ↓
Gemini AI Analysis
      ↓
Proposal Generation
      ↓
Structured JSON Output
```

---

# AI Prompt Design

The prompt is structured so the AI returns a **clear and usable proposal format**.

Example Prompt:

```
Generate a sustainability-focused B2B product proposal.

Business Type: {businessType}
Budget: {budget}
Sustainability Goal: {goal}

Return a structured JSON response containing:

1. Suggested sustainable product mix
2. Budget allocation within the given budget
3. Estimated cost breakdown
4. Impact positioning summary
```

---

# Features

* AI-generated sustainability proposals
* Budget-aware product recommendations
* Structured JSON output for easy integration
* Automated eco-friendly product suggestions

---

# Possible Future Improvements

* Save generated proposals in a database
* Generate downloadable PDF proposals
* Add carbon footprint impact calculation
* Add industry-specific proposal templates

---
---

# AI Impact Reporting Generator

## Overview

The **AI Impact Reporting Generator** calculates the environmental impact of eco-friendly purchases and generates a readable sustainability report.

This module analyzes order data, estimates environmental benefits such as **plastic saved and carbon emissions avoided**, and then uses AI to convert these metrics into a clear human-readable sustainability report.

---

# Architecture

This module combines **data retrieval, backend impact calculations, and AI-based report generation**.

Technologies used:

* **Backend:** Node.js + Express.js
* **Database:** MongoDB
* **AI Processing:** Gemini API

---

# System Components

## 1. Order Data (MongoDB)

The system retrieves order information stored in the database, including:

* Product details
* Quantity ordered
* Sustainability attributes

This data is used to calculate the environmental impact of the purchase.

---

## 2. Logic-Based Impact Calculation

The backend performs calculations using predefined sustainability rules.

Estimated metrics include:

* **Plastic Saved**
* **Carbon Emissions Avoided**

Example logic may include:

* Replacing plastic products with eco-friendly alternatives
* Estimating carbon savings based on sustainable materials
* Calculating environmental benefit based on product quantity

---

## 3. AI Summary Generation

After calculating the impact metrics, the backend sends this data to the **Gemini AI model**.

The AI converts the technical metrics into a **human-readable sustainability report** that is easy for businesses or customers to understand.

---

## 4. Database Storage

The generated sustainability report is stored in **MongoDB** along with the related order data.

This allows:

* Viewing impact reports later
* Tracking sustainability performance
* Generating analytics or dashboards

---

# System Flow

```id="s9dkl2"
Order Data (MongoDB)
        ↓
Impact Calculation (Backend Logic)
        ↓
Send Metrics to Gemini AI
        ↓
AI Generates Impact Summary
        ↓
Store Report with Order
```

---

# AI Prompt Design

The prompt ensures that the AI generates a **clear and concise sustainability report**.

Example Prompt:

```id="t7pl9x"
Create a short sustainability impact report using the following data.

Product: {productName}
Plastic Saved: {plasticSaved} grams
Carbon Emissions Avoided: {carbonAvoided} grams CO2
Local Sourcing: {localSource}

Generate a simple human-readable sustainability statement.
```

---

# Features

* Automatic sustainability impact calculation
* AI-generated readable sustainability reports
* Integration with order data
* Environmental metrics tracking
* MongoDB storage for reporting history

---

# Possible Future Improvements

* Carbon footprint visualization dashboard
* Detailed sustainability analytics
* Downloadable PDF impact reports
* Company-wide sustainability performance tracking

---
---

# AI WhatsApp Support Bot

## Overview

The **AI WhatsApp Support Bot** provides automated customer support through WhatsApp for an eco-friendly ecommerce platform.

The system receives customer queries through WhatsApp, processes them using backend logic and AI, and returns helpful responses. For complex issues such as refunds or complaints, the system escalates the conversation to a human support agent.

---

# Architecture

This module integrates **WhatsApp messaging APIs, backend processing, AI response generation, and database integration**.

Technologies used:

* **Backend:** Node.js + Express.js
* **Messaging Integration:** WhatsApp Business API / Twilio WhatsApp API
* **AI Processing:** Gemini API
* **Database:** MongoDB

---

# System Components

## 1. WhatsApp Integration

The system connects to WhatsApp using messaging APIs such as:

* **WhatsApp Business API**
* **Twilio WhatsApp API**

Customer messages are received through **webhooks**, which send incoming message data to the backend server.

---

## 2. Backend Processing

The backend receives the incoming message and analyzes the **intent of the query**.

Possible intents include:

* Order status queries
* Return policy questions
* Refund requests
* General customer support queries

The backend determines how the request should be handled.

---

## 3. Database Integration

For queries related to **order status**, the system retrieves real order data from **MongoDB**.

This allows the bot to provide accurate information such as:

* Order confirmation
* Shipping status
* Delivery updates

---

## 4. AI Response Generation

For general support questions, the system sends the user query to **Gemini AI**.

The AI generates helpful responses for:

* Product questions
* Sustainability information
* Return policies
* General customer assistance

---

## 5. Escalation System

Certain issues require human intervention.

If the query involves:

* **Refund requests**
* **Customer complaints**
* **High-priority support issues**

The conversation is **escalated to a human support agent** for further assistance.

---

## 6. Conversation Logging

All conversations are stored in **MongoDB** for:

* Monitoring customer interactions
* Support analytics
* Improving customer service quality

---

# System Flow

```id="c8f3nq"
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
```

---

# AI Prompt Design

The prompt ensures the AI responds like a helpful customer support assistant.

Example Prompt:

```id="u5k7pz"
You are a customer support assistant for an eco-friendly ecommerce platform.

User Question: {customerMessage}

Provide a clear and helpful answer.

If the user asks about order status, use available order data.
If the question relates to return policy, explain it simply.
If the issue is related to refunds or complaints, recommend contacting human support.
```

---

# Features

* Automated WhatsApp customer support
* AI-powered response generation
* Order status retrieval from MongoDB
* Smart query intent handling
* Human escalation system
* Conversation logging for analytics

---

# Possible Future Improvements

* Multilingual customer support
* Sentiment analysis for customer messages
* AI-powered refund automation
* Customer support dashboard
* Voice message support
