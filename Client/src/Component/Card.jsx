import React from 'react'
import { TbCategoryPlus } from "react-icons/tb";

const Card = ({ heading, para, color, darkMood }) => {

  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    });
  };

  const colors = {
    yellow: {
      text: darkMood ? "text-yellow-200" : "text-yellow-300",
      button: darkMood
        ? "bg-gradient-to-b from-yellow-500 to-orange-950 border border-orange-800 text-white"
        :"bg-gradient-to-b from-yellow-500 to-[#08000f] border border-[#242424] text-white"
    },
    green: {
      text: darkMood ? "text-green-200" : "text-green-300",
      button: darkMood
        ? "bg-gradient-to-b from-green-500 to-teal-950 border border-teal-800 text-white shadow-lg"
        :"bg-gradient-to-b from-green-500 to-[#08000f] border border-[#242424] text-white"
    }
  };

  // Dynamic class selections based on theme mode
  const outerWrapperClass = darkMood
    ? "bg-gradient-to-b from-indigo-600 to-purple-900 border-indigo-500":"bg-gradient-to-b from-[#3b0365] to-[#08000f] border-[#242424]";

  const innerWrapperClass = darkMood
    ?"bg-gray-900 shadow-inner shadow-indigo-500/10"
    :"bg-[#0b0b0f]";

  const iconBorderClass = darkMood
    ? "border-indigo-600 bg-indigo-900/40 shadow-sm shadow-indigo-900/50"
    : "border-[#242424]";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`relative w-72 h-96 rounded-xl p-[1px] ${outerWrapperClass} border overflow-hidden shadow-xl cursor-pointer`}
    >

      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
          style={{
            top: position.y - 120,
            left: position.x - 120,
            opacity: darkMood ? 1 : 0.8
          }}
        />
      )}

      <div className={`relative z-10 ${innerWrapperClass} p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center transition-colors duration-300`}>

        <p className={`${colors[color].text} text-4xl mb-4 border-2 ${iconBorderClass} p-3 rounded-full transition-colors duration-300`}>
          <TbCategoryPlus />
        </p>

        <h1 className={`text-xl font-semibold mb-4 transition-colors duration-300 text-white`}>
          {heading}
        </h1>

        <p className={`text-sm mb-6 transition-colors duration-300 ${darkMood ? "text-gray-300":"text-gray-400" }`}>
          {para}
        </p>

        <button className={`px-4 py-2 rounded-lg ${colors[color].button} hover:scale-105 active:scale-95 transition-all duration-300`}>
          Explore
        </button>

      </div>

    </div>
  );
}

export default Card