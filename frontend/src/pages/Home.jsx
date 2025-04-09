// // // frontend/src/pages/Home.jsx
// // import { useState, useEffect } from "react";
// // import { FaSearch, FaFilter, FaShoppingCart } from "react-icons/fa";
// // import ProductCard from "../components/common/ProductCard";
// // import LoadingSpinner from "../components/common/LoadingSpinner";
// // import api from "../services/api";

// // const Home = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [featuredProducts, setFeaturedProducts] = useState([]);

// //   useEffect(() => {
// //     fetchProducts();
// //   }, [category]);

// //   const fetchProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const params = new URLSearchParams();

// //       if (category) {
// //         params.append("category", category);
// //       }

// //       if (searchTerm) {
// //         params.append("search", searchTerm);
// //       }

// //       const response = await api.get(`/api/items?${params.toString()}`);
// //       setProducts(response.data.data);

// //       // Extract unique categories
// //       const uniqueCategories = [...new Set(response.data.data.map((item) => item.category))];
// //       setCategories(uniqueCategories);

// //       // Set featured products (first 3 products)
// //       setFeaturedProducts(response.data.data.slice(0, 3));
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //       setError("Failed to load products. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     fetchProducts();
// //   };

// //   const toggleFilters = () => {
// //     setShowFilters(!showFilters);
// //   };

// //   const filteredProducts = searchTerm
// //     ? products.filter(
// //         (product) =>
// //           product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           product.details.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : products;

// //   if (loading) return <LoadingSpinner />;

// //   return (
// //     <div className="animate-fadeIn">
// //       {/* Hero Section */}
// //       <div className="bg-blue-600 rounded-lg p-8 mb-8 text-white">
// //         <div className="max-w-3xl mx-auto text-center">
// //           <h1 className="text-4xl font-bold mb-4">Welcome to ShopCart</h1>
// //           <p className="text-xl text-blue-100 mb-6">Your one-stop destination for all your shopping needs</p>
// //           <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
// //             <input
// //               type="text"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               placeholder="Search products..."
// //               className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-yellow-500 text-white px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition duration-300"
// //             >
// //               <FaSearch />
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Featured Products */}
// //       {featuredProducts.length > 0 && !searchTerm && !category && (
// //         <div className="mb-12">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {featuredProducts.map((product) => (
// //               <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
// //                 <div className="relative h-48">
// //                   {product.imageUrl ? (
// //                     <img
// //                       src={product.imageUrl || "/placeholder.svg"}
// //                       alt={product.title}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   ) : (
// //                     <div className="w-full h-full bg-gray-200 flex items-center justify-center">
// //                       <FaShoppingCart className="text-gray-400" size={48} />
// //                     </div>
// //                   )}
// //                   <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
// //                     Featured
// //                   </div>
// //                 </div>
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
// //                   <p className="text-gray-600 mb-4 line-clamp-2">{product.details}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
// //                     <a
// //                       href={`/products/${product._id}`}
// //                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
// //                     >
// //                       View Details
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Filters and Products */}
// //       <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
// //         <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Our Products</h2>

// //         <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
// //           <button 
// //             onClick={toggleFilters} 
// //             className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 border border-blue-600 px-3 py-1 rounded-lg"
// //           >
// //             <FaFilter />
// //             <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
// //           </button>

// //           {showFilters && (
// //             <select
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             >
// //               <option value="">All Categories</option>
// //               {categories.map((cat, index) => (
// //                 <option key={index} value={cat}>
// //                   {cat}
// //                 </option>
// //               ))}
// //             </select>
// //           )}
// //         </div>
// //       </div>

// //       {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error}</div>}

// //       {/* Products Grid */}
// //       {filteredProducts.length > 0 ? (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {filteredProducts.map((product) => (
// //             <ProductCard key={product._id} product={product} />
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="text-center py-12 bg-white rounded-lg shadow-md">
// //           <FaShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
// //           <p className="text-gray-600">Try a different search or category.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// // frontend/src/pages/Home.jsx
// // import { useState, useEffect } from "react";
// // import { FaSearch, FaFilter, FaShoppingCart, FaArrowRight, FaTruck, FaCreditCard, FaHeadset, FaShieldAlt } from "react-icons/fa";
// // import ProductCard from "../components/common/ProductCard";
// // import LoadingSpinner from "../components/common/LoadingSpinner";
// // import api from "../services/api";
// // import { Link } from "react-router-dom";

// // const Home = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [featuredProducts, setFeaturedProducts] = useState([]);
// //   const [trendingProducts, setTrendingProducts] = useState([]);

// //   useEffect(() => {
// //     fetchProducts();
// //   }, [category]);

// //   const fetchProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const params = new URLSearchParams();

// //       if (category) {
// //         params.append("category", category);
// //       }

// //       if (searchTerm) {
// //         params.append("search", searchTerm);
// //       }

// //       const response = await api.get(`/api/items?${params.toString()}`);
// //       setProducts(response.data.data);

// //       // Extract unique categories
// //       const uniqueCategories = [...new Set(response.data.data.map((item) => item.category))];
// //       setCategories(uniqueCategories);

// //       // Set featured products (first 3 products)
// //       setFeaturedProducts(response.data.data.slice(0, 3));
      
