import React from 'react';
import { ArrowUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "REIKI THERAPY",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Odio facilisis mauris sit amet massa vitae tortor condimentum urna nunc...",
      duration: "30 MINS",
      price: "$39"
    },
    {
      title: "BODY MASSAGE",
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Volutpat commodo sed odio pellentesque diam egestas egestas fringilla amet.",
      duration: "1 HR",
      price: "$49"
    },
    {
      title: "CRANIOSACRAL THERAPY",
      image: "https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor quis viverra.",
      duration: "45 MINS",
      price: "$32"
    },
    {
      title: "MYOFASCIAL MASSAGE",
      image: "https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Sed turpis tincidunt id aliquet risus feugiat in malesuada fames ac...",
      duration: "45 MINS",
      price: "$20"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-100/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-50/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Affordable Spa Service
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-wider mb-8">
            COMPLETE WELLNESS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Eros donec ac odio tempor. Id interdum velit laoreet id donec 
            ultrices tincidunt arcu non. Viverra orci sagittis volutpat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              {/* Service Image */}
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Arrow icon for third service */}
                {index === 2 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <ArrowUp className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {service.description}
                </p>

                {/* Duration and Price */}
                <div className="flex justify-between items-center text-sm text-gray-500 px-4">
                  <div>
                    <span className="uppercase tracking-wider">Duration : </span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div>
                    <span className="uppercase tracking-wider">Price : </span>
                    <span className="font-medium">{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium tracking-wide">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;