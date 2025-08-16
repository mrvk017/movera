import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HeadingText = ({ heading }: any) => {
  const headingRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const chars = headingRef.current.querySelectorAll(".char");
    gsap.set(chars, { color: "#fff" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // markers: true, // uncomment to debug scroll positions
      },
    });

    tl.to(chars, {
      color: "#000000",
      stagger: {
        each: 0.06,
        from: "start",
      },
      ease: "none",
    });
  }, []);

  // const text = "REBUILDING YOUR STRENGTH & PEACE OF MIND";
  return (
    <h2
      ref={headingRef}
      className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-8"
    >
      {heading.split("").map((char, i) => (
        <span key={i} className="char inline-block" style={{ color: "#fff" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default HeadingText;