// //       // Set trending products (next 4 products)
// //       setTrendingProducts(response.data.data.slice(3, 7));
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //       setError("Failed to load products. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     fetchProducts();
// //   };

// //   const toggleFilters = () => {
// //     setShowFilters(!showFilters);
// //   };

// //   const filteredProducts = searchTerm
// //     ? products.filter(
// //         (product) =>
// //           product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           product.details.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : products;

// //   if (loading) return <LoadingSpinner />;

// //   return (
// //     <div className="animate-fadeIn">
// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
// //         <div className="max-w-3xl mx-auto text-center">
// //           <h1 className="text-4xl font-bold mb-4">Welcome to ShopCart</h1>
// //           <p className="text-xl text-blue-100 mb-6">Your one-stop destination for all your shopping needs</p>
// //           <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
// //             <input
// //               type="text"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               placeholder="Search products..."
// //               className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-yellow-500 text-white px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition duration-300"
// //             >
// //               <FaSearch />
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Features Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
// //         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
// //           <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
// //             <FaTruck size={24} />
// //           </div>
// //           <div>
// //             <h3 className="font-semibold text-gray-800">Free Shipping</h3>
// //             <p className="text-sm text-gray-600">On orders over $50</p>
// //           </div>
// //         </div>
        
// //         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
// //           <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
// //             <FaCreditCard size={24} />
// //           </div>
// //           <div>
// //             <h3 className="font-semibold text-gray-800">Secure Payment</h3>
// //             <p className="text-sm text-gray-600">100% secure checkout</p>
// //           </div>
// //         </div>
        
// //         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
// //           <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
// //             <FaHeadset size={24} />
// //           </div>
// //           <div>
// //             <h3 className="font-semibold text-gray-800">24/7 Support</h3>
// //             <p className="text-sm text-gray-600">Customer service</p>
// //           </div>
// //         </div>
        
// //         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
// //           <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
// //             <FaShieldAlt size={24} />
// //           </div>
// //           <div>
// //             <h3 className="font-semibold text-gray-800">Money Back</h3>
// //             <p className="text-sm text-gray-600">30-day guarantee</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Featured Products */}
// //       {featuredProducts.length > 0 && !searchTerm && !category && (
// //         <div className="mb-12">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
// //             <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
// //               View All <FaArrowRight className="ml-2" />
// //             </Link>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {featuredProducts.map((product) => (
// //               <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
// //                 <div className="relative h-64">
// //                   {product.imageUrl ? (
// //                     <img
// //                       src={product.imageUrl || "/placeholder.svg"}
// //                       alt={product.title}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   ) : (
// //                     <div className="w-full h-full bg-gray-200 flex items-center justify-center">
// //                       <FaShoppingCart className="text-gray-400" size={48} />
// //                     </div>
// //                   )}
// //                   <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
// //                     Featured
// //                   </div>
// //                 </div>
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
// //                   <p className="text-gray-600 mb-4 line-clamp-2">{product.details}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
// //                     <Link
// //                       to={`/products/${product._id}`}
// //                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
// //                     >
// //                       View Details
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Banner */}
// //       {!searchTerm && !category && (
// //         <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-8 mb-12 text-white">
// //           <div className="md:flex items-center justify-between">
// //             <div className="md:w-2/3 mb-6 md:mb-0">
// //               <h2 className="text-3xl font-bold mb-2">Summer Sale</h2>
// //               <p className="text-lg mb-4">Get up to 50% off on selected items. Limited time offer!</p>
// //               <Link
// //                 to="/"
// //                 className="inline-block bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
// //               >
// //                 Shop Now
// //               </Link>
// //             </div>
// //             <div className="md:w-1/3 flex justify-center">
// //               <img 
// //                 src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" 
// //                 alt="Summer Sale" 
// //                 className="rounded-lg shadow-lg h-40 object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Trending Products */}
// //       {trendingProducts.length > 0 && !searchTerm && !category && (
// //         <div className="mb-12">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-2xl font-bold text-gray-800">Trending Now</h2>
// //             <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
// //               View All <FaArrowRight className="ml-2" />
// //             </Link>
// //           </div>
          
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //             {trendingProducts.map((product) => (
// //               <ProductCard key={product._id} product={product} />
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Filters and Products */}
// //       <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
// //         <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
// //           {searchTerm ? `Search Results for "${searchTerm}"` : category ? `${category} Products` : "All Products"}
// //         </h2>

// //         <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
// //           <button 
// //             onClick={toggleFilters} 
// //             className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 border border-blue-600 px-3 py-1 rounded-lg"
// //           >
// //             <FaFilter />
// //             <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
// //           </button>

// //           {showFilters && (
// //             <select
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             >
// //               <option value="">All Categories</option>
// //               {categories.map((cat, index) => (
// //                 <option key={index} value={cat}>
// //                   {cat}
// //                 </option>
// //               ))}
// //             </select>
// //           )}
// //         </div>
// //       </div>

// //       {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error}</div>}

// //       {/* Products Grid */}
// //       {filteredProducts.length > 0 ? (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {filteredProducts.map((product) => (
// //             <ProductCard key={product._id} product={product} />
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="text-center py-12 bg-white rounded-lg shadow-md">
// //           <FaShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
// //           <p className="text-gray-600">Try a different search or category.</p>
// //         </div>
// //       )}
      
