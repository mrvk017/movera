"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import ShopHero from "./ShopHero";
import ProductDetails from "./ProductDetailes";

// ---------- Product Data ----------
type Specification = { key: string; value: string };
type FAQ = { question: string; answer: string };
type Review = { user: string; rating: number; comment: string };
type RelatedProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discountPrice: number;
  rating: number;
  reviewsCount: number;
  stock: number;
  images: string[];
  highlights: string[];
  description: string;
  category: "chair" | "hotpack";
  specifications: Specification[];
  faqs: FAQ[];
  reviews: Review[];
  relatedProducts: RelatedProduct[];
};

const products: Product[] = [
  {
    id: "1",
    name: "Ergonomic Wooden Chair",
    brand: "Movease",
    price: 5999,
    originalPrice: 6999,
    discountPrice: 5899,
    rating: 4.5,
    reviewsCount: 152,
    stock: 20,
    images: ["./chair1.png", "./chair1.png"],
    highlights: [
      "Ergonomic design for long sitting hours",
      "Premium solid teak wood",
      "1-year warranty",
      "Handcrafted finish",
    ],
    description:
      "This ergonomic wooden chair is designed for maximum comfort and posture support. Made with premium teak wood, it is perfect for both home and office use.",
    category: "chair",
    specifications: [
      { key: "Material", value: "Solid Teak Wood" },
      { key: "Weight", value: "12kg" },
      { key: "Warranty", value: "1 year" },
      { key: "Dimensions", value: "100cm x 50cm x 45cm" },
    ],
    faqs: [
      {
        question: "How do I heat the hotpack?",
        answer:
          "Place the hotpack in the microwave for 2–3 minutes. Always test temperature before use.",
      },
      {
        question: "Can it be used as a cold pack?",
        answer:
          "Yes, freeze the pack for 1–2 hours before use for cold therapy.",
      },
      {
        question: "Is the cover washable?",
        answer: "Yes, the cotton cover is removable and machine washable.",
      },
    ],
    reviews: [
      { user: "Amit", rating: 5, comment: "Super comfortable!" },
      { user: "Sneha", rating: 4, comment: "Worth the price." },
    ],
    relatedProducts: [
      {
        id: "hotpack-001",
        name: "Thermal Hotpack for Pain Relief",
        image: "./hotpack.png",
        price: 899,
      },
      {
        id: "chair-002",
        name: "Premium Office Chair",
        image: "./hotpack.png",
        price: 6999,
      },
    ],
  },
  {
    id: "2",
    name: "Thermal Hotpack for Pain Relief",
    brand: "Movease",
    price: 999,
    originalPrice: 1499,
    discountPrice: 899,
    rating: 4.5,
    reviewsCount: 238,
    stock: 35,
    images: ["./hotpack.png", "./hotpack.png", "./hotpack.png"],
    highlights: [
      "Reusable thermal gel hotpack",
      "Provides instant pain relief",
      "Microwave & freezer safe",
      "Ergonomic design for comfort",
      "Retains heat/cold up to 45 minutes",
    ],
    description:
      "Our thermal hotpack is designed to provide quick relief from muscle pain, cramps, and joint stiffness. With microwave and freezer compatibility, it can be used as both hot and cold therapy. Its ergonomic design ensures maximum comfort during use.",
    category: "hotpack",
    specifications: [
      { key: "Material", value: "Premium gel + cotton cover" },
      { key: "Dimensions", value: "25cm x 15cm" },
      { key: "Weight", value: "500g" },
      { key: "Usage", value: "Hot & Cold Therapy" },
      { key: "Warranty", value: "6 months" },
    ],
    faqs: [
      {
        question: "How do I heat the hotpack?",
        answer:
          "Place the hotpack in the microwave for 2–3 minutes. Always test temperature before use.",
      },
      {
        question: "Can it be used as a cold pack?",
        answer:
          "Yes, freeze the pack for 1–2 hours before use for cold therapy.",
      },
      {
        question: "Is the cover washable?",
        answer: "Yes, the cotton cover is removable and machine washable.",
      },
    ],
    reviews: [
      { user: "Raj", rating: 5, comment: "Worked great for my back pain!" },
      { user: "Pooja", rating: 4, comment: "Stays warm for long time." },
    ],
    relatedProducts: [
      {
        id: "chair-001",
        name: "Ergonomic Wooden Chair",
        image: "./chair1.png",
        price: 5999,
      },
      {
        id: "hotpack-002",
        name: "Extra Large Hotpack",
        image: "./chair1.png",
        price: 1299,
      },
    ],
  },
];

