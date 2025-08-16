import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import MouseParallaxDots from "./MouseParallaxDots";
import { motion } from "framer-motion";

const slides = [
  {
    image: "./chair1.png",
    title: "Ergonomic Comfort",
    subtitle: "Wooden Chair",
    buttonText: "Shop Now",
  },
  {
    image: "./chair1.png",
    title: "Premium Quality",
    subtitle: "Ergonomic Chair",
    buttonText: "Shop Now",
  },
  {
    image: "./hotpack.png",
    title: "Relax & Heal",
    subtitle: "Hotpacks",
    buttonText: "Shop Now",
  },
  {
    image: "./hotpack.png",
    title: "Pain Relief",
    subtitle: "Thermal Hotpacks",
    buttonText: "Shop Now",
  },
];

const ShopHero = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section
      ref={swiperRef}
      id="hero-section"
      className="relative h-screen overflow-hidden bg-gray-50"
    >
      <div className="h-full w-full">
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
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-8 md:px-16 lg:px-24">
                {/* Left: Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center md:text-left space-y-6"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    {slide.subtitle}
                  </p>
                  <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors text-lg font-medium tracking-wide">
                    {slide.buttonText}
                  </button>
                </motion.div>

                {/* Right: Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center md:justify-end"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[300px] md:w-[400px] lg:w-[450px] object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>
              <MouseParallaxDots />
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="prev hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full items-center justify-center text-gray-800 hover:bg-white/60 transition-colors z-20">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="next hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full items-center justify-center text-gray-800 hover:bg-white/60 transition-colors z-20">
            <ChevronRight className="w-6 h-6" />
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-3 z-20"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ShopHero;