// //       {/* Newsletter Subscription */}
// //       {!searchTerm && !category && (
// //         <div className="bg-blue-50 rounded-lg p-8 mt-12 text-center">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h2>
// //           <p className="text-gray-600 mb-6">Get the latest updates on new products and upcoming sales</p>
// //           <form className="max-w-md mx-auto flex">
// //             <input
// //               type="email"
// //               placeholder="Your email address"
// //               className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-300"
// //             >
// //               Subscribe
// //             </button>
// //           </form>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// "use client"

// import { useState, useEffect, useRef } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
// import {
//   FaSearch,
//   FaFilter,
//   FaShoppingCart,
//   FaArrowRight,
//   FaArrowLeft,
//   FaTags,
//   FaShippingFast,
//   FaAward,
//   FaHeadset,
// } from "react-icons/fa"
// import ProductCard from "../components/common/ProductCard"
// import LoadingSpinner from "../components/common/LoadingSpinner"
// import api from "../services/api"

// const Home = () => {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [category, setCategory] = useState("")
//   const [categories, setCategories] = useState([])
//   const [showFilters, setShowFilters] = useState(false)
//   const [featuredProducts, setFeaturedProducts] = useState([])
//   const [bestSellers, setBestSellers] = useState([])
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [sorting, setSorting] = useState("newest")
//   const sliderRef = useRef(null)

//   // Parse search parameters from URL
//   useEffect(() => {
//     const params = new URLSearchParams(location.search)
//     const searchParam = params.get("search")
//     const categoryParam = params.get("category")

//     if (searchParam) setSearchTerm(searchParam)
//     if (categoryParam) setCategory(categoryParam)
//   }, [location.search])

//   // Fetch products when category or search term changes
//   useEffect(() => {
//     fetchProducts()
//   }, [category, searchTerm, sorting])

//   // Automatically advance slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       setLoading(true)
//       const params = new URLSearchParams()

//       if (category) {
//         params.append("category", category)
//       }

//       if (searchTerm) {
//         params.append("search", searchTerm)
//       }

//       // Add sorting parameter
//       if (sorting === "priceAsc") {
//         params.append("sort", "price")
//       } else if (sorting === "priceDesc") {
//         params.append("sort", "-price")
//       } else if (sorting === "newest") {
//         params.append("sort", "-createdAt")
//       }

//       const response = await api.get(`/api/items?${params.toString()}`)
//       setProducts(response.data.data)

//       // Extract unique categories
//       const uniqueCategories = [...new Set(response.data.data.map((item) => item.category))]
//       setCategories(uniqueCategories)

//       // Set featured products (first 4 products)
//       setFeaturedProducts(response.data.data.slice(0, 4))

//       // Set best sellers (random selection for demo)
//       const shuffled = [...response.data.data].sort(() => 0.5 - Math.random())
//       setBestSellers(shuffled.slice(0, 4))
//     } catch (error) {
//       console.error("Error fetching products:", error)
//       setError("Failed to load products. Please try again later.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     navigate(`/?search=${encodeURIComponent(searchTerm)}`)
//   }

//   const handleCategorySelect = (cat) => {
//     setCategory(cat)
//     navigate(`/?category=${encodeURIComponent(cat)}`)
//   }

//   const toggleFilters = () => {
//     setShowFilters(!showFilters)
//   }

//   const clearFilters = () => {
//     setSearchTerm("")
//     setCategory("")
//     navigate("/")
//   }

//   // Banner slides for carousel
//   const bannerSlides = [
//     {
//       title: "Summer Collection 2023",
//       description: "Up to 40% off on selected items",
//       image:
//         "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Shop Now",
//       buttonLink: "/?category=Clothing",
//       color: "from-blue-600 to-indigo-800",
//     },
//     {
//       title: "Tech Gadgets Sale",
//       description: "Latest gadgets at unbeatable prices",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Explore",
//       buttonLink: "/?category=Electronics",
//       color: "from-purple-600 to-indigo-800",
//     },
//     {
//       title: "Kitchen Essentials",
//       description: "Make cooking a delightful experience",
//       image:
//         "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "View Collection",
//       buttonLink: "/?category=Kitchen",
//       color: "from-amber-500 to-red-600",
//     },
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
//   }

//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//   }

//   // Filter products
//   const filteredProducts = products

//   if (loading && products.length === 0) return <LoadingSpinner />

//   return (
//     <div className="mt-16 animate-fadeIn">
//       {/* Hero Carousel */}
//       <div className="relative h-[500px] mb-12 overflow-hidden rounded-2xl">
//         <div
//           ref={sliderRef}
//           className="h-full transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//             width: `${bannerSlides.length * 100}%`,
//             display: "flex",
//           }}
//         >
//           {bannerSlides.map((slide, index) => (
//             <div
//               key={index}
//               className="h-full w-full shrink-0 bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}></div>
//               <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
//                 <h1 className="text-5xl font-bold mb-4 max-w-xl">{slide.title}</h1>
//                 <p className="text-xl mb-8 max-w-lg">{slide.description}</p>
//                 <a
//                   href={slide.buttonLink}
//                   className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold w-fit transition duration-300"
//                 >
//                   {slide.buttonText}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition duration-300"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition duration-300"
//         >
//           <FaArrowRight />
//         </button>

