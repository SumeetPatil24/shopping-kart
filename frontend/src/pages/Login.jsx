// // frontend/src/pages/Login.jsx
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
// import { useAuth } from "../context/AuthContext";
// import LoadingSpinner from "../components/common/LoadingSpinner";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const { login, googleLogin, user, loading } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // If user is already logged in, redirect to home
//     if (user) {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const success = await login(formData);
//       if (success) {
//         navigate("/");
//       }
//     }
//   };

//   // frontend/src/pages/Login.jsx (update the Google login function)
//   const handleGoogleLogin = async () => {
//     // Redirect to Google OAuth URL
//     window.location.href = `${
//       import.meta.env.VITE_API_URL
//     }/api/auth/google/url`;
//   };

//   if (loading) return <LoadingSpinner />;

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="py-6 px-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Login to Your Account
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-gray-500`}
//                 placeholder="Enter your email"
//               />
//             </div>
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-gray-500`}
//                 placeholder="Enter your password"
//               />
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//             )}
//           </div>

//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </div>
//         </form>

//         <div className="relative flex items-center justify-center mb-6">
//           <div className="border-t border-gray-300 flex-grow"></div>
//           <span className="mx-4 text-gray-500 text-sm">OR</span>
//           <div className="border-t border-gray-300 flex-grow"></div>
//         </div>

//         <div className="mb-6">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
//             disabled={loading}
//           >
//             <FaGoogle className="text-red-500 mr-2" />
//             Login with Google
//           </button>
//         </div>

//         <p className="text-center text-gray-600 text-sm">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-gray-800 font-semibold hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa"
// import { useAuth } from "../context/AuthContext"
// import LoadingSpinner from "../components/common/LoadingSpinner"
// import { toast } from 'react-toastify';

// // frontend/src/pages/Login.jsx (update the Google login function)
// /* const handleGoogleLogin = async () => {
//   // For demo purposes, let's simulate a Google login
//   //toast.info("Google OAuth is disabled in demo mode");
//   window.location.href = "http://localhost:5000/api/auth/google";
  
//   // Simulate a successful login with a demo Google user
//   const googleUser = {
//     email: "google.user@example.com",
//     name: "Google User",
//     picture: "https://ui-avatars.com/api/?name=Google+User&background=random"
//   };
  
//   try {
//     // Call a simulated Google login endpoint
//     const response = await api.post("/api/auth/demo-google", { 
//       email: googleUser.email,
//       name: googleUser.name,
//       picture: googleUser.picture
//     });
    
//     if (response.data.success) {
//       const { token, user } = response.data;
//       localStorage.setItem("token", token);
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
//       // Update auth context
//       login({ email: googleUser.email, password: "simulated-google-auth" });
//       //res.redirect("http://localhost:5173");      
//       navigate("/");
//     }
//   } catch (error) {
//     toast.error("Google login simulation failed");
//   }
// }; */
// // Login Button on frontend
// const handleGoogleLogin = async () => {
//   const { googleLogin } = useAuth()
//   const navigate = useNavigate()
//   try {
//     // For demo purposes, we'll use a simulated Google login
//     const simulatedGoogleUser = {
//       email: "demo.user@example.com",
//       name: "Demo User",
//     }

//     // Call our auth context with the simulated data
//     const success = await googleLogin(simulatedGoogleUser)
//     if (success) {
//       toast.success("Google login successful!")
//       navigate("/")
//     }
//   } catch (error) {
//     toast.error("Google login failed. Please try again.")
//   }
// }

