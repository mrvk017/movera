import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ParallaxDots from "./ParallaxDots";
import MouseParallaxDots from "./MouseParallaxDots";
import { motion, useAnimation } from "framer-motion";

const slides = [
  {
    image: "/heroimg.png",
    title: "PHYSIOTHERAPY",
    subtitle: "ASSESSSMENT",
    buttonText: "Book Now",
  },
  {
    image: "/heroimg2.png",
    title: "PAIN RELIEF",
    subtitle: "TREATMENT",
    buttonText: "Book Now",
  },
  {
    image: "/heroimg3.png",
    title: "EXPERT",
    subtitle: "CONSULTATION",
    buttonText: "Book Now",
  },
];
const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];
  const totalChars = Math.max(slide.title.length, slide.subtitle.length);
  const swiperRef = useRef<any>(null);
  const [visibleCharCount, setVisibleCharCount] = useState(
    slides[0].title.length
  );

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const heroTop = rect.top;
      const heroHeight = rect.height;
      const scrollProgress = Math.min(
        1,
        Math.max(0, (0 - heroTop + 100) / heroHeight)
      );

      // Calculate visible characters (rounding down)
      const count = Math.floor((1 - scrollProgress) * totalChars);
      setVisibleCharCount(count);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAnimatedText = (text: string) => {
    return [...text].map((char, i) => {
      const totalChars = text.length;
      const isVisible = i < visibleCharCount;
      const progress = 1 - (visibleCharCount - i) / totalChars;

      return (
        <span
          key={i}
          className="inline-block transition-all duration-300 ease-in-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "scale(1)"
              : `scale(${0.8 + progress * 0.2}) translateY(${
                  progress * -10
                }px)`,
            transitionDelay: `${i * 10}ms`,
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section
      ref={swiperRef}
      id="hero-section"
      className="relative h-screen overflow-hidden m-8 rounded-[20px]"
    >
      <div className="h-full w-full rounded-[20px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          className="h-full"
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-12">
                      <span className="block text-5xl md:text-6xl lg:text-7xl">
                        {renderAnimatedText(slide.title)}{" "}
                      </span>
                      <span className="block mt-2">
                        {renderAnimatedText(slide.subtitle)}
                      </span>
                    </h1>
                    <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium tracking-wide">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
              <MouseParallaxDots />
            </SwiperSlide>
          ))}

          {/* Navigation Arrows (Desktop only) */}
          <div className="prev hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="next hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
            <ChevronRight className="w-6 h-6" />
          </div>

          {/* Pagination Dots (Desktop only) */}
          <div className="swiper-pagination hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-3 z-20"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
{
  /* Curved Speech Bubble */
}
{
  /* <div className="absolute top-1/4 left-20 hidden lg:block">
  <div className="relative">
    <div className="w-32 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
      <span className="text-gray-700 text-sm font-medium">Relax & Unwind</span>
    </div>
    <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
  </div>
</div> */
}

{
  /* Floating Decorative Circles */
}
{
  /* <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-10 w-4 h-4 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-40 left-32 w-6 h-6 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-60 right-20 w-5 h-5 bg-white/50 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-40 left-20 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-60 right-40 w-3 h-3 bg-white/60 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/3 right-10 w-7 h-7 bg-white/35 rounded-full animate-pulse delay-200"></div>
                  <div className="absolute top-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-800"></div>
                  <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-600"></div>
                  </div> */
}