//         {/* Indicator dots */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {bannerSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index ? "bg-white w-8" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               onClick={() => handleCategorySelect(cat)}
//               className={`p-4 rounded-xl text-center transition-all duration-300 hover:shadow-md ${
//                 category === cat ? "bg-indigo-600 text-white" : "bg-white hover:bg-indigo-50 text-gray-800"
//               }`}
//             >
//               <div className="text-xl mb-2">
//                 {cat === "Electronics" && "🎧"}
//                 {cat === "Clothing" && "👕"}
//                 {cat === "Kitchen" && "🍳"}
//                 {cat === "Accessories" && "👜"}
//                 {cat === "Fitness" && "🏋️"}
//                 {cat === "Wearables" && "⌚"}
//                 {!["Electronics", "Clothing", "Kitchen", "Accessories", "Fitness", "Wearables"].includes(cat) && "🛒"}
//               </div>
//               <span className="text-sm font-medium">{cat}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Benefits section */}
//       <div className="mb-12 bg-indigo-50 rounded-2xl p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Shop With Us</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaShippingFast className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
//             <p className="text-gray-600">On all orders over $50</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaTags className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
//             <p className="text-gray-600">We offer competitive prices</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaAward className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
//             <p className="text-gray-600">Sourced from trusted suppliers</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaHeadset className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
//             <p className="text-gray-600">Dedicated customer service</p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Products */}
//       {featuredProducts.length > 0 && !searchTerm && !category && (
//         <div className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
//             <a href="/?featured=true" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//               View All <FaArrowRight className="ml-2" />
//             </a>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered">
//             {featuredProducts.map((product) => (
//               <div key={product._id} className="opacity-0 animate-fadeIn">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Best Sellers */}
//       {bestSellers.length > 0 && !searchTerm && !category && (
//         <div className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
//             <a href="/?bestsellers=true" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//               View All <FaArrowRight className="ml-2" />
//             </a>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered">
//             {bestSellers.map((product) => (
//               <div key={product._id} className="opacity-0 animate-fadeIn">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Filters and Products */}
//       <div className="mb-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
//           <div className="flex items-center mb-4 md:mb-0">
//             <h2 className="text-xl font-bold text-gray-800">
//               {category ? `${category}` : searchTerm ? `Search: "${searchTerm}"` : "All Products"}
//             </h2>
//             {(category || searchTerm) && (
//               <button onClick={clearFilters} className="ml-4 text-sm text-indigo-600 hover:text-indigo-800">
//                 Clear Filters
//               </button>
//             )}
//           </div>

//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <div className="relative">
//               <select
//                 value={sorting}
//                 onChange={(e) => setSorting(e.target.value)}
//                 className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="priceAsc">Price: Low to High</option>
//                 <option value="priceDesc">Price: High to Low</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>

//             <button
//               onClick={toggleFilters}
//               className="flex items-center justify-center space-x-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300"
//             >
//               <FaFilter size={14} />
//               <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
//             </button>

//             <form onSubmit={handleSearch} className="flex w-full sm:w-auto">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search products..."
//                 className="w-full sm:w-auto pl-4 pr-10 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition duration-300"
//               >
//                 <FaSearch />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Advanced filters panel */}
//         {showFilters && (
//           <div className="bg-white p-6 rounded-xl shadow-sm mb-6 animate-fadeIn">
//             <h3 className="text-lg font-semibold mb-4">Advanced Filters</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
//                 <div className="space-y-2 max-h-40 overflow-y-auto">
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="category-all"
//                       name="category"
//                       checked={category === ""}
//                       onChange={() => setCategory("")}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     />
//                     <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
//                       All Categories
//                     </label>
//                   </div>

//                   {categories.map((cat, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <input
//                         type="radio"
//                         id={`category-${idx}`}
//                         name="category"
//                         checked={category === cat}
//                         onChange={() => setCategory(cat)}
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                       />
//                       <label htmlFor={`category-${idx}`} className="ml-2 text-sm text-gray-700">
//                         {cat}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error}</div>}

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered">
//             {filteredProducts.map((product, index) => (
//               <div key={product._id} className="opacity-0 animate-fadeIn">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12 bg-white rounded-xl shadow-sm">
//             <FaShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
//             <p className="text-gray-600 mb-4">Try a different search or category.</p>
//             <button
//               onClick={clearFilters}
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//             >
//               View All Products
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Newsletter Signup */}
//       <div className="bg-indigo-600 rounded-2xl p-8 text-white mt-12 mb-12">
//         <div className="flex flex-col md:flex-row md:items-center justify-between">
//           <div className="mb-6 md:mb-0 md:mr-8">
//             <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
//             <p className="text-indigo-200">Stay updated with our latest offers and new arrivals</p>
//           </div>
//           <form className="flex flex-col sm:flex-row w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="px-4 py-3 rounded-l-lg md:w-64 focus:outline-none text-gray-800"
//             />
//             <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300 mt-2 sm:mt-0">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

// "use client"

