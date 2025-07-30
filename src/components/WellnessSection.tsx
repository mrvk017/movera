import React, { useEffect, useRef, useState } from "react";
import { Heart, Globe, Zap, Smile, MessageCircle, Phone } from "lucide-react";
import RotatingPlayButton from "./RotatingPlayButton";
import YouTube from "react-youtube";
import ParallaxBackground from "./ParallaxBackground";
import HeadingText from "./HeadingText";

const WellnessSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    {
      icon: Heart,
      title: "Relieves Muscle & Joint Pain",
    },
    {
      icon: Globe,
      title: "Reduces Body Stress",
    },
    {
      icon: Zap,
      title: "Eases Chronic Discomfort",
    },
    {
      icon: Smile,
      title: "Lifts Mood & Improves Energy",
    },
  ];


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <ParallaxBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image collage */}
          <div className="relative">
            {/* Main massage image */}
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Spa massage therapy"
                className="w-full h-100 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Essential oils image - top right */}
            <div className="absolute -top-8 -right-8 z-20">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                alt="Essential oils and spa accessories"
                className="w-48 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Spa tools image - bottom left */}
            <div className="absolute -bottom-8 -left-8 z-20">
              <img
                src="https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                alt="Jade roller and spa tools"
                className="w-48 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Decorative spa logo overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <RotatingPlayButton setIsOpen={setIsOpen} />
            </div>
          </div>
          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-20">
              <div className="relative w-full max-w-4xl aspect-video">
                <button
                  className="absolute -top-20 -right-44 text-white text-2xl bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
                <YouTube
                  videoId="clzuRgaV5dw" // Change to your video ID
                  className="w-full h-full"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </div>
            </div>
          )}

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Your Body, Your Healing Partner
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wider mb-6 leading-tight">
                {/* REBUILDING YOUR STRENGTH & PEACE OF MIND */}
                <HeadingText heading='REBUILDING YOUR STRENGTH & PEACE OF MIND' />
                {/* <br /> */}
                {/* <span className="text-emerald-600">MIND</span> */}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Movera, we focus on real healing — not just temporary relief.
                Whether you're recovering from injury, managing pain, or dealing
                with stress, our expert therapists are here to help you move
                better, feel better, and live better.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium tracking-wide text-sm">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide">
                Know More
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
                <a
                  href="https://wa.me/919201147341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Chat Us Anytime
                    </p>
                    <p className="text-sm font-medium text-gray-700 flex items-center">
                      <Phone className="w-3 h-3 mr-1" />
                      +91 9201147341
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;

{
  /* <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"> */
}
{
  /* <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
  <div className="text-emerald-600 font-bold text-sm">MS</div>
  </div> */
}
{
  /* </div> */
}
{
  /* Background decorative elements */
}
{
  /* <div className="absolute inset-0 pointer-events-none"> */
}
{
  /* Flowing organic shapes */
}
{
  /* <div className="absolute top-20 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M50,200 Q100,50 200,100 T350,200 Q300,350 200,300 T50,200"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
          </svg>
        </div> */
}

{
  /* Scattered dots */
}
{
  /* <div className="absolute top-32 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-60"></div>
        <div className="absolute top-64 right-40 w-2 h-2 bg-emerald-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-emerald-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-60 right-60 w-3 h-3 bg-emerald-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-emerald-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 right-20 w-5 h-5 bg-emerald-200 rounded-full opacity-30"></div> */
}
{
  /* </div> */
}