// const urlParams = new URLSearchParams(window.location.search);
// const token = urlParams.get('token');
// if (token) {
//   localStorage.setItem('token', token);
// }

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })
//   const [errors, setErrors] = useState({})
//   const { login, simulateGoogleLogin, user, loading } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // If user is already logged in, redirect to home
//     if (user) {
//       navigate("/")
//     }
//   }, [user, navigate])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.email) {
//       newErrors.email = "Email is required"
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (validateForm()) {
//       const success = await login(formData)
//       if (success) {
//         navigate("/")
//       }
//     }
//   }

//   // const handleGoogleLogin = async () => {
//   //   // Use simulated Google login instead of actual OAuth
//   //   const success = await simulateGoogleLogin()
//   //   if (success) {
//   //     navigate("/")
//   //   }
//   // }

//   if (loading) return <LoadingSpinner />

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8 text-white text-center">
//         <h2 className="text-2xl font-bold">Welcome Back</h2>
//         <p className="text-blue-100 mt-1">Sign in to your account</p>
//       </div>

//       <div className="py-8 px-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//               Email
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
//                 placeholder="Enter your email"
//               />
//             </div>
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
//                 placeholder="Enter your password"
//               />
//             </div>
//             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                 Remember me
//               </label>
//             </div>
//             <div className="text-sm">
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                 Forgot password?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Sign In"}
//             </button>
//           </div>
//         </form>

//         <div className="relative flex items-center justify-center my-6">
//           <div className="border-t border-gray-300 flex-grow"></div>
//           <span className="mx-4 text-gray-500 text-sm">OR</span>
//           <div className="border-t border-gray-300 flex-grow"></div>
//         </div>

//         <div>
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//             disabled={loading}
//           >
//             <FaGoogle className="text-red-500 mr-2" />
//             Sign in with Google
//           </button>
//         </div>

//         <p className="text-center text-gray-600 text-sm mt-6">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login

// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa"
// import { useAuth } from "../context/AuthContext"
// import LoadingSpinner from "../components/common/LoadingSpinner"

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })
//   const [errors, setErrors] = useState({})
//   const { login, simulateGoogleLogin, user, loading } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // If user is already logged in, redirect to home
//     if (user) {
//       navigate("/")
//     }
//   }, [user, navigate])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.email) {
//       newErrors.email = "Email is required"
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (validateForm()) {
//       const success = await login(formData)
//       if (success) {
//         navigate("/")
//       }
//     }
//   }

//   const handleGoogleLogin = async () => {
//     const success = await simulateGoogleLogin()
//     if (success) {
//       navigate("/")
//     }
//   }

//   if (loading) return <LoadingSpinner />

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-20">
//       <div className="py-8 px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
//         <p className="text-center text-gray-600 mb-8">Sign in to your account to continue</p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
//               Email
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
//                 placeholder="Enter your email"
//               />
//             </div>
//             {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//           </div>

//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-2">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
//                 Password
//               </label>
//               <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
//                 Forgot Password?
//               </a>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
//                 placeholder="Enter your password"
//               />
//             </div>
//             {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
//           </div>

//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium"
//               disabled={loading}
//             >
//               {loading ? "Signing in..." : "Sign In"}
//             </button>
//           </div>
//         </form>

//         <div className="relative flex items-center justify-center mb-6">
//           <div className="border-t border-gray-300 flex-grow"></div>
//           <span className="mx-4 text-gray-500 text-sm">OR</span>
//           <div className="border-t border-gray-300 flex-grow"></div>
//         </div>

//         <div className="mb-6">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
//             disabled={loading}
//           >
//             <FaGoogle className="text-red-500 mr-2" />
//             Sign in with Google
//           </button>
//         </div>

//         <p className="text-center text-gray-600 text-sm">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-800">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login 


// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa"
// import { useAuth } from "../context/AuthContext"
// import LoadingSpinner from "../components/common/LoadingSpinner"

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })
//   const [errors, setErrors] = useState({})
//   const { login, user, loading } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // If user is already logged in, redirect to home
//     if (user) {
//       navigate("/")
//     }
//   }, [user, navigate])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.email) {
//       newErrors.email = "Email is required"
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (validateForm()) {
//       const success = await login(formData)
//       if (success) {
//         navigate("/")
//       }
//     }
//   }

//   const handleGoogleLogin = () => {
//     window.location.href = `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/google`
//   }

//   if (loading) return <LoadingSpinner />

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-20">
//       <div className="py-8 px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
//         <p className="text-center text-gray-600 mb-8">Sign in to your account to continue</p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
//               Email
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
//                 placeholder="Enter your email"
//               />
//             </div>
//             {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//           </div>

//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-2">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
//                 Password
//               </label>
//               <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
//                 Forgot Password?
//               </a>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
//                 placeholder="Enter your password"
//               />
//             </div>
//             {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
//           </div>

//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium"
//               disabled={loading}
//             >
//               {loading ? "Signing in..." : "Sign In"}
//             </button>
//           </div>
//         </form>

//         <div className="relative flex items-center justify-center mb-6">
//           <div className="border-t border-gray-300 flex-grow"></div>
//           <span className="mx-4 text-gray-500 text-sm">OR</span>
//           <div className="border-t border-gray-300 flex-grow"></div>
//         </div>

//         <div className="mb-6">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
//             disabled={loading}
//           >
//             <FaGoogle className="text-red-500 mr-2" />
//             Sign in with Google
//           </button>
//         </div>

//         <div className="text-center">
//           <p className="text-gray-600 text-sm mb-4">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-800">
//               Sign Up
//             </Link>
//           </p>
//           <p className="text-gray-600 text-sm">
//             Are you an admin?{" "}
//             <Link to="/admin/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
//               Admin Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "../components/common/LoadingSpinner"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const { login, googleLogin, forgotPassword, user, loading, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // If user is already logged in, redirect to home
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateForgotPasswordForm = () => {
    if (!forgotPasswordEmail) {
      setErrors({ forgotPasswordEmail: "Email is required" })
      return false
    } else if (!/^\S+@\S+\.\S+$/.test(forgotPasswordEmail)) {
      setErrors({ forgotPasswordEmail: "Email is invalid" })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      const success = await login(formData)
      if (success) {
        navigate("/")
      }
    }
  }

  const handleGoogleLogin = async () => {
    const success = await googleLogin()
    if (success) {
      navigate("/")
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()

    if (validateForgotPasswordForm()) {
      const success = await forgotPassword(forgotPasswordEmail)
      if (success) {
        setShowForgotPassword(false)
        setForgotPasswordEmail("")
      }
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-20">
      <div className="py-8 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Sign in to your account to continue</p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        {showForgotPassword ? (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-6">
              <label htmlFor="forgotPasswordEmail" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="forgotPasswordEmail"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
                    errors.forgotPasswordEmail ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.forgotPasswordEmail && <p className="mt-1 text-sm text-red-500">{errors.forgotPasswordEmail}</p>}
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium"
                disabled={loading}
              >
                {loading ? "Sending..." : "Reset Password"}
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                Back to Login
              </button>
            </div>
          </form>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <div className="mb-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
                disabled={loading}
              >
                <FaGoogle className="text-red-500 mr-2" />
                Sign in with Google
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-800">
                  Sign Up
                </Link>
              </p>
              <p className="text-gray-600 text-sm">
                Are you an admin?{" "}
                <Link to="/admin/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
                  Admin Login
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login