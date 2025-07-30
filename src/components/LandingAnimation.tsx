import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const word = "MOVERA";

const LandingAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState("typing"); // typing | deleting | fading
  const [visibleLetters, setVisibleLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (phase === "typing" && currentIndex < word.length) {
      timer = setTimeout(() => {
        setVisibleLetters(prev => {
          const updated = [...prev];
          updated[currentIndex] = word[currentIndex]; // Show char
          return updated;
        });
        setCurrentIndex(prev => prev + 1);
      }, 300);
    } else if (phase === "typing" && currentIndex === word.length) {
      timer = setTimeout(() => {
        setPhase("deleting");
        setCurrentIndex(0);
      }, 800);
    } else if (phase === "deleting" && currentIndex < word.length) {
      timer = setTimeout(() => {
        setVisibleLetters(prev => {
          const updated = [...prev];
          updated[currentIndex] = null; // Hide char
          return updated;
        });
        setCurrentIndex(prev => prev + 1);
      }, 250);
    } else if (phase === "deleting" && currentIndex === word.length) {
      timer = setTimeout(() => {
        setPhase("fading");
      }, 600);
    } else if (phase === "fading") {
      timer = setTimeout(() => onComplete(), 1000);
    }

    return () => clearTimeout(timer);
  }, [phase, currentIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fading" ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex space-x-1 text-white text-[12vw] sm:text-[8vw] md:text-[6vw] font-extrabold tracking-widest">
        <AnimatePresence>
          {visibleLetters.map((char, i) =>
            char ? (
              <motion.span
                key={char + i}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LandingAnimation;
