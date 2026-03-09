import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import Footer from "./Footer.jsx";

const B2B = ({ darkMood, setdarkMood }) => {
  const [clientType, setClientType] = useState("");
  const [budget, setBudget] = useState("");
  const [requirement, setRequirement] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateProposal = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("https://ai-for-sustainable-commerce.onrender.com/generate-b2b", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          clientType,
          budget,
          requirement
        })
      });

      const data = await res.json();

      if (!res.ok || !data.result) {
        console.error("API Error Response:", data);
        alert(data.message || "Failed to generate B2B proposal.");
        return;
      }

      try {
        const cleanedResult = data.result.replace(/```json/gi, "").replace(/```/g, "").trim();
        const parseData = JSON.parse(cleanedResult);
        console.log("Backend Data : ", parseData);
        setResult(parseData);
      } catch (error) {
        console.error("Error parsing JSON:", error, "Raw data:", data.result);
        alert("Failed to parse AI response. See console for details.");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMood ? "text-gray-900 bg-gray-100":"text-white bg-gradient-to-br from-[#0f0c29] via-[#1a1435] to-[#24243e]" }`}>

      {/* Navbar */}
      <nav className={`flex justify-between items-center px-10 py-4 border-b backdrop-blur-md transition-all duration-500 ${darkMood ? "border-gray-200 bg-white/50": "border-white/10 bg-black/20" }`}>
        <h1 className="text-xl font-semibold">
          AI B2B Proposal Generator
        </h1>

        <button onClick={() => setdarkMood(!darkMood)} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition active:scale-95 duration-300 ${darkMood ?"border-gray-300 hover:bg-gray-100 text-gray-800 bg-white shadow-sm": "border-white/20 hover:bg-white/10 text-white" }`}>
          {darkMood ? <><IoIosSunny /> Light</> : <><FaMoon /> Dark</>}
        </button>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-24 px-10 py-20">

        {/* LEFT CARD */}
        <div className={`w-full md:w-[500px] rounded-2xl p-10 shadow-2xl border transition-all duration-500 backdrop-blur-xl ${darkMood ? "bg-white border-gray-100 shadow-gray-200": "bg-white/5 border-white/10" }`}>

          <h2 className="text-2xl font-bold mb-6">
            Generate B2B Proposal
          </h2>

          <div className="space-y-5">

            <div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${darkMood ?"text-gray-600": "text-gray-400" }`}>Client Type</p>
              <input
                type="text"
                placeholder="Eco Friendly Office"
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 border ${darkMood ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400":"bg-black/40 border-white/10 text-white placeholder-gray-500" }`}
              />
            </div>

            <div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${darkMood ?"text-gray-600": "text-gray-400" }`}>Budget</p>
              <input
                type="number"
                placeholder="50000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 border ${darkMood ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400":"bg-black/40 border-white/10 text-white placeholder-gray-500" }`}
              />
            </div>

            <div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${darkMood ?  "text-gray-600":"text-gray-400" }`}>Requirement</p>
              <textarea
                rows={4}
                placeholder="Sustainable office kit"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 border ${darkMood ?  "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400":"bg-black/40 border-white/10 text-white placeholder-gray-500" }`}
              />
            </div>

            {/* Cute Button */}
            <button
              onClick={generateProposal}
              disabled={loading}
              className={`mt-4 w-full px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 shadow-lg font-medium text-white ${loading
                  ? "opacity-70 cursor-not-allowed bg-gray-500"
                  : darkMood
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-gray-900/20"
                    :"bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-500/30 shadow-purple-500/20"
                     
                }`}
            >
              {loading ? "Generating..." : "Generate Proposal"}
            </button>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={`w-full md:w-[540px] rounded-2xl p-10 shadow-2xl space-y-8 border transition-all duration-500 backdrop-blur-xl ${darkMood ? "bg-white border-gray-100 shadow-gray-200":"bg-white/5 border-white/10" }`}>

          <h2 className="text-2xl font-bold">Result</h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className={`text-lg font-medium animate-pulse ${darkMood ? "text-purple-700":"text-purple-300" }`}>Generating Proposal...</p>
            </div>
          ) : result ? (
            <>
              {/* Product Suggestions */}
              <div>
                <h3 className={`font-semibold mb-3 ${darkMood ?  "text-indigo-600":"text-purple-300"}`}>
                  Product Suggestions
                </h3>

                <div className="space-y-3 lg:max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  {result.products?.map((product, index) => (
                    <div key={index} className={`p-4 rounded-lg border transition-all duration-300 ${darkMood ?"bg-gray-50 border-gray-200 text-gray-700": "bg-white/5 border-white/10 text-gray-300" }`}>
                      <h4 className={`font-semibold ${darkMood ?"text-gray-900": "text-white"}`}>{product.name}</h4>
                      <p>Qty: {product.qty}</p>
                      <p>Cost: ₹{product.cost}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Allocation */}
              <div>
                <h3 className={`font-semibold mb-2 ${darkMood ? "text-indigo-600": "text-purple-300"  }`}>
                  Budget Allocation
                </h3>

                <div className={`space-y-1 ${darkMood ? "text-gray-600":"text-gray-300" }`}>
                  {result.products?.map((product, index) => (
                    <p key={index}>{product.name} → ₹{product.qty * product.cost}</p>
                  ))}
                </div>
              </div>

              {/* Cost Breakdown */}
              <div>
                <h3 className={`font-semibold mb-2 ${darkMood ?  "text-indigo-600":"text-purple-300"}`}>
                  Cost Breakdown
                </h3>

                <div className={`space-y-1 ${darkMood ?"text-gray-600": "text-gray-300" }`}>
                  <p>Total Budget: ₹{budget || 0}</p>
                  <p>Total Cost: ₹{result.totalCost || 0}</p>
                  <p>Remaining: ₹{Math.max(0, (budget || 0) - (result.totalCost || 0))}</p>
                </div>
              </div>

              {/* Impact Summary */}
              <div>
                <h3 className={`font-semibold mb-2 ${darkMood ? "text-indigo-600":"text-purple-300" }`}>
                  Impact Summary
                </h3>

                <p className={`leading-relaxed ${darkMood ? "text-gray-600":"text-gray-300" }`}>
                  {result.impact}
                </p>
              </div>

              {/* Json Box  */}
              <div className="mt-6">
                <h3 className={`text-lg font-semibold mb-2 ${darkMood ? "text-gray-900":"text-white" }`}>
                  JSON Output
                </h3>

                <pre className={`p-4 rounded-lg text-sm overflow-x-auto border transition-colors duration-300 ${darkMood ?"bg-gray-50 border-gray-200 text-gray-800": "bg-black/40 border-white/20 text-white" }`}>
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            </>
          ) : (
            <div className={`flex flex-col items-center justify-center h-64 text-center ${darkMood ? "text-gray-500":"text-gray-400" }`}>
              <p>Fill the form and click "Generate Proposal" to see insights.</p>
            </div>
          )}

        </div>

      </div>



      <Footer darkMood={darkMood} />
    </div>
  );
};

export default B2B;