// import React, { useState } from "react";
// import { motion } from "framer-motion";

// interface ProductProps {
//   product: {
//     id: string;
//     name: string;
//     brand?: string;
//     price: number;
//     discountPrice?: number;
//     rating?: number;
//     reviews?: { user: string; comment: string; rating: number }[];
//     images: string[];
//     highlights: string[];
//     description: string;
//     specifications: { key: string; value: string }[];
//     relatedProducts?: { id: string; name: string; image: string; price: number }[];
//   };
// }

// const ProductDetails: React.FC<ProductProps> = ({ product }) => {
//   const [selectedImage, setSelectedImage] = useState(product.images[0]);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       {/* Top Section */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Image Gallery */}
//         <div>
//           <motion.img
//             key={selectedImage}
//             src={selectedImage}
//             alt={product.name}
//             className="w-full h-[500px] object-contain rounded-2xl shadow-lg"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           />
//           <div className="flex gap-3 mt-4">
//             {product.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt="thumb"
//                 className={`w-20 h-20 object-contain rounded-xl border cursor-pointer transition 
//                   ${selectedImage === img ? "border-black shadow-md" : "border-gray-200"}`}
//                 onClick={() => setSelectedImage(img)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           {product.brand && <p className="text-gray-600 mb-2">Brand: {product.brand}</p>}
//           <div className="flex items-center gap-3 mb-4">
//             <p className="text-2xl font-semibold text-green-600">
//               ₹{product.discountPrice || product.price}
//             </p>
//             {product.discountPrice && (
//               <p className="text-gray-400 line-through">₹{product.price}</p>
//             )}
//           </div>
//           <p className="mb-4 text-yellow-500">⭐ {product.rating || "No ratings yet"}</p>

//           {/* Highlights */}
//           <ul className="list-disc list-inside space-y-1 mb-6">
//             {product.highlights.map((point, i) => (
//               <li key={i} className="text-gray-700">{point}</li>
//             ))}
//           </ul>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-yellow-500 px-6 py-3 rounded-2xl shadow hover:bg-yellow-600 transition">
//               Buy Now
//             </button>
//             <button className="bg-blue-600 px-6 py-3 rounded-2xl text-white shadow hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-3">Product Description</h2>
//         <p className="text-gray-700 leading-relaxed">{product.description}</p>
//       </div>

//       {/* Specifications */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {product.specifications.map((spec, i) => (
//             <div key={i} className="flex justify-between border-b py-2">
//               <span className="font-medium">{spec.key}</span>
//               <span className="text-gray-600">{spec.value}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Customer Reviews */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-3">Customer Reviews</h2>
//         {product.reviews && product.reviews.length > 0 ? (
//           <div className="space-y-4">
//             {product.reviews.map((r, i) => (
//               <div key={i} className="border rounded-2xl p-4 shadow-sm">
//                 <p className="font-medium">{r.user}</p>
//                 <p className="text-yellow-500">⭐ {r.rating}</p>
//                 <p className="text-gray-700">{r.comment}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No reviews yet</p>
//         )}
//       </div>

//       {/* Related Products */}
//       {product.relatedProducts && product.relatedProducts.length > 0 && (
//         <div className="mt-12">
//           <h2 className="text-2xl font-semibold mb-3">You May Also Like</h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             {product.relatedProducts.map((rp) => (
//               <div key={rp.id} className="border rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer">
//                 <img src={rp.image} alt={rp.name} className="w-full h-40 object-contain mb-3" />
//                 <h3 className="font-medium">{rp.name}</h3>
//                 <p className="text-green-600 font-semibold">₹{rp.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  brand?: string;
  price: number;
  originalPrice?: number;
  discountPrice?: number;
  rating?: number;
  reviewsCount?: number;
  stock?: number;
  images: string[];
  highlights: string[];
  description: string;
  specifications: { key: string; value: string }[];
  faqs?: { question: string; answer: string }[];
  reviews?: { user: string; comment: string; rating: number }[];
  relatedProducts?: { id: string; name: string; image: string; price: number }[];
}

interface ProductProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      {/* Modal container */}
      <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div>
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt={product.name}
              className="w-full h-[500px] object-contain rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex gap-3 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className={`w-20 h-20 object-contain rounded-xl border cursor-pointer transition 
                    ${selectedImage === img ? "border-black shadow-md" : "border-gray-200"}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            {product.brand && (
              <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
            )}

            {/* Pricing */}
            <div className="flex items-center gap-3 mb-4">
              <p className="text-2xl font-semibold text-green-600">
                ₹{product.discountPrice || product.price}
              </p>
              {product.originalPrice && (
                <p className="text-gray-400 line-through">₹{product.originalPrice}</p>
              )}
            </div>

            {/* Rating + Reviews */}
            <p className="mb-2 text-yellow-500">
              ⭐ {product.rating || "No ratings yet"}{" "}
              {product.reviewsCount && (
                <span className="text-gray-600">
                  ({product.reviewsCount} reviews)
                </span>
              )}
            </p>

            {/* Stock */}
            {product.stock !== undefined && (
              <p
                className={`mb-4 font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stock > 0
                  ? `In stock (${product.stock} available)`
                  : "Out of stock"}
              </p>
            )}

            {/* Highlights */}
            <ul className="list-disc list-inside space-y-1 mb-6">
              {product.highlights.map((point, i) => (
                <li key={i} className="text-gray-700">
                  {point}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-yellow-500 px-6 py-3 rounded-2xl shadow hover:bg-yellow-600 transition">
                Buy Now
              </button>
              <button className="bg-blue-600 px-6 py-3 rounded-2xl text-white shadow hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Product Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Specifications */}
        {product.specifications.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.specifications.map((spec, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b py-2"
                >
                  <span className="font-medium">{spec.key}</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">FAQs</h2>
            <div className="space-y-4">
              {product.faqs.map((faq, i) => (
                <div key={i} className="border rounded-2xl p-4 shadow-sm">
                  <p className="font-medium">Q: {faq.question}</p>
                  <p className="text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Customer Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-4">
              {product.reviews.map((r, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-4 shadow-sm"
                >
                  <p className="font-medium">{r.user}</p>
                  <p className="text-yellow-500">⭐ {r.rating}</p>
                  <p className="text-gray-700">{r.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews yet</p>
          )}
        </div>

        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">You May Also Like</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {product.relatedProducts.map((rp) => (
                <div
                  key={rp.id}
                  className="border rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={rp.image}
                    alt={rp.name}
                    className="w-full h-40 object-contain mb-3"
                  />
                  <h3 className="font-medium">{rp.name}</h3>
                  <p className="text-green-600 font-semibold">₹{rp.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

