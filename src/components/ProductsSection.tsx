import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      title: "ALOE VERA MASSAGE CREAM",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$7.86 - $7.96"
    },
    {
      title: "FACIAL MASSAGE CREAM",
      image: "https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$8.20 - $8.69"
    },
    {
      title: "GLOW FACIAL CREAM",
      image: "https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$8.95 - $9.20"
    },
    {
      title: "HAIR MASSAGE OIL",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      priceRange: "$6.25 - $6.45"
    }
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
              CHEMICAL FREE COLLECTIONS
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
            <div key={index} className="group">
              {/* Product Image */}
              <div className="relative mb-6">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-800">
                  {product.priceRange}
                </p>
                
                <h3 className="text-xl font-light text-gray-700 tracking-wide">
                  {product.title}
                </h3>
              </div>
            </div>
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