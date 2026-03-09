import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import Footer from "./Footer";

const Tag = ({ darkMood, setdarkMood }) => {

  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [openIndex, setOpenIndex] = useState(null)

  const toggleHistory = (index) => {
  if (openIndex === index) {
    setOpenIndex(null)
  } else {
    setOpenIndex(index)
  }
}

useEffect(() => {

  const fetchHistory = async () => {

    const res = await fetch("http://localhost:5000/generate-tags/history")

    const data = await res.json()

    setHistory(data.data)

  }

  fetchHistory()

}, [])

  const generateTags = async () => {
    setLoading(true);
    setResult({});

    try {
      const res = await fetch("http://localhost:5000/generate-tags", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          productName,
          description
        })
      });

      const data = await res.json();

      if (!res.ok || !data.result) {
        console.error("API Error Response:", data);
        alert(data.message || "Failed to generate AI tags.");
        return;
      }

      try {
        // AI models often return JSON wrapped in markdown code blocks
        const cleanedResult = data.result.replace(/```json/gi, "").replace(/```/g, "").trim();
        const parseData = JSON.parse(cleanedResult);
        console.log("Backend Data : ", parseData)
        setResult(parseData)
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
  }

  useEffect(() => {
    console.log("Updated Result:", result)
  }, [result])

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMood ?"text-gray-900 bg-gray-100" : "text-white bg-gradient-to-br from-[#0f0c29] via-[#1a1435] to-[#24243e]" }`}>

      {/* Navbar */}
      <nav className={`flex justify-between items-center px-10 py-4 border-b backdrop-blur-md transition-all duration-500 ${darkMood ? "border-gray-200 bg-white/50":"border-white/10 bg-black/20" }`}>
        <p className="text-xl font-semibold tracking-wide">
          AI Auto-Category & Tag Generator
        </p>

        <button onClick={() => setdarkMood(!darkMood)} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition active:scale-95 duration-300 ${darkMood ? "border-gray-300 hover:bg-gray-100 text-gray-800 bg-white shadow-sm":"border-white/20 hover:bg-white/10 text-white"}`}>
          {darkMood ? <><FaMoon /> Dark</>:<><IoIosSunny /> Light</> }
        </button>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-start gap-38 px-10 py-20">

        {/* LEFT CARD */}
        <div className={`w-full md:w-[540px] h-[560px] rounded-2xl p-8 shadow-2xl border transition-all duration-500 backdrop-blur-xl ${darkMood ? "bg-white border-gray-100 shadow-gray-200":"bg-white/5 border-white/10" }`}>

          <h1 className="text-2xl font-bold mb-6">
            AI Product Category Generator
          </h1>

          <div className="space-y-5">

            <div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${darkMood ? "text-gray-600":"text-gray-400" }`}>Product Name</p>
              <input
                type="text"
                placeholder="Bamboo Toothbrush"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 border ${darkMood ?"bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400": "bg-black/40 border-white/10 text-white placeholder-gray-500" }`}
              />
            </div>

            <div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${darkMood ?"text-gray-600": "text-gray-400" }`}>Product Description</p>
              <textarea
                rows={7}
                placeholder="Eco friendly toothbrush made from bamboo"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 border ${darkMood ?"bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400": "bg-black/40 border-white/10 text-white placeholder-gray-500" }`}
              />
            </div>

            {/* Cute Button */}
            <button onClick={generateTags} disabled={loading} className={`mt-4 w-full px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 shadow-lg font-medium text-white ${loading
                ? "opacity-70 cursor-not-allowed bg-gray-500"
                : darkMood
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-gray-900/20"
                  :"bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-500/30 shadow-purple-500/20"
                  
              }`}>
              {loading ? "Generating..." : "Generate AI Tags"}
            </button>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div>
          <div className={`w-full md:w-[540px] rounded-2xl p-8 shadow-2xl border transition-all duration-500 backdrop-blur-xl ${darkMood ? "bg-white border-gray-100 shadow-gray-200":"bg-white/5 border-white/10" }`}>

          <h1 className="text-2xl font-bold mb-6">
            Result
          </h1>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className={`text-lg font-medium animate-pulse ${darkMood ?"text-purple-700": "text-purple-300" }`}>Generating Tags...</p>
            </div>
          ) : (
            <>
              <p className="mb-2">
                <span className={`font-semibold transition-colors duration-300 ${darkMood ? "text-indigo-600":"text-purple-400" }`}>Category:</span> {result?.category}
              </p>

              <p className="mb-4">
                <span className={`font-semibold transition-colors duration-300 ${darkMood ? "text-indigo-600":"text-purple-400" }`}>Sub Category:</span> {result?.subCategory}
              </p>

              {/* SEO TAGS */}
              <h3 className="font-semibold mb-3">SEO Tags</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {result?.seoTags && result.seoTags.length > 0 ? (
                  result.seoTags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm hover:scale-105 transition-all outline outline-1 ${darkMood ? "bg-indigo-50 text-indigo-700 outline-indigo-200":"bg-purple-900/30 text-purple-300 outline-purple-500/30" }`}>
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className={`text-sm italic ${darkMood ? "text-gray-500":"text-gray-400" }`}>No tags generated yet.</span>
                )}
              </div>

              {/* FILTERS */}
              <h3 className="font-semibold mb-3">
                Sustainability Filters
              </h3>

              <div className="flex flex-wrap gap-2">
                {result?.sustainabilityFilters && result.sustainabilityFilters.length > 0 ? (
                  result.sustainabilityFilters.map((filter, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm hover:scale-105 transition-all outline outline-1 ${darkMood ? "bg-emerald-50 text-emerald-700 outline-emerald-200":"bg-green-900/30 text-green-300 outline-green-500/30" }`}>
                      {filter}
                    </span>
                  ))
                ) : (
                  <span className={`text-sm italic ${darkMood ?"text-gray-500": "text-gray-400" }`}>No filters generated yet.</span>
                )}
              </div>
            </>
          )}

        </div>

        {/* History  */}

<div className={`mt-6 w-full md:w-[540px] rounded-2xl p-6 border transition-all duration-500 ${
darkMood
  ? "bg-white border-gray-200 shadow-sm"
  :"bg-white/5 border-white/10"
}`}>

<h2 className="text-lg font-semibold mb-4">History</h2>

<ul className="space-y-2">

{history.map((item,index)=>(
  <li key={index}>

    {/* Product Button */}
    <button
      onClick={()=>toggleHistory(index)}
      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
      darkMood
        ? "hover:bg-gray-100":"hover:bg-white/10"
      }`}
    >
      {item.productName}
    </button>

    {/* Toggle Content */}
    {openIndex === index && (
      <div className={`mt-2 p-4 rounded-lg border ${
      darkMood
        ? "bg-gray-50 border-gray-200":"bg-black/30 border-white/10"
        
      }`}>

        <p className="mb-1">
          <span className="font-semibold">Category:</span> {item.category}
        </p>

        <p className="mb-3">
          <span className="font-semibold">SubCategory:</span> {item.subCategory}
        </p>

        {/* SEO TAGS */}
        <div className="mb-3">
          <p className="font-semibold mb-1">SEO Tags</p>

          <div className="flex flex-wrap gap-2">
            {item.seoTags?.map((tag,i)=>(
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-full ${
                darkMood
                  ? "bg-indigo-100 text-indigo-700":"bg-purple-900/40 text-purple-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* FILTERS */}
        <div>
          <p className="font-semibold mb-1">Filters</p>

          <div className="flex flex-wrap gap-2">
            {item.sustainabilityFilters?.map((f,i)=>(
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-full ${
                darkMood
                  ?"bg-emerald-100 text-emerald-700": "bg-green-900/40 text-green-300"
                  
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

      </div>
    )}

  </li>
))}

</ul>

</div>

        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Tag;