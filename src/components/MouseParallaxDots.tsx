import React, { useEffect, useState } from "react";

const MouseParallaxDots = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      setPosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dotStyle = (xMult = 1, yMult = 1) => ({
    transform: `translate(${position.x * xMult}px, ${position.y * yMult}px)`,
    transition: "transform 0.05s ease-out",
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-white/60 rounded-full animate-pulse"
        style={dotStyle(30, 30)}
      />
      <div
        className="absolute top-40 left-32 w-6 h-6 bg-white/40 rounded-full animate-pulse delay-300"
        style={dotStyle(50, 40)}
      />
      <div
        className="absolute top-60 right-20 w-5 h-5 bg-white/50 rounded-full animate-pulse delay-700"
        style={dotStyle(40, 60)}
      />
      <div
        className="absolute bottom-40 left-20 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"
        style={dotStyle(60, 30)}
      />
      <div
        className="absolute bottom-60 right-40 w-3 h-3 bg-white/60 rounded-full animate-pulse delay-500"
        style={dotStyle(35, 50)}
      />
      <div
        className="absolute top-1/3 right-10 w-7 h-7 bg-white/35 rounded-full animate-pulse delay-200"
        style={dotStyle(45, 25)}
      />
      <div
        className="absolute top-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-800"
        style={dotStyle(70, 70)}
      />
      <div
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-600"
        style={dotStyle(55, 65)}
      />
    </div>
  );
};

export default MouseParallaxDots;
