import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Spa massage therapy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/60 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-32 w-6 h-6 bg-white/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-60 right-20 w-5 h-5 bg-white/50 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-60 right-40 w-3 h-3 bg-white/60 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-10 w-7 h-7 bg-white/35 rounded-full animate-pulse delay-200"></div>
        
        {/* Larger decorative circles */}
        <div className="absolute top-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-800"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-600"></div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-12">
            <span className="block">FABULOUS</span>
            <span className="block mt-2">MASSAGE</span>
          </h1>
          
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium tracking-wide">
            Book Now
          </button>
        </div>
      </div>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>

      {/* Curved Speech Bubble */}
      <div className="absolute top-1/4 left-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-gray-700 text-sm font-medium">Relax & Unwind</span>
          </div>
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;