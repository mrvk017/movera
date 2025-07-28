import React, { useState, useEffect } from 'react';

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (24 hours from now for demo)
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flowing curves */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M400,0 Q300,100 400,200 Q300,300 400,400 L400,0"
              fill="url(#blueGradient)"
            />
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-32 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-40 w-8 h-8 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-60 w-5 h-5 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-32 right-80 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Spa products image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Spa products with candle and essential oils"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating spa elements */}
            <div className="absolute -top-8 -left-8 z-20">
              <img
                src="https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Spa stones and towels"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 z-20">
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Massage therapy"
                className="w-40 h-32 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Decorative spa logo overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-xs">MS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Offer content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wider mb-4 leading-tight">
                OFFER OF THE DAY
              </h2>
              <h3 className="text-2xl font-medium text-gray-700 mb-6">
                35% off on Selected Products
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Gravida cum sociis natoque penatibus et magnis. Lobortis 
                scelerisque fermentum dui faucibus ini enim nunc faucibus. 
                Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at 
                augue.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">
                Hurry up! Deals end up :
              </p>
              
              <div className="flex items-center space-x-4">
                {/* Days */}
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white/50">
                    <span className="text-2xl font-bold text-gray-800">
                      {formatTime(timeLeft.days)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Days</p>
                </div>

                {/* Hours */}
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white/50">
                    <span className="text-2xl font-bold text-gray-800">
                      {formatTime(timeLeft.hours)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Hrs</p>
                </div>

                {/* Minutes */}
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white/50">
                    <span className="text-2xl font-bold text-gray-800">
                      {formatTime(timeLeft.minutes)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Mins</p>
                </div>

                {/* Seconds */}
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white/50">
                    <span className="text-2xl font-bold text-gray-800">
                      {formatTime(timeLeft.seconds)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Secs</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium tracking-wide">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;