// ---------- Testimonials Data ----------
const testimonials = [
  {
    rating: 5,
    label: "Excellent",
    text: "The ergonomic chair is super comfortable. My back pain has reduced significantly.",
    name: "Amit Sharma",
    role: "Customer",
  },
  {
    rating: 4,
    label: "Very Good",
    text: "Hotpack quality is amazing. Retains heat for a long time. Really happy with it!",
    name: "Priya Verma",
    role: "Customer",
  },
  {
    rating: 5,
    label: "Outstanding",
    text: "Fast delivery and premium quality. Highly recommend this store!",
    name: "Rohit Mehta",
    role: "Customer",
  },
  {
    rating: 5,
    label: "Fantastic",
    text: "Customer service was quick to answer my queries. Great experience overall.",
    name: "Neha Kapoor",
    role: "Customer",
  },
];

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [cart, setCart] = useState<Product[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showDetailes, setShowDetailes] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart`);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setShowDetailes(true);
  };

  const closeProductDetails = () => {
    setShowDetailes(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      {/* Hero Banner */}
      <ShopHero />

      {/* Filters */}
      <div className="flex justify-center gap-4 py-6">
        {["all", "chair", "hotpack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border ${
              filter === cat ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {cat === "all"
              ? "All"
              : cat.charAt(0).toUpperCase() + cat.slice(1) + "s"}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20 py-10">
        {filteredProducts.map((product) => (
          <Tilt key={product.id} tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* use first image */}
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-1">₹{product.price}</p>
                <button
                  onClick={() => openProductDetails(product)}
                  className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Detailes
                </button>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Happiness On Our Customer's Faces Is What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
              What Our <span className="text-emerald-600">Customers</span> Say
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
              {[0, 1, 2].map((offset) => {
                const index =
                  (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];

                return (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    glareEnable={true}
                    glareBorderRadius="12px"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ${
                        offset === 1 ? "transform scale-105 shadow-xl" : ""
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-emerald-600">
                          {testimonial.label}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                );
              })}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? "bg-emerald-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Do you provide warranty?",
              a: "Yes, all our chairs come with a 1-year warranty.",
            },
            {
              q: "How long does delivery take?",
              a: "Usually 5–7 working days within India.",
            },
            {
              q: "Are hotpacks reusable?",
              a: "Yes, our hotpacks are reusable and long-lasting.",
            },
          ].map((faq, i) => (
            <Tilt key={i} tiltMaxAngleX={6} tiltMaxAngleY={6}>
              <details className="bg-white rounded-lg shadow-md p-4">
                <summary className="cursor-pointer font-semibold">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            </Tilt>
          ))}
        </div>
      </section>
      {showDetailes && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </div>
  );
};

export default Shop;

{
  /* Newsletter */
}
{
  /* <section className="py-16 bg-black text-white text-center px-6 md:px-20">
  <h2 className="text-3xl font-bold mb-4">Stay Updated with Offers</h2>
  <p className="mb-6 text-gray-300">
    Subscribe to our newsletter to receive discounts and updates.
  </p>
  <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
    <input
      type="email"
      placeholder="Your Email"
      className="px-6 py-3 rounded-lg text-black flex-1"
      required
    />
    <button
      type="submit"
      className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
    >
      Subscribe
    </button>
  </form>
</section> */
}
//   {
//     id: 1,
//     name: "Ergonomic Wooden Chair",
//     price: 299,
//     image: "./chair1.png",
//     category: "chair",
//   },
//   {
//     id: 2,
//     name: "Premium Wooden Chair",
//     price: 349,
//     image: "./chair1.png",
//     category: "chair",
//   },
//   {
//     id: 3,
//     name: "Back Pain Relief Hotpack",
//     price: 59,
//     image: "./chair1.png",
//     category: "hotpack",
//   },
//   {
//     id: 4,
//     name: "Neck Therapy Hotpack",
//     price: 49,
//     image: "./chair1.png",
//     category: "hotpack",
//   },