// import { useState, useEffect, useRef } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
// import {
//   FaSearch,
//   FaFilter,
//   FaShoppingCart,
//   FaArrowRight,
//   FaArrowLeft,
//   FaTags,
//   FaShippingFast,
//   FaAward,
//   FaHeadset,
//   FaGraduationCap,
//   FaStar, // Import FaStar
// } from "react-icons/fa"
// import ProductCard from "../components/common/ProductCard"
// import LoadingSpinner from "../components/common/LoadingSpinner"
// import api from "../services/api"

// const Home = () => {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [products, setProducts] = useState([])
//   const [featuredCourses, setFeaturedCourses] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [category, setCategory] = useState("")
//   const [categories, setCategories] = useState([])
//   const [showFilters, setShowFilters] = useState(false)
//   const [featuredProducts, setFeaturedProducts] = useState([])
//   const [bestSellers, setBestSellers] = useState([])
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [sorting, setSorting] = useState("newest")
//   const sliderRef = useRef(null)

//   // Parse search parameters from URL
//   useEffect(() => {
//     const params = new URLSearchParams(location.search)
//     const searchParam = params.get("search")
//     const categoryParam = params.get("category")

//     if (searchParam) setSearchTerm(searchParam)
//     if (categoryParam) setCategory(categoryParam)
//   }, [location.search])

//   // Fetch products and courses when category or search term changes
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true)
//         await Promise.all([fetchProducts(), fetchFeaturedCourses()])
//       } catch (error) {
//         console.error("Error fetching data:", error)
//         setError("Failed to load data. Please try again later.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [category, searchTerm, sorting])

//   // Automatically advance slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const params = new URLSearchParams()

//       if (category) {
//         params.append("category", category)
//       }

//       if (searchTerm) {
//         params.append("search", searchTerm)
//       }

//       // Add sorting parameter
//       if (sorting === "priceAsc") {
//         params.append("sort", "price")
//       } else if (sorting === "priceDesc") {
//         params.append("sort", "-price")
//       } else if (sorting === "newest") {
//         params.append("sort", "-createdAt")
//       }

//       const response = await api.get(`/api/items?${params.toString()}`)
//       setProducts(response.data.data)

//       // Extract unique categories
//       const uniqueCategories = [...new Set(response.data.data.map((item) => item.category))]
//       setCategories(uniqueCategories)

//       // Set featured products (first 4 products)
//       setFeaturedProducts(response.data.data.slice(0, 4))

//       // Set best sellers (random selection for demo)
//       const shuffled = [...response.data.data].sort(() => 0.5 - Math.random())
//       setBestSellers(shuffled.slice(0, 4))

//       return response.data.data
//     } catch (error) {
//       console.error("Error fetching products:", error)
//       throw error
//     }
//   }

//   const fetchFeaturedCourses = async () => {
//     try {
//       const response = await api.get("/api/courses/featured")
//       setFeaturedCourses(response.data.data)
//       return response.data.data
//     } catch (error) {
//       console.error("Error fetching featured courses:", error)
//       throw error
//     }
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     navigate(`/?search=${encodeURIComponent(searchTerm)}`)
//   }

//   const handleCategorySelect = (cat) => {
//     setCategory(cat)
//     navigate(`/?category=${encodeURIComponent(cat)}`)
//   }

//   const toggleFilters = () => {
//     setShowFilters(!showFilters)
//   }

//   const clearFilters = () => {
//     setSearchTerm("")
//     setCategory("")
//     navigate("/")
//   }

//   // Banner slides for carousel
//   const bannerSlides = [
//     {
//       title: "Summer Collection 2023",
//       description: "Up to 40% off on selected items",
//       image:
//         "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Shop Now",
//       buttonLink: "/?category=Clothing",
//       color: "from-blue-600 to-indigo-800",
//     },
//     {
//       title: "Tech Gadgets Sale",
//       description: "Latest gadgets at unbeatable prices",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Explore",
//       buttonLink: "/?category=Electronics",
//       color: "from-purple-600 to-indigo-800",
//     },
//     {
//       title: "Online Courses",
//       description: "Expand your knowledge with our premium courses",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Browse Courses",
//       buttonLink: "/courses",
//       color: "from-green-600 to-teal-800",
//     },
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
//   }

//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//   }

//   // Filter products
//   const filteredProducts = products

//   if (loading && products.length === 0) return <LoadingSpinner />

//   return (
//     <div className="mt-16 animate-fadeIn">
//       {/* Hero Carousel */}
//       <div className="relative h-[500px] mb-12 overflow-hidden rounded-2xl">
//         <div
//           ref={sliderRef}
//           className="h-full transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//             width: `${bannerSlides.length * 100}%`,
//             display: "flex",
//           }}
//         >
//           {bannerSlides.map((slide, index) => (
//             <div
//               key={index}
//               className="h-full w-full shrink-0 bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}></div>
//               <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
//                 <h1 className="text-5xl font-bold mb-4 max-w-xl">{slide.title}</h1>
//                 <p className="text-xl mb-8 max-w-lg">{slide.description}</p>
//                 <a
//                   href={slide.buttonLink}
//                   className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold w-fit transition duration-300"
//                 >
//                   {slide.buttonText}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition duration-300"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition duration-300"
//         >
//           <FaArrowRight />
//         </button>

