import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const translate = (x: number, y: number, factor = 30) => {
    return `translate(${x * factor}px, ${y * factor}px)`;
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-99">
      {/* Flowing organic shape 1 */}
      <div
        className="absolute top-20 left-0 w-96 h-96 opacity-10 transition-transform duration-100"
        style={{ transform: translate(mousePos.x, mousePos.y, 20) }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M50,200 Q100,50 200,100 T350,200 Q300,350 200,300 T50,200"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* NEW organic shape */}
      <div
        className="absolute bottom-20 right-10 w-96 h-96 opacity-10 transition-transform duration-100"
        style={{ transform: translate(-mousePos.x, -mousePos.y, 25) }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M200,50 C300,150 300,250 200,350 C100,250 100,150 200,50"
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Parallax dots */}
      {[
        { top: "top-32", left: "right-20", size: 3, opacity: 60, factor: 40 },
        { top: "top-64", left: "right-40", size: 2, opacity: 50, factor: 30 },
        { top: "bottom-40", left: "left-32", size: 4, opacity: 40, factor: 50 },
        {
          top: "bottom-60",
          left: "right-60",
          size: 3,
          opacity: 60,
          factor: 25,
        },
        { top: "top-1/2", left: "left-20", size: 2, opacity: 50, factor: 35 },
        {
          top: "bottom-32",
          left: "right-20",
          size: 5,
          opacity: 30,
          factor: 20,
        },
      ].map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot.top} ${dot.left} w-${dot.size} h-${dot.size} bg-emerald-300 rounded-full opacity-${dot.opacity} transition-transform duration-75`}
          style={{ transform: translate(mousePos.x, mousePos.y, dot.factor) }}
        ></div>
      ))}
    </div>
  );
};
export default ParallaxBackground;
