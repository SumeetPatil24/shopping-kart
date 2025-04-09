// // frontend/src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Suspense, lazy, useEffect } from "react";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { CartProvider } from "./context/CartContext";
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// // Layouts
// import MainLayout from "./components/layouts/MainLayout";
// import AdminLayout from "./components/layouts/AdminLayout";

// // Pages
// const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Profile = lazy(() => import("./pages/Profile"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// const CheckoutSuccess = lazy(() => import("./pages/CheckoutSuccess"));

// // Admin Pages
// const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
// const AdminProducts = lazy(() => import("./pages/admin/Products"));
// const AdminAddProduct = lazy(() => import("./pages/admin/AddProduct"));
// const AdminEditProduct = lazy(() => import("./pages/admin/EditProduct"));

// // Loading component
// import LoadingSpinner from "./components/common/LoadingSpinner";

// // Protected Route component
// const ProtectedRoute = ({ children, requireAdmin }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (requireAdmin && user.role !== "admin") {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// function App() {
//   // Check for token in URL (for Google OAuth callback)
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
    
//     if (token) {
//       localStorage.setItem('token', token);
//       window.history.replaceState({}, document.title, window.location.pathname);
//       window.location.reload(); // Reload to update auth state
//     }
//   }, []);

//   return (
//     <Router>
//       <AuthProvider>
//         <CartProvider>
//           <Suspense fallback={<LoadingSpinner />}>
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/" element={<MainLayout />}>
//                 <Route index element={<Home />} />
//                 <Route path="login" element={<Login />} />
//                 <Route path="register" element={<Register />} />
//                 <Route path="checkout-success" element={<CheckoutSuccess />} />
//                 <Route path="products/:id" element={<ProductDetails />} />
//                 <Route
//                   path="cart"
//                   element={
//                     <ProtectedRoute>
//                       <Cart />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="profile"
//                   element={
//                     <ProtectedRoute>
//                       <Profile />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route path="*" element={<NotFound />} />
//               </Route>

//               {/* Admin Routes */}
//               <Route
//                 path="/admin"
//                 element={
//                   <ProtectedRoute requireAdmin={true}>
//                     <AdminLayout />
//                   </ProtectedRoute>
//                 }
//               >
//                 <Route index element={<AdminDashboard />} />
//                 <Route path="products" element={<AdminProducts />} />
//                 <Route path="products/add" element={<AdminAddProduct />} />
//                 <Route path="products/edit/:id" element={<AdminEditProduct />} />
//               </Route>
//             </Routes>
//           </Suspense>
//           <ToastContainer position="bottom-right" autoClose={3000} />
//         </CartProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

// "use client"

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import { Suspense, lazy } from "react"
// import { AuthProvider } from "./context/AuthContext"
// import { CartProvider } from "./context/CartContext"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Layouts
// import MainLayout from "./components/layouts/MainLayout"
// import AdminLayout from "./components/layouts/AdminLayout"

// // Pages
// const Home = lazy(() => import("./pages/Home"))
// const Login = lazy(() => import("./pages/Login"))
// const Register = lazy(() => import("./pages/Register"))
// const ProductDetails = lazy(() => import("./pages/ProductDetails"))
// const Cart = lazy(() => import("./pages/Cart"))
// const NotFound = lazy(() => import("./pages/NotFound"))
// const Profile = lazy(() => import("./pages/Profile"))
// const Wishlist = lazy(() => import("./pages/Cart"))

// // Admin Pages
// const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"))
// const AdminProducts = lazy(() => import("./pages/admin/Products"))
// const AdminAddProduct = lazy(() => import("./pages/admin/AddProduct"))
// const AdminEditProduct = lazy(() => import("./pages/admin/EditProduct"))

// // Loading component
// import LoadingSpinner from "./components/common/LoadingSpinner"
// import { useAuth } from "./context/AuthContext"

// // Protected Route component
// const ProtectedRoute = ({ children, requireAdmin }) => {
//   const { user, loading } = useAuth()

//   if (loading) {
//     return <LoadingSpinner />
//   }

//   if (!user) {
//     return <Navigate to="/login" />
//   }

//   if (requireAdmin && user.role !== "admin") {
//     return <Navigate to="/" />
//   }

//   return children
// }

// function AppRoutes() {
//   return (
//     <Suspense fallback={<LoadingSpinner />}>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="products/:id" element={<ProductDetails />} />
//           <Route path="wishlist" element={<Wishlist />} />
//           <Route
//             path="cart"
//             element={
//               <ProtectedRoute>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="profile"
//             element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Route>

//         {/* Admin Routes */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute requireAdmin={true}>
//               <AdminLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<AdminDashboard />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="products/add" element={<AdminAddProduct />} />
//           <Route path="products/edit/:id" element={<AdminEditProduct />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   )
// }

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <CartProvider>
//           <AppRoutes />
//           <ToastContainer position="bottom-right" autoClose={3000} />
//         </CartProvider>
//       </AuthProvider>
//     </Router>
//   )
// }

// export default App 

