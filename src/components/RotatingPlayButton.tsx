import React from "react";
import "../css/RotatingButton.css"; // We'll add extra styles there

const RotatingPlayButton = ({setIsOpen}: any) => {
  return (
    <button onClick={() => setIsOpen(true)}>
      <div className="relative w-32 h-32 group">
        {/* SVG Text Around Circle */}
        <svg
          className="absolute w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M50 50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text fill="#4b7051" fontSize="8" fontFamily="sans-serif">
            <textPath
              href="#circlePath"
              startOffset="0%"
              className="uppercase tracking-wider"
            >
              See our videos - — Movera Healthcare Solutions — -
            </textPath>
          </text>
        </svg>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
            <svg
              className="w-10 h-10 text-[#4b7051] transition-transform duration-700 group-hover:rotate-[360deg]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default RotatingPlayButton;
