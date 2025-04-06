// // frontend/src/components/common/ProductCard.jsx
// import { Link } from "react-router-dom";
// import { FaShoppingCart, FaStar } from "react-icons/fa";
// import { useCart } from "../../context/CartContext";
// import { useAuth } from "../../context/AuthContext";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();
//   const { user } = useAuth();

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product._id, 1);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
//       <Link to={`/products/${product._id}`}>
//         <div className="relative h-48 overflow-hidden">
//           {product.imageUrl ? (
//             <img
//               src={product.imageUrl || "/placeholder.svg"}
//               alt={product.title}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <img
//               src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.title)}`}
//               alt={product.title}
//               className="w-full h-full object-cover"
//             />
//           )}

//           {!product.available && (
//             <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm">Out of Stock</div>
//           )}
          
//           <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-2 py-1 text-sm">
//             {product.category}
//           </div>
//         </div>

//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
//           <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.details}</p>
          
//           <div className="flex items-center mb-2">
//             <div className="flex text-yellow-400">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar className="text-gray-300" />
//             </div>
//             <span className="text-xs text-gray-500 ml-1">(4.0)</span>
//           </div>

//           <div className="flex justify-between items-center mt-4">
//             <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>

//             {user && product.available && (
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300"
//                 aria-label="Add to cart"
//               >
//                 <FaShoppingCart />
//               </button>
//             )}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

// frontend/src/components/common/ProductCard.jsx
// import { Link } from "react-router-dom";
// import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";
// import { useCart } from "../../context/CartContext";
// import { useAuth } from "../../context/AuthContext";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();
//   const { user } = useAuth();
//   const [isHovered, setIsHovered] = useState(false);

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (addToCart(product._id, 1)) {
//       toast.success(`${product.title} added to cart!`);
//     }
//   };

//   // Generate random rating for demo
//   const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 >= 0.5;

//   return (
//     <div 
//       className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Link to={`/products/${product._id}`}>
//         <div className="relative h-56 overflow-hidden">
//           {product.imageUrl ? (
//             <img
//               src={product.imageUrl || "/placeholder.svg"}
//               alt={product.title}
//               className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
//             />
//           ) : (
//             <img
//               src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.title)}`}
//               alt={product.title}
//               className="w-full h-full object-cover"
//             />
//           )}

//           {!product.available && (
//             <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
//               Out of Stock
//             </div>
//           )}
          
//           <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
//             {product.category}
//           </div>

//           {/* Quick view button on hover */}
//           {isHovered && (
//             <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
//               <div className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
//                 <FaEye size={20} />
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
//           <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.details}</p>
          
//           <div className="flex items-center mb-3">
//             <div className="flex text-yellow-400">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i}>
//                   {i < fullStars ? (
//                     <FaStar />
//                   ) : i === fullStars && hasHalfStar ? (
//                     <FaStar className="text-yellow-400" />
//                   ) : (
//                     <FaStar className="text-gray-300" />
//                   )}
//                 </span>
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 ml-1">({rating})</span>
//           </div>

//           <div className="flex justify-between items-center mt-4">
//             <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>

//             {user && product.available && (
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110"
//                 aria-label="Add to cart"
//               >
//                 <FaShoppingCart />
//               </button>
//             )}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

"use client"

import { Link } from "react-router-dom"
import { FaShoppingCart, FaStar, FaHeart, FaRegHeart } from "react-icons/fa"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-toastify"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (addToCart(product._id, 1)) {
      toast.success(`${product.title} added to cart!`)
    }
  }

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
    toast.success(isFavorite ? `${product.title} removed from wishlist` : `${product.title} added to wishlist`)
  }

  // Generate random rating for demo
  const rating = Math.floor(Math.random() * 5) + 1

  // Calculate discount percentage for some products
  const hasDiscount = product._id.charCodeAt(0) % 3 === 0
  const discountPercentage = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0
  const originalPrice = hasDiscount ? product.price * (100 / (100 - discountPercentage)) : null

  return (
    <div
      className="card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product._id}`}>
        <div className="relative h-48 overflow-hidden">
          {product.imageUrl ? (
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />
          ) : (
            <img
              src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.title)}`}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Product badges */}
          <div className="absolute top-0 left-0 p-2 flex flex-col space-y-2">
            {!product.available && <span className="badge badge-danger">Out of Stock</span>}
            {hasDiscount && <span className="badge badge-secondary">-{discountPercentage}%</span>}
            {product._id.charCodeAt(1) % 5 === 0 && <span className="badge badge-primary">New</span>}
          </div>

          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-indigo-50"
          >
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
          </button>

          {/* Category badge */}
          <div className="absolute bottom-0 left-0 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold">
            {product.category}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.details}</p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < rating ? <FaStar /> : <FaStar className="text-gray-300" />}</span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({(rating * 32 + 7).toString()})</span>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div>
              {hasDiscount ? (
                <div>
                  <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
              )}
            </div>

            {user && product.available && (
              <button
                onClick={handleAddToCart}
                className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                aria-label="Add to cart"
              >
                <FaShoppingCart />
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard