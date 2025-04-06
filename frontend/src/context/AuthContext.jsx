// // frontend/src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import api from '../services/api';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is logged in on initial load
//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const token = localStorage.getItem('token');
        
//         if (token) {
//           api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           const response = await api.get('/api/auth/me');
//           setUser(response.data.data);
//         }
//       } catch (error) {
//         console.error('Authentication error:', error);
//         localStorage.removeItem('token');
//         delete api.defaults.headers.common['Authorization'];
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkLoggedIn();
//   }, []);

//   // Register user
//   const register = async (userData) => {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/auth/register', userData);
      
//       const { token, user } = response.data;
      
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
//       setUser(user);
//       toast.success('Registration successful!');
      
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Registration failed';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Login user
//   const login = async (credentials) => {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/auth/login', credentials);
      
//       const { token, user } = response.data;
      
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
//       setUser(user);
//       toast.success('Login successful!');
      
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Login failed';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google login
//   const googleLogin = async (idToken) => {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/auth/google', { idToken });
      
//       const { token, user } = response.data;
      
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
//       setUser(user);
//       toast.success('Login successful!');
      
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Google login failed';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Logout user
//   const logout = async () => {
//     try {
//       await api.get('/api/auth/logout');
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       localStorage.removeItem('token');
//       delete api.defaults.headers.common['Authorization'];
//       setUser(null);
//       toast.success('Logged out successfully');
//     }
//   };

//   // Check if user is admin
//   const isAdmin = () => {
//     return user && user.role === 'admin';
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         register,
//         login,
//         googleLogin,
//         logout,
//         isAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../services/api"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem("token")

        if (token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`
          const response = await api.get("/api/auth/me")
          setUser(response.data.data)
        }
      } catch (error) {
        console.error("Authentication error:", error)
        localStorage.removeItem("token")
        delete api.defaults.headers.common["Authorization"]
      } finally {
        setLoading(false)
      }
    }

    checkLoggedIn()
  }, [])

  // Register user
  const register = async (userData) => {
    try {
      setLoading(true)
      const response = await api.post("/api/auth/register", userData)

      const { token, user } = response.data

      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setUser(user)
      toast.success("Registration successful! Welcome to ShopCart.")

      return true
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed"
      toast.error(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  // Login user
  const login = async (credentials) => {
    try {
      setLoading(true)
      const response = await api.post("/api/auth/login", credentials)

      const { token, user } = response.data

      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setUser(user)
      toast.success(`Welcome back, ${user.username}!`)

      return true
    } catch (error) {
      const message = error.response?.data?.message || "Login failed"
      toast.error(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  // Simulate Google login (for demo purposes)
  const simulateGoogleLogin = async () => {
    try {
      setLoading(true)
      // This is a simulated Google login that doesn't require actual OAuth
      const response = await api.post("/api/auth/simulate-google")

      const { token, user } = response.data

      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setUser(user)
      toast.success(`Welcome, ${user.username}! Logged in with Google.`)

      return true
    } catch (error) {
      const message = error.response?.data?.message || "Google login failed"
      toast.error(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  // Logout user
  const logout = async () => {
    try {
      await api.get("/api/auth/logout")
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      localStorage.removeItem("token")
      delete api.defaults.headers.common["Authorization"]
      setUser(null)
      toast.success("Logged out successfully. See you soon!")
    }
  }

  // Check if user is admin
  const isAdmin = () => {
    return user && user.role === "admin"
  }

  // Switch user role (for demo purposes)
  const switchRole = async () => {
    try {
      setLoading(true)
      const response = await api.post("/api/auth/switch-role")
      setUser(response.data.data)
      toast.success(`Role switched to ${response.data.data.role}`)
      return true
    } catch (error) {
      const message = error.response?.data?.message || "Failed to switch role"
      toast.error(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        simulateGoogleLogin,
        logout,
        isAdmin,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}