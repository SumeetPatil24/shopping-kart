// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa"
// import { useAuth } from "../context/AuthContext"
// import LoadingSpinner from "../components/common/LoadingSpinner"

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })
//   const [errors, setErrors] = useState({})
//   const { adminLogin, user, loading } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // If user is already logged in and is admin, redirect to admin dashboard
//     if (user && user.role === "admin") {
//       navigate("/admin")
//     } else if (user) {
//       // If user is logged in but not admin, redirect to home
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
//       const success = await adminLogin(formData)
//       if (success) {
//         navigate("/admin")
//       }
//     }
//   }

//   if (loading) return <LoadingSpinner />

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-20">
//       <div className="py-8 px-8">
//         <div className="flex justify-center mb-4">
//           <div className="bg-indigo-100 p-3 rounded-full">
//             <FaUserShield className="text-indigo-600 text-2xl" />
//           </div>
//         </div>
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
//         <p className="text-center text-gray-600 mb-8">Sign in to access the admin dashboard</p>

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
//                 placeholder="Enter admin email"
//               />
//             </div>
//             {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
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
//                 } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
//                 placeholder="Enter admin password"
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
//               {loading ? "Signing in..." : "Sign In as Admin"}
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <p className="text-gray-600 text-sm">
//             Not an admin?{" "}
//             <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
//               User Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminLogin

"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "../components/common/LoadingSpinner"

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const { adminLogin, forgotPassword, user, loading, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // If user is already logged in and is admin, redirect to admin dashboard
    if (user && user.role === "admin") {
      navigate("/admin")
    } else if (user) {
      // If user is logged in but not admin, redirect to home
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
      const success = await adminLogin(formData)
      if (success) {
        navigate("/admin")
      }
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
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <FaUserShield className="text-indigo-600 text-2xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        <p className="text-center text-gray-600 mb-8">Sign in to access the admin dashboard</p>

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
                  placeholder="Enter your admin email"
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
                Back to Admin Login
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
                    placeholder="Enter admin email"
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
                    placeholder="Enter admin password"
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
                  {loading ? "Signing in..." : "Sign In as Admin"}
                </button>
              </div>
            </form>

            <div className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Don't have an admin account?{" "}
                <Link to="/admin/register" className="text-indigo-600 font-semibold hover:text-indigo-800">
                  Register as Admin
                </Link>
              </p>
              <p className="text-gray-600 text-sm">
                Not an admin?{" "}
                <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
                  User Login
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AdminLogin