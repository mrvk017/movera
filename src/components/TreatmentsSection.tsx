import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Tilt from "react-parallax-tilt";
import HeadingText from "./HeadingText";

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "STONE MASSAGE",
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "₹150.00",
    },
    {
      title: "STRESS CONTROLLED",
      image:
        "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "₹50.00",
    },
    {
      title: "IMMUNE BOOST",
      image:
        "https://images.pexels.com/photos/5240446/pexels-photo-5240446.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "₹65.00",
    },
    {
      title: "CUPPING TREAT",
      image:
        "https://images.pexels.com/photos/5240447/pexels-photo-5240447.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "₹99.00",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-100/40 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-emerald-50/60 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-200/30 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-emerald-100/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
            Come & Explore
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 tracking-wider mb-8">
            <HeadingText heading="MASSAGE & TREATMENTS" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
            <br />
            Sed lectus vestibulum mattis ulls adipiscing diam donec.
          </p>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center space-x-8">
            <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.02}
              transitionSpeed={700}
              className="rounded-2xl"
            >
              <div key={index} className="text-center group">
                {/* Treatment Image */}
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Treatment Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-light text-gray-700 tracking-wide">
                    {treatment.title}
                  </h3>

                  <p className="text-2xl font-medium text-gray-800">
                    {treatment.price}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