//         {/* Indicator dots */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {bannerSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index ? "bg-white w-8" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="container mx-auto px-4 mb-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               onClick={() => handleCategorySelect(cat)}
//               className={`p-4 rounded-xl text-center transition-all duration-300 hover:shadow-md ${
//                 category === cat ? "bg-indigo-600 text-white" : "bg-white hover:bg-indigo-50 text-gray-800"
//               }`}
//             >
//               <div className="text-xl mb-2">
//                 {cat === "Electronics" && "🎧"}
//                 {cat === "Clothing" && "👕"}
//                 {cat === "Kitchen" && "🍳"}
//                 {cat === "Accessories" && "👜"}
//                 {cat === "Fitness" && "🏋️"}
//                 {cat === "Wearables" && "⌚"}
//                 {!["Electronics", "Clothing", "Kitchen", "Accessories", "Fitness", "Wearables"].includes(cat) && "🛒"}
//               </div>
//               <span className="text-sm font-medium">{cat}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Featured Courses Section */}
//       {featuredCourses.length > 0 && !searchTerm && !category && (
//         <div className="container mx-auto px-4 mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Featured Courses</h2>
//             <a href="/courses" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//               View All <FaArrowRight className="ml-2" />
//             </a>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {featuredCourses.map((course) => (
//               <div
//                 key={course._id}
//                 className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   {course.imageUrl ? (
//                     <img
//                       src={course.imageUrl || "/placeholder.svg"}
//                       alt={course.title}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
//                       <FaGraduationCap className="text-indigo-400 text-4xl" />
//                     </div>
//                   )}
//                   <div className="absolute top-0 left-0 m-2">
//                     <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{course.category}</span>
//                   </div>
//                   <div className="absolute top-0 right-0 m-2">
//                     <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">{course.level}</span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{course.title}</h3>
//                   <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
//                   <div className="flex items-center mb-3">
//                     <div className="flex text-amber-400">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar
//                           key={i}
//                           className={i < Math.floor(course.rating) ? "text-amber-400" : "text-gray-300"}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-xs text-gray-500 ml-1">({course.enrolledStudents} students)</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-3">
//                     <span className="text-lg font-bold text-indigo-600">${course.price.toFixed(2)}</span>
//                     <a
//                       href={`/courses/${course._id}`}
//                       className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition duration-300"
//                     >
//                       View Details
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Benefits section */}
//       <div className="container mx-auto px-4 mb-12 bg-indigo-50 rounded-2xl p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Shop With Us</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaShippingFast className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
//             <p className="text-gray-600">On all orders over $50</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaTags className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
//             <p className="text-gray-600">We offer competitive prices</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaAward className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
//             <p className="text-gray-600">Sourced from trusted suppliers</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaHeadset className="text-indigo-600 text-2xl" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
//             <p className="text-gray-600">Dedicated customer service</p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Products */}
//       {featuredProducts.length > 0 && !searchTerm && !category && (
//         <div className="container mx-auto px-4 mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
//             <a href="/?featured=true" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//               View All <FaArrowRight className="ml-2" />
//             </a>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered">
//             {featuredProducts.map((product) => (
//               <div key={product._id} className="opacity-0 animate-fadeIn">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Best Sellers */}
//       {bestSellers.length > 0 && !searchTerm && !category && (
//         <div className="container mx-auto px-4 mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
//             <a href="/?bestsellers=true" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//               View All <FaArrowRight className="ml-2" />
//             </a>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered">
//             {bestSellers.map((product) => (
//               <div key={product._id} className="opacity-0 animate-fadeIn">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Filters and Products */}
//       <div className="container mx-auto px-4 mb-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
//           <div className="flex items-center mb-4 md:mb-0">
//             <h2 className="text-xl font-bold text-gray-800">
//               {category ? `${category}` : searchTerm ? `Search: "${searchTerm}"` : "All Products"}
//             </h2>
//             {(category || searchTerm) && (
//               <button onClick={clearFilters} className="ml-4 text-sm text-indigo-600 hover:text-indigo-800">
//                 Clear Filters
//               </button>
//             )}
//           </div>

//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <div className="relative">
//               <select
//                 value={sorting}
//                 onChange={(e) => setSorting(e.target.value)}
//                 className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="priceAsc">Price: Low to High</option>
//                 <option value="priceDesc">Price: High to Low</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>

//             <button
//               onClick={toggleFilters}
//               className="flex items-center justify-center space-x-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300"
//             >
//               <FaFilter size={14} />
//               <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
//             </button>

//             <form onSubmit={handleSearch} className="flex w-full sm:w-auto">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search products..."
//                 className="w-full sm:w-auto pl-4 pr-10 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition duration-300"
//               >
//                 <FaSearch />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Advanced filters panel */}
//         {showFilters && (
//           <div className="bg-white p-6 rounded-xl shadow-sm mb-6 animate-fadeIn">
//             <h3 className="text-lg font-semibold mb-4">Advanced Filters</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
//                 <div className="space-y-2 max-h-40 overflow-y-auto">
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="category-all"
//                       name="category"
//                       checked={category === ""}
//                       onChange={() => setCategory("")}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     />
//                     <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
//                       All Categories
//                     </label>
//                   </div>

