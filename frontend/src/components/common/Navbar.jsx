// // // frontend/src/components/common/Navbar.jsx
// // import { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';
// // import { useCart } from '../../context/CartContext';
// // import { FaShoppingCart, FaUser, FaSignOutAlt, FaSignInAlt, FaBars, FaTimes, FaUserShield } from 'react-icons/fa';

// // const Navbar = () => {
// //   const { user, logout, isAdmin } = useAuth();
// //   const { getCartItemCount } = useCart();
// //   const navigate = useNavigate();
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const handleLogout = async () => {
// //     await logout();
// //     navigate('/login');
// //   };

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <nav className="bg-blue-600 text-white shadow-lg">
// //       <div className="container mx-auto px-4">
// //         <div className="flex justify-between items-center py-4">
// //           {/* Logo */}
// //           <Link to="/" className="text-2xl font-bold flex items-center">
// //             <FaShoppingCart className="mr-2" />
// //             ShopCart
// //           </Link>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button onClick={toggleMenu} className="text-white focus:outline-none">
// //               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// //             </button>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             <Link to="/" className="hover:text-blue-200 transition duration-300">
// //               Home
// //             </Link>

// //             {user ? (
// //               <>
// //                 {isAdmin() && (
// //                   <Link to="/admin" className="flex items-center hover:text-blue-200 transition duration-300">
// //                     <FaUserShield className="mr-1" />
// //                     Admin Dashboard
// //                   </Link>
// //                 )}

// //                 <Link to="/cart" className="relative hover:text-blue-200 transition duration-300">
// //                   <FaShoppingCart size={20} />
// //                   {getCartItemCount() > 0 && (
// //                     <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                       {getCartItemCount()}
// //                     </span>
// //                   )}
// //                 </Link>

// //                 <div className="relative group">
// //                   <button className="flex items-center space-x-1 hover:text-blue-200 transition duration-300">
// //                     <FaUser size={16} />
// //                     <span>{user.username}</span>
// //                     {user.role === 'admin' && (
// //                       <span className="ml-2 bg-yellow-500 text-xs px-2 py-0.5 rounded-full">Admin</span>
// //                     )}
// //                   </button>
// //                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
// //                     <Link
// //                       to="/profile"
// //                       className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
// //                     >
// //                       <FaUser className="inline mr-2" /> Profile
// //                     </Link>
// //                     <button
// //                       onClick={handleLogout}
// //                       className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
// //                     >
// //                       <FaSignOutAlt className="inline mr-2" /> Logout
// //                     </button>
// //                   </div>
// //                 </div>
// //               </>
// //             ) : (
// //               <Link to="/login" className="flex items-center space-x-1 hover:text-blue-200 transition duration-300">
// //                 <FaSignInAlt size={16} />
// //                 <span>Login</span>
// //               </Link>
// //             )}
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //           <div className="md:hidden py-4 border-t border-blue-500">
// //             <Link
// //               to="/"
// //               className="block py-2 hover:text-blue-200 transition duration-300"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Home
// //             </Link>

// //             {user ? (
// //               <>
// //                 {isAdmin() && (
// //                   <Link
// //                     to="/admin"
// //                     className="block py-2 hover:text-blue-200 transition duration-300"
// //                     onClick={() => setIsMenuOpen(false)}
// //                   >
// //                     <FaUserShield className="inline mr-2" />
// //                     Admin Dashboard
// //                     <span className="ml-2 bg-yellow-500 text-xs px-2 py-0.5 rounded-full">Admin</span>
// //                   </Link>
// //                 )}

// //                 <Link
// //                   to="/cart"
// //                   className="block py-2 hover:text-blue-200 transition duration-300"
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   <FaShoppingCart className="inline mr-2" />
// //                   Cart ({getCartItemCount()})
// //                 </Link>

// //                 <Link
// //                   to="/profile"
// //                   className="block py-2 hover:text-blue-200 transition duration-300"
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   <FaUser className="inline mr-2" />
// //                   Profile
// //                 </Link>

// //                 <button
// //                   onClick={() => {
// //                     handleLogout();
// //                     setIsMenuOpen(false);
// //                   }}
// //                   className="block w-full text-left py-2 hover:text-blue-200 transition duration-300"
// //                 >
// //                   <FaSignOutAlt className="inline mr-2" /> Logout
// //                 </button>
// //               </>
// //             ) : (
// //               <Link
// //                 to="/login"
// //                 className="block py-2 hover:text-blue-200 transition duration-300"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 <FaSignInAlt className="inline mr-2" /> Login
// //               </Link>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate, useLocation } from "react-router-dom"
// import { useAuth } from "../../context/AuthContext"
// import { useCart } from "../../context/CartContext"
// import {
//   FaShoppingCart,
//   FaUser,
//   FaSignOutAlt,
//   FaSignInAlt,
//   FaBars,
//   FaTimes,
//   FaUserShield,
//   FaSearch,
//   FaHeart,
// } from "react-icons/fa"

// const Navbar = () => {
//   const { user, logout, isAdmin } = useAuth()
//   const { getCartItemCount } = useCart()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [searchVisible, setSearchVisible] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")

//   // Track scroll position for navbar styling
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleLogout = async () => {
//     await logout()
//     navigate("/login")
//   }

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     navigate(`/?search=${encodeURIComponent(searchTerm)}`)
//     setSearchVisible(false)
//   }

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-gray-800 shadow-md py-2" : "bg-indigo-600 text-white py-4"}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold flex items-center">
//             <FaShoppingCart className={`mr-2 ${isScrolled ? "text-indigo-600" : "text-white"}`} />
//             <span className={isScrolled ? "text-indigo-600" : "text-white"}>ShopCart</span>
//           </Link>

//           {/* Search Bar (Desktop) */}
//           <div className="hidden md:block mx-4 flex-grow max-w-md relative">
//             {searchVisible ? (
//               <form onSubmit={handleSearch} className="animate-fadeIn">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   autoFocus
//                   onBlur={() => setTimeout(() => setSearchVisible(false), 200)}
//                 />
//               </form>
//             ) : (
//               <button
//                 onClick={() => setSearchVisible(true)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-indigo-500"}`}
//               >
//                 <FaSearch />
//                 <span className="text-sm">Search products...</span>
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`focus:outline-none ${isScrolled ? "text-gray-800" : "text-white"}`}
//             >
//               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link
//               to="/"
//               className={`hover:opacity-80 transition duration-300 ${location.pathname === "/" && "font-semibold"}`}
//             >
//               Home
//             </Link>

//             <Link
//               to="/wishlist"
//               className={`relative hover:opacity-80 transition duration-300 ${location.pathname === "/wishlist" && "font-semibold"}`}
//             >
//               <FaHeart />
//             </Link>

//             {user ? (
//               <>
//                 {isAdmin() && (
//                   <Link
//                     to="/admin"
//                     className={`flex items-center space-x-1 hover:opacity-80 transition duration-300 ${location.pathname.startsWith("/admin") && "font-semibold"}`}
//                   >
//                     <FaUserShield />
//                     <span>Admin</span>
//                   </Link>
//                 )}

//                 <Link
//                   to="/cart"
//                   className={`relative hover:opacity-80 transition duration-300 ${location.pathname === "/cart" && "font-semibold"}`}
//                 >
//                   <FaShoppingCart />
//                   {getCartItemCount() > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                       {getCartItemCount() > 9 ? "9+" : getCartItemCount()}
//                     </span>
//                   )}
//                 </Link>

//                 <div className="relative group">
//                   <button className="flex items-center space-x-2 hover:opacity-80 transition duration-300">
//                     {user.profilePicture ? (
//                       <img
//                         src={user.profilePicture || "/placeholder.svg"}
//                         alt={user.username}
//                         className="w-8 h-8 rounded-full object-cover border-2 border-white"
//                       />
//                     ) : (
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center ${isScrolled ? "bg-indigo-100 text-indigo-600" : "bg-indigo-500 text-white"}`}
//                       >
//                         <FaUser size={14} />
//                       </div>
//                     )}
//                     <span className="hidden lg:inline">{user.username}</span>
//                     {user.role === "admin" && (
//                       <span
//                         className={`${isScrolled ? "bg-indigo-100 text-indigo-600" : "bg-indigo-500 text-white"} text-xs px-2 py-0.5 rounded-full hidden lg:inline-block`}
//                       >
//                         Admin
//                       </span>
//                     )}
//                   </button>
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-10 hidden group-hover:block transform opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
//                     <Link
//                       to="/profile"
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
//                     >
//                       <FaUser className="inline mr-2 text-indigo-600" /> Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
//                     >
//                       <FaSignOutAlt className="inline mr-2 text-indigo-600" /> Logout
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className={`flex items-center space-x-1 hover:opacity-80 transition duration-300 ${location.pathname === "/login" && "font-semibold"}`}
//               >
//                 <FaSignInAlt />
//                 <span>Login</span>
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 mt-2 border-t border-indigo-500 animate-fadeIn">
//             {/* Mobile Search */}
//             <form onSubmit={handleSearch} className="mb-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <FaSearch className="absolute left-3 top-3 text-gray-400" />
//               </div>
//             </form>

//             <Link
//               to="/"
//               className={`block py-2 hover:opacity-80 transition duration-300 ${location.pathname === "/" && "font-semibold"}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>

//             <Link
//               to="/wishlist"
//               className={`block py-2 hover:opacity-80 transition duration-300 ${location.pathname === "/wishlist" && "font-semibold"}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <FaHeart className="inline mr-2" /> Wishlist
//             </Link>

//             {user ? (
//               <>
//                 {isAdmin() && (
//                   <Link
//                     to="/admin"
//                     className={`block py-2 hover:opacity-80 transition duration-300 ${location.pathname.startsWith("/admin") && "font-semibold"}`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <FaUserShield className="inline mr-2" />
//                     Admin Dashboard
//                   </Link>
//                 )}

//                 <Link
//                   to="/cart"
//                   className={`block py-2 hover:opacity-80 transition duration-300 ${location.pathname === "/cart" && "font-semibold"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <FaShoppingCart className="inline mr-2" />
//                   Cart ({getCartItemCount()})
//                 </Link>

//                 <Link
//                   to="/profile"
//                   className={`block py-2 hover:opacity-80 transition duration-300 ${location.pathname === "/profile" && "font-semibold"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <FaUser className="inline mr-2" />
//                   Profile
//                 </Link>

//                 <button
//                   onClick={() => {
//                     handleLogout()
//                     setIsMenuOpen(false)
//                   }}
//                   className="block w-full text-left py-2 hover:opacity-80 transition duration-300"
//                 >
//                   <FaSignOutAlt className="inline mr-2" /> Logout
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className={`block py-2 hover:opacity-80 transition duration-300 ${location.pathname === "/login" && "font-semibold"}`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <FaSignInAlt className="inline mr-2" /> Login
//               </Link>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// "use client"

// import { useState, useEffect } from "react"
// import { Link, NavLink, useLocation } from "react-router-dom"
// import { useAuth } from "../../context/AuthContext"
// import { useCart } from "../../context/CartContext"
// import {
//   FaShoppingCart,
//   FaUser,
//   FaSignOutAlt,
//   FaSignInAlt,
//   FaBars,
//   FaTimes,
//   FaUserShield,
//   FaSearch,
//   FaHeart,
// } from "react-icons/fa"

// const Navbar = () => {
//   const { user, logout, isAdmin } = useAuth()
//   const { getCartItemCount } = useCart()
//   const location = useLocation()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [searchVisible, setSearchVisible] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")

//   // Track scroll position for navbar styling
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleLogout = async () => {
//     await logout()
//   }

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     // Navigate to search results page
//     window.location.href = `/?search=${encodeURIComponent(searchTerm)}`
//     setSearchVisible(false)
//   }

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-gray-800 shadow-md py-2" : "bg-indigo-600 text-white py-4"}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold flex items-center">
//             <FaShoppingCart className={`mr-2 ${isScrolled ? "text-indigo-600" : "text-white"}`} />
//             <span className={isScrolled ? "text-indigo-600" : "text-white"}>ShopCart</span>
//           </Link>

//           {/* Search Bar (Desktop) */}
//           <div className="hidden md:block mx-4 flex-grow max-w-md relative">
//             {searchVisible ? (
//               <form onSubmit={handleSearch} className="animate-fadeIn">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   autoFocus
//                   onBlur={() => setTimeout(() => setSearchVisible(false), 200)}
//                 />
//               </form>
//             ) : (
//               <button
//                 onClick={() => setSearchVisible(true)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-indigo-500"}`}
//               >
//                 <FaSearch />
//                 <span className="text-sm">Search products...</span>
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`focus:outline-none ${isScrolled ? "text-gray-800" : "text-white"}`}
//             >
//               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/wishlist"
//               className={({ isActive }) =>
//                 `relative hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//               }
//             >
//               <FaHeart />
//             </NavLink>

//             {user ? (
//               <>
//                 {isAdmin() && (
//                   <NavLink
//                     to="/admin"
//                     className={({ isActive }) =>
//                       `flex items-center space-x-1 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                     }
//                   >
//                     <FaUserShield />
//                     <span>Admin</span>
//                   </NavLink>
//                 )}

//                 <NavLink
//                   to="/cart"
//                   className={({ isActive }) =>
//                     `relative hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                   }
//                 >
//                   <FaShoppingCart />
//                   {getCartItemCount() > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                       {getCartItemCount() > 9 ? "9+" : getCartItemCount()}
//                     </span>
//                   )}
//                 </NavLink>

//                 <div className="relative group">
//                   <button className="flex items-center space-x-2 hover:opacity-80 transition duration-300">
//                     {user.profilePicture ? (
//                       <img
//                         src={user.profilePicture || "/placeholder.svg"}
//                         alt={user.username}
//                         className="w-8 h-8 rounded-full object-cover border-2 border-white"
//                       />
//                     ) : (
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center ${isScrolled ? "bg-indigo-100 text-indigo-600" : "bg-indigo-500 text-white"}`}
//                       >
//                         <FaUser size={14} />
//                       </div>
//                     )}
//                     <span className="hidden lg:inline">{user.username}</span>
//                     {user.role === "admin" && (
//                       <span
//                         className={`${isScrolled ? "bg-indigo-100 text-indigo-600" : "bg-indigo-500 text-white"} text-xs px-2 py-0.5 rounded-full hidden lg:inline-block`}
//                       >
//                         Admin
//                       </span>
//                     )}
//                   </button>
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-10 hidden group-hover:block transform opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
//                     <Link
//                       to="/profile"
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
//                     >
//                       <FaUser className="inline mr-2 text-indigo-600" /> Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
//                     >
//                       <FaSignOutAlt className="inline mr-2 text-indigo-600" /> Logout
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   `flex items-center space-x-1 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                 }
//               >
//                 <FaSignInAlt />
//                 <span>Login</span>
//               </NavLink>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 mt-2 border-t border-indigo-500 animate-fadeIn">
//             {/* Mobile Search */}
//             <form onSubmit={handleSearch} className="mb-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <FaSearch className="absolute left-3 top-3 text-gray-400" />
//               </div>
//             </form>

//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//               }
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/wishlist"
//               className={({ isActive }) =>
//                 `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//               }
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <FaHeart className="inline mr-2" /> Wishlist
//             </NavLink>

//             {user ? (
//               <>
//                 {isAdmin() && (
//                   <NavLink
//                     to="/admin"
//                     className={({ isActive }) =>
//                       `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                     }
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <FaUserShield className="inline mr-2" />
//                     Admin Dashboard
//                   </NavLink>
//                 )}

//                 <NavLink
//                   to="/cart"
//                   className={({ isActive }) =>
//                     `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                   }
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <FaShoppingCart className="inline mr-2" />
//                   Cart ({getCartItemCount()})
//                 </NavLink>

//                 <NavLink
//                   to="/profile"
//                   className={({ isActive }) =>
//                     `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                   }
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <FaUser className="inline mr-2" />
//                   Profile
//                 </NavLink>

//                 <button
//                   onClick={() => {
//                     handleLogout()
//                     setIsMenuOpen(false)
//                   }}
//                   className="block w-full text-left py-2 hover:opacity-80 transition duration-300"
//                 >
//                   <FaSignOutAlt className="inline mr-2" /> Logout
//                 </button>
//               </>
//             ) : (
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
//                 }
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <FaSignInAlt className="inline mr-2" /> Login
//               </NavLink>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

"use client"

import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaUserShield,
  FaSearch,
  FaGraduationCap,
} from "react-icons/fa"

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth()
  const { getCartItemCount } = useCart()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    await logout()
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Navigate to search results page
    window.location.href = `/?search=${encodeURIComponent(searchTerm)}`
    setSearchVisible(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-800 shadow-md py-2" : "bg-indigo-600 text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <FaShoppingCart className={`mr-2 ${isScrolled ? "text-indigo-600" : "text-white"}`} />
            <span className={isScrolled ? "text-indigo-600" : "text-white"}>ShopCart</span>
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block mx-4 flex-grow max-w-md relative">
            {searchVisible ? (
              <form onSubmit={handleSearch} className="animate-fadeIn">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                  onBlur={() => setTimeout(() => setSearchVisible(false), 200)}
                />
              </form>
            ) : (
              <button
                onClick={() => setSearchVisible(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-indigo-500"
                }`}
              >
                <FaSearch />
                <span className="text-sm">Search products...</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
              }
            >
              Courses
            </NavLink>

            {user ? (
              <>
                {isAdmin() && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `flex items-center space-x-1 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                    }
                  >
                    <FaUserShield />
                    <span>Admin</span>
                  </NavLink>
                )}

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `relative hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                  }
                >
                  <FaShoppingCart />
                  {getCartItemCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemCount() > 9 ? "9+" : getCartItemCount()}
                    </span>
                  )}
                </NavLink>

                <div className="relative group">
                  <button className="flex items-center space-x-2 hover:opacity-80 transition duration-300">
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture || "/placeholder.svg"}
                        alt={user.username}
                        className="w-8 h-8 rounded-full object-cover border-2 border-white"
                      />
                    ) : (
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isScrolled ? "bg-indigo-100 text-indigo-600" : "bg-indigo-500 text-white"
                        }`}
                      >
                        <FaUser size={14} />
                      </div>
                    )}
                    <span className="hidden lg:inline">{user.username}</span>
                    {user.role === "admin" && (
                      <span
                        className={`${
                          isScrolled ? "bg-indigo-100 text-indigo-600" : "bg-indigo-500 text-white"
                        } text-xs px-2 py-0.5 rounded-full hidden lg:inline-block`}
                      >
                        Admin
                      </span>
                    )}
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-10 hidden group-hover:block transform opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                    <Link
                      to="/profile"
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
                    >
                      <FaUser className="inline mr-2 text-indigo-600" /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
                    >
                      <FaSignOutAlt className="inline mr-2 text-indigo-600" /> Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center space-x-1 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                }
              >
                <FaSignInAlt />
                <span>Login</span>
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-2 border-t border-indigo-500 animate-fadeIn">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </form>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaGraduationCap className="inline mr-2" /> Courses
            </NavLink>

            {user ? (
              <>
                {isAdmin() && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUserShield className="inline mr-2" />
                    Admin Dashboard
                  </NavLink>
                )}

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingCart className="inline mr-2" />
                  Cart ({getCartItemCount()})
                </NavLink>

                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="inline mr-2" />
                  Profile
                </NavLink>

                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left py-2 hover:opacity-80 transition duration-300"
                >
                  <FaSignOutAlt className="inline mr-2" /> Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 hover:opacity-80 transition duration-300 ${isActive ? "font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <FaSignInAlt className="inline mr-2" /> Login
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar