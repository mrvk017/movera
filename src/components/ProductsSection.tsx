import React from "react";
import Tilt from "react-parallax-tilt";
import HeadingText from "./HeadingText";

const ProductsSection = () => {
  const products = [
    {
      title: "ALOE VERA MASSAGE CREAM",
      image:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$7.86 - $7.96",
    },
    {
      title: "FACIAL MASSAGE CREAM",
      image:
        "https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$8.20 - $8.69",
    },
    {
      title: "GLOW FACIAL CREAM",
      image:
        "https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$8.95 - $9.20",
    },
    {
      title: "HAIR MASSAGE OIL",
      image:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$6.25 - $6.45",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-100/30 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-emerald-200/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-50/40 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-emerald-100/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
              Result Driven Products
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 tracking-wider mb-6">
              <HeadingText heading="CHEMICAL FREE COLLECTIONS" />
            </h2>
            <p className="text-gray-600 max-w-lg leading-relaxed">
              Magna etiam tempor orci eu lobortis elementum nibh tellus
              molestie. Vitae justo eget magna fermentum iaculis.
            </p>
          </div>

          {/* View All Products Button */}
          <div className="hidden lg:block">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide">
              View All Products
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.02}
              transitionSpeed={700}
              className="rounded-2xl"
            >
              <div
                key={index}
                className="relative w-full h-80 overflow-hidden rounded-2xl group shadow-xl"
              >
                {/* Original Product Image (Front Layer) */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:translate-x-full"
                />

                {/* Details Layer (Back Layer) */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#F3F4F6] px-4 py-6 flex flex-col justify-center items-center text-center space-y-3 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.03 3.177a1 1 0 00.95.69h3.345c.969 0 1.371 1.24.588 1.81l-2.71 1.966a1 1 0 00-.364 1.118l1.03 3.177c.3.921-.755 1.688-1.538 1.118l-2.71-1.966a1 1 0 00-1.176 0l-2.71 1.966c-.783.57-1.838-.197-1.538-1.118l1.03-3.177a1 1 0 00-.364-1.118L2.98 8.604c-.783-.57-.38-1.81.588-1.81h3.345a1 1 0 00.95-.69l1.03-3.177z" />
                        </svg>
                      ))}
                  </div>

                  <p className="text-md text-gray-600">{product.priceRange}</p>

                  <button className="mt-2 bg-black hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-12 lg:hidden">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