//                   {categories.map((cat, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <input
//                         type="radio"
//                         id={`category-${idx}`}
//                         name="category"
//                         checked={category === cat}
//                         onChange={() => setCategory(cat)}
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                       />
//                       <label htmlFor={`category-${idx}`} className="ml-2 text-sm text-gray-700">
//                         {cat}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error}</div>}

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered">
//             {filteredProducts.map((product, index) => (
//               <div key={product._id} className="opacity-0 animate-fadeIn">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12 bg-white rounded-xl shadow-sm">
//             <FaShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
//             <p className="text-gray-600 mb-4">Try a different search or category.</p>
//             <button
//               onClick={clearFilters}
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//             >
//               View All Products
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Newsletter Signup */}
//       <div className="container mx-auto px-4 bg-indigo-600 rounded-2xl p-8 text-white mt-12 mb-12">
//         <div className="flex flex-col md:flex-row md:items-center justify-between">
//           <div className="mb-6 md:mb-0 md:mr-8">
//             <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
//             <p className="text-indigo-200">Stay updated with our latest offers and new arrivals</p>
//           </div>
//           <form className="flex flex-col sm:flex-row w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="px-4 py-3 rounded-l-lg md:w-64 focus:outline-none text-gray-800"
//             />
//             <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300 mt-2 sm:mt-0">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

"use client"

import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  FaSearch,
  FaFilter,
  FaShoppingCart,
  FaArrowRight,
  FaArrowLeft,
  FaTags,
  FaShippingFast,
  FaAward,
  FaHeadset,
  FaGraduationCap,
  FaStar,
  FaRegClock,
  FaRegLightbulb,
  FaRegSmile,
} from "react-icons/fa"
import ProductCard from "../components/common/ProductCard"
import LoadingSpinner from "../components/common/LoadingSpinner"
import api from "../services/api"

