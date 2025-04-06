// // frontend/src/pages/ProductDetails.jsx
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import api from '../services/api';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const { user, isAdmin } = useAuth();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await api.get(`/api/items/${id}`);
//         setProduct(response.data.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//         setError('Failed to load product details. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     addToCart(product._id, quantity);
//   };

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value);
//     setQuantity(value < 1 ? 1 : value);
//   };

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const handleEdit = () => {
//     navigate(`/admin/products/edit/${id}`);
//   };

//   if (loading) return <LoadingSpinner />;

//   if (error) {
//     return (
//       <div className="text-center py-12">
//         <p className="text-red-500 mb-4">{error}</p>
//         <button
//           onClick={handleGoBack}
//           className="flex items-center justify-center mx-auto bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//         >
//           <FaArrowLeft className="mr-2" /> Go Back
//         </button>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-12">
//         <p className="text-gray-600 mb-4">Product not found</p>
//         <button
//           onClick={handleGoBack}
//           className="flex items-center justify-center mx-auto bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//         >
//           <FaArrowLeft className="mr-2" /> Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <button onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
//         <FaArrowLeft className="mr-2" /> Back to Products
//       </button>

//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-1/2">
//             {product.imageUrl ? (
//               <img
//                 src={product.imageUrl || "/placeholder.svg"}
//                 alt={product.title}
//                 className="w-full h-64 md:h-full object-cover"
//               />
//             ) : (
//               <img
//                 src={`https://via.placeholder.com/500x500?text=${encodeURIComponent(product.title)}`}
//                 alt={product.title}
//                 className="w-full h-64 md:h-full object-cover"
//               />
//             )}
//           </div>

//           <div className="p-6 md:w-1/2">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
//                 <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
//               </div>

//               {user && isAdmin() && (
//                 <button
//                   onClick={handleEdit}
//                   className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//                 >
//                   Edit
//                 </button>
//               )}
//             </div>

//             <div className="mb-6">
//               <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
//               {!product.available && (
//                 <span className="ml-4 bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
//                   Out of Stock
//                 </span>
//               )}
//             </div>

//             <div className="mb-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
//               <p className="text-gray-600">{product.details}</p>
//             </div>

//             {product.attributes && Object.keys(product.attributes).length > 0 && (
//               <div className="mb-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h2>
//                 <ul className="space-y-2">
//                   {Object.entries(product.attributes).map(([key, value]) => (
//                     <li key={key} className="flex">
//                       <span className="font-medium text-gray-700 w-1/3">{key}:</span>
//                       <span className="text-gray-600">{value}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {user && product.available && (
//               <div className="flex items-center space-x-4">
//                 <div className="w-24">
//                   <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                     Quantity
//                   </label>
//                   <input
//                     type="number"
//                     id="quantity"
//                     min="1"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   />
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-700 transition duration-300"
//                 >
//                   <FaShoppingCart className="mr-2" />
//                   Add to Cart
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  FaShoppingCart,
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaChevronDown,
  FaChevronUp,
  FaShare,
  FaTruck,
  FaCheck,
  FaExchangeAlt,
} from "react-icons/fa"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "../components/common/LoadingSpinner"
import ProductCard from "../components/common/ProductCard"
import api from "../services/api"
import { toast } from "react-toastify"

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { user, isAdmin } = useAuth()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [relatedProducts, setRelatedProducts] = useState([])
  const [expandedSection, setExpandedSection] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [reviewsExpanded, setReviewsExpanded] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/api/items/${id}`)
        setProduct(response.data.data)

        // Fetch related products from the same category
        const relatedResponse = await api.get(`/api/items?category=${response.data.data.category}`)
        // Filter out the current product and limit to 4 related products
        const filtered = relatedResponse.data.data.filter((item) => item._id !== id).slice(0, 4)
        setRelatedProducts(filtered)
      } catch (error) {
        console.error("Error fetching product:", error)
        setError("Failed to load product details. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
    // Reset quantity and active tab when product ID changes
    setQuantity(1)
    setActiveTab("description")
    window.scrollTo(0, 0)
  }, [id])

  const handleAddToCart = () => {
    if (addToCart(product._id, quantity)) {
      toast.success(`${quantity} ${quantity === 1 ? "item" : "items"} added to cart`)
    }
  }

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    setQuantity(value < 1 ? 1 : value)
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleEdit = () => {
    navigate(`/admin/products/edit/${id}`)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast.success(isFavorite ? `${product.title} removed from wishlist` : `${product.title} added to wishlist`)
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  if (loading) return <LoadingSpinner />

  if (error) {
    return (
      <div className="text-center py-12 mt-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="text-center py-12 mt-20">
        <p className="text-gray-600 mb-4">Product not found</p>
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      </div>
    )
  }

  // Calculate discount percentage for demo
  const hasDiscount = product._id.charCodeAt(0) % 3 === 0
  const discountPercentage = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0
  const originalPrice = hasDiscount ? product.price * (100 / (100 - discountPercentage)) : null

  // Generate random rating for demo
  const rating = 4.5
  const reviewCount = 128

  // Mock reviews for demo
  const reviews = [
    {
      id: 1,
      user: "Sarah J.",
      rating: 5,
      date: "2023-08-15",
      content: "Absolutely love this product! Quality is excellent and it arrived quickly.",
    },
    {
      id: 2,
      user: "Michael T.",
      rating: 4,
      date: "2023-07-30",
      content: "Very good product for the price. Would recommend to others looking for something in this category.",
    },
    {
      id: 3,
      user: "Amanda B.",
      rating: 5,
      date: "2023-07-12",
      content: "Exactly as described. Perfect fit for what I needed.",
    },
    {
      id: 4,
      user: "David L.",
      rating: 3,
      date: "2023-06-25",
      content: "Decent product, but not quite what I expected. The quality is good though.",
    },
  ]

  return (
    <div className="mt-20">
      <button onClick={handleGoBack} className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Products
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:w-1/2 relative">
            <div className="aspect-square overflow-hidden">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/800x800?text=${encodeURIComponent(product.title)}`}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Product badges */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              {!product.available && <span className="badge badge-danger">Out of Stock</span>}
              {hasDiscount && <span className="badge badge-secondary">-{discountPercentage}%</span>}
              {product._id.charCodeAt(1) % 5 === 0 && <span className="badge badge-primary">New</span>}
            </div>

            {/* Favorite button */}
            <button
              onClick={toggleFavorite}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-indigo-50"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500" size={20} />
              ) : (
                <FaRegHeart className="text-gray-400" size={20} />
              )}
            </button>
          </div>

          {/* Product Details Section */}
          <div className="p-6 md:w-1/2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm text-indigo-600 font-medium uppercase tracking-wider">{product.category}</span>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <span className="text-gray-600 ml-2">
                    {rating} ({reviewCount} reviews)
                  </span>
                </div>
              </div>

              {user && isAdmin() && (
                <button
                  onClick={handleEdit}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  Edit
                </button>
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              {hasDiscount ? (
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
                  <span className="ml-2 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                    Save {discountPercentage}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
              )}

              {product.stock > 0 && (
                <p className="text-sm text-gray-600 mt-1">
                  <FaCheck className="inline-block text-green-500 mr-1" /> In stock
                  {product.stock < 10 && <span className="text-amber-600 ml-2">Only {product.stock} left!</span>}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600">{product.details}</p>
            </div>

            {/* Features */}
            {product.attributes && Object.keys(product.attributes).length > 0 && (
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <li key={key} className="flex">
                      <FaCheck className="text-green-500 mt-1 mr-2" />
                      <div>
                        <span className="font-medium text-gray-700">{key}:</span> {value}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shipping info accordions */}
            <div className="mb-6 border-t border-b border-gray-200 py-4 space-y-2">
              <div className="cursor-pointer" onClick={() => toggleSection("shipping")}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaTruck className="text-indigo-600 mr-2" />
                    <span className="font-medium">Shipping Information</span>
                  </div>
                  {expandedSection === "shipping" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedSection === "shipping" && (
                  <div className="mt-2 pl-6 text-gray-600 text-sm">
                    <p>Free shipping on orders over $50</p>
                    <p>Standard delivery: 3-5 business days</p>
                    <p>Express delivery: 1-2 business days (additional fee)</p>
                  </div>
                )}
              </div>

              <div className="cursor-pointer" onClick={() => toggleSection("returns")}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaExchangeAlt className="text-indigo-600 mr-2" />
                    <span className="font-medium">Return Policy</span>
                  </div>
                  {expandedSection === "returns" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedSection === "returns" && (
                  <div className="mt-2 pl-6 text-gray-600 text-sm">
                    <p>30-day money-back guarantee</p>
                    <p>Items must be unused and in original packaging</p>
                    <p>See our full return policy for details</p>
                  </div>
                )}
              </div>
            </div>

            {user && product.available && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-0 focus:outline-none focus:ring-0"
                  />
                  <button onClick={incrementQuantity} className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition duration-300"
                  disabled={!product.available}
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>

                <button
                  onClick={toggleFavorite}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
                </button>
              </div>
            )}

            {!product.available && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg mt-4">
                <p className="font-medium">This product is currently out of stock.</p>
                <p className="text-sm">Please check back later or contact customer service for more information.</p>
              </div>
            )}

            {/* Share */}
            <div className="mt-6 flex items-center">
              <span className="text-gray-600 mr-3">Share:</span>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                  <FaShare size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium ${activeTab === "description" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "specifications" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "reviews" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({reviewCount})
            </button>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-600">{product.details}</p>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                  nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                  tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span>Premium quality materials for durability</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span>Designed for maximum comfort and usability</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span>Easy to clean and maintain</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span>Versatile for various settings and occasions</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <div className="overflow-hidden bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {product.attributes &&
                        Object.entries(product.attributes).map(([key, value]) => (
                          <tr key={key}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                              {key}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
                          </tr>
                        ))}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                          Category
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                          In Stock
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock} units</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                          Weight
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.5 kg</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                          Dimensions
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 × 10 × 10 cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="text-5xl font-bold text-gray-900">{rating}</div>
                    <div className="flex text-amber-400 mt-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{reviewCount} reviews</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-28 text-sm">5 stars</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-600">70%</div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-28 text-sm">4 stars</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-600">20%</div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-28 text-sm">3 stars</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: "7%" }}></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-600">7%</div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-28 text-sm">2 stars</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-600">2%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-28 text-sm">1 star</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: "1%" }}></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-600">1%</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

                  <div className="space-y-6">
                    {reviews.slice(0, reviewsExpanded ? reviews.length : 2).map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">{review.user}</div>
                            <div className="flex text-amber-400 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                  {i < review.rating ? (
                                    <FaStar className="text-amber-400" />
                                  ) : (
                                    <FaStar className="text-gray-300" />
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                        <p className="mt-2 text-gray-600">{review.content}</p>
                      </div>
                    ))}
                  </div>

                  {reviews.length > 2 && (
                    <button
                      className="mt-6 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                      onClick={() => setReviewsExpanded(!reviewsExpanded)}
                    >
                      {reviewsExpanded ? "Show Less" : `View All ${reviews.length} Reviews`}
                      <FaChevronDown className={`ml-1 transform ${reviewsExpanded ? "rotate-180" : ""}`} />
                    </button>
                  )}

                  <div className="mt-8">
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                      Write a Review
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct._id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails