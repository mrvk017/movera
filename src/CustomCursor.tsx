// components/CustomCursor.jsx
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const move = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const tag = e.target.tagName.toLowerCase();
      const interactiveTags = ["p", "span", "a", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6"];
      const isHovering = interactiveTags.includes(tag) || e.target.classList.contains("cursor-expand");

      setIsInteractive(isHovering);
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`fixed z-[9999] pointer-events-none transition-all duration-500 ease-out mix-blend-difference`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`rounded-full transition-all duration-500 ease-in-out`}
        style={{
          width: isInteractive ? "120px" : "8px",
          height: isInteractive ? "120px" : "8px",
          backgroundColor: isInteractive ? "rgba(20, 10, 10, 0.5)" : "#3b82f6",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