const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [bestSellers, setBestSellers] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sorting, setSorting] = useState("newest")
  const [isVisible, setIsVisible] = useState({})
  const sliderRef = useRef(null)
  const observerRefs = useRef({})

  // Parse search parameters from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const searchParam = params.get("search")
    const categoryParam = params.get("category")

    if (searchParam) setSearchTerm(searchParam)
    if (categoryParam) setCategory(categoryParam)
  }, [location.search])

  // Setup intersection observer for animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    })

    // Observe all sections
    const sections = document.querySelectorAll(".animate-on-scroll")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [loading])

  // Fetch products and courses when category or search term changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await Promise.all([fetchProducts(), fetchFeaturedCourses()])
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Failed to load data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category, searchTerm, sorting])

  // Automatically advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams()

      if (category) {
        params.append("category", category)
      }

      if (searchTerm) {
        params.append("search", searchTerm)
      }

      // Add sorting parameter
      if (sorting === "priceAsc") {
        params.append("sort", "price")
      } else if (sorting === "priceDesc") {
        params.append("sort", "-price")
      } else if (sorting === "newest") {
        params.append("sort", "-createdAt")
      }

      const response = await api.get(`/api/items?${params.toString()}`)
      //console.log(response)
      setProducts(response.data.data)

      // Extract unique categories
      const uniqueCategories = [...new Set(response.data.data.map((item) => item.category))]
      setCategories(uniqueCategories)

      // Set featured products (first 4 products)
      setFeaturedProducts(response.data.data.slice(0, 4))

      // Set best sellers (random selection for demo)
      const shuffled = [...response.data.data].sort(() => 0.5 - Math.random())
      setBestSellers(shuffled.slice(0, 4))

      return response.data.data
    } catch (error) {
      console.error("Error fetching products:", error)
      throw error
    }
  }

  const fetchFeaturedCourses = async () => {
    try {
      const response = await api.get("/api/courses/featured")
      setFeaturedCourses(response.data.data)
      return response.data.data
    } catch (error) {
      console.error("Error fetching featured courses:", error)
      throw error
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/?search=${encodeURIComponent(searchTerm)}`)
  }

  const handleCategorySelect = (cat) => {
    setCategory(cat)
    navigate(`/?category=${encodeURIComponent(cat)}`)
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setCategory("")
    navigate("/")
  }

  // Banner slides for carousel
  const bannerSlides = [
    {
      title: "Summer Collection 2023",
      description: "Up to 40% off on selected items",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Shop Now",
      buttonLink: "/?category=Clothing",
      color: "from-blue-600 to-indigo-800",
    },
    {
      title: "Tech Gadgets Sale",
      description: "Latest gadgets at unbeatable prices",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Explore",
      buttonLink: "/?category=Electronics",
      color: "from-purple-600 to-indigo-800",
    },
    {
      title: "Online Courses",
      description: "Expand your knowledge with our premium courses",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Browse Courses",
      buttonLink: "/courses",
      color: "from-green-600 to-teal-800",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Filter products
  const filteredProducts = products

  if (loading && products.length === 0) return <LoadingSpinner />

  return (
    <div className="mt-16">
      {/* Hero Carousel */}
      <div className="relative h-[500px] mb-12 overflow-hidden rounded-2xl animate-fadeIn">
        <div
          ref={sliderRef}
          className="h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${bannerSlides.length * 100}%`,
            display: "flex",
          }}
        >
          {bannerSlides.map((slide, index) => (
            <div
              key={index}
              className="h-full w-full shrink-0 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}></div>
              <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
                <h1 className="text-5xl font-bold mb-4 max-w-xl animate-slideIn">{slide.title}</h1>
                <p className="text-xl mb-8 max-w-lg animate-slideIn" style={{ animationDelay: "0.2s" }}>
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold w-fit transition duration-300 animate-slideIn hover:scale-105"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition duration-300 hover:scale-110"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition duration-300 hover:scale-110"
        >
          <FaArrowRight />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories-section" className="container mx-auto px-4 mb-12 animate-on-scroll">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-2">
            <FaTags />
          </span>
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(cat)}
              className={`p-4 rounded-xl text-center transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 ${
                category === cat ? "bg-indigo-600 text-white" : "bg-white hover:bg-indigo-50 text-gray-800"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-xl mb-2">
                {cat === "Electronics" && "🎧"}
                {cat === "Clothing" && "👕"}
                {cat === "Kitchen" && "🍳"}
                {cat === "Accessories" && "👜"}
                {cat === "Fitness" && "🏋️"}
                {cat === "Wearables" && "⌚"}
                {!["Electronics", "Clothing", "Kitchen", "Accessories", "Fitness", "Wearables"].includes(cat) && "🛒"}
              </div>
              <span className="text-sm font-medium">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Courses Section */}
      {featuredCourses.length > 0 && !searchTerm && !category && (
        <div id="courses-section" className="container mx-auto px-4 mb-12 animate-on-scroll">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-full mr-2">
                <FaGraduationCap />
              </span>
              Featured Courses
            </h2>
            <a
              href="/courses"
              className="text-indigo-600 hover:text-indigo-800 flex items-center transition-transform hover:translate-x-1"
            >
              View All <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {course.imageUrl ? (
                    <img
                      src={course.imageUrl || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                      <FaGraduationCap className="text-indigo-400 text-4xl" />
                    </div>
                  )}
                  <div className="absolute top-0 left-0 m-2">
                    <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{course.category}</span>
                  </div>
                  <div className="absolute top-0 right-0 m-2">
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">{course.level}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(course.rating) ? "text-amber-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({course.enrolledStudents} students)</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold text-indigo-600">${course.price.toFixed(2)}</span>
                    <a
                      href={`/courses/${course._id}`}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Benefits section */}
      <div
        id="benefits-section"
        className="container mx-auto px-4 mb-12 bg-indigo-50 rounded-2xl p-8 animate-on-scroll"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
          <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-2">
            <FaRegLightbulb />
          </span>
          Why Shop With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShippingFast className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTags className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">We offer competitive prices</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">Sourced from trusted suppliers</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeadset className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Dedicated customer service</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      {featuredProducts.length > 0 && !searchTerm && !category && (
        <div id="featured-products-section" className="container mx-auto px-4 mb-12 animate-on-scroll">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-2">
                <FaRegSmile />
              </span>
              Featured Products
            </h2>
            <a
              href="/?featured=true"
              className="text-indigo-600 hover:text-indigo-800 flex items-center transition-transform hover:translate-x-1"
            >
              View All <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product._id}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Best Sellers */}
      {bestSellers.length > 0 && !searchTerm && !category && (
        <div id="bestsellers-section" className="container mx-auto px-4 mb-12 animate-on-scroll">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="bg-red-100 text-red-600 p-2 rounded-full mr-2">
                <FaRegClock />
              </span>
              Best Sellers
            </h2>
            <a
              href="/?bestsellers=true"
              className="text-indigo-600 hover:text-indigo-800 flex items-center transition-transform hover:translate-x-1"
            >
              View All <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div
                key={product._id}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters and Products */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800">
              {category ? `${category}` : searchTerm ? `Search: "${searchTerm}"` : "All Products"}
            </h2>
            {(category || searchTerm) && (
              <button onClick={clearFilters} className="ml-4 text-sm text-indigo-600 hover:text-indigo-800">
                Clear Filters
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <select
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <button
              onClick={toggleFilters}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300"
            >
              <FaFilter size={14} />
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
            </button>

            <form onSubmit={handleSearch} className="flex w-full sm:w-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full sm:w-auto pl-4 pr-10 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition duration-300"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </div>

        {/* Advanced filters panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Advanced Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="category-all"
                      name="category"
                      checked={category === ""}
                      onChange={() => setCategory("")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
                      All Categories
                    </label>
                  </div>

                  {categories.map((cat, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${idx}`}
                        name="category"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${idx}`} className="ml-2 text-sm text-gray-700">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error}</div>}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product._id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <FaShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
            <p className="text-gray-600 mb-4">Try a different search or category.</p>
            <button
              onClick={clearFilters}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 bg-indigo-600 rounded-2xl p-8 text-white mt-12 mb-12 animate-on-scroll">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
            <p className="text-indigo-200">Stay updated with our latest offers and new arrivals</p>
          </div>
          <form className="flex flex-col sm:flex-row w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-l-lg md:w-64 focus:outline-none text-gray-800"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300 mt-2 sm:mt-0 transform hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home