// "use client"

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import { Suspense, lazy } from "react"
// import { AuthProvider } from "./context/AuthContext"
// import { CartProvider } from "./context/CartContext"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// // Layouts
// import MainLayout from "./components/layouts/MainLayout"
// import AdminLayout from "./components/layouts/AdminLayout"

// // Pages
// const Home = lazy(() => import("./pages/Home"))
// const Login = lazy(() => import("./pages/Login"))
// const AdminLogin = lazy(() => import("./pages/AdminLogin"))
// const Register = lazy(() => import("./pages/Register"))
// const ProductDetails = lazy(() => import("./pages/ProductDetails"))
// const Cart = lazy(() => import("./pages/Cart"))
// const NotFound = lazy(() => import("./pages/NotFound"))
// const Profile = lazy(() => import("./pages/Profile"))
// const Wishlist = lazy(() => import("./pages/Cart"))
// const Courses = lazy(() => import("./pages/admin/Courses"))
// const CourseDetails = lazy(() => import("./pages/CourseDetails"))
// const AuthCallback = lazy(() => import("./pages/AuthCallback"))

// // Admin Pages
// const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"))
// const AdminProducts = lazy(() => import("./pages/admin/Products"))
// const AdminAddProduct = lazy(() => import("./pages/admin/AddProduct"))
// const AdminEditProduct = lazy(() => import("./pages/admin/EditProduct"))
// const AdminCourses = lazy(() => import("./pages/admin/Courses"))
// const AdminAddCourse = lazy(() => import("./pages/admin/AddProduct"))
// const AdminEditCourse = lazy(() => import("./pages/admin/EditProduct"))

// // Loading component
// import LoadingSpinner from "./components/common/LoadingSpinner"
// import { useAuth } from "./context/AuthContext"

// // Protected Route component
// const ProtectedRoute = ({ children, requireAdmin }) => {
//   const { user, loading } = useAuth()

//   if (loading) {
//     return <LoadingSpinner />
//   }

//   if (!user) {
//     return <Navigate to="/login" />
//   }

//   if (requireAdmin && user.role !== "admin") {
//     return <Navigate to="/" />
//   }

//   return children
// }

// function AppRoutes() {
//   return (
//     <Suspense fallback={<LoadingSpinner />}>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="admin/login" element={<AdminLogin />} />
//           <Route path="register" element={<Register />} />
//           <Route path="products/:id" element={<ProductDetails />} />
//           <Route path="courses" element={<Courses />} />
//           <Route path="courses/:id" element={<CourseDetails />} />
//           <Route path="wishlist" element={<Wishlist />} />
//           <Route path="auth/callback" element={<AuthCallback />} />
//           <Route
//             path="cart"
//             element={
//               <ProtectedRoute>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="profile"
//             element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Route>

//         {/* Admin Routes */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute requireAdmin={true}>
//               <AdminLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<AdminDashboard />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="products/add" element={<AdminAddProduct />} />
//           <Route path="products/edit/:id" element={<AdminEditProduct />} />
//           <Route path="courses" element={<AdminCourses />} />
//           <Route path="courses/add" element={<AdminAddCourse />} />
//           <Route path="courses/edit/:id" element={<AdminEditCourse />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   )
// }

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <CartProvider>
//           <AppRoutes />
//           <ToastContainer position="bottom-right" autoClose={3000} />
//         </CartProvider>
//       </AuthProvider>
//     </Router>
//   )
// }

// export default App

"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Layouts
import MainLayout from "./components/layouts/MainLayout"
import AdminLayout from "./components/layouts/AdminLayout"

// Pages
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const AdminLogin = lazy(() => import("./pages/AdminLogin"))
const AdminRegister = lazy(() => import("./pages/AdminRegister"))
const Register = lazy(() => import("./pages/Register"))
const ProductDetails = lazy(() => import("./pages/ProductDetails"))
const Cart = lazy(() => import("./pages/Cart"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Profile = lazy(() => import("./pages/Profile"))
const Courses = lazy(() => import("./pages/Courses"))
const CourseDetails = lazy(() => import("./pages/CourseDetails"))

// Admin Pages
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"))
const AdminProducts = lazy(() => import("./pages/admin/Products"))
const AdminAddProduct = lazy(() => import("./pages/admin/AddProduct"))
const AdminEditProduct = lazy(() => import("./pages/admin/EditProduct"))
const AdminCourses = lazy(() => import("./pages/admin/Courses"))
const AdminAddCourse = lazy(() => import("./pages/admin/AddCourse"))
const AdminEditCourse = lazy(() => import("./pages/admin/EditCourse"))

// Loading component
import LoadingSpinner from "./components/common/LoadingSpinner"
import { useAuth } from "./context/AuthContext"

// Protected Route component
const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  if (requireAdmin && user.role !== "admin") {
    return <Navigate to="/" />
  }

  return children
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/register" element={<AdminRegister />} />
          <Route path="register" element={<Register />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="auth/callback" element={<LoadingSpinner />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/add" element={<AdminAddProduct />} />
          <Route path="products/edit/:id" element={<AdminEditProduct />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="courses/add" element={<AdminAddCourse />} />
          <Route path="courses/edit/:id" element={<AdminEditCourse />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
          <ToastContainer position="bottom-right" autoClose={3000} />
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App