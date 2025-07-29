import { useEffect, useState } from "react";

const ParallaxDots = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-white/60 rounded-full animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute top-40 left-32 w-6 h-6 bg-white/40 rounded-full animate-pulse delay-300"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute top-60 right-20 w-5 h-5 bg-white/50 rounded-full animate-pulse delay-700"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute bottom-40 left-20 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute bottom-60 right-40 w-3 h-3 bg-white/60 rounded-full animate-pulse delay-500"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />
      <div
        className="absolute top-1/3 right-10 w-7 h-7 bg-white/35 rounded-full animate-pulse delay-200"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <div
        className="absolute top-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-800"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-600"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
    </div>
  );
};

export default ParallaxDots